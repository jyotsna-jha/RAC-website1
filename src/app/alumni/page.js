// AlumniPage.js

import React from 'react';
import AlumniHeader from "../components/alumniHeader";
import AlumniSuccessStories from "../components/alumniSuccessStories";
import AlumniJourney from '../components/alumnitestimonials';
const AlumniPage = () => {
  return (
    <div>
      <AlumniHeader />
      <AlumniJourney/>
      <AlumniSuccessStories />
      
    </div>
  );
};

export default AlumniPage;
