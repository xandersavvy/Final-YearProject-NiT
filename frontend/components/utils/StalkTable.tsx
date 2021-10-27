import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react"


const items = [
  {
    "dealerId":"ADTG90",
    "batch":"ADTH7789",
    "code":"cs7894",
    "bp":900.00,
    "count":90
  },{
    "dealerId":"ADTG90",
    "batch":"ADTH7789",
    "code":"cs7894",
    "bp":900.00,
    "count":90
  },{
    "dealerId":"ADTG90",
    "batch":"ADTH7789",
    "code":"cs7894",
    "bp":900.00,
    "count":90
  },{
    "dealerId":"ADTG90",
    "batch":"ADTH7789",
    "code":"cs7894",
    "bp":900.00,
    "count":90
  },{
    "dealerId":"ADTG90",
    "batch":"ADTH7789",
    "code":"cs7894",
    "bp":900.00,
    "count":90
  },{
    "dealerId":"ADTG90",
    "batch":"ADTH7789",
    "code":"cs7894",
    "bp":900.00,
    "count":90
  }
]

const StalkTable = () => {
    return(
        <Table variant="simple">
          <Thead>
          <Tr>
              <Th>Dealer ID</Th>
              <Th>Product Batch</Th>
              <Th>Product Code</Th>
              <Th isNumeric>Buying Price</Th>
              <Th isNumeric>Product Count</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map( (item,key)=> <Tr key={key}>
                                      <Td>{item.dealerId}</Td>
                                      <Td>{item.batch}</Td>
                                      <Td>{item.code}</Td>
                                      <Td isNumeric>{item.bp}</Td>
                                      <Td isNumeric>{item.count}</Td>
                                      </Tr>
           )}
        </Tbody>
      </Table>
    )
}

export default StalkTable