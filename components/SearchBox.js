import React from "react";
import cities from "../lib/city.list.json"
import Router from 'next/router';
import styles from '../components/SearchBox.module.css'

export default function SearchBox({placeholder}){
    const [query,setQuery] = React.useState("");
    const [results, setResults] = React.useState([]);
    
    React.useEffect(() => {
        const clearQuery = () => setQuery("");

        Router.events.on("routeChangeComplete",clearQuery);

        return () => {
            Router.events.off("routeChangeComplete",clearQuery);
        };



    }, [])
    
    const onChange = (e) =>{
        const {value} = e.target;
        setQuery(value);

        let matchingCities = [];

        if(value.length > 3)
        {
            for(let city of cities){
                if(matchingCities.length >= 5){
                 break;
                }
                const match = city.name.toLowerCase().startsWith(value.toLowerCase());

                if(match){
                    const cityData = {
                        ...city,
                        slug:`${city.name.toLowerCase().replace(/ /g,"-")}-${city.id}`
                    }
                    matchingCities.push(cityData);
                }
            }

        }
        return setResults(matchingCities);
    };

    return (
        <div className={styles.search}>
            <input type="text" value={query}
                   onChange={onChange}
                   placeholder={placeholder ? placeholder :""}/>

            {query.length > 3 && (
                <ul className={styles.cityList}>
                    {results.length > 0 ? (
                        results.map((city) =>(
                            <li className={styles.cityName}>
                                    <a
                                        href ={`/location/${city.slug}`}
                                        className={styles.citySlug}>
                                        {city.name}
                                        {city.state ? `,${city.state}` : ""}{" "}
                                        <span>({city.country})</span>
                                    </a>
                            </li>
                        ))
                    ) : (
                        <li className={styles.noresults}>No results found</li>
                    ) }
                </ul>
            )}
        </div>
    );
}