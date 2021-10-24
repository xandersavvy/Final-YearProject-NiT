import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
 
} from "@chakra-ui/react"
import {useRef} from 'react';
import { Menus } from "./Menu";

export const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Button colorScheme="teal" variant="outlined" onClick={onOpen}>
        ☰ 
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Menus />
          </DrawerBody>

          <DrawerFooter> 
            <Button>Logout</Button>

            </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
