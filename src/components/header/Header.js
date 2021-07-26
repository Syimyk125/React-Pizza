import React from 'react';
import "./header.css"
import {Logo} from "./../../img/images"
import {Line} from "./../../img/images"
import {Telega} from "./../../img/images"

let Header = () => {
    return (
      
      <header className="header">
        <div className="flex">
          <img className="header_logoImg" src={Logo} />
          <div className="header_count">
            <div>
              <p className="header-count__text">520 ₽</p>
            </div>
          <img className="header-count__img" src={Line} />
            
            <div className="product_count">
              <img src={Telega} />
              <p className="header-count__text">3</p>
            </div>
          </div>
          </div>
        <div className="longLine"></div>
      </header>
      
      
    )
  }

export default Header;