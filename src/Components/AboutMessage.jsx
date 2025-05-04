import React from 'react';
import uniceo from '/uniceo.webp';
import unimd from '/unimd.png';

function AboutMessage() {
  return (
    <>
        <div className='aboutmessage'>
            <div className='aboutmessage-section'>
                <div className='aboutmessage-img'>
                    <img src={uniceo} alt='' />
                </div>

                <div className='aboutmessage-container'>
                    <p id='message-header'>Message From Top Level</p>
                    <h3>Message From CEO</h3><br/>
                    <p id='message-container'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, voluptatem temporibus!
                     Quam omnis facilis impedit quo a est quidem nulla ipsa doloremque repudiandae sint expedita voluptas consequuntur ex iure sunt cum amet optio repellat laborum, ab, suscipit temporibus accusamus molestiae! 
                     <br/><br/>
                    Obcaecati nisi placeat esse error perspiciatis, minus veniam corrupti pariatur iste voluptatum eligendi quam atque suscipit exercitationem itaque, rerum, officia consectetur excepturi soluta? 
                    Soluta reiciendis eveniet, explicabo ipsa quasi eius quisquam pariatur ullam nobis molestias cum obcaecati hic assumenda cupiditate illo fugiat impedit quia error omnis porro voluptatum voluptatem. 
                    Officia temporibus deleniti magni iste labore perspiciatis veniam sit, quaerat consectetur!</p>
                    <br/>
                    <h3>John Doe</h3>
                    <p>Chief Executive Officer</p>
                </div>
            </div>

            <div className='aboutmessage-section1'>
            <div className='aboutmessage-container'>
            <p id='message-header'>Message From Top Level</p>
                    <h3>Message From CEO</h3><br/>
                    <p id='message-container'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, voluptatem temporibus!
                     Quam omnis facilis impedit quo a est quidem nulla ipsa doloremque repudiandae sint expedita voluptas consequuntur ex iure sunt cum amet optio repellat laborum, ab, suscipit temporibus accusamus molestiae! 
                     <br/><br/>
                    Obcaecati nisi placeat esse error perspiciatis, minus veniam corrupti pariatur iste voluptatum eligendi quam atque suscipit exercitationem itaque, rerum, officia consectetur excepturi soluta? 
                    Soluta reiciendis eveniet, explicabo ipsa quasi eius quisquam pariatur ullam nobis molestias cum obcaecati hic assumenda cupiditate illo fugiat impedit quia error omnis porro voluptatum voluptatem. 
                    Officia temporibus deleniti magni iste labore perspiciatis veniam sit, quaerat consectetur!</p>
                    <br/>
                    <h3>Brooklyn Simmons</h3>
                    <p>Managing Director</p>
            </div>

            <div className='aboutmessage-img'>
            <img src={unimd} alt='' />
            </div>
            </div>

            {/* <div className='about-members'>

            </div> */}
        </div>
    </>
  )
}

export default AboutMessage