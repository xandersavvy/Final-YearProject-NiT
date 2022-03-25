import {
    FormControl,
    FormLabel,
    Input,
    Button    

} from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL_DEALER } from '../constants';

import isEmail from 'validator/lib/isEmail';

const formElements = [
  ["Name","name","text"],
  ["Contact No.","contact","number"],
  ["Email Id","email","email"],
  ["Location","location","text"],
  ["Product Type","type","text"]
]

export  const DealerInfoForm = () => {

  const [formData, setFormData] = useState({
    "name": "",
    "email": "",
    "contact": "",
    "location": "",
    "type": ""
  });
  const [formErrors, setFormErrors] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleSubmit = async () =>{
    setIsSubmitting(true);
    const res = await axios.post(BASE_URL_DEALER,formData,{withCredentials:true}).then(res => {
      console.log(res);
      setIsSubmitting(false);}).catch(err => {
        console.log(err);
        setIsSubmitting(false);
      });
  console.log(res);
    setFormData({
      "name": "",
      "email": "",
      "contact": "",
      "location": "",
      "type": ""
    });
  }

  const errorCheck = () => {
    if(formData.contact.length < 3 || formData.name.length < 3 || 
          !isEmail(formData.email)|| formData.location.length < 3 || 
          formData.type.length < 3) setFormErrors(true);
    else
      setFormErrors(false);
    }
  
    return (
      <>
               <FormControl >
                  {
                    formElements.map((formElement,_key) => (
                      <>
                      <FormLabel htmlFor={formElement[1]}>{formElement[0]}</FormLabel>
                      <Input type={formElement[2]} 
                      placeholder={`Enter ${formElement[0]}`} 
                      name={formElement[1]}
                      value={formData[formElement[1] as keyof typeof formData]}
                      isRequired
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          [formElement[1]]: e.target.value
                        });
                        errorCheck();
                        console.log(formData);
                      }}
                      />
                      </>

                    ))}
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