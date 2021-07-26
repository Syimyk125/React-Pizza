import React from "react";
import "./content.css"
import {Content_img_1} from "./../../img/images"
import {Content_img_2} from "./../../img/images"
import {Content_img_3} from "./../../img/images"
import {Content_img_4} from "./../../img/images"

let Content =()=>{
    return(
        <section className="content">
            <h2 className="content-title">Все Пиццы</h2>
            <div className="content-boxFlex">
                <div className="content-box">
                    <img src={Content_img_1}/>
                    <h4 className="content__box-title">Чизбургер-пицца</h4>
                    <div className="content__box-flex">
                        <h3 className="content__box-title2">от 395 ₽</h3>
                        <button className="content__box-btn"> <span className="content-plus">+</span> Добавить</button>
                    </div>
                </div>
                <div className="content-box">
                    <img src={Content_img_2}/>
                    <h4 className="content__box-title">Сырная</h4>
                    <div className="content__box-flex">
                        <h3 className="content__box-title2">от 450 ₽</h3>
                        <button className="content__box-btn"> <span className="content-plus">+</span> Добавить</button>
                    </div>
                </div>
                <div className="content-box">
                    <img src={Content_img_3}/>
                    <h4 className="content__box-title">Креветки по-азиатски</h4>
                    <div className="content__box-flex">
                        <h3 className="content__box-title2">от 290 ₽</h3>
                        <button className="content__box-btn"> <span className="content-plus">+</span> Добавить</button>
                    </div>
                </div>
                <div className="content-box">
                    <img src={Content_img_4}/>
                    <h4 className="content__box-title">Сырный цыпленок</h4>
                    <div className="content__box-flex">
                        <h3 className="content__box-title2">от 385 ₽</h3>
                        <button className="content__box-btn"> <span className="content-plus">+</span> Добавить</button>
                    </div>
                </div>
                <div className="content-box">
                    <img src={Content_img_1}/>
                    <h4 className="content__box-title">Чизбургер-пицца</h4>
                    <div className="content__box-flex">
                        <h3 className="content__box-title2">от 395 ₽</h3>
                        <button className="content__box-btn"> <span className="content-plus">+</span> Добавить</button>
                    </div>
                </div>
                <div className="content-box">
                    <img src={Content_img_2}/>
                    <h4 className="content__box-title">Сырная</h4>
                    <div className="content__box-flex">
                        <h3 className="content__box-title2">от 450 ₽</h3>
                        <button className="content__box-btn"> <span className="content-plus">+</span> Добавить</button>
                    </div>
                </div>
                <div className="content-box">
                    <img src={Content_img_3}/>
                    <h4 className="content__box-title">Креветки по-азиатски</h4>
                    <div className="content__box-flex">
                        <h3 className="content__box-title2">от 290 ₽</h3>
                        <button className="content__box-btn"> <span className="content-plus">+</span> Добавить</button>
                    </div>
                </div>
                <div className="content-box" id="rre">
                    <img src={Content_img_4}/>
                    <h4 className="content__box-title">Сырный цыпленок</h4>
                    <div className="content__box-flex">
                        <h3 className="content__box-title2">от 385 ₽</h3>
                        <button className="this.content__box-btn" onclick="MyClick"> <span className="content-plus">+</span> Добавить</button>
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
};

function MyClick (){
    alert("Hello World")
}

export default Content;