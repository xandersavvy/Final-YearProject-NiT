import { Container, Image ,Heading } from "@chakra-ui/react";
import { NextPage } from "next";

const Error500:NextPage =() => {
  return (
    <Container>
        <Image 
            sizes="300px"
            src = "https://http.cat/500"
            alt = "Error 500 cat Image"
        />

        </Container>
  );
}

export default Error500;