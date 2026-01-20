'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/classes', label: 'Classes' },
    { href: '/community', label: 'Community' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="font-serif text-xl md:text-2xl tracking-widest text-gold-gradient font-semibold">
                            BACHATA EXOTICA
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="nav-link text-sm uppercase tracking-wider text-white/80 hover:text-gold-base"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#waitlist"
                            className="btn-gold-outline"
                        >
                            Join Waitlist
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white/80 hover:text-gold-base transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-6 border-t border-white/10">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm uppercase tracking-wider text-white/80 hover:text-gold-base transition-colors py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="#waitlist"
                                onClick={() => setIsOpen(false)}
                                className="btn-gold-outline text-center mt-4"
                            >
                                Join Waitlist
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
