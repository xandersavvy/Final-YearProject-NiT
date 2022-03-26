import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td, 
  Button} from "@chakra-ui/react"
import axios from "axios";
import useSWR from "swr";
import { BASE_URL_PRODUCT } from "../constants";
interface Item {
  _id: string;
  name: string;
  buyingPrice: number;
  mrp: number;
  count: number;
}




const StalkTable = () => {
  const fetcher = () => axios.get(BASE_URL_PRODUCT).then(res => res.data);
  const { data, error} = useSWR(BASE_URL_PRODUCT,fetcher);

  if(!data) return <div>loading...</div>
  if(error) return <div>error</div>
  console.log(data)
  let items:Item[] = data.data;

  console.log(items)
  const handleDelete = (id:string) => {
    axios.delete(`${BASE_URL_PRODUCT}/${id}`).then(res => {
      console.log(res);
      items = items.filter((item :Item)=> {item._id !== id});
    });
  }



    return(
        <Table variant="simple">
          <Thead>
          <Tr>
              <Th>Dealer ID</Th>
              <Th>Product Batch</Th>
              <Th>Product Code</Th>
              <Th isNumeric>Buying Price</Th>
              <Th isNumeric>MRP</Th>
              <Th isNumeric>Product Count</Th>
              <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map( (item,key)=> <Tr key={key}>
                                      <Td>{item._id}</Td>
                                      <Td isNumeric>{item.buyingPrice}</Td>
                                      <Td isNumeric>{item.mrp}</Td>
                                      <Td isNumeric>{item.count}</Td>
                                      <Td>
                                      <Button  onClick={()=>handleDelete(item._id)}>
                                      Delete {item._id}
                                      </Button>
                                      </Td>
                                      </Tr>
           )}
        </Tbody>
      </Table>
    )
}

export default StalkTable