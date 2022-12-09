import Head from "next/head";

import FamousPlaces from "../components/FamousPlaces";
import SearchBox from "../components/SearchBox";
import DarkMode from "../components/DarkMode"

export default function Home() {
    return (
        <>
            <Head>
                <title> Weather App - Next</title>
            </Head>
            
        
            
            <div className="max-w-4xl mx-auto ">   
            <DarkMode/>
                <SearchBox placeholder="Search for a city..."/>          
                <FamousPlaces />  
                
            </div>
              </>
    );
}