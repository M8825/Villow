import React from 'react'
import './index.scss'
import { buyHome, sellHome, rentHome } from './cardText';
import Card from './Card';

const Layout = () => {

  return (
    <div className="cards-container">
        <Card headerImg={buyHome.headerImg} header={buyHome.header} body={buyHome.body} buttonText={buyHome.btnText}/>
        <Card headerImg={sellHome.headerImg} header={sellHome.header} body={sellHome.body} buttonText={sellHome.btnText}/>
        <Card headerImg={rentHome.headerImg} header={rentHome.header} body={rentHome.body} buttonText={rentHome.btnText}/>
    </div>
  )
};

export default Layout;
