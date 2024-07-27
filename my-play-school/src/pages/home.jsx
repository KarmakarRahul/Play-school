import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Poster from '../components/poster';
import Features from '../components/feature';
import AboutMissionVision from '../components/aboutMissionVision';
import ChairmanSection from '../components/chairman';
import GallerySection from '../components/gallerySection';
import Academics from '../components/academics';
import Footer from '../components/footer';
import Slider from '../components/slider';

const Admission = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Poster />
      <Slider />
      <Features />
      <AboutMissionVision />
      <ChairmanSection />
      <Academics />
      <GallerySection />
      <Footer />

    </div>
  );
}

export default Admission;
