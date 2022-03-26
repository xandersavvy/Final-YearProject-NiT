import {
    FormControl,
    FormLabel,
    Input,
    Button    
} from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react';
import { BASE_URL_USER } from '../constants';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';

const formElements = [
  ["Name","name","text"],
  ["Contact No.","contact","number"],
  ["Email Id","email","email"],
  ["role","role","text"]
]

const EmpForm = () => {

  const [formData, setFormData] = useState({
    "name": "",
    "contact": "",
    "email": "",
    "role": ""
  });
  const [formErrors, setFormErrors] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleSubmit = async () =>{
    setIsSubmitting(true);
    const res = await axios.post(BASE_URL_USER,formData).then(res => {
      console.log(res);
      setIsSubmitting(false);}).catch(err => {
        console.log(err);
        setIsSubmitting(false);
      });
    console.log(res);
    setFormData({
      "name": "",
    "contact": "",
    "email": "",
    "role": ""
    });
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement> , key: string) => {
    setFormData({...formData,[key]: e.target.value});
    if(formData.contact.length > 3 && formData.name.length > 3 && isEmail(formData.email) ) setFormErrors(false);
    else setFormErrors(true);
    }
  
    return (
      <>
               <FormControl >
                  {formElements.map((formElement,key) => (
                      <>
                      <FormLabel htmlFor={formElement[1]}>{formElement[0]}</FormLabel>
                      <Input type={formElement[2]} 
                      placeholder={`Enter ${formElement[0]}`} 
                      name={formElement[1]} 
                      value={formData[formElement[1] as keyof typeof formData]}
                      isRequired
                      onChange={(e) => handleChange(e,formElement[1])}
                      />
                      </>))}
                </FormControl>
            <Button 
              mt={4}
              colorScheme="teal"
              type="submit"
              onClick={handleSubmit}
              isLoading={isSubmitting}
              isDisabled={formErrors}
            >
              Submit
            </Button>
          </>
    )
  }


export default EmpForm;