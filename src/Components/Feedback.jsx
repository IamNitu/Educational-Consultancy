import React from 'react';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {

    const cards=[
        {
            imgsrc:'https://img.freepik.com/free-photo/beautiful-graduate-girl-graduation-robe-shows-ok-sign-smiling-camera_496169-1324.jpg',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusantium molestiae fugiat excepturi asperiores similique aperiam ab officiis minus necessitatibus tenetur dolore, non cumque tempore maxime libero amet id dolores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, sit!',
            name:'~Jane Doe',
        },
        {
            imgsrc:'https://www.baker.edu/wp-content/uploads/bachelor-of-general-studies.jpg',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusantium molestiae fugiat excepturi asperiores similique aperiam ab officiis minus necessitatibus tenetur dolore, non cumque tempore maxime libero amet id dolores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, sit!',
            name:'~John Doe',
        },
        {
            imgsrc:'https://thumbs.dreamstime.com/b/female-college-student-happy-girl-european-university-scholarship-uni-91749887.jpg',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusantium molestiae fugiat excepturi asperiores similique aperiam ab officiis minus necessitatibus tenetur dolore, non cumque tempore maxime libero amet id dolores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, sit!',
            name:'~Jane Doe',
        },
        {
            imgsrc:'https://www.usnews.com/object/image/00000153-14bd-df1a-a77f-37fd65290000/160224-lawstudent-stock.jpg?update-time=1533583082030',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusantium molestiae fugiat excepturi asperiores similique aperiam ab officiis minus necessitatibus tenetur dolore, non cumque tempore maxime libero amet id dolores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, sit!',
            name:'~John Doe',
        },
        {
            imgsrc:'https://an.edu/wp-content/uploads/2022/08/online_iStock_000016029216XLarge-300x200.jpg',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusantium molestiae fugiat excepturi asperiores similique aperiam ab officiis minus necessitatibus tenetur dolore, non cumque tempore maxime libero amet id dolores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, sit!',
            name:'~Jane Doe',
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      }

  return (
   <>
    <div className='feedback'>
<div className='feedback-header'>
<p>Feedback</p>
<h1>What Students Say?</h1>

</div>
   <div className='card-section'>

   <Slider {...settings}>

    {cards.map((card,index)=>(
        <div key={index} className='feedback-card'>
       <img src={card.imgsrc} alt={card.alt} className='feedback-img' />
        <p id='feedback-para'> {card.description}</p>
        <p id='feedback-name'>{card.name}</p>
        </div>
    ))}

    </Slider>
   </div>

    </div>
   </>
  )
}

export default Feedback;

