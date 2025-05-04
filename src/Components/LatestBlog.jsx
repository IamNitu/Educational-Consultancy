import React from 'react';
import {MoveRight} from 'lucide-react';

function LatestBlog() {

const cards=[
    {
        imgsrc:'https://www.usnews.com/object/image/0000014a-3adb-d084-a1fa-fedf6e170000/141211-cot-lecturehall-stock.jpg?update-time=1528294559670&size=responsive640',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
    },
    {
        imgsrc:'https://www.cato.org/sites/cato.org/files/styles/pubs_2x/public/2025-04/college%20students%20.jpg?itok=02p2rCCR',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
    },
    {
        imgsrc:'https://www.universityofcalifornia.edu/sites/default/files/styles/article_default_banner/public/uc-irvine-students-tick.jpg?h=75334513&itok=GdwO3uwP',
        title:'Free Online Courses From Top Universities.',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci maiores itaque minus placeat molestias quibusdam assumenda magnam ea? Distinctio illum magnam consequuntur reprehenderit maxime!',
    },
]

  return (
    <>
  
        <div className='latestblog'>
    <div className='latest-para'>
        <p>Latest Blog</p>
        <h1>Have a Look Our Blog</h1>
    </div>

    <div className='latest-card'>

{cards.map((card,index)=>(
    <div key={index} className='latestblog-card'>
<img src={card.imgsrc} alt={card.alt} className='latestblog-img'/>
<h3>{card.title}</h3>
<p>{card.description}</p>
    </div>
))}

    </div>

    <div className='latest-btn'>
<button id='latest-btn'>Read More <MoveRight id='latest-icon'/></button>
    </div>
        </div>
    </>
  )
}

export default LatestBlog