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
            <div className="max-w-4xl mx-auto mt-4">
            <DarkMode/>
            </div>
            <div className=" mt-48 max-w-4xl mx-auto ">   
            
                <SearchBox placeholder="Search for a city..."/>          
                <FamousPlaces />  
                
            </div>
              </>
    );
}