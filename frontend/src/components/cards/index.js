import React from 'react'
import './index.scss'
import Card from './Card';

const Layout = () => {
    const buyAHome = "https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp"
    const header = "Buy a home"
    const body = "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else."
    const btnText = "Browse homes"
  return (
    <div className="cards-container">
        <Card headerImg={buyAHome} header={header} body={body} buttonText={btnText}/>
        <Card />
        <Card />
    </div>
  )
};

export default Layout;
