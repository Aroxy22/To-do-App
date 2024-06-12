import React, {useState,useEffect} from 'react';

function DigitalClock()
{

    const [time,setTime]=useState(new Date());

   
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000);
     
    function formattime(){
        let hours=time.getHours();
        const min=time.getMinutes();
        const sec=time.getSeconds();
        const mer=hours>=12?"PM":"AM";

        hours=hours%12||12;

        return `${zero(hours)}:${zero(min)}:${zero(sec)} ${zero(mer)}`;
    }
    function zero(number){
            return (number<10?"0":"")+number;
    }
return(
    <div className='clock-container'>
        <div className='clock-text'>
            <span className='clock'>{formattime()}</span>
        </div>
    </div>
);
}
export default DigitalClock;