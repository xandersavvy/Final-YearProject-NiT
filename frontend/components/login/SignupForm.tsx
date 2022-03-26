import {
    FormControl,
    FormLabel,
    Input,
    Button,    
    Container,
    Stack,
    StackDivider,
    Heading,
    Text
  } from '@chakra-ui/react'
import router from 'next/router'
import Head from 'next/head'
import { FaBackward } from 'react-icons/fa'
const formElements = [
  ["User Id","userId","text"],
  ["Name","name","text"],
  ["Email Id","email","email"]
]

export  const SignUpForm = () => {
  
    return (
      <Container
        maxW="sm"
        w="100%"
        mx="auto"
        p={4}
        mt={4}

      >
          <Head> 
        <link rel="icon" href="https://image.freepik.com/free-vector/two-business-partners-handshaking_74855-6685.jpg" />
            <title>Sign Up</title> 

        </Head>
          <Heading
            as="h1"
            size="lg"
            textAlign="center"
            color="teal.500"
          >
              Sign Up Form
          </Heading>
               <FormControl >
                  {formElements.map((formElement,key) => (
                      <>
                      <FormLabel htmlFor={formElement[1]}>{formElement[0]}</FormLabel>
                      <Input type={formElement[2]} 
                      placeholder={`Enter ${formElement[0]}`} 
                      name={formElement[1]} 
                      disabled={true}
                      isRequired
                      />
                      </> ))}
                </FormControl>
            <Text
              fontSize='2xl'
              color={'gray.500'}
              textAlign='center'
            >
              Site is Under construction
            </Text>
            <Stack
            spacing={4} direction='row' align='center' padding="4"
            >
            <Button 
              colorScheme="teal"
              type="submit"
              isLoading={true}
            >
            </Button>
            <StackDivider />
            <Button 
                onClick={() => router.push("/")}
              colorScheme="teal"
              type="submit"
            >
            <FaBackward />
              &nbsp; Return to Login 
            </Button>
            </Stack>

          </Container>
    )
  }