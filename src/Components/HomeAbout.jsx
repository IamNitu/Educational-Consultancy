import React from 'react';;
import {MoveRight} from 'lucide-react';
import homeimage3 from '/homeimage3.avif'

function HomeAbout() {
  return (
   <>
   <div className='homeabout'>
    <div className='main-homeabout'>
    <div className='homeabout1'>
    <p id='about-head'>About Aspire Global Education</p>
    <h1>Grow your career with Aspire Global Educational Consultancy</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat ipsum neque hic id exercitationem, non iure at explicabo nulla corporis vitae! Tempore, impedit et fugit consequuntur aspernatur exercitationem autem soluta aliquam neque. Magnam, rem voluptates distinctio dolor eligendi deserunt temporibus soluta cumque adipisci, neque, mollitia tempore inventore. Eligendi quo quos quas tenetur necessitatibus dolore qui, officia fugiat porro eos voluptatem eveniet doloribus repellendus consequatur veniam obcaecati commodi libero? Alias officia laudantium numquam dignissimos rerum mollitia vel ipsa eum hic unde non quod totam quae ea, enim distinctio eius quasi nobis labore expedita atque! Magnam commodi maxime a et explicabo.</p>
        <button id='homeabout-btn'>Read More <MoveRight id='homeabout-icon'/></button>
    </div>

    <div className='homeabout2'>
        <img src={homeimage3} alt='' />
    </div>
    </div>
    </div>
   </>
  )
}

export default HomeAbout