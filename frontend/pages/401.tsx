import { Container, Image ,Heading } from "@chakra-ui/react";
import { NextPage } from "next";

const Error401:NextPage =() => {
  return (
    <Container>
        <Image 
            sizes="300px"
            src = "https://http.cat/401"
            alt = "Error 401 cat Image"
        />

        </Container>
  );
}

export default Error401;