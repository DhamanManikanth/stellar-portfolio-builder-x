
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import YouTube from '../components/YouTube';
import SocialMedia from '../components/SocialMedia';
import Contact from '../components/Contact';
import StarRating from '../components/StarRating';
import Footer from '../components/Footer';
import FixedSocialBar from '../components/FixedSocialBar';
import EmailSidebar from '../components/EmailSidebar';
import BackToTopButton from '../components/BackToTopButton';
import BackgroundPattern from '../components/BackgroundPattern';
import SectionDivider from '../components/SectionDivider';
import { useSkillBarsAnimation } from '../hooks/useSkillBarsAnimation';

const Index = () => {
  useSkillBarsAnimation();

  return (
    <div className="min-h-screen page-bg">
      <BackgroundPattern />
      <Navbar />
      <Hero />
      
      <SectionDivider>
        <Education />
      </SectionDivider>
      
      <SectionDivider>
        <Skills />
      </SectionDivider>
      
      <SectionDivider>
        <YouTube />
      </SectionDivider>
      
      <SectionDivider>
        <Projects />
      </SectionDivider>
      
      <SectionDivider>
        <SocialMedia />
      </SectionDivider>
      
      <SectionDivider>
        <StarRating />
      </SectionDivider>
      
      <SectionDivider>
        <Contact />
      </SectionDivider>
      
      <Footer />
      
      <FixedSocialBar />
      <EmailSidebar />
      <BackToTopButton />
    </div>
  );
};

export default Index;
