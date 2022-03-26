import  DrawerMenu from "../Drawer";
import Navbar from "../Navbar";
import  DealerForm from "./DealerForm";
import { useEffect } from "react";
import Cookies from "js-cookie";
import router from "next/router";
import BaseTable from "../layout/BaseTable";
import { BASE_URL_DEALER } from "../constants";
import BaseModal from "../layout/BaseModal";


const DealerPage = () => {

  useEffect(() => {
    if(Cookies && !Cookies.get("token")) router.push("/");
  }, [])
  
  return (
    <div>
      <Navbar title="Dealer Info"/>
      <DrawerMenu />
      <BaseModal childComponent={<DealerForm />} />
      <BaseTable url={BASE_URL_DEALER} />
    </div>
  );
};

export default DealerPage;

