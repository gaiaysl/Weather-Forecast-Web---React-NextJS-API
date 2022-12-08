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
    
        <div>
            <div className="mt-2">
                   
                    <div className="imageContainer grid grid-cols-2 sm:grid-cols-4 sm:gap-2 mt-12 ">
          
                        {places.length > 0 &&
                        places.map((place, index) =>(
                        <div className="places" key={index}>
                            <Link legacyBehavior href={place.url}>
                          
                                    <div className="hover:scale-105 transition-all ease-in duration-400 hover:shadow-2xl text-center p-2 cursor-pointer flex flex-col items-center justify-center">
                                      <Image
                                       className="w-64 h-64 "
                                          src={place.image}
                                          alt={`${place.name} Image`}
                                          objectFit="cover"
                                      />

                                    
                                    
                                    <span className="">{place.name}</span>
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

