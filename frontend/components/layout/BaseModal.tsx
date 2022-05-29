import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { FcAddImage } from "react-icons/fc";

const modalStyle = {
    "width":"100vw",
    "display":"flex",
    "flex-direction":"row",
    "align-item":"flex-end",
    "justify-content":"flex-end",
  }
  interface Props{
      childComponent:any
  }

  const BaseModal = (props:Props) => {
      const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div style={modalStyle}>
        <Button onClick={onOpen} variant="ghost">
          <FcAddImage size={30}/>
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            {props.childComponent}
            </ModalBody>
  
          </ModalContent>
        </Modal>
        
      </div>
    )
  }

  export default BaseModal;