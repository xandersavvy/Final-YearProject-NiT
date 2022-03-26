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


const navItems = [
  ["/product","Product Stalk Info"],
  ["/dealer","Dealer Information"],
  ["/employee","Employee Information"]
]

const Menus = () =>{
  navItems.map((navItem)=>console.log(navItem[0]))
  return (
   <div>
     {navItems.map((navItem,key) => <Button colorScheme="blue" key={key}
                                      variant ="ghost" isFullWidth
                                      onClick={()=>router.push(navItem[0])}>{navItem[1]}</Button>)}
    </div>
  )
}


const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
            <Button onClick={handleLogout}>Logout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerMenu;