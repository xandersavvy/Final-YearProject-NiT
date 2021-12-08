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
    "Id":"ADTG90",
    "name":"Money Dey",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "Designation":"Salesman"
  }, {
    "Id":"ADTG90",
    "name":"Money Dey",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "Designation":"Salesman"
  }, {
    "Id":"ADTG90",
    "name":"Money Dey",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "Designation":"Salesman"
  }, {
    "Id":"ADTG90",
    "name":"Money Dey",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "Designation":"Salesman"
  }, {
    "Id":"ADTG90",
    "name":"Money Dey",
    "contact": 9876543210,
    "email":"johndoe@getDomainLocale.com",
    "Designation":"Salesman"
  }
]

const EmpInfoTable = () => {
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
                                      <Td>{item.Id}</Td>
                                      <Td>{item.name}</Td>
                                      <Td>{item.email}</Td>
                                      <Td isNumeric>{item.contact}</Td>
                                      <Td>{item.Designation}</Td>
                                      <Td>
                                      <DeleteButton code={item.Id} />
                                      </Td>
                                      </Tr>
           )}
        </Tbody>
      </Table>
    )
}

export default EmpInfoTable