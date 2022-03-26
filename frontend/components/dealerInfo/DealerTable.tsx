import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td, 
  Button} from "@chakra-ui/react"
import axios from "axios";
import { Key, useEffect, useState } from "react";
import useSWR from "swr";
import { BASE_URL_DEALER } from "../constants";
import DeleteButton from "../utils/DeleteButton"

interface Item {
  _id: string;
  name: string;
  email: string;
  contact: string;
  location: string;
  type: string;
}


const DealerInfoTable =() => {

  const fetcher = () => axios.get(BASE_URL_DEALER).then(res => res.data);
  const { data, error} = useSWR(BASE_URL_DEALER,fetcher);

  if(!data) return <div>loading...</div>
  if(error) return <div>error</div>
  console.log(data)
  let items:Item[] = data.data;

  console.log(items)
  const handleDelete = (id:string) => {
    axios.delete(`${BASE_URL_DEALER}/${id}`).then(res => {
      console.log(res);
      items = items.filter((item :Item)=> {item._id !== id});
    });
  }
  return(
        <Table variant="simple">
          <Thead>
          <Tr>
              <Th>Dealer ID</Th>
              <Th>Dealer Name</Th>
              <Th>Dealer Contact No.</Th>
              <Th isNumeric>Dealer email</Th>
              <Th isNumeric>Dealer Location</Th>
              <Th isNumeric>Types of Product</Th>
              <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map( (item:Item,key: Key | null | undefined)=> <Tr key={key}>
                                      <Td>{item._id}</Td>
                                      <Td>{item.name}</Td>
                                      <Td>{item.email}</Td>
                                      <Td isNumeric>{item.contact}</Td>
                                      <Td>{item.location}</Td>
                                      <Td>{item.type}</Td>
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

export default DealerInfoTable