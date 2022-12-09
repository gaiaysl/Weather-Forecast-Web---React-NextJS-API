import React from 'react';
import moment from "moment-timezone";
export default function HourlyWeather({hourlyWeather, timezone}) {
        return (
            <div className="mx-auto  text-white mt-3  ">
                <div className="mx-auto w-full  grid grid-cols-6 w-3/4   ">
                    {hourlyWeather.length > 0 && hourlyWeather.map((weather, index) =>

                    <div className=" py-3 m-1 flex flex-col items-center rounded-2xl  bg-gray-500">
                        <p className={`{styles.hourlyTime} ${index ==0 ? `{styles.hourlyNow`:""
                        }`}
                        >
                            {index==0
                                ? "Now"
                            : moment.unix(weather.dt).tz(timezone).format("LT")}
                        </p>
                        <div className="flex flex-col items-center w-36 h-36">
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                            height="100"
                            width="100"
                        />
                            <p >{weather.temp.toFixed(0)}&deg;C</p>
                        </div>



                    </div>
                    ) }
                </div>
            </div>
        )
}



