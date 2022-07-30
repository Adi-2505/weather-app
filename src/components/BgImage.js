import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import Footer from './Footer';

export default function BgImage(props) {
    let url = `https://source.unsplash.com/random/900%C3%97700/?${props.weather.data[0].weather.description}`;
    return (
        <>
            <div className="img bg-cover bg-no-repeat bg-center flex justify-between items-center flex-col" style={{ backgroundImage: `url(${url})`, height: '135vh' }}>
                <Navbar />
                <Card click={props.click} weather={props.weather} date={props.date}/>
                <Footer />
            </div>
        </>
    )
}

