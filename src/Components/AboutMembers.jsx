import React from 'react';
import unimember1 from '/unimember1.png';
import unimember2 from '/unimember2.jpg';
import unimember3 from '/unimember3.jpg';
import unimember4 from '/unimember4.jpg';

function AboutMembers() {
  return (
    <>
        <div className='aboutmembers'>
        <div className='aboutmembers-container'>
            <div id='aboutmember-img1'>
            <img src={unimember1} alt='' />
            <h2>Name Here</h2>
            <p>Counsellor</p>
            </div>

            <div id='aboutmember-img2'>
            <img src={unimember2} alt='' />
            <h2>Name Here</h2>
            <p id='aboutmember-para'>Counsellor</p>
            </div>

            <div id='aboutmember-img3'>
            <img src={unimember3} alt='' />
            <h2>Name Here</h2>
            <p id='aboutmember-para'>Counsellor</p>
            </div>

            <div id='aboutmember-img4'>
            <img src={unimember4} alt='' />
            <h2>Name Here</h2>
            <p id='aboutmember-para'>Receiptionist</p>
             </div>
        </div>

        </div>
    </>
  )
}

export default AboutMembers