import Carousel  from "../components/Bootstrap/homeCarousel"
import React from 'react';
import './Home.scss'
import CardGroup  from "../components/Bootstrap/homeCards";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const home = () => {


return (

<>
<section className="home">
<Carousel/>
<CardGroup/>
</section>


</>
)


}

export default home