import Carousel  from "../components/Bootstrap/homeCarousel"
import React from 'react';
import './Home.scss'
import CardGroup  from "../components/Bootstrap/homeCards";
import ItemListContainer2 from "../components/ItemListContainer/ItemListContainer2"

const home = () => {


return (

    <>
        <section className="home">
            <ItemListContainer2 secciones2="SALE"/>
            <Carousel/>
            <CardGroup/>
        </section>
    </>
)


}

export default home