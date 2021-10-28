import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td } from "@chakra-ui/react"
import { FcPrint } from "react-icons/fc"
import DeleteButton from "../utils/DeleteButton"
import BillModal from "./BillingModal"
import jsPDF from "jspdf"
import { billModalProps } from "../interfaces/propList"



const items = [
  {
    "Id":"ADTG90",
    "contact": 9876543210,
    "price": 1000,
    "date": "2020-01-01",
  }
]

const EmpInfoTable = () => {
    return(
        <Table variant="simple">
          <Thead>
          <Tr>
              <Th>Bill ID</Th>
              <Th>Contact</Th>
              <Th isNumeric>Total</Th>
              <Th isNumeric>Date</Th>
              <Th>Delete</Th>
              <Th>Print</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map( (item,key)=> <Tr key={key}>
                                      <Td>
                                        <BillModal
                                        Id = {item.Id} />
                                        
                                      </Td>
                                      <Td >{item.contact}</Td>
                                      <Td isNumeric>{item.price}</Td>
                                      <Td isNumeric>{item.date}</Td>
                                      <Td>
                                      <DeleteButton code={item.Id} />
                                      </Td>
                                      <Td>
                                      <PrintButton Id={item.Id} />
                                      </Td>
                                      </Tr>
           )}
        </Tbody>
      </Table>
    )
}

const PrintButton = (props:billModalProps) => {
    //save to pdf
    let doc = new jsPDF();
    return(
        <FcPrint size="1.5em" onClick={()=>{
            doc.text(props.Id,10,10); //write info generated from bill id
            doc.save(props.Id+".pdf");
            doc.autoPrint();
        }}
            style={{cursor:"pointer"}}
            />
    )

}



export default EmpInfoTable