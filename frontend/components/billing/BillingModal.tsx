import { useDisclosure } from "@chakra-ui/hooks";
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
import { billModalProps } from "../interfaces/propList";
import { InvoiceGeneratorForm } from "./InvoiceForm";

const BillModal = (props:billModalProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} variant="ghost">
        {props.Id}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`details about Id ${props.Id}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           Details about Bill id
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  )
}


export default BillModal;

