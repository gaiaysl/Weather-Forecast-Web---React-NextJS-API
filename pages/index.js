import Head from "next/head";
import styles from "./index.module.css"
import FamousPlaces from "../components/FamousPlaces";
import SearchBox from "../components/SearchBox";

export default function Home() {
    return (
        <>
            <Head>
                <title> Weather App - Next</title>
            </Head>
            
        
            
            <div className="max-w-4xl mx-auto ">   
                <SearchBox placeholder="Search for a city..."/>          
                <FamousPlaces />  
                
            </div>
              </>
    );
}