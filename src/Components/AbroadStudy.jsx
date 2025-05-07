import React from 'react';
import aboutus from '/aboutus.webp';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


function AbroadStudy() {

    const navigate = useNavigate();

    const data=[
        {
            imgSrc:'https://media.cntraveller.com/photos/653783ab9da3a22eb97452f9/16:9/w_2560%2Cc_limit/Cheapest_time_to_go_to_Paris_October23_Getty_Images.jpg',
            title:'Study in Franch',
            link:'/studyinfranch'
             
        },
        {
            imgSrc:'https://res.cloudinary.com/emg-prod/image/upload/f_auto,q_auto/v1/HtmlPages/HtmlPage18955/USA',
            title:'Study in USA',
            link:'/studyinfranch'
        },
        {
            imgSrc:'https://www.onthegotours.com/repository/Vancouver--Best-places-to-visit-in-Canada--On-The-Go-Tours-536561517324088.jpg',
            title:'Study in Canada',
            link:'/studyinfranch'
        },
        {
            imgSrc:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/fe/united-kingdom.jpg?w=1200&h=700&s=1',
            title:'Study in UK',
            link:'/studyinfranch'
        },
        {
            imgSrc:'https://assets.vogue.com/photos/6603d64d13a27b5703522946/16:9/w_1280,c_limit/509288876',
            title:'Study in Spain',
            link:'/studyinfranch'
        },
        {
            imgSrc:'https://gedeth.com/wp-content/uploads/2024/02/15888506718900.jpg',
            title:'Study in Austraila',
            link:'/studyinfranch'
        },
        {
            imgSrc:'https://res.cloudinary.com/enchanting/q_70,f_auto,c_lfill,g_auto/exodus-web/2022/08/japan-kyoto.jpg',
            title:'Study in Japan',
            link:'/studyinfranch'
        },
        {
            imgSrc:'https://lp-cms-production.imgix.net/2025-04/Shutterstock1502282249.jpg?w=1095&fit=crop&crop=faces%2Cedges&auto=format&q=75',
            title:'Study in Germany',
            link:'/studyinfranch'
        },
        {
            imgSrc:'https://english.makalukhabar.com/wp-content/uploads/2024/12/NEW-ZEALAND-MK.jpg',
            title:'Study in New Zealand',
            link:'/studyinfranch'
        },
    ]

  return (
    <>
    <div>
         <div className="about-banner">
                      <img src={aboutus} alt="" />
                        <div className="banner-overlay">
                          <div className="banner-text">
                            <h1>Abroad Study</h1>
                            <p>Home / Abroad Study</p>
                          </div>
                        </div>
                      </div>

                      <div className="service-triangle">
      <div className="service-triangle-orange"></div>
    </div>
    <div className="service-triangle-right">
    <div className="service-triangle-blue"></div>
    </div>



        <div className='abroadstudy-container'>
        <div className='abroadstudy-class'>
        <p>Pick Your Destination</p>
        <h1>Select Your Favourite Country</h1>


<div className='abroadstudy-card'>
        {data.map((card,index)=>(
                <div key={index} className='abroad-card'>
                <img onClick={() => navigate('/studyinfranch')}  className='abroadstudy-img' src={card.imgSrc} alt={card.alt} />
                <h3 id='abroad'>{card.title}</h3>
                
                </div>
            ))}

            </div>
        </div>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default AbroadStudy