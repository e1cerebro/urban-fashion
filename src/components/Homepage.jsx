import React from 'react';
import './homepage.scss';
const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>HAT</h1>
            <span className='subtitle'>SHARP</span>
          </div>
        </div>
        {/* End Menu Item */}
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>WOMENS</h1>
            <span className='subtitle'>BUY NOW</span>
          </div>
        </div>
        {/* End Menu Item */}
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>BOYS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        {/* End Menu Item */}
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>MEN'S</h1>
            <span className='subtitle'>SHOP HERE</span>
          </div>
        </div>
        {/* End Menu Item */}{' '}
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>JACKET</h1>
            <span className='subtitle'>SHOP HERE</span>
          </div>
        </div>
        {/* End Menu Item */}
      </div>
    </div>
  );
};

export default Homepage;
