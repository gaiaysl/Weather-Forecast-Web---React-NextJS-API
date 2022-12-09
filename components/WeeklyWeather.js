import React from 'react';
import moment from "moment-timezone";
import styles from '../components/WeeklyWeather.module.css'

export default function WeeklyWeather({weeklyWeather,timezone}) {
    return (
      <div className="  w-3/4  mx-auto">
          <div className=" flex flex-row w-36 m-4 mt-4  ">
             <h2 className='font-bold text-3xl m-1 '>Weekly</h2>
              <h5 className='text-xl mt-3 m-1'>Weather</h5>
          </div>


          {weeklyWeather.length>0&&
          weeklyWeather.map((weather,index)=> {
              if (index == 0){
                  return;

          }
          return(
              <div className="bg-blue-500 m-3  rounded-2xl  text-white flex flex-row justify-between">
                  <div className="bg-gray-500 w-48 rounded-2xl  flex flex-row items-center w-36">
                      <div className=" text-center mx-auto ">
                        <h3>
                            {moment.unix(weather.dt).tz(timezone).format("dddd")}
                        </h3>

                            <p>{weather.temp.max.toFixed(0)}&deg;C</p>
                            <p>{weather.temp.min.toFixed(0)}&deg;C</p>

                      </div>
                           

                  </div>
                  <div className=" py-2 flex flex-col w-36 h-36 text-center  ">
                                <div className="py-2 ">
                                <h3>Sunrise</h3>
                                <p>
                                    {moment.unix(weather.sunrise).tz(timezone).format("LT")}
                                </p>
                                </div>
                                <div className={styles.sun2}>
                                <h3>Sunset</h3>
                                <p>
                                    {moment.unix(weather.sunset).tz(timezone).format("LT")}
                                </p>
                                </div>
                            </div>
                  <div className=" w-36 h-36 flex flex-col items-center rounded-2xl ">
                      <img
                          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                          alt="Weather Icon"
                         
                      />
                      <p>{weather.weather[0].description}</p>
                  </div>
              </div>

          );
          })
          }
      </div>
    );
}

