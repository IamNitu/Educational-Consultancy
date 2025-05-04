import React from 'react';
import { useNavigate } from 'react-router-dom';

import aboutus from '/aboutus.webp';
import Footer from './Footer';

function Blog() {
   
  const navigate = useNavigate();


  const cards=[
    {
        imgsrc:'https://www.usnews.com/object/image/0000014a-3adb-d084-a1fa-fedf6e170000/141211-cot-lecturehall-stock.jpg?update-time=1528294559670&size=responsive640',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'11 Jan',
        link: '/online-course'
      },
    {
        imgsrc:'https://www.cato.org/sites/cato.org/files/styles/pubs_2x/public/2025-04/college%20students%20.jpg?itok=02p2rCCR',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'12 Feb',
         link: '/online-course'
      },
    {
        imgsrc:'https://www.6pr.com.au/wp-content/uploads/sites/13/2024/08/iStock-1190548731-1200x800.jpg',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'21 Jun',
         link: '/online-course'
      },
    {
        imgsrc:'https://www.yorku.ca/edu/wp-content/uploads/sites/28/2022/10/CampusWalk-sitting-spring6-scaled.jpeg',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'11 Jan',
         link: '/online-course'
      },
    {
        imgsrc:'https://blogs.unb.ca/newsroom/_media/images/2017/01/e1574fb983ca061524d768e5b0285556history_class-2.jpg',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'12 Feb',
         link: '/online-course'
      },
    {
        imgsrc:'https://media.istockphoto.com/id/1361844780/photo/young-black-student-returning-book-to-a-librarian-at-university-library.jpg?s=612x612&w=0&k=20&c=t0G4rrC6_vMamPl5IARM8bV-833lvxnHqCEETbAOS14=',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'21 Jun',
         link: '/online-course'
      },
    {
        imgsrc:'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'11 Jan',
         link: '/online-course'
      },
    {
        imgsrc:'https://college.harvard.edu/sites/default/files/styles/page_header_small/public/2019-05/fpo-linderpix-harvard-58405_0.jpg?h=8b7966f8&itok=4Kc8bJ4q',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'12 Feb',
         link: '/online-course'
      },
    {
        imgsrc:'https://static.vecteezy.com/system/resources/previews/029/771/421/non_2x/portrait-of-cheerful-male-student-learning-online-in-coffee-shop-young-european-man-studies-with-laptop-in-cafe-doing-homework-free-photo.jpeg',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'21 Jun',
         link: '/online-course'
      },
]

  return (
   <>
    <div>
        <div className="about-banner">
        <img src={aboutus} alt="" />
          <div className="banner-overlay">
            <div className="banner-text">
              <h1>Blog</h1>
              <p>Home / Blog</p>
            </div>
          </div>
        </div>

        <div className='blogs'>
        {cards.map((card,index)=>(
    <div key={index} className='blog-card'>

    <div className="card-image-wrapper">

<img src={card.imgsrc} alt={card.alt} className='blog-img'/>


 </div>

<p id='card-date'>{card.date}</p>
<h3 onClick={() => navigate(card.link)}   className="blog-title-click">{card.title}</h3>
<p>{card.description}</p>
    </div>
))}
        </div>

        <Footer/>

        </div>
   </>
  )
}

export default Blog