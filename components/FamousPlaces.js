import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from '../components/FamousPlaces.module.css'
import SearchBox from './SearchBox';
import IstanbulImage from "../public/Images/Istanbul.jpg"
import AnkaraImage from "../public/Images/Ankara.jpg"
import IzmirImage from "../public/Images/Izmir.jpg"
import AntalyaImage from "../public/Images/antalya.jpg"

const places=[
    {
        name:"Istanbul",
        image:IstanbulImage,
        url:"/location/istanbul-745044",
    },
    {
        name:"Ankara",
        image:AnkaraImage,
        url:"/location/ankara-323784",
    },
    {
        name:"Izmir",
        image:IzmirImage,
        url:"/location/i̇zmir-311044",
    },
    {
        name:"Antalya",
        image:AntalyaImage,
        url:"/location/antalya-323776",
    },
]
export default function FamousPlaces() {
    return (
    
        <div className={styles.places}>
            <div className={styles.dive}>
                    <div className={styles.container}>
                    <SearchBox placeholder="Search for a city..."/>
                    </div>
                    <div className={styles.placeRow}>
          
                        {places.length > 0 &&
                        places.map((place, index) =>(
                        <div className={styles.placesBox} key={index}>
                            <Link legacyBehaviornk href={place.url}>
                          
                                    <div  >

                                      <Image
                                       className={styles.placesImage}
                                          src={place.image}
                                          alt={`${place.name} Image`}
                                          objectFit="cover"
                                      />

                                    
                                    
                                    <span className={styles.cityName}>{place.name}</span>
                                    </div>
                            </Link>
                        </div>
                        ))
                }
                    </div>
            </div>
        </div>
    );
}

