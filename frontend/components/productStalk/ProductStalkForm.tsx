import {
    FormControl,
    FormLabel,
    Input,
    Button    

} from '@chakra-ui/react'



const formElements = [
  ["Dealer Id","DealerId","text"],
  ["Product Batch","batch","text"],
  ["Product Code","code","text"],
  ["Buying Price","bp","number"],
  ["Product Count","count","number"]
]

export  const FormikExample = () => {
  
    return (
      <>
               <FormControl >
                  {
                    formElements.map((formElement,key) => (
                      <>
                      <FormLabel htmlFor={formElement[1]}>{formElement[0]}</FormLabel>
                      <Input type={formElement[2]} 
                      placeholder={`Enter ${formElement[0]}`} 
                      name={formElement[1]} 
                      isRequired
                      />
                      </>

                    ))}
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