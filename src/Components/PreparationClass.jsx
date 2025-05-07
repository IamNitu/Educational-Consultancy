import React from 'react';
import Footer from './Footer';
import aboutus from '/aboutus.webp';
import { useNavigate } from 'react-router-dom';


function PreparationClass() {

    const navigate = useNavigate();

const cards=[
  {
    imgsrc:'https://media.istockphoto.com/id/1133557365/photo/female-student-learning-in-library.jpg?s=612x612&w=0&k=20&c=e8ca4szuWGAJZ9JfVjUniwR_HVjxH2fDVWCLSgTg3W8=',
    title:'PTE Class',
     link: '/ielts'
  },
  {
    imgsrc:'https://thumbs.dreamstime.com/b/lovely-female-student-working-laptop-library-happy-beautiful-girl-smiling-to-camera-studying-gorgeous-students-her-135825089.jpg',
    title:'TOEFl',
     link: '/ielts'
  },
  {
    imgsrc:'https://media.istockphoto.com/id/1438185814/photo/college-student-asian-man-and-studying-on-laptop-at-campus-research-and-education-test-exam.jpg?s=612x612&w=0&k=20&c=YmnXshbaBxyRc4Nj43_hLdLD5FLPTbP0p_3-uC7sjik=',
    title:'IELTS Class',
     link: '/ielts'
  },
  {
    imgsrc:'https://img.freepik.com/free-photo/student-posing-with-coffee-paper-bag_23-2147650650.jpg',
    title:'GRE Class',
     link: '/ielts'
  },
  {
    imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJg2rQmgApzU-M09EiUHFrTnZiQnVKNxfdlbct1Mf9HveBlVKIzphyXxM5XVxDeGdbNY&usqp=CAU',
    title:'SAT Class',
     link: '/ielts'
  },
  {
    imgsrc:'https://media.istockphoto.com/id/858465172/photo/our-parents-are-so-proud-of-us.jpg?s=612x612&w=0&k=20&c=dbcPC_KUJcsbDCycTp6nce5sjg7jdry3cF8OF8X-D7M=',
    title:'GMAT Class',
     link: '/ielts'
  }
]

  return (
    <>
      <div>
           <div className="about-banner">
              <img src={aboutus} alt="" />
                <div className="banner-overlay">
                  <div className="banner-text">
                    <h1>Preparation Classes</h1>
                    <p>Home / Preparation classes</p>
                  </div>
                </div>
              </div>

              <div className="service-triangle">
      <div className="service-triangle-orange"></div>
    </div>
    <div className="service-triangle-right">
    <div className="service-triangle-blue"></div>
    </div>

            <div className='test-prepration'>

            {cards.map((card,index)=>(
    <div key={index} className='testprep-card'>
    <img className='testprep-img' src={card.imgsrc} alt={card.alt} />
   <button onClick={() => navigate(card.link)}   className="blog-title-click">{card.title}</button>
    </div>
))}
            </div>
          
          <Footer/>
        </div>
                
    </>
  )
}

export default PreparationClass