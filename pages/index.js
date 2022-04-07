import Head from "next/head";
import SearchBox from "../components/SearchBox";
import FamousPlaces from "../components/FamousPlaces";
import styles from '../pages/index.module.css'
export default function Home() {
    return (
        <div>
            <Head>
                <title> Weather App - Next</title>
            </Head>
            <div className={styles.home}>
                <div className={styles.container}>
                    <SearchBox placeholder="Search for a city..."/>
                    <FamousPlaces />
                </div>
            </div>

        </div>

    );
}