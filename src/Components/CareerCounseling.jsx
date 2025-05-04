import React from 'react';
import aboutus from '/aboutus.webp';
import Footer from './Footer';
import careercounseling from '/careercounseling.jpg';
import { MoveRight } from 'lucide-react';

function CareerCounseling() {
  return (
   <>
    <div className='careercounseling'>
    <div className="about-banner">
              <img src={aboutus} alt="" />
                <div className="banner-overlay">
                  <div className="banner-text">
                    <h1>Career Counseling</h1>
                    <p>Home / Services / Career Counseling</p>
                  </div>
                </div>
              </div>

    <div className='CareerCounseling'>
        <div className='careercounseling-about'>
        <p id='careercounseling-header'>Our Solutions</p>
        <h1>Career Counseling</h1>
        <img src={careercounseling} alt='' />

        <p id='career-description'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Fugit sit deserunt optio libero. Obcaecati minima odio eaque numquam perspiciatis maiores,
          voluptates rem quos possimus eos nostrum molestias ratione laboriosam, cupiditate aliquid quis sapiente eligendi dolor enim alias inventore ex quas provident. 
          At sunt sint ad ducimus consequatur veniam iusto assumenda ipsum. Facere pariatur consequuntur, eius alias totam ratione nesciunt vitae amet. <br/><br/>
          Illo quam quae, incidunt voluptatem libero quas distinctio eos ad facilis unde aliquid consectetur error temporibus iure! Repellat beatae a odio necessitatibus suscipit,
           quia tenetur repellendus est, quidem rem error enim eaque numquam perferendis quae nesciunt et voluptate! Ullam et quasi itaque, voluptatibus voluptatem officia error, 
           fugit vero quia officiis excepturi aliquid labore temporibus? Accusantium, ea. Dignissimos doloribus tempora ullam eos dolore corrupti, vitae labore voluptatem doloremque laborum! 
           Sed accusantium pariatur perspiciatis ullam, nemo fugiat animi, architecto mollitia doloribus vero reiciendis consectetur aliquam impedit veniam consequatur non. <br/><br/>
           Iste aliquid possimus dignissimos illum. Blanditiis, tempore assumenda doloribus quos totam voluptatibus est cum illum quam accusantium obcaecati eos sequi et ab voluptate cupiditate placeat error veniam facilis consectetur labore?
            Ab perspiciatis maiores saepe sint, corporis quia expedita eaque numquam possimus harum ea fugiat nihil ullam, aliquam officia a provident consectetur nulla architecto quae nobis culpa similique eos.
             Perspiciatis magnam placeat illo, repudiandae pariatur illum quos cumque nobis voluptatem, odio expedita sequi vero tempora, doloribus deserunt mollitia natus porro delectus rem repellendus corporis. 
        
             </p>
        </div>

        <div className='careercounseling-container'>
            <div className='career-box'>
                <p><MoveRight /> Visa Assistance</p>
            </div>

            <div className='career-box'>
            <p><MoveRight /> Test Preparation</p>
            </div>

            
            <div className='career-box-section'>
             <p ><MoveRight /> Career Counseling</p></div>
           

            <div className='career-box'>
            <p><MoveRight /> Study Abroad</p>
            </div>

            <div className='career-box'>
            <p><MoveRight /> Admission Guide</p>
            </div>

            <div className='career-box'>
            <p><MoveRight /> Insurance</p>
            </div>
        </div>
    </div>



              <Footer/>

    </div>
   </>
  )
}

export default CareerCounseling