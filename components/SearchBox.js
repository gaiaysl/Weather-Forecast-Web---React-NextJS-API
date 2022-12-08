import React from "react";
import cities from "../lib/city.list.json"
import Link from "next/link";
import Router from 'next/router';


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
        <div className="mt-56 px-4">
            <input type="text" value={query}
                   onChange={onChange}
                   placeholder={placeholder ? placeholder :""}
                   className="p-2 rounded-2xl text-center border-2 border-black w-full " />

            {query.length > 3 && (
                <ul className="resultcontainer">
                    {results.length > 0 ? (
                        results.map((city) =>(
                            <li key = {city.slug}>
                                <Link href ={` /location/${city.slug}`}>
                                   
                                        {city.name}
                                        {city.state ? `,${city.state}` : ""}{" "}
                                        <span>({city.country})</span>
                                   
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No results found</li>
                    ) }
                </ul>
            )}
        </div>
    );
}