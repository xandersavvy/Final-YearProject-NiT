import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Container } from "@chakra-ui/layout";
import router from "next/router";
import { useState } from "react";




//make a login using chakra-ui

const login = (email:String,password:String) => {
    //firebase.auth().signInWithEmailAndPassword(email, password)
    router.push("/");
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
    <form onSubmit={handleSubmit}>
        <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                isRequired
            />
        </FormControl>
        <FormControl isRequired>
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
        <Button

            type="submit"
            isLoading={loading}
            loadingText="Logging in..."
            colorScheme="teal"
            isDisabled={loading}
        >
            Login
        </Button>
        <Button
            type="button"
            colorScheme="teal"
            onClick={() => router.push("/signup")}
        >
           Not a user?  Signup
        </Button>
    </form>
    </Container>
    );
};

export default LoginForm;