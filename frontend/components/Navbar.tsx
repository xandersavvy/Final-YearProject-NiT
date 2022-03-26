import Head from "next/head";
import { Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import router from "next/router";

interface Props{
  title:string;
}

const Navbar = (props:Props) => {
  const { title } = props;
  const src = "https://image.freepik.com/free-vector/two-business-partners-handshaking_74855-6685.jpg"
  return (
    <>
      <Head>
        <link rel="icon" href={src} />
        <title>{title}</title> 
      </Head>
      <Flex justify="space-between" m={4}>
        <Heading onClick={() => router.push("#")} as="button">
          {title}
        </Heading>
      </Flex>
      <Divider css={{ boxShadow: "1px 1px #888888"}} />
    </>
  );
};

export default Navbar;
