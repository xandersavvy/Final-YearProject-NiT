import { Container, Heading, Image } from "@chakra-ui/react";
import { NextPage } from "next";
import router from "next/router";
import { useEffect } from "react";


const Error404:NextPage = () => {
    useEffect(() => {
    router.push("/");  
    }, []) 
    return <></>
}

export default Error404;