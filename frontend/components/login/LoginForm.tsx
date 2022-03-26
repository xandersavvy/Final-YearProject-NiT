import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Container } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import router from "next/router";
import { useState } from "react";
import Head from "next/dist/shared/lib/head";
import Cookies from 'js-cookie';



const login = (email:String,password:String) => {
    //firebase.auth().signInWithEmailAndPassword(email, password)
    if(email === "xandersavy@gmail.com" && password === "12345678"){
    if(Cookies) Cookies.set("token", "souvik");
    router.push("/product");
    }else{
        alert("Invalid credentials");
    }
}

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error ,setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
        login(email, password);
        setLoading(false);
        } catch (error: any) {
        setLoading(false);
        setError(error);
        }
    };
    
    return (
    <Container>
        <Head> 
        <link rel="icon" href="https://image.freepik.com/free-vector/two-business-partners-handshaking_74855-6685.jpg" />
            <title>Please login</title> 

        </Head>
    <form onSubmit={handleSubmit}>
        <FormControl isRequired padding="4">
            <FormLabel>Email</FormLabel>
            <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                isRequired
            />
        </FormControl>
        <FormControl isRequired padding="4">
            <FormLabel>Password</FormLabel>
            <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                isRequired
            />
        </FormControl>

        {error && <p>{error}</p>}
        <Stack spacing={4} direction='row' align='center' padding="4">
        <Button
            size="lg"
            type="submit"
            isLoading={loading}
            loadingText="Logging in..."
            colorScheme="teal"
            isDisabled={loading}
        >
            Login
        </Button>
        <Button
            size="lg"
            type="button"
            isLoading={loading}
            loadingText="Logging in..."
            colorScheme="teal"
            isDisabled={loading}
            onClick={() => router.push("/signup")}
        >
           Not a user?  Signup
        </Button>
        </Stack>
    </form>
    </Container>
    );
};

export default LoginForm;