import { DrawerMenu } from "../Drawer";
import Navbar from "../utils/Navbar";
import { EmpInfoForm } from "./EmpInfoForm";
import { useEffect } from "react";
import Cookies from "js-cookie";
import router from "next/router";
import BaseTable from "../layout/BaseTable";
import { BASE_URL_USER } from "../constants";
import BaseModal from "../layout/BaseModal";

const EmpInfoPage = () => {
  useEffect(() => {
    if(Cookies && !Cookies.get("token")) router.push("/");
  }, [])
  
  return (
    <div>
      <Navbar title="Employee info"/>
      <DrawerMenu />
      <BaseModal childComponent={<EmpInfoForm />} />
      <BaseTable url={BASE_URL_USER} />
    </div>
  );
};

export default EmpInfoPage;

