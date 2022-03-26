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
import { BASE_URL_USER } from "../constants";
interface Item{
  _id: string;
  name: string;
  email: string;
  contact: string;
  role: string;
}


const EmpInfoTable = () => {
  const fetcher = () => axios.get(BASE_URL_USER).then(res => res.data);
  const { data, error} = useSWR(BASE_URL_USER,fetcher);

  if(!data) return <div>loading...</div>
  if(error) return <div>error</div>
  console.log(data)
  let items:Item[] = data.data;

  console.log(items)
  const handleDelete = (id:string) => {
    axios.delete(`${BASE_URL_USER}/${id}`).then(res => {
      console.log(res);
      items = items.filter((item :Item)=> {item._id !== id});
    });
  }
    return(
        <Table variant="simple">
          <Thead>
          <Tr>
              <Th>Employee ID</Th>
              <Th>Employee Name</Th>
              <Th isNumeric>Contact No.</Th>
              <Th isNumeric>Email Id</Th>
              <Th>Designation</Th>
              <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map( (item,key)=> <Tr key={key}>
                                      <Td>{item._id}</Td>
                                      <Td>{item.name}</Td>
                                      <Td>{item.email}</Td>
                                      <Td isNumeric>{item.contact}</Td>
                                      <Td>{item.role}</Td>
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

export default EmpInfoTable