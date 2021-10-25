import type { NextPage } from "next";
import Head from "next/head";
import { DrawerMenu } from "../components/Drawer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <DrawerMenu />
    </div>
  );
};

export default Home;
