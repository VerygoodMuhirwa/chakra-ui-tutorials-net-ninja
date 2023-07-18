import { Outlet } from "react-router-dom"
import { Grid , GridItem} from "@chakra-ui/react"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"
export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">    
      <GridItem bg="purple.400" maxH={{ lg:"100vh"} } colSpan={{base:6, lg:2, xl:1}} as="aside" p={{base:"20px" , lg:"30px"}}>
<Sidebar />
      </GridItem>
      <GridItem colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
      <Navbar /> 
    <Outlet />
      </GridItem>
</Grid>
  )
}
