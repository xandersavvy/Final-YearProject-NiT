import {Button} from '@chakra-ui/react'
import router from 'next/router'


const navItems = [
  ["/","Product Stalk Info"],
  ["/dealerInfo","Dealer Information"],
  ["/empInfo","Employee Information"],
  ["/return","Return Product"],
  ["/bill","Invoice generator"]

]

export const Menus = () =>{
  navItems.map((navItem)=>console.log(navItem[0]))
  return (
   <div>
     {navItems.map((navItem,key) => <Button colorScheme="blue" key={key}
                                      variant ="ghost" isFullWidth
                                      onClick={()=>router.push(navItem[0])}>{navItem[1]}</Button>)}
    </div>
  )
}