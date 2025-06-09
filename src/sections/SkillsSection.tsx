export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-base"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-surface0 p-4 rounded-lg">
            <p className="text-yellow font-semibold">Frontend</p>
          </div>
          <div className="bg-surface0 p-4 rounded-lg">
            <p className="text-green font-semibold">Backend</p>
          </div>
          <div className="bg-surface0 p-4 rounded-lg">
            <p className="text-peach font-semibold">Database</p>
          </div>
          <div className="bg-surface0 p-4 rounded-lg">
            <p className="text-lavender font-semibold">DevOps</p>
          </div>
        </div>
      </div>
    </section>
  );
}