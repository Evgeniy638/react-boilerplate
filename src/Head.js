import React from "react";
import {Helmet} from "react-helmet";

import logo from "./public/logo.jpg"

const Head = () => {
    return (
        <Helmet>
            <link rel="icon" href={logo}/>
            <title>Document</title>  
        </Helmet>
    )
}

export default Head;