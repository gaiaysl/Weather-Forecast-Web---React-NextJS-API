import React from 'react';
import moment from 'moment-timezone';

import styles from '../components/TodaysWeather.module.css'


export default function TodaysWeather({city,weather,timezone}) {


        return (
           <div className=" max-w-4xl mx-auto flex items-center mt-4  ">
               <div className=" mx-auto  flex  w-full  h-96 rounded-lg  opacity-90 backdrop-blur-md  hover:backdrop-blur-2xl shadow-2xl   m-3  rounded-2xl border-2 border-blue-100">
                   <div className=" flex flex-col mx-auto w-96  mt-20 py-2  ">
                       <h1 className='font-bold'>
                           {city.name} ({city.country})
                       </h1>
                       <h2>
                           <div className="flex flex-row mt-10   ">
                           <p className="m-2 font-bold ">{weather.temp.max.toFixed(0)}&deg;C</p>

                           <p className="m-2 ml-6">{weather.temp.min.toFixed(0)}&deg;C</p>
                           </div>
                       </h2>
                       <div className="flex flex-row text-white ">
                            <div className="m-2  ">
                            <p>Sunrise</p>
                            <span className='text-sm'>{moment.unix(weather.sunrise).tz(timezone).format("LT")}</span>
                            </div>
                                <div className="m-2">
                               <p>Sunset</p>
                               <span className='text-sm'>{moment.unix(weather.sunset).tz(timezone).format("LT")}</span>
                                </div>
                       </div>
                   </div>

                   <div className=" flex flex-col items-center mx-auto ">
                       <div className=" mt-20 font-bold text-white">

                           <img
                               src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                               alt="Weather Icon"
                               layout="fill"
                           />

                           <h3>
                               {weather.weather[0].description}
                           </h3>

                       </div>
                   </div>
               </div>
           </div>
        );

}



