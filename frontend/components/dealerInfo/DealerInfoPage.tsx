import Head from "next/head";
import { DrawerMenu } from "../Drawer";
import Navbar from "../utils/Navbar";
import { DealerInfoForm} from "./DealerInfoForm";
import { useEffect } from "react";
import Cookies from "js-cookie";
import router from "next/router";
import BaseTable from "../layout/BaseTable";
import { BASE_URL_DEALER } from "../constants";
import BaseModal from "../layout/BaseModal";


const DealerInfoPage = () => {

  useEffect(() => {
    if(Cookies && !Cookies.get("token")) router.push("/");
  }, [])
  
  return (
    <div>
      <Navbar title="Dealer Info"/>
      <DrawerMenu />
      <BaseModal childComponent={<DealerInfoForm />} />
      <BaseTable url={BASE_URL_DEALER} />
    </div>
  );
};

export default DealerInfoPage;

