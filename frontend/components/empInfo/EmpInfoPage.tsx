import { DrawerMenu } from "../Drawer";
import Navbar from "../utils/Navbar";
import { useDisclosure } from "@chakra-ui/hooks";
import { FcAddImage } from "react-icons/fc";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";
import { EmpInfoForm } from "./EmpInfoForm";
import EmpInfoTable from "./EmpTable";
import { useEffect } from "react";
import Cookies from "js-cookie";
import router from "next/router";


const modalStyle = {
  "width":"100vw",
  "display":"flex",
  "flex-direction":"row",
  "align-item":"flex-end",
  "justify-content":"flex-end",
}

const AddModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div style={modalStyle}>
      <Button onClick={onOpen} variant="ghost">
        <FcAddImage size={30}/>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Employee Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <EmpInfoForm />
          </ModalBody>

        </ModalContent>
      </Modal>
      
    </div>
  )
}

const EmpInfoPage = () => {
  useEffect(() => {
    if(Cookies && !Cookies.get("token")) router.push("/");
  }, [])
  
  return (
    <div>
      <Navbar title="Employee info"/>
      <DrawerMenu />
      <AddModal />
      <EmpInfoTable />
    </div>
  );
};

export default EmpInfoPage;

