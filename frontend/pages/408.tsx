import { Container, Image  } from "@chakra-ui/react";
import { NextPage } from "next";

const Error408:NextPage =() => {
  return (
    <Container>
        <Image 
            sizes="300px"
            src = "https://http.cat/408"
            alt = "Error 408 cat Image"
        />

        </Container>
  );
}

export default Error408;