import React from 'react';
import moment from "moment-timezone";
import styles from '../components/WeeklyWeather.module.css'

export default function WeeklyWeather({weeklyWeather,timezone}) {
    return (
      <div className={styles.weekly}>
          <div className={styles.weeklyTitle}>
             <h2>Weekly</h2>
              <h5>Weather</h5>
          </div>


          {weeklyWeather.length>0&&
          weeklyWeather.map((weather,index)=> {
              if (index == 0){
                  return;

          }
          return(
              <div className={styles.container}>
                  <div className={styles.left}>
                      <div className={styles.leftOne}>
                        <h3>
                            {moment.unix(weather.dt).tz(timezone).format("dddd")}
                        </h3>

                            <p>{weather.temp.max.toFixed(0)}&deg;C</p>
                            <p>{weather.temp.min.toFixed(0)}&deg;C</p>

                      </div>
                            <div className={styles.leftTwo}>
                                <div className={styles.sun1}>
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

                  </div>
                  <div className={styles.right}>
                      <img
                          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                          alt="Weather Icon"
                          layout="fill"
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

