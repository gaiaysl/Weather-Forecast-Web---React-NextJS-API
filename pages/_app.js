import "../styles/app.scss";
import React from 'react';
import Router from "next/router";
import NProgress from 'nprogress'
import {ThemeProvider} from 'next-themes'
function MyApp({ Component ,pageProps}) {
    React.useEffect(() =>{
        const start =() => NProgress.start();
        const end =() => NProgress.done();

        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete",end);
        Router.events.on("routeChangeError",end);

        return () =>{

            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete",end);
            Router.events.off("routeChangeError",end);

        }
         
    }, [])
    return( 
    
    
        <ThemeProvider attribute='class'>
        <Component {...pageProps} />
        </ThemeProvider>
        )
       
   
    
    

}

export default MyApp;