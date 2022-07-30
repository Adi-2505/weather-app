import React from 'react'
import github from './Images/gitHub.png'
import linkedin from './Images/linkedin.png'
import instagram from './Images/instagram.png'

export default function Footer() {
    return (
        <footer className='w-full h-28 backdrop-blur text-xl text-white bg-[#00000042] shadow-zinc-700 shadow-md flex justify-between items-center'>
            <div className="left p-2">
                <ul>
                    <li>Source : <a href="https://www.weatherbit.io/" className='text-blue-600 hover:underline'>Weatherbit API</a></li>
                    <li>All rights reserved © <a href="#" className='text-blue-600 hover:underline'>Taapman.com</a> 2022</li>
                </ul>

            </div>
            <div className="left p-2">
                <ul className='flex justify-around items-center space-x-3 m-6'>
                    <li> <a href="https://github.com/Adi-2505" target={'_blank'}><img src={github} alt="" /></a> </li>
                    <li> <a href="https://www.linkedin.com/in/adityanagalwade" target={'_blank'}><img src={linkedin} alt="" /></a> </li>
                    <li> <a href="https://www.instagram.com/_aditya_25" target={'_blank'}><img src={instagram} alt="" /></a></li>
                </ul>
            </div>
        </footer>
    )
}
