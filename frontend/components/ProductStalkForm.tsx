import {
    Form,
    Field
} from 'formik'
import {
    FormControl,
    FormLabel,
    Input,
    Button    

} from '@chakra-ui/react'

export  const FormikExample = () => {
  
    return (
      <>
                <FormControl >
                  <FormLabel htmlFor="name">First name</FormLabel>
                  <Input type="text" placeholder="name" />
                </FormControl>
            <Button 
              mt={4}
              colorScheme="teal"
              type="submit"
            >
              Submit
            </Button>
          </>
    )
  }