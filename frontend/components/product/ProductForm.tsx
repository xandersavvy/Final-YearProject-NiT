import {
    FormControl,
    FormLabel,
    Input,
    Button    

} from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL_PRODUCT } from '../constants';



const formElements = [
  ["Name","name","text"],
  ["Buying Price","buyingPrice","number"],
  ["M.R.P","mrp","number"],
  ["Count","count","number"]
]

const ProductForm = () => {
  const [formData, setFormData] = useState({
    "name": "",
    "buyingPrice": "",
    "mrp": "",
    "count": ""
  });
  const [formErrors, setFormErrors] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleSubmit = async () =>{
    setIsSubmitting(true);
    const res = await axios.post(BASE_URL_PRODUCT,formData,{withCredentials:true}).then(res => {
      console.log(res);
      setIsSubmitting(false);}).catch(err => {
        console.log(err);
        setIsSubmitting(false);
      });
  console.log(res);
    setFormData({
      "name": "",
    "buyingPrice": "",
    "mrp": "",
    "count": ""
    });
  }

  const errorCheck = () => {
    if( formData.name.length < 3 || formData.buyingPrice.length < 1 || formData.count.length < 1 || 
        formData.mrp.length < 1 || formData.buyingPrice > formData.mrp ) setFormErrors(true);
    else
      setFormErrors(false);
    }
  
  
    return (
      <>
               <FormControl >
                  {
                    formElements.map((formElement,key) => (
                      <>
                      <FormLabel htmlFor={formElement[1]}>{formElement[0]}</FormLabel>
                      <Input type={formElement[2]} 
                      placeholder={`Enter ${formElement[0]} , type: ${formElement[2]}`} 
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

  export default ProductForm;