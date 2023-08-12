import React from 'react';
import ContentWrapper from './components/ContentWrapper';
import Carousel from './components/Carousel';
import Services from './components/Services';
import AuditServices from './components/AuditServices';
import WorkFeature from './components/WorkFeature';
import OfferService from './components/OfferService';
import Testimonial from './components/Testimonial';
import Certifications from './components/Certifications';

const Home = () => {
  return (
    <ContentWrapper>
    <Carousel />
    <Services />
    <AuditServices />
    <WorkFeature />
    <OfferService />
    <Testimonial />
    <Certifications />
   </ContentWrapper>
  )
}

export default Home