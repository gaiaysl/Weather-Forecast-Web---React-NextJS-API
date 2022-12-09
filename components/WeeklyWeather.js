import React from 'react';
import moment from "moment-timezone";
import styles from '../components/WeeklyWeather.module.css'

export default function WeeklyWeather({weeklyWeather,timezone}) {
    return (
      <div className="  max-w-4xl  mx-auto">
          <div className=" flex flex-row  m-4 mt-4  ">
             <h2 className='font-bold text-3xl m-1 '>Weekly</h2>
              <h5 className='text-xl mt-3 m-1'>Weather</h5>
          </div>


          {weeklyWeather.length>0&&
          weeklyWeather.map((weather,index)=> {
              if (index == 0){
                  return;

          }
          return(
              <div className="bg-transparent opacity-90 hover:backdrop-blur-md hover:shadow-2xl m-3  rounded-2xl  text-white flex flex-row justify-between transition-all ease-in-out duration-400 border-2 border-blue-100">
                  <div className="bg-gray-500 w-48 rounded-2xl  flex flex-row items-center w-36">
                      <div className=" text-center mx-auto ">
                      <h3 className='text-black dark:text-white'>
                        {moment.unix(weather.dt).tz(timezone).format("dddd")}
                        </h3>

                            <p>{weather.temp.max.toFixed(0)}&deg;C</p>
                            <p>{weather.temp.min.toFixed(0)}&deg;C</p>

                      </div>
                           

                  </div>
                  <div className=" py-2 flex flex-col w-36 h-36 text-center  ">
                                <div className="py-2 ">
                                <h3>Sunrise</h3>
                                <p className='text-black dark:text-white'>
                                    {moment.unix(weather.sunrise).tz(timezone).format("LT")}
                                </p>
                                </div>
                                <div className={styles.sun2}>
                                <h3>Sunset</h3>
                                <p className='text-black dark:text-white'>
                                    {moment.unix(weather.sunset).tz(timezone).format("LT")}
                                </p>
                                </div>
                            </div>
                  <div className=" w-36 h-36 flex flex-col items-center rounded-2xl ">
                      <img
                          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                          alt="Weather Icon"
                         
                      />
                     <p className='text-black dark:text-white'>{weather.weather[0].description}</p>
                  </div>
              </div>

          );
          })
          }
      </div>
    );
}

