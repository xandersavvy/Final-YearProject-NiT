import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react"
import { FcFullTrash } from "react-icons/fc"



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
              <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map( (item,key)=> <Tr key={key}>
                                      <Td>{item.dealerId}</Td>
                                      <Td>{item.batch}</Td>
                                      <Td>{item.code}</Td>
                                      <Td isNumeric>{item.bp}</Td>
                                      <Td isNumeric>{item.count}</Td>
                                      <Td>
                                      <Popover>
                                        <PopoverTrigger>
                                              <Button><FcFullTrash /></Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Confirmation!</PopoverHeader>
                                        <PopoverBody>Are you sure you want to delete {item.code}?</PopoverBody>
                                        </PopoverContent>
                                      </Popover>
                                      </Td>
                                      </Tr>
           )}
        </Tbody>
      </Table>
    )
}

export default StalkTable