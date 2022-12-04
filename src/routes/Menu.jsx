import "./menu.css";
import React from 'react';
import Navbar from '../components/Navbar';

const Menu = () => {
  return (
    <div>
      
      <Navbar />

      <header className="App-header">
        
        <div className='menu-container'>
          

          <img className='menu-img' src="./images/menu_1.jpg" alt="test" />
          <img className='menu-img' src="./images/catering_services_1.jpg" alt="test" />

        {/* <div className='menu-container'>

          <div className='menu-item-card'>
            <div className='menu-item-img-container'>
              <img src='./images/sopa_1.jpg' className='menu-item-img' alt='menu-item' />
              <span>Birria-Sopa Cura Cruda</span>
            </div>
            <div className='add-to-cart-span'>ADD $3.50</div>
          </div>
          <div className='menu-item-card'>
            <div className='menu-item-img-container'>
              <img src='./images/tacos_2.jpg' className='menu-item-img' alt='menu-item' />
              <span>4 Tacos de Asada </span>
            </div>
            <div className='add-to-cart-span'>ADD $3.50</div>
          </div>
          <div className='menu-item-card'>
            <div className='menu-item-img-container'>
              <img src='./images/tacos_3.jpg' className='menu-item-img' alt='menu-item' />
              <span>Taco de Pollo</span>
            </div>
            <div className='add-to-cart-span'>ADD $3.50</div>
          </div>
          <div className='menu-item-card'>
            <div className='menu-item-img-container'>
              <img src='./images/tacos_4.jpg' className='menu-item-img' alt='menu-item' />
              <span>Taco de Adobada</span>
            </div>
            <div className='add-to-cart-span'>ADD $3.50</div>
          </div>
          <div className='menu-item-card'>
            <div className='menu-item-img-container'>
              <img src='./images/quesadillas_1.jpg' className='menu-item-img' alt='menu-item' />
              <span>Quesadilla de Asada</span>
            </div>
            <div className='add-to-cart-span'>ADD $3.50</div>
          </div> */}
          {/* <div className='menu-item-card'></div>
          <div className='menu-item-card'></div>
          <div className='menu-item-card'></div>
          <div className='menu-item-card'></div>
          <div className='menu-item-card'></div> */}

        </div>

      </header>


    </div>
  )
}

export default Menu