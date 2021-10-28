import { FormControl } from "@chakra-ui/form-control";
import { Button,Input } from "@chakra-ui/react";
import { DrawerMenu } from "../Drawer";
import Navbar from "../utils/Navbar";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { Center } from "@chakra-ui/layout";

export const ReturnPage = () => {
    //add search bar
    return (
        <div>
            <ReturnForm />
        </div>
    );
};  

const ReturnForm = () => {
    const [value, setValue] = useState(""); 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    return (
        <>
         <Navbar title={`Return ${value}`} />
         <DrawerMenu />
        <Center>
            <FormControl>
                <Input id="search" value={value}
                onChange={handleChange}
                placeholder="Search"
                size="lg" />
            </FormControl>
            <Button variantColor="teal" variant="solid" rightIcon={<FcSearch />}>Search</Button>
           
            
        </Center>
        </>
    );
};