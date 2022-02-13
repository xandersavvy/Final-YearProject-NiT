import { Container, Image ,Heading } from "@chakra-ui/react";
import { NextPage } from "next";

const Error599:NextPage =() => {
  return (
    <Container>
        <Image 
            sizes="300px"
            src = "https://http.cat/599"
            alt = "Error 599 cat Image"
        />

        </Container>
  );
}

export default Error599;