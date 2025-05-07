import React,{useState}from 'react';
import aboutus from '/aboutus.webp';
import francheurope from '/francheurope.webp';
import {MoveRight} from 'lucide-react';
import Footer from './Footer';

function StudyInFranch() {

 const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preparationClass: 'IELTS',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <>
        <div>
        <div className="about-banner">
                              <img src={aboutus} alt="" />
                                <div className="banner-overlay">
                                  <div className="banner-text">
                                    <h1>Study In Franch</h1>
                                    <p>Home / Abroad Study / Study In Franch</p>
                                  </div>
                                </div>
                              </div>

      <div className="service-triangle">
      <div className="service-triangle-orange"></div>
    </div>
    <div className="service-triangle-right">
    <div className="service-triangle-blue"></div>
    </div>


<div className='franch-banner'>
<div className='franch-container'>
    
    <div className='franch-paragraph'>
      <div className='franch-img'>
        <p>Pick Your Destinations</p>
        <h1>Study In Franch - Your Gateway to Europe!</h1>
        <img src={francheurope} alt='' />
      </div>

      <div className='franch-overview'>
        <h2>Country Overview</h2>

        <p>France is one of the most popular destinations for international students. Among its major advantages are the high quality of education, the remarkably low tuition fees, and the enjoyable French way of life. The standard of living in France is remarkably high, and one thing is certain: Studying in France is going to be a great, life-changing experience for you.<br/><br/>
France caters to every taste - and that does not only mean wine and cheese enthusiasts. Whether you prefer a bustling urban environment, quiet mountains, or the relaxed atmosphere on the Mediterranean shore, you will find a fitting destination for yourself. Paris offers a unique metropolitan vibe in a charming environment. Marseille and Montpellier are directly off the Mediterranean coast; summer beaches included. Rennes or Nantes are close to the rougher Atlantic coasts. 
And from Grenoble or Lyon, the Alps are within reach.If you study in Paris, fear not: There are direct flights to Paris from virtually anywhere in the world. Paris Charles de Gaulle Airport (CDG) is the busiest airport in continental Europe; the second-largest local airport is Paris Orly.<br/><br/>
The French language is also one of the larger hurdles if you plan to stay after your graduation from a Bachelor’s or Master’s degree in France. To find a job, you will almost inevitably need to be fluent or at least near-fluent in French.</p>
      
      
      </div>

      <div className='franch-choose'>
        <h2>Why Choose Franch for Your Higher Education? </h2>

        <p>1.  9 out of 10 international students recommend France for studying.<br/><br/>

2.   A French degree gives you access to the 570 French companies operating in India.<br/><br/>

3.   Over 500 French scholarships are available to Indian students.<br/><br/>

4.   Over 1700 French programmes are taught in English.<br/><br/>

5.   An environment favorable to innovation and to young entrepreneurs.<br/><br/>

6.   Part-Time work allowed for International Students.

</p>
      </div>

      <div className='franch-program'>
      <div className='franch-work'>
        <h2>Programs We Offer in Franch</h2>
        <p>We work with a wide range of college and universities in Franch that offer:</p>

        <div id='franch-work'><p>Business & Management</p>
        <p>Hospilality & Tourism</p>
        <p> Information Technology</p>
        <p>Health & Care</p>
        <p>Accounting & Finance</p>
        <p>And many more...</p></div>
        <p id='franch-footer-para'>Whether you're looking for bachelor's, master's or diploma programs, we'll help you find the right fit based on your academic background and career goals.</p>
      </div> 
      
      <div className='franch-admission'>
        <h2>Easy Admission Process For Neplai Students</h2>
        <p><MoveRight id='franch-icon'/> Course & College Selection</p>
        <p><MoveRight id='franch-icon'/> Documentation & Application</p>
        <p><MoveRight id='franch-icon'/> Visa Guidane  </p>
        <p><MoveRight id='franch-icon'/> Pre-Depature Briefing</p>
        <p><MoveRight id='franch-icon'/> Accommodation Assistance in Franch</p>

        <p id='journey'>With a student-friendly visa process and options to pay tution after visa approval (available with select institutions), Franch is an ideal destination for aspiring Nepali Students.</p>
     <p>Start Your Journey to Europe Today</p>
      </div>
      </div>
    </div>

    <div className='franch-box'>
      <div className='franch-collection'>

        <div className='study-franch-box'>
                             <div className='franch-class'>
                             <p><MoveRight /> Study in Canada</p>
                             </div>
        
                             <div className='franch-class'>
                             <p><MoveRight /> Study in Germany</p>
                             </div>
        
                             <div className='franch-class'>
                            <div className='maggie'> <p><MoveRight /> Study in Franch</p></div>
                             </div>
        
                             <div className='franch-class'>
                             <p><MoveRight /> Study in Japan</p>
                             </div>

                             <div className='franch-class'>
                             <p><MoveRight /> Study in USA</p>
                             </div>
      
                             
                        </div>
      </div>

      <div className='franch-form'>

      <div className="enroll-franch-container">
      <div className="franch-header">
        <h2>Enquiry Now</h2>
      </div>
      <form className="enroll-franch" onSubmit={handleSubmit}>
        <input
        
          type="text"
          name="name"
          placeholder=" Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
        
          type="tel"
          name="phone"
          placeholder=" Phone*"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
        
          type="email"
          name="email"
          placeholder=" Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
        
          name="preparationClass"
          value={formData.preparationClass}
          onChange={handleChange}
        >
          <option value="IELTS">Study in Franch</option>
          <option value="TOEFL">Study in Canada</option>
          <option value="GRE">Study in USA</option>
        </select>
        <textarea
      
          name="message"
          placeholder=" Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="apply-now-button">
          Apply Now →
        </button>
      </form>
    </div>
      </div>
    </div>
</div>
<Footer/>
</div>
        </div>
    </>
  )
}

export default StudyInFranch