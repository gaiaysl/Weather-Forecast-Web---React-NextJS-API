import Head from "next/head";

import FamousPlaces from "../components/FamousPlaces";

export default function Home() {
    return (
        <>
            <Head>
                <title> Weather App - Next</title>
            </Head>               
              <FamousPlaces />  
      
              </>
    );
}