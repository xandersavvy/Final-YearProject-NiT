import { FormControl } from "@chakra-ui/form-control";
import { Button,Input } from "@chakra-ui/react";
import { DrawerMenu } from "../Drawer";
import Navbar from "../utils/Navbar";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { Center, Container, Text } from "@chakra-ui/layout";

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
    const [loading, setLoading] = useState(false); 
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(e.target.value.length > 4) 
        setValue(e.target.value);
    };
    return (
        <>
         <Navbar title={`Return ${value}`} />
         <DrawerMenu />
         <Container>
            <form onSubmit={handleSubmit}>
        <Center>
            <FormControl padding="5">
                <Input id="search" value={value}
                onChange={handleChange}
                placeholder="Search"
                size="lg" />
            </FormControl>
            <Button variantColor="teal" variant="solid" rightIcon={<FcSearch />}>Search</Button>
        
        </Center>
        {loading && 
            <Text padding="5">
                 {value} purchased on  by    { Math.floor(9000000000 + Math.random() * 90000000)}  return  {value} ? 
            </Text>
        }
                <Button variantColor="Blue" variant="solid" isDisabled={!loading} >Return</Button>
        </form>
        </Container>
        </>
    );
};