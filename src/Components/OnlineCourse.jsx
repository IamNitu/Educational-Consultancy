import React from 'react';
import aboutus from '/aboutus.webp';
import freecourse from '/freecourse.webp';
import Footer from './Footer';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OnlineCourse() {

  const cards=[
    {
        imgsrc:'https://www.usnews.com/object/image/0000014a-3adb-d084-a1fa-fedf6e170000/141211-cot-lecturehall-stock.jpg?update-time=1528294559670&size=responsive640',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'11 Jan',
        
      },
    {
        imgsrc:'https://www.cato.org/sites/cato.org/files/styles/pubs_2x/public/2025-04/college%20students%20.jpg?itok=02p2rCCR',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'12 Feb',
         
      },
      {
        imgsrc:'https://www.universityofcalifornia.edu/sites/default/files/styles/article_default_banner/public/uc-irvine-students-tick.jpg?h=75334513&itok=GdwO3uwP',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'21 Jun',
        
      },
    {
        imgsrc:'https://www.yorku.ca/edu/wp-content/uploads/sites/28/2022/10/CampusWalk-sitting-spring6-scaled.jpeg',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'11 Jan',
         
      },
    {
        imgsrc:'https://blogs.unb.ca/newsroom/_media/images/2017/01/e1574fb983ca061524d768e5b0285556history_class-2.jpg',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
        date:'12 Feb',
        
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
          breakpoint: 480, // phones
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }


  return (
    <>
    <div className='freeonlinecourse'>
       <div className="about-banner">
    <img src={aboutus} alt="" />
      <div className="banner-overlay">
        <div className="banner-text">
          <h1>Free Online Courses From Top Universities</h1>
          <p>Home / Blog / Free Online Courses From Top Universities</p>
        </div>
      </div>
    </div>

    <div className="service-triangle">
      <div className="service-triangle-orange"></div>
    </div>
    <div className="service-triangle-right">
    <div className="service-triangle-blue"></div>
    </div>



    <div className='freecourse-section'>
    <div className='freecoourse-secion-img'>
    <p>Our Latest Blog</p>
    <h1>Free Online Courses From Top Universities</h1>
    <img src={freecourse} alt='' />
    </div>

    <div className='freecoursesection-para'>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est, quo iure, amet deleniti voluptas quam nesciunt dicta praesentium, magni quidem numquam error odio. Vel recusandae magni impedit. Facilis voluptatibus unde sunt soluta veniam fugiat natus, alias maxime, itaque, quia officiis repellendus illo hic ipsa omnis. Omnis veritatis aspernatur nam nisi assumenda, ex fugiat doloribus dolorum magnam cum sed quis esse quos voluptatem autem molestiae, quod cumque nesciunt. Quis officiis consectetur recusandae. Iste, odit nostrum suscipit esse, necessitatibus reiciendis alias doloribus nisi laboriosam sit nam quod aspernatur est cum iure odio voluptas aliquid veniam. Voluptates fugiat inventore sint iste illo reiciendis. Consequatur qui, animi earum ipsa nostrum aut quisquam nemo nesciunt, rem voluptatibus cupiditate, velit accusamus vero sunt suscipit? Voluptate hic eius corporis laborum eaque sequi inventore dicta at cum sed eos repellat culpa quibusdam ad quia, tempore aperiam dolor. Sunt aliquid dolorum harum quis officiis culpa, dolores rerum magni eos veritatis, odio blanditiis tempore pariatur illo maiores libero. Dolores a at est odit? Incidunt temporibus corporis reprehenderit error ratione, eveniet, veniam iste recusandae natus quidem autem placeat laborum dolore velit rerum vitae alias, nam soluta nemo cum hic molestias fugit quasi exercitationem? Consequatur est et voluptate optio suscipit mollitia quam, at officia voluptatum alias, adipisci eius doloribus inventore odio id aspernatur rerum porro corrupti soluta. Esse, voluptatem tempore. Consequatur est et voluptate optio suscipit mollitia quam, at officia voluptatum alias, adipisci eius doloribus inventore odio id aspernatur rerum porro corrupti soluta. Esse, voluptatem tempore.  </p>
    </div>

    <div className='freecourse-component'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur magnam accusamus facere odio, sunt sed autem atque temporibus quisquam. Ad mollitia, autem fugiat harum voluptates maiores quae, at, laborum consectetur veniam cumque voluptate et rerum eum explicabo beatae ratione laudantium molestiae quos. Dolore tempore inventore alias quos tempora, perferendis nisi ipsa veritatis porro eos nostrum laudantium explicabo accusamus debitis consequuntur voluptatibus, eligendi amet? Ipsum culpa omnis eum dolor earum doloribus, reiciendis ratione voluptatibus hic labore delectus atque officiis recusandae magnam, laborum quia excepturi rerum sit sed fugit quas nulla? Est, delectus numquam! Ad velit totam molestias nostrum amet voluptate! Harum.</p>
    </div>

    <div className='freecoursesection-para'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga quidem omnis ab sunt, consectetur libero incidunt voluptatum laboriosam optio neque velit nobis modi tempore suscipit eligendi. Architecto qui, vel ex voluptatibus placeat cumque molestiae repudiandae? Omnis quia veniam qui facere assumenda magnam praesentium laborum dolores blanditiis rem aspernatur quos necessitatibus suscipit dolore sunt deleniti veritatis unde consequuntur fugiat non animi dolorem, labore reprehenderit tenetur? Facilis sunt placeat voluptate doloremque laborum repudiandae deserunt porro, praesentium veritatis maiores ducimus tempore dolorem libero accusantium soluta quia debitis omnis ipsum est similique voluptatibus totam tempora officiis! Placeat magni nam eos consequuntur iure sunt molestiae corrupti laborum, non ut esse mollitia iste eligendi nihil repellat in nisi, neque saepe ipsam dolores deserunt praesentium quis magnam? Accusamus adipisci nihil dignissimos, porro sed velit, voluptates doloribus laudantium earum corrupti dolore rem quo nulla pariatur tenetur atque error provident recusandae vel consectetur! Dignissimos voluptatem ratione perspiciatis ipsa voluptate, excepturi iste hic, eveniet vero consequatur consequuntur maiores reiciendis quia beatae sint nam possimus. Consequatur est et voluptate optio suscipit mollitia quam, at officia voluptatum alias, adipisci eius doloribus inventore odio id aspernatur rerum porro corrupti soluta. Esse, voluptatem tempore.Consequatur est et voluptate optio suscipit mollitia quam, at officia voluptatum alias, adipisci eius doloribus inventore odio id aspernatur rerum porro corrupti soluta. Esse, voluptatem tempore.   </p>
    </div>

    </div>

    <div className='freecourse-slider'>
<div className='free-slider'>
<div className='free-slider-container'>
<p>Related Blog</p>
<h1>You May Also Like</h1>
</div>


<div className='slider-container'>

<Slider {...settings}>

        {cards.map((card,index)=>(
    <div key={index} className='onlineblog-card'>

    <div className="card-image-wrapper">

<img src={card.imgsrc} alt={card.alt} className='suggestedblog-img'/>


 </div>

<p id='suggestedblog-date'>{card.date}</p>

<p id='blog-desc'>{card.description}</p>
    </div>
))}

</Slider>
        </div>
</div>
    </div>
      <Footer/>
    </div>
    </>
  )
}

export default OnlineCourse