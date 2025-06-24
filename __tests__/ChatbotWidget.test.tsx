import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ChatbotWidget from '../components/ChatbotWidget'

describe('ChatbotWidget', () => {
  test('chat button toggles widget open and closed', async () => {
    render(<ChatbotWidget />)
    const chatButton = screen.getByRole('button', { name: /chat with bachata ai/i })
    // initially closed
    expect(screen.queryByText(/start chat/i)).not.toBeInTheDocument()
    await userEvent.click(chatButton)
    expect(screen.getByText(/start chat/i)).toBeInTheDocument()
    await userEvent.click(chatButton)
    expect(screen.queryByText(/start chat/i)).not.toBeInTheDocument()
  })

  test('shows Typing indicator while message is being sent', async () => {
    const fetchMock = jest
      .fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({}) })
      .mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            setTimeout(
              () => resolve({ ok: true, json: async () => ({ reply: 'Hello' }) }),
              50
            )
          )
      )
    ;(globalThis as any).fetch = fetchMock
    Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
      value: jest.fn(),
      writable: true,
    })

    render(<ChatbotWidget />)
    const user = userEvent.setup()

    // open and capture lead to reach chat view
    await user.click(screen.getByRole('button', { name: /chat with bachata ai/i }))
    await user.type(screen.getByPlaceholderText(/your name/i), 'Jane')
    await user.type(screen.getByPlaceholderText(/your email/i), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: /start chat/i }))

    // send a message
    await user.type(screen.getByPlaceholderText(/type your question/i), 'Hi')
    await user.click(screen.getByRole('button', { name: /send/i }))

    expect(screen.getByText(/typing/i)).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText(/typing/i)).not.toBeInTheDocument())

    fetchMock.mockRestore()
  })
})
