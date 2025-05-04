import { useState } from 'react'
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import './App.css'
import './Style.css';
import './Navbar.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import PreparationClass from './Components/PreparationClass';
import Blog from './Components/Blog';
import SuccessStories from './Components/SuccessStories';
import ContactUs from './Components/ContactUs';
import './HomePage.css';
import './HomeAbout.css';
import './SuccessStory.css';
import './Destination.css';
import './TestPreparationClass.css';
import './WorkingProcess.css';
import './Feedback.css';
import './Achievement.css';
import './LatestBlog.css';
import './AffiliatedUni.css';
import './Footer.css';

import './AboutUs.css';
import './AboutPagePara.css';
import './AboutMessage.css';
import './AboutMembers.css';

import './Services.css';
import CareerCounseling from './Components/CareerCounseling';
import './CareerCounseling.css';

import './PreparationClass.css';
import Ielts from './Components/Ielts';
import './Ielts.css';

import './Blog.css';
import OnlineCourse from './Components/OnlineCourse';
import './OnlineCourse.css';

import './ContactUs.css';
import './ContactUsForm.css';

import './SuccessStories.css';

import './AbroadStudy.css';
import AbroadStudy from './Components/AbroadStudy';

import StudyInFranch from './Components/StudyInFranch';
import './StudyInFranch.css';


import './SuccessStories.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
<Router>
<Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/aboutus" element={<AboutUs />} />
  <Route path="/services" element={<Services />} />
  <Route path="/preparationclass" element={<PreparationClass />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/successstories" element={<SuccessStories />} />
  <Route path="/contactus" element={<ContactUs />} />


  <Route path="/career-counseling" element={<CareerCounseling />} />
  <Route path="/online-course" element={<OnlineCourse />} />
  <Route path="/ielts" element={<Ielts />} />
  <Route path="/abroadstudy" element={<AbroadStudy />} />
  <Route path="/studyinfranch" element={<StudyInFranch />} />
    
  </Routes>
</Router>
      
    </>
  )
}

export default App
