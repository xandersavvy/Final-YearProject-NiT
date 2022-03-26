import  DrawerMenu  from "../Drawer";
import Navbar from "../Navbar";
import EmpForm  from "./EmpForm";
import { useEffect } from "react";
import Cookies from "js-cookie";
import router from "next/router";
import BaseTable from "../layout/BaseTable";
import { BASE_URL_USER } from "../constants";
import BaseModal from "../layout/BaseModal";

const EmpPage = () => {
  useEffect(() => {
    if(Cookies && !Cookies.get("token")) router.push("/");
  }, [])
  
  return (
    <div>
      <Navbar title="Employee info"/>
      <DrawerMenu />
      <BaseModal childComponent={<EmpForm />} />
      <BaseTable url={BASE_URL_USER} />
    </div>
  );
};

export default EmpPage;

