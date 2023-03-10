import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
//   InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Fullstack Developer | Gammalil Basallo" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        {/* <InterestsSection sectionId="details" heading="Details" /> */}
        <ContactSection sectionId="github" heading="Contact me" />
      </Page>
    </>
  );
}
