import Head from "next/head";
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
import { DealerInfoForm} from "./DealerInfoForm";
import DealerInfoTable from "./DealerTable";
import getDealers from "./dealer.service";
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
          <ModalHeader>Add Dealer Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <DealerInfoForm />
          </ModalBody>
        </ModalContent>
      </Modal>
      
    </div>
  )
}

const DealerInfoPage = () => {
  console.log("DealerInfoPage");
  console.log(getDealers())

  useEffect(() => {
    if(Cookies && !Cookies.get("token")) router.push("/");
  }, [])
  
  return (
    <div>
      <Navbar title="Dealer Info"/>
      <DrawerMenu />
      <AddModal />
      <DealerInfoTable />
    </div>
  );
};

export default DealerInfoPage;

