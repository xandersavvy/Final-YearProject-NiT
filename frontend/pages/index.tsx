import type { NextPage } from "next";
import Head from "next/head";
import { DrawerMenu } from "../components/Drawer";
import Navbar from "../components/utils/Navbar";
import StalkTable from "../components/StalkTable";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <DrawerMenu />
      <StalkTable />
    </div>
  );
};

export default Home;
