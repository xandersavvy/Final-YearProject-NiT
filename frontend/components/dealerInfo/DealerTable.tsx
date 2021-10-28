import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td } from "@chakra-ui/react"
import DeleteButton from "../utils/DeleteButton"




const items = [
  {
    "dealerId":"ADTG90",
    "name":"Adya tara clinic",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "location":"kolkata",
    "productType":"Snacks"
  },{
    "dealerId":"ADTG90",
    "name":"Adya tara clinic",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "location":"kolkata",
    "productType":"Snacks"
  },{
    "dealerId":"ADTG90",
    "name":"Adya tara clinic",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "location":"kolkata",
    "productType":"Snacks"
  },{
    "dealerId":"ADTG90",
    "name":"Adya tara clinic",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "location":"kolkata",
    "productType":"Snacks"
  },{
    "dealerId":"ADTG90",
    "name":"Adya tara clinic",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "location":"kolkata",
    "productType":"Snacks"
  },{
    "dealerId":"ADTG90",
    "name":"Adya tara clinic",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "location":"kolkata",
    "productType":"Snacks"
  }
]

const DealerInfoTable = () => {
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
          {items.map( (item,key)=> <Tr key={key}>
                                      <Td>{item.dealerId}</Td>
                                      <Td>{item.name}</Td>
                                      <Td>{item.email}</Td>
                                      <Td isNumeric>{item.contact}</Td>
                                      <Td>{item.location}</Td>
                                      <Td>{item.productType}</Td>
                                      <Td>
                                      <DeleteButton code={item.dealerId} />
                                      </Td>
                                      </Tr>
           )}
        </Tbody>
      </Table>
    )
}

export default DealerInfoTable