import React from 'react';
import {MoveRight} from 'lucide-react';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


function Destination() {

      const navigate = useNavigate();

    const data=[
        {
            imgSrc:'https://media.cntraveller.com/photos/653783ab9da3a22eb97452f9/16:9/w_2560%2Cc_limit/Cheapest_time_to_go_to_Paris_October23_Getty_Images.jpg',
            title:'Study in Franch',
             
        },
        {
            imgSrc:'https://res.cloudinary.com/emg-prod/image/upload/f_auto,q_auto/v1/HtmlPages/HtmlPage18955/USA',
            title:'Study in USA',
            
        },
        {
            imgSrc:'https://www.onthegotours.com/repository/Vancouver--Best-places-to-visit-in-Canada--On-The-Go-Tours-536561517324088.jpg',
            title:'Study in Canada',
            
        },
        {
            imgSrc:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/fe/united-kingdom.jpg?w=1200&h=700&s=1',
            title:'Study in UK',
            
        },
        {
            imgSrc:'https://assets.vogue.com/photos/6603d64d13a27b5703522946/16:9/w_1280,c_limit/509288876',
            title:'Study in Spain',
            
        },
        {
            imgSrc:'https://gedeth.com/wp-content/uploads/2024/02/15888506718900.jpg',
            title:'Study in Austraila',
            
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
       responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
      }

  return (
    <>
    
        <div className='destination'>
        <div className='main-destination'>
            <div className='destination-about'>
<p id='destination-para'>Pick Your Destinations</p>
<h1>Select Your Favorite Country</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, libero aliquam eaque nemo voluptatibus ex molestias earum assumenda distinctio, ab labore. Minima quaerat, aspernatur inventore quod culpa architecto doloribus velit aut rerum delectus quo ab, quidem nostrum, beatae exercitationem! Quaerat placeat numquam rerum, laborum cumque laboriosam maxime accusamus porro culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores, ipsam molestiae, libero maiores nisi quod, suscipit cupiditate debitis officia quas incidunt. Nemo error alias sunt, repellat magnam eligendi temporibus praesentium eum repellendus, consectetur nesciunt laudantium reiciendis quaerat quos distinctio inventore dolorem, quo officiis quidem consequuntur enim explicabo fuga. Nostrum?</p>
           <button  onClick={() => navigate('/abroadstudy')}   id='homedestination-btn'>View All  <MoveRight id='homedestination-icon'/></button>
            </div>

            <div className='destination-slider'>

            <Slider {...settings}>

            {data.map((card,index)=>(
                <div key={index} className='destinaion-card'>
                <img className='destination-img' src={card.imgSrc} alt={card.alt} />
                <h3 id='hello'>{card.title}</h3>
                
                </div>
            ))}

</Slider>
            </div>
        </div>
        </div>
    </>
  )
}

export default Destination