import React from 'react';
import unilogo1 from '/unilogo1.png';
import unilogo2 from '/unilogo2.png';
import unilogo3 from '/unilogo3.png';
import unilogo4 from '/unilogo4.png';
import unilogo5 from '/unilogo5.png';
import unilogo6 from '/unilogo6.png';

function AffiliatedUni() {
  return (
    <>
        <div className='affiliateduni'>
        <div className='affiliateduni-para'>
            <p>Institutions</p>
            <h1>Our Affiliated Universities</h1>
        </div>
        <div className='unilogo'>
          <img src={unilogo1} alt='' id='unilogo'/>
          <img src={unilogo2} alt='' id='unilogo'/>
          <img src={unilogo3} alt='' id='unilogo'/>
          <img src={unilogo4} alt='' id='unilogo'/>
          <img src={unilogo5} alt='' id='unilogo'/>
          <img src={unilogo6} alt='' id='unilogo'/>
        </div>
        </div>
    </>
  )
}

export default AffiliatedUni