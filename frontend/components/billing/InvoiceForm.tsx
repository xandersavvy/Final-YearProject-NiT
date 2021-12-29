//implement popover on add products
import {
    FormControl,
    FormLabel,
    Input,
    Button    

} from '@chakra-ui/react'
import { useState } from 'react';

interface BillProps {
  products: number;
}
interface ProductPopProps {
 id: number;
  key:  number;
}
type ProductInterface = {
  id: number;
  products: string;
  price: number;
}

const prodDetails:Array<ProductInterface> = [] 

const ProductPopup = (props:ProductPopProps) => {
    const [products, setProducts] = useState("");
    const [price, setPrice] = useState(0.00);
    return (
        <form onSubmit={
          (e)=>{
            e.preventDefault();
            prodDetails.push({id:props.id,products:products,price:price})
          }
        }>
        <FormControl>
        <FormLabel htmlFor="products">Products</FormLabel>
        <Input
          id="products"
          placeholder="Enter Products"
          value={products}
          onChange={(e)=>setProducts(e.target.value)}
        />
        <FormLabel htmlFor="price">Price</FormLabel>
        <Input
          id="price"
          placeholder="Enter Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />
        </FormControl>

        </form>
    )
}
const productData:Array<Number> = [0]
export  const InvoiceGeneratorForm = () => {
    const [product , setProduct] = useState(1)
    const productAdd = (e:any) => {
      productData.push(product)  
      setProduct(product+1)
    }
    const productRemove = (e:any) => {
      productData.pop()
      setProduct(product-1)
    }
    return (
      <form onSubmit={
        (e) => {
          e.preventDefault()
        }}>
               <FormControl >
            
                    <FormLabel htmlFor="number">Enter Customer&apos;s mobile Number</FormLabel>
                    <Input type="number" id="number" placeholder="Enter mobile number" min={10}
                    max={10} isRequired/>
                    <Button variantColor="blue" variant="outline" onClick={productAdd}>
                        Add Product
                    </Button>
                    <Button variantColor="blue" variant="outline" onClick={productRemove}>
                                Delete Product
                    </Button>
                    
                </FormControl>
            <Button 
              mt={4}
              colorScheme="teal"
              type="submit"
              on
            >
              Submit
            </Button>
          </form>
    )
  }