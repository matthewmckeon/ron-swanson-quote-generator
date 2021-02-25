import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ron.css';

const Ron = () => {
  const [quote, setQuote] = useState('');

  const getQuote = async () => {
    await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then((response) => response.json())
      .then((data) => setQuote(data[0]));
  };

  return (
    <div classname='ron'>
      <div className='img'>
        <img
          src='https://41.media.tumblr.com/5c9d0ddf215e61624dd1808007826fba/tumblr_mpu1daEe5M1swnmv6o1_400.png'
          alt='ron'
          height='350'
        />
      </div>

      <div className='quote'>
        <h3>{quote}</h3>
      </div>

      <div className='button'>
        <button className='btn' onClick={getQuote} alt='quote'>
          Get Ron Quote
        </button>
      </div>
    </div>
  );
};

export default Ron;
