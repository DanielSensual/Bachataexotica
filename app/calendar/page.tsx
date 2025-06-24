// /app/calendar/page.tsx
export default function CalendarPage() {
  return (
    <section className="py-24 px-4 max-w-3xl mx-auto">
      <h1 className="section-heading mb-8">Class & Event Calendar</h1>
      {/* Example: Simple List */}
      <ul className="space-y-4 text-left">
        <li>
          <span className="font-bold">Thu, May 29 – Bachata Sensual Foundations</span> (Tampa, 7PM)
        </li>
        <li>
          <span className="font-bold">Tue, June 4 – Weekly Class</span> (Tampa, 7PM)
        </li>
        {/* Add more dates here */}
      </ul>
      {/* You can embed Google Calendar, Eventbrite, or a custom calendar UI here */}
    </section>
  );
}