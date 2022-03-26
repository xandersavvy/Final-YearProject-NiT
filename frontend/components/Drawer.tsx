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
import Cookies from "js-cookie";
import router from "next/router";
import {useRef} from 'react';
import { Menus } from "./utils/Menu";

export const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
  }

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
          <DrawerHeader>Hello {Cookies.get("token")}</DrawerHeader>

          <DrawerBody>
            <Menus />
          </DrawerBody>

          <DrawerFooter> 
            <Button
              onClick={handleLogout}
            >Logout</Button>

            </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
