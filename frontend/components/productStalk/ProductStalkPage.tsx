import Head from "next/head";
import { DrawerMenu } from "../Drawer";
import Navbar from "../utils/Navbar";
import StalkTable from "./StalkTable";
import { useDisclosure } from "@chakra-ui/hooks";
import { FcAddImage } from "react-icons/fc";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";
import { StalkForm } from "./ProductStalkForm";


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
          <ModalHeader>Add Product Stalk</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <StalkForm />
          </ModalBody>
        </ModalContent>
      </Modal>
      
    </div>
  )
}

const ProductStalkPage = () => {
  return (
    <div>
      <Navbar title="Product Stalk"/>
      <DrawerMenu />
      <AddModal />
      <StalkTable />
    </div>
  );
};

export default ProductStalkPage;

