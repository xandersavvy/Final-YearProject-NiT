import Head from "next/head";
import { Divider, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { navProps } from "../interfaces/propList";
// import { useAuth } from "../lib/auth";

const Navbar = (props:navProps) => {
  // const { auth, signOut } = useAuth();
  const auth = true;
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="https://image.freepik.com/free-vector/two-business-partners-handshaking_74855-6685.jpg" />
        <title>{props.title}</title>
      </Head>
      <Flex justify="space-between" m={4}>
        
        <Heading onClick={() => router.push("#")} as="button">
          {props.title}
        </Heading>
      </Flex>
      <Divider
        css={{
          boxShadow: "1px 1px #888888",
        }}
      />
    </>
  );
};

export default Navbar;
