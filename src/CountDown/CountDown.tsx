import { useEffect, useState } from "react";


export const CountDown = ()=>{
    const [state,setState] = useState<{
        hours: number;
        minutes:number;
        days:number
    }>({
        hours: 0,
        minutes:0,
        days:0
    });

    useEffect(()=>{
        setInterval(()=>{
            updateCountdown();
        },500)
    },[]);

    const  updateCountdown=()=> {
        const weddingDate:any = new Date("2024-12-30T00:00:00");
        const now:any = new Date();
        const difference = weddingDate - now;
            setState(()=>({
                hours:  Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            }))
    }

    const {hours,minutes,days} = state;

    return (
        <div className="countdown-root">
        <div className="card-section">
            <div className="card-content">{days}</div>
            <div className="sub">DAYS</div>
        </div>
        <div className="card-section">
        <div  className="card-content">{hours}</div>
            <div className="sub">HOURS</div>
        </div>
        <div className="card-section">
        <div  className="card-content">{minutes}</div>
            <div className="sub">MINUTES</div>
        </div>
        </div>
    )
}