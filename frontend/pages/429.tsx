import { Container, Image ,Heading } from "@chakra-ui/react";
import { NextPage } from "next";

const Error429:NextPage =() => {
  return (
    <Container>
        <Image 
            sizes="300px"
            src = "https://http.cat/429"
            alt = "Error 429 cat Image"
        />

        </Container>
  );
}

export default Error429;