import React from "react";
import cities from "../../lib/city.list.json"
import Head from 'next/head';
import moment from "moment-timezone";
import TodaysWeather from "../../components/TodaysWeather";
import HourlyWeather from "../../components/HourlyWeather";
import SearchBox from "../../components/SearchBox";
import WeeklyWeather from "../../components/WeeklyWeather";
import Link from "next/link";
import styles from "../../pages/index.module.css"


export async function getServerSideProps(context) {

    const city = getCity(context.params.city);

    if (!city){
        return{
            notFound:true,
        };
    }

    const  res= await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely`
    );

    const data = await res.json();

    if (!data){
        return{
            notFound:true,
        };
    }

    const hourlyWeather = getHourlyWeather(data.hourly,data.timezone);

    return {
        props: {
           city:city,
            timezone:data.timezone,
            currentWeather: data.current,
            dailyWeather: data.daily,
            hourlyWeather:hourlyWeather,

        },
    };
    }
    const getCity = param =>{
    const cityParam = param.trim();

    const splitCity = cityParam.split("-");
    const id = splitCity[splitCity.length-1];

    if(!id){
        return null;
    }
    const city = cities.find(city => city.id.toString() === id);

    if (city){
        return city;

    }else{
        return null;
    }
};

const getHourlyWeather = (hourlyData,timezone) =>{

    const endofDay = moment().tz(timezone).endOf('day').valueOf();
    const eodTimestamp = Math.floor(endofDay / 1000)
    const todaysData = hourlyData.filter(data => data.dt < eodTimestamp);

    return todaysData;

}
export default function City({hourlyWeather, currentWeather, dailyWeather, city,timezone
                             }){


    return (

        <div>
            <Link href="/">
                <a className={styles.backLink}>&larr;Home</a>
            </Link>
            <SearchBox placeholder="Search for another location..."/>
           <Head>
               <title>
                   {city.name} Weather - Next Weather App
               </title>

           </Head>
            <div className={styles.pageWrapper}>
                <div className={styles.container}>
                    <TodaysWeather
                        city={city}
                        weather={dailyWeather[0]}
                        timezone={timezone}
                    />
                    <HourlyWeather hourlyWeather={hourlyWeather} timezone={timezone}/>
                    <WeeklyWeather weeklyWeather={dailyWeather}  timezone={timezone}/>

                </div>
            </div>
        </div>
    );

}