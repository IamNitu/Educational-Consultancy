import React from 'react';
import { useNavigate } from 'react-router-dom';



function SuccessStory() {

    const navigate = useNavigate();

    const cards=[
        {
            imgSrc:'https://corporatefamilycounseling.com/wp-content/uploads/2024/10/shutterstock_2171561101.jpg',
            title:'Career Counseling',
            description:'Expert Guidance to choose the right career path based on skills, interests, and future goals.',
            link: '/career-counseling'
        },
        {
            imgSrc:'https://bluediamondinternational.com/wp-content/uploads/2025/01/Untitled-design-54.jpg',
            title:'Visa Assistance',
            description:'Complete support for visa applications, documentations, and interview preparations to ensure approval.',
             link: '/career-counseling'
        },
        {
            imgSrc:'https://femcohealthcareservicesltd.com/wp-content/uploads/2024/11/Class_Schedule_header.jpg',
            title:'Test Preparation',
            description:'Coaching for IELTS, TOEFL, and PTE to help students achieve high scores for university admissions.',
             link: '/career-counseling'
        },
        {
            imgSrc:'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHklMjBhYnJvYWR8ZW58MHx8MHx8fDA%3D',
            title:'Study Abroad',
            description:'Assistance in studying in Dubai, UK, and Malta with Personalized study plans and university details.',
             link: '/career-counseling'
        },
        {
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJg2rQmgApzU-M09EiUHFrTnZiQnVKNxfdlbct1Mf9HveBlVKIzphyXxM5XVxDeGdbNY&usqp=CAU',
            title:'Admission Guide',
            description:'Support in university selection, application preparation, and securing admissions efficiently.',
             link: '/career-counseling'
        },
        {
            imgSrc:'https://www.worldtrips.com/hubfs/images/Cards%20Images/rome-europe-italia-travel-summer-tourism-holiday-vacation-background--young.webp',
            title:'Insurance',
            description:'Help in obtaining health and travel insurance for students safety and visa compilance.',
             link: '/career-counseling'
        },
    ]
  return (
    <>
        <div className='homestory'>
            <div className='homestory-head'>
            <div className='home-para'>
            <p>Our Solutions</p>
            <h1>We provide high quality Educational Service</h1>
            </div>
            </div>

            <div className='story-card'>
            {cards.map((card,index)=>(
                <div key={index} className='successstory-card'>
                <img className='successstory-img' src={card.imgSrc} alt={card.alt} />
                {card.link && (
                <div className="overlay-card">
    <button class="card-button-story" onClick={() => navigate(card.link)}> + </button>
  </div>
)}
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                </div>
            ))}
            </div>
        </div>
    </>
  )
}

export default SuccessStory;