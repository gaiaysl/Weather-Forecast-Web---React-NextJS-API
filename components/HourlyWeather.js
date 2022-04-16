import React from 'react';
import moment from "moment-timezone";
import Image from "next/image";
import styles from '../components/HourlyWeather.module.css'
export default function HourlyWeather({hourlyWeather, timezone}) {
        return (

                <div className={styles.hourlyInner}>
                    {hourlyWeather.length > 0 && hourlyWeather.map((weather, index) =>

                    <div className={styles.kart}>
                        <p className={`{styles.hourlyTime} ${index ==0 ? `{styles.hourlyNow`:""
                        }`}
                        >
                            {index==0
                                ? "Now"
                            : moment.unix(weather.dt).tz(timezone).format("LT")}
                        </p>
                        <div className={styles.image}>
                        <img
                            className={styles.imgIcon}
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}

                        />
                            <p className={styles.deg}>{weather.temp.toFixed(0)}&deg;C</p>
                        </div>



                    </div>
                    ) }
                </div>

        )
}



