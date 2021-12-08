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
import router from "next/router"
import { useRouter } from "next/router"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@chakra-ui/button"

const items = [
  {
    "Id":"ADTG90",
    "contact": 8017559538,
    "price": 1000,
    "date": "2020-01-01",
  },{
    "Id":"ADTG90",
    "contact": 9876543210,
    "price": 1000,
    "date": "2020-01-01",
  },{
    "Id":"ADTG90",
    "contact": 9876543210,
    "price": 1000,
    "date": "2020-01-01",
  },
]

const EmpInfoTable = () => {
  const sendWhatsapp = (Id : String ,contact : number ,price:Number, date:String) => {
    router.push(`https://wa.me/91${contact}/?text=Hello%20Thank%20for%20your%20order%20with%20us.%20Your%20order%20Id%20is%20${Id}%20and%20the%20price%20is%20${price}%20and%20the%20date%20of%20order%20is%20${date}`)
  }
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
                                      <Td>
                                      <Button
                                      type="button"

                                      onClick={()=>sendWhatsapp(item.Id,item.contact,item.price,item.date)}

                                      >
                                        <FaWhatsapp />
                                      </Button>
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