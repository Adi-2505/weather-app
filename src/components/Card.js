import React from 'react'
import Search from './Search'
import Data from './Data'


export default function Card(props) {
    return (
        <div className='flex flex-col'>
            <Search click={props.click} />
            <Data weather={props.weather} date={props.date}/>
        </div>
    )
}
