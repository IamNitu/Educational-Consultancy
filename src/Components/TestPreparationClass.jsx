import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestPreparationClass() {

      const navigate = useNavigate();


    const data=[
        {
            imgSrc:'https://media.istockphoto.com/id/1133557365/photo/female-student-learning-in-library.jpg?s=612x612&w=0&k=20&c=e8ca4szuWGAJZ9JfVjUniwR_HVjxH2fDVWCLSgTg3W8=',
             title:'PTE Class',
     link: '/ielts'
        },
        {
            imgSrc:'https://thumbs.dreamstime.com/b/lovely-female-student-working-laptop-library-happy-beautiful-girl-smiling-to-camera-studying-gorgeous-students-her-135825089.jpg',
           title:'TOEFl',
     link: '/ielts'
        },
        {
            imgSrc:'https://media.istockphoto.com/id/1438185814/photo/college-student-asian-man-and-studying-on-laptop-at-campus-research-and-education-test-exam.jpg?s=612x612&w=0&k=20&c=YmnXshbaBxyRc4Nj43_hLdLD5FLPTbP0p_3-uC7sjik=',
          title:'IELTS Class',
     link: '/ielts'
        },
        {
            imgSrc:'https://img.freepik.com/free-photo/student-posing-with-coffee-paper-bag_23-2147650650.jpg',
             title:'GRE Class',
     link: '/ielts'
        },
        {
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJg2rQmgApzU-M09EiUHFrTnZiQnVKNxfdlbct1Mf9HveBlVKIzphyXxM5XVxDeGdbNY&usqp=CAU',
           title:'SAT Class',
     link: '/ielts'
        },
        {
            imgSrc:'https://media.istockphoto.com/id/858465172/photo/our-parents-are-so-proud-of-us.jpg?s=612x612&w=0&k=20&c=dbcPC_KUJcsbDCycTp6nce5sjg7jdry3cF8OF8X-D7M=',
           title:'GMAT Class',
     link: '/ielts'
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
       responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
      }

  return (
  <>
      <div className='testpreparationclass'>
        <div className='testclass-head'>
            <p>Our Classes</p>
            <h2>Test Preparation Classes</h2>
        </div>
        <div className='testclass-slider'>

<Slider {...settings}>

{data.map((card,index)=>(
    <div key={index} className='test-card'>
    <img className='test-img' src={card.imgSrc} alt={card.alt} />
    <button onClick={() => navigate(card.link)}   className="blog-title-click">{card.title}</button>
    </div>
))}

</Slider>
</div>
        </div>
  </>
  )
}

export default TestPreparationClass