import React from 'react'
import HomePage from './HomePage';
import HomeAbout from './HomeAbout';
import SuccessStory from './SuccessStory';
import Destination from './Destination';
import TestPreparationClass from './TestPreparationClass';
import WorkingProcess from './WorkingProcess';
import Feedback from './Feedback';
import Achievement from './Achievement';
import LatestBlog from './LatestBlog';
import AffiliatedUni from './AffiliatedUni';
import Footer from './Footer';

function Home() {
  return (
 <>
  <div>
    <HomePage/>
    <HomeAbout/>
<SuccessStory/>
<Destination/>
<TestPreparationClass/>
<WorkingProcess/>
<Feedback/>
<Achievement/>
<LatestBlog/>
<AffiliatedUni/>
<Footer/>
  </div>
 </>
  )
}

export default Home