import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton,
  PopoverFooter,
  Button
} from '@chakra-ui/react';
import React from 'react';
import { FcFullTrash } from "react-icons/fc"
import { ProductProps } from '../interfaces/propList';
const DeleteButton = (props:ProductProps) => {
    console.log(props.code)
   return ( <Popover
                placement="left-start"
                eventListeners
            >
                                        <PopoverTrigger>
                                              <Button><FcFullTrash /></Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                        <PopoverCloseButton />
                                        <PopoverBody>Delete {props.code}?</PopoverBody>
                                        <PopoverFooter>
                                            <Button colorScheme="purple"
                                            onClick={() => deleteItem(props.code)}
                                            >yes</Button>
                                        </PopoverFooter>
                                        </PopoverContent>
            </Popover>
   )
}

const deleteItem = (code:string) => {
    
    alert(`${code} will be deleted after implementation`)
}

export default DeleteButton;