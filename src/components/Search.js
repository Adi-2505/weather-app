import React from 'react'

export default function Search(props) {




    return (
        <div className='h-[100px] w-[550px] bg-[#00000042] backdrop-blur my-3 rounded-lg flex flex-col justify-center items-center'>
            <div className="flex justify-between items-center w-[500px]">
                <input type="text" name="" id="city" placeholder='City' className='w-[246px] h-[30px] px-4 rounded-[5px] ' />
                <input type="text" name="" id="country" placeholder='Country' className='w-[246px] h-[30px] px-4 my-1.5 rounded-[5px] ' />
            </div>
            <button className='w-[500px] h-[30px] bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 rounded-[5px] text-white text-sm tracking-wider active:border-2 active:border-solid active:border-blue-900' onClick={props.click}>Search</button>
        </div>
    )
}
