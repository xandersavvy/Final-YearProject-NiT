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
  interface Props{
    url : string;
  }
  
  
  const BaseTable = (props:Props) => {
    const fetcher = () => axios.get(props.url).then(res => res.data);
    const { data, error} = useSWR(props.url,fetcher);
  
    if(!data) return <div>loading...</div>
    if(error) return <div>error</div>
    
    let items:any[] = data.data;

    if(items.length === 0) return <div>No data</div>
    
    const handleDelete = (id:string) => {
      axios.delete(`${props.url}/${id}`).then(res => {
        console.log(res);
        items = items.filter(item => item._id !== id);
      }).then( res => {
        location.reload();
        }
      );
    }
      return(
          <Table variant="simple">
            <Thead>
            <Tr>
            {Object.keys(items[0]).map((key,index)=><Td key={index}>{key.toUpperCase()}</Td>)}
            </Tr>
          </Thead>
          <Tbody>
            {items.map( (item,key)=> <Tr key={key}>
                                        {Object.keys(item).map((key,index)=><Td key={index}>{item[key]}</Td>)}
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
  
  export default BaseTable