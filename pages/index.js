import Head from "next/head";

import FamousPlaces from "../components/FamousPlaces";
import SearchBox from "../components/SearchBox";
import DarkMode from "../components/DarkMode"

export default function Home() {
    return (
        < >
            <Head>
                <title> Weather App - Next</title>
            </Head>
            <div className="max-w-4xl mx-auto sm:mt-4">
            <DarkMode/>
            </div>
            <div className="mt-20 sm:mt-52 max-w-4xl mx-auto ">   
            
                <SearchBox placeholder="Search for a city..."/>          
                <FamousPlaces />  
                
            </div>
              </>
    );
}