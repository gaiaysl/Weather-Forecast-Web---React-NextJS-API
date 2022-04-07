import React from 'react';
import moment from 'moment-timezone';
import Image from "next/image";
import styles from '../components/TodaysWeather.module.css'


export default function TodaysWeather({city,weather,timezone}) {


        return (
           <div className={styles.today}>
               <div className={styles.todayInner}>
                   <div className={styles.todayLeftContent}>
                       <h1>
                           {city.name} ({city.country})
                       </h1>
                       <h2>
                           <div className={styles.cerc}>
                           <p className={styles.p1}>{weather.temp.max.toFixed(0)}&deg;C</p>

                           <p className={styles.p2}>{weather.temp.min.toFixed(0)}&deg;C</p>
                           </div>
                       </h2>
                       <div className={styles.todaySunTimes}>
                            <div className={styles.left}>
                            <p>Sunrise</p>
                            <span>{moment.unix(weather.sunrise).tz(timezone).format("LT")}</span>
                            </div>
                                <div className={styles.right}>
                               <p>Sunset</p>
                               <span>{moment.unix(weather.sunset).tz(timezone).format("LT")}</span>
                                </div>
                       </div>
                   </div>

                   <div className={styles.todayRightContent}>
                       <div className={styles.todayIconWrapper}>

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



