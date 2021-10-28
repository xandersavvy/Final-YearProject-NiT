import {
    FormControl,
    FormLabel,
    Input,
    Button    

} from '@chakra-ui/react'



const formElements = [
  
  ["Employee Id","EmpId","text"],
  ["Name","name","text"],
  ["Contact No.","contact","number"],
  ["Email Id","email","email"],
  ["Designation","designation","text"]
]

export  const EmpInfoForm = () => {
  
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