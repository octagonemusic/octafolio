export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-mantle"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-teal mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-surface0 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-mauve mb-4">
              Project One
            </h3>
            <p className="text-subtext0">
              Description of your amazing project
            </p>
          </div>
          <div className="bg-surface0 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-mauve mb-4">
              Project Two
            </h3>
            <p className="text-subtext0">
              Description of another great project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}