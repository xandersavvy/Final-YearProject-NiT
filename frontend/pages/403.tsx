import { Container, Image ,Heading } from "@chakra-ui/react";
import { NextPage } from "next";

const Error403:NextPage =() => {
  return (
    <Container>
        <Image 
            sizes="300px"
            src = "https://http.cat/403"
            alt = "Error 403 cat Image"
        />

        </Container>
  );
}

export default Error403;