import React from 'react'

export default function Form({ onSelectVideo, videoValues }) {
  console.log(videoValues);
  return (
    <form onClick={(ev) => onSelectVideo(ev.target.value)}
    className='flex justify-center gap-10 my-6'>
    
     {
      
      videoValues.map((value, i) => (
        
        <div className='text-2xl'>
        <input type="radio" key={i} name="src" value={value} className=''/>
        {value}
        </div>
        
      ))
      
     }
    </form>
  );
}
