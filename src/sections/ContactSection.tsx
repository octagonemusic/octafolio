export default function ContactSection() {
  return (
    <section
      id="contact"
      className="h-screen flex items-center justify-center bg-base snap-start"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-red mb-8">Contact</h2>
        <p className="text-lg text-subtext0 mb-8">
          Let&apos;s work together! Reach out to me for collaborations or
          opportunities.
        </p>
        <div className="space-y-4">
          <p className="text-subtext1">📧 your.email@example.com</p>
          <p className="text-subtext1">🐙 GitHub: @yourusername</p>
          <p className="text-subtext1">💼 LinkedIn: /in/yourprofile</p>
        </div>
      </div>
    </section>
  );
}
