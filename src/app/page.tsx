import {
  HomeSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/sections";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
