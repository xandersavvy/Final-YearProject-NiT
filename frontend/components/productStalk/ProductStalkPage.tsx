import { DrawerMenu } from "../Drawer";
import Navbar from "../utils/Navbar";
import { StalkForm } from "./ProductStalkForm";
import { useEffect } from "react";
import Cookies from "js-cookie";
import router from "next/router";
import BaseTable from "../layout/BaseTable";
import { BASE_URL_PRODUCT } from "../constants";
import BaseModal from "../layout/BaseModal";

const ProductStalkPage = () => {
  useEffect(() => {
    if(Cookies && !Cookies.get("token")) router.push("/");
  }, [])
  
  return (
    <div>
      <Navbar title="Product Stalk"/>
      <DrawerMenu />
      <BaseModal childComponent={<StalkForm />} />
      <BaseTable url={BASE_URL_PRODUCT} />
    </div>
  );
};

export default ProductStalkPage;

