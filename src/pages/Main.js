import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';


    const FIXED_START_DATE = new Date('2024-08-20T00:00:00Z'); // Установите нужное фиксированное время

    const Main = () => {
        const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        useEffect(() => {
            const countdown = () => {
                const now = new Date().getTime();
                const targetDate = FIXED_START_DATE.getTime() + 90 * 24 * 60 * 60 * 1000;
                const distance = targetDate - now;
        
                if (distance > 0) {
                    const totalHours = Math.floor(distance / (1000 * 60 * 60));
                    const totalMinutes = Math.floor(distance / (1000 * 60));
                    const days = Math.floor(totalHours / 24);
                    const hours = totalHours % 24;
                    const minutes = totalMinutes % 60;
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                    setTimeLeft({
                        days: String(days).padStart(2, '0'),
                        hours: String(hours).padStart(2, '0'),
                        minutes: String(minutes).padStart(2, '0'),
                        seconds: String(seconds).padStart(2, '0')
                    });
                } else {
                    setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                }
            };
        
            const interval = setInterval(countdown, 1000);
            return () => clearInterval(interval);
        }, []);
        


    return (
        <div className="relative h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-[#0b0602fd]"></div>
            <div className="absolute w-[105vw] h-[80vw] -top-[35vw] left-[52vh] blur-[40px] md:-top-[30vw] md:left-1/2 transform -translate-x-1/2 md:w-[50vw] md:h-[50vw] bg-[#37334F] rounded-full opacity-30 md:blur-[140px]"></div>
            <div className="absolute top-[6vh] left-[85vw]  w-[50vh]  h-[40vh] blur-[100px] md:-top-[26vh] md:left-[85vw] md:w-[85vh] md:h-[75vh] bg-[#e03800] rounded-full opacity-30 md:blur-[370px]"></div>
            <div className="relative z-10 text-center">
                <img src={logo} alt="Fade Wallet Logo" className="mx-auto mb-16 w-[170px] h-[155px] md:w-[245px] md:h-[221px]" />
                <div className="grid grid-cols-4 gap-2 px-2 text-[23px] font-black md:text-5xl mb-10 md:mb-16 items-center justify-evenly">
                    <div className="flex flex-col items-center w-[95px] md:w-[260px] border-r  border-x-[#37334F]">
                        <span>{timeLeft.days}</span>
                        <div className="text-xs md:text-sm font-normal mt-2 opacity-[40%]">days</div>
                    </div>
                    <div className="flex flex-col items-center w-[80px] md:w-[260px] border-r border-x-[#37334F]">
                        <span>{timeLeft.hours}</span>
                        <div className="text-xs md:text-sm font-normal mt-2 opacity-[40%]">hours</div>
                    </div>
                    <div className="flex flex-col items-center w-[80px] md:w-[260px]">
                        <span>{timeLeft.minutes}</span>
                        <div className="text-xs md:text-sm font-normal mt-2 opacity-[40%]">minutes</div>
                    </div>
                    <div className="flex flex-col items-center w-[80px] md:w-[260px]  border-l border-x-[#37334F]">
                        <span>{timeLeft.seconds}</span>
                        <div className="text-xs md:text-sm font-normal mt-2 opacity-[40%]">seconds</div>
                    </div>
                </div>
                <p className="text-[16px] md:text-[22px] leading-5 md:leading-6 opacity-[80%] px-[4.5em]">
                    We are working on something amazing. We will be back soon.
                </p>
            </div>
        </div>
    );
};

export default Main;
