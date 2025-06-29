import {
  HomeSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/sections";

export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
