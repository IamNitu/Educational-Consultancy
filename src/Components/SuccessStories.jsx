import React from "react";
import aboutus from '/aboutus.webp';
import Footer from "./Footer";

const galleryItems = [
  { 
    src: "https://t4.ftcdn.net/jpg/06/24/26/51/360_F_624265121_NMx9P0hbcwbJqjhUeHE2XXYw84j2WD3D.jpg",
     title: "Instagram Photos"
     },

  { 
    src: "https://news.stanford.edu/__data/assets/image/0012/124230/2009-0611-605_Img.jpg", 
    title: "Education Fair 2022" 
  },

  { 
    src: "https://admin.wellandgood.com/wp-content/uploads/sites/3/2020/02/Stocksy_txp656a0a6ayta300_Small_2593557.jpg?w=500",
     title: "Aspire Global Education Fair 2021"
     },
  {
     src:"https://t4.ftcdn.net/jpg/02/98/35/71/360_F_298357190_yjGRacL1FZ75l6wyRROrAdq6q3rMPCqD.jpg",
      title: "Aspire Global Education Fair 2020" 
    },
  {
     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEOzasPTaBKlfcNip6BHH6r9lDnkm-1yUPoA&s",
      title: "V" 
    },
  {
     src: "https://img.freepik.com/premium-photo/man-giving-speech-stage_605022-39087.jpg", 
     title: "Student Counselling seminar"
     },
  {
     src: "https://static.vecteezy.com/system/resources/thumbnails/057/947/711/small_2x/dedicated-volunteers-collecting-trash-in-a-park-promoting-environmental-awareness-photo.jpg", 
     title: "CSR Activities"
     },
  { 
    src: "https://resources.depaul.edu/newsroom/news/press-releases/PublishingImages/2022/20220906_welcome_jsc_091.jpg", 
    title: "12th Anniversary" 
  },
  {
     src: "https://img.freepik.com/free-photo/happy-men-4th-july-celebration-outdoors_23-2149383097.jpg?semt=ais_hybrid&w=740",
      title: "USA Visit on 12th march 2019" 
    },
];

const SuccessStories = () => {
  return (
    <div className="gallery-container">

      <div className="about-banner">
                <img src={aboutus} alt="" />
                  <div className="banner-overlay">
                    <div className="banner-text">
                      <h1>Gallery</h1>
                      <p>Home / Gallery</p>
                    </div>
                  </div>
                </div>

                <div className="service-triangle">
      <div className="service-triangle-orange"></div>
    </div>
    <div className="service-triangle-right">
    <div className="service-triangle-blue"></div>
    </div>


<div className="gallery-component">
      <p className="gallery-subtitle">Our Sweet Memories</p>
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={item.title} />
            <div className="gallery-caption">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="gallery-pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default SuccessStories;
