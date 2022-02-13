import { Container, Heading, Image } from "@chakra-ui/react";
import { NextPage } from "next";







const Error404:NextPage = () => {
    return (
        <Container>
        <Heading as="h1" size="2xl" color="red.500">Error 404: Page Not Found</Heading>
        <Image 
            sizes="300px"
            src = "https://http.cat/404"
            alt = "Error 404 cat Image"
        />

        </Container>
    );
    }

export default Error404;