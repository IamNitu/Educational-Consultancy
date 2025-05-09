import React,{useState} from 'react';
import aboutus from '/aboutus.webp';
import ieltsimg from '/ieltsimg.png';
import {MoveRight,Hourglass, School,BookText ,BookOpenCheck } from 'lucide-react';
import Footer from './Footer';


function Ielts() {

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
        <div className='ielts-main'>
             <div className="about-banner">
                          <img src={aboutus} alt="" />
                            <div className="banner-overlay">
                              <div className="banner-text">
                                <h1>International Language Testing System</h1>
                                <p>Home / Test Preparation class / IELTS</p>
                              </div>
                            </div>
                            </div>

                            <div className='ielts-triangle'>
                              <div className='ielts-triangle-right'></div>
                            </div>
                            <div className='ielts-triangle-one'>
                              <div className='ielts-triangle-left'></div>
                            </div>




        <div className='ielts-component'>
            <div className='ielts-header'>

                <div className='ielts-title'>
                    <p>Our Preparation Class</p>
                    <h1>International English Language Testing System</h1>
                    <img src={ieltsimg} alt='' />
                </div>

                <div className='ielts-box'>
                     <div className='ielts-class'>
                     <p><MoveRight /> SAT</p>
                     </div>

                     <div className='ielts-class'>
                     <p><MoveRight /> TOEFL</p>
                     </div>

                     <div className='ielts-class'>
                    <div className='orange'> <p><MoveRight /> IELTS</p></div>
                     </div>

                     <div className='ielts-class'>
                     <p><MoveRight /> PTE</p>
                     </div>

                     <div className='ielts-class'>
                     <p><MoveRight /> GRE</p>
                     </div>

                     <div className='ielts-class'>
                     <p><MoveRight /> GMAT</p>
                     </div>
                     
                </div>
            </div>


            <div className='ielts-para'>
                <div className='ielts-paragraph'>
                  <div id='ielts-paragraph'>
                  <h2>IELTS Course Overview</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia laudantium facilis, quos est vel nesciunt natus amet consectetur? Ab amet sapiente eveniet, eos optio veniam neque qui labore inventore dolorum quas vel, reiciendis aperiam esse minima voluptas veritatis pariatur harum rem. Quisquam iusto recusandae, suscipit dolor qui voluptatum veniam vel tempora laborum similique obcaecati voluptate magni quasi minima assumenda porro repellendus nulla exercitationem maiores numquam optio asperiores, iste officia! Perspiciatis quasi excepturi quidem sit! Temporibus facere illo voluptates, deleniti aliquid deserunt dolorum maiores ex sapiente enim explicabo saepe veritatis vero dignissimos rerum nemo asperiores optio velit, omnis dicta necessitatibus. Praesentium optio voluptatum debitis ipsum ipsam maiores rem laborum veritatis vitae, illum fugiat totam quis autem quasi possimus perferendis nisi qui laboriosam earum repudiandae consequuntur blanditiis quos? Nisi doloribus, dolor magni harum nulla repellat est ea quam neque fugiat eaque pariatur autem ipsum in veniam consectetur natus eligendi vitae, blanditiis quasi.</p>
                  </div>

                  <div id='ielts-box'>

                  <div id='ielts-imo'>
                  <Hourglass className='ielts-icon'/>
                  <p id='p'>Duration </p> 
                  <h2> Approx. 12 Weeks</h2>
                  </div>

                  <div id='ielts-imo'>
                  <School className='ielts-icon'/>
                  <p id='p'>Classes </p>
                  <h2> 23 Classes</h2>
                  </div>

                  <div id='ielts-imo'>
                  <BookText className='ielts-icon'/>
                  <p id='p'>Certificates</p>  
                  <h2> Course Certificates</h2>
                  </div>

                  <div id='ielts-imo'>
                  <BookOpenCheck className='ielts-icon'/>
                  <p id='p'>Cost </p>
                  <h2> NRP:21,500</h2>
                  </div>

                  </div>

                  <div id='ielts-parag'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur distinctio omnis porro molestias accusamus possimus vel minima cupiditate optio accusantium error in quos cum, suscipit nostrum fuga asperiores voluptatibus ratione deserunt reprehenderit repellat sequi officia adipisci? Harum neque, eos aut qui, sapiente quis ab necessitatibus, quas fugiat a recusandae. Repudiandae inventore numquam dolore voluptates voluptatibus error fuga vero blanditiis? Similique expedita sint corporis, molestias delectus repellendus ex autem! Repellat reprehenderit impedit qui quos rem recusandae commodi architecto aperiam dicta officiis atque nihil delectus dolorem eveniet, molestiae harum eos aliquid, perspiciatis, natus sunt alias? Distinctio, quasi! Libero facere expedita dolores repellendus minus commodi ipsa aspernatur, cupiditate sunt optio, ipsum molestiae assumenda delectus nobis ab porro mollitia quia alias nemo aut, dolorem nulla facilis et fugit. Quisquam ipsam nihil culpa officiis delectus officia. Ex molestias rerum, praesentium error necessitatibus eius aut aliquam exercitationem ipsam similique. Dolores rem magnam vitae aut sed?</p>
                  </div>
                </div>

                <div className='ielts-form'>

                <div className="enroll-form-container">
      <div className="form-header">
        <h2>Enroll Now</h2>
      </div>
      <form className="enroll-form" onSubmit={handleSubmit}>
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
          <option value="IELTS">IELTS</option>
          <option value="TOEFL">TOEFL</option>
          <option value="GRE">GRE</option>
        </select>
        <textarea
      
          name="message"
          placeholder=" Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="book-now-button">
          Book Now →
        </button>
      </form>
    </div>


                </div>
            </div>

           
         </div>
         <Footer/>           
        </div>
    </>
  )
}

export default Ielts