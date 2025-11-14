import React from 'react'

function index({newsImg,title2,newsMonth,newsDay,newsYear}) {
  return (
    <div >
      
      <div className='mt-[10px]'>
        <div className='flex gap-[10px]'>
            <img src={newsImg} alt="" className='w-[85px] h-[85px] rounded-[15px]'/>
            <div className='flex flex-col gap-[14px]'>
                <p className='text-[#212529] text-[13px]'>{title2}</p>
                <p className='text-[#212529] text-[13px]'>{newsMonth} {newsDay} ,{newsYear}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default index
