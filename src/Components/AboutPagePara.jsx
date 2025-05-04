import React from 'react';
import homepageimg from '/homepageimg.jpg';
import homeimage3 from '/homeimage3.avif';


function AboutPagePara() {
  return (
   <>
    <div className='aboutpagepara'>
    <div className='aboutpage-section'>
    <p id='aboutpage-section'>About MacroHub Educational Consultancy</p>
    <h1>Grow your career with Aspire Global Educational Consultancy</h1>

    <p id='aboutpage-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
     Sint repellendus molestias et provident aspernatur, blanditiis corrupti officia velit recusandae eaque hic iste animi doloremque tenetur quidem cumque voluptatem, quibusdam tempora. 
     Numquam veniam incidunt quaerat maxime repellat.
      Debitis voluptates adipisci quidem aliquid maxime cumque alias, fuga repudiandae, dolorum consequatur eligendi vitae consequuntur consectetur quis harum voluptatibus beatae obcaecati cum ullam reprehenderit.
      Dicta magni voluptates sapiente quaerat, enim repellat similique nemo, velit iure explicabo possimus voluptatum consequatur numquam repudiandae?
      <br/> <br/>
       Dicta magni voluptates sapiente quaerat, enim repellat similique nemo, velit iure explicabo possimus voluptatum consequatur numquam repudiandae?
        Enim odio molestiae placeat beatae aliquam commodi perspiciatis minima necessitatibus. 
        <br/> <br/>
        Temporibus quo possimus sunt commodi, ad dolorem deserunt nemo fuga ipsa cumque a non voluptates minus mollitia hic doloribus nihil in, quos consequatur ducimus tenetur quibusdam voluptate sapiente corrupti. Sequi omnis eveniet dolores, reiciendis aspernatur nesciunt corrupti quibusdam dignissimos totam numquam ab illo provident nulla harum sit! Amet, harum ipsum incidunt, ratione consequuntur voluptas autem, nesciunt pariatur neque ipsam temporibus esse facilis. 
    Officiis!</p>
    </div>

    <div className='aboutpage-image'>
    <div className='aboutpage-img1'>
    <img src={homepageimg} alt='' />
    </div>
    <div className='aboutpage-img2'>
    <img src={homeimage3} alt='' />
    </div>
    </div>
    </div>
   </>
  )
}

export default AboutPagePara