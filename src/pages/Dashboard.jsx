import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Heading,HStack, Button,Avatar, Flex,Text,CardHeader,CardBody, CardFooter,  Container, Box, SimpleGrid, Card, Divider } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData()

  console.log(tasks);
  // const boxStyles = {
  //   p: "10px",
  //   bg: "purple.400",
  //   color: "white",
  //   m: "10px",
  //   textAlign: "center",
  //   filter: "blur(2px)",
  //   ":hover": {
  //     color: "black",
  //     bg:"blue.200"
  //   }
  // }
  return (
    // <Container as="section" maxWidth="4xl"  py="20px">
    //   <Heading my="30px"  p="10px">Chakra UI Components</Heading>
    //   <Text marginLeft="30px" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed repellat quasi fugit. Cum harum odio vero ullam quas ipsam dicta, tempora quod aut rerum numquam dignissimos ut corporis doloremque.</Text>
    //   <Text ml="30px" color="blue.400"  fontWeight="bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed repellat quasi fugit. Cum harum odio vero ullam quas ipsam dicta, tempora quod aut rerum numquam dignissimos ut corporis doloremque.</Text>
    //   <Box my="30px" p="20px" bg="orange">
    //     <Text color="white">This is a box</Text>
    //   </Box>
    //   <Box sx={boxStyles}>
    //     Hello, Ninjas
    //   </Box>
    // </Container>
    <SimpleGrid   spacing={10} minChildWidth="300px">
      {/* <Box bg="white" h="200px" border="1px solid">
        <Text color={{base:"pink", md:"blue" , lg:"green"}}>Hello, </Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box> */}

      {tasks && tasks.map(task => {
        return (
          <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
            <CardHeader>
              <Flex>
               <Avatar src={task.img} mr="20px" />
                <Box>
                  <Heading as="h3" size="sm">{task.title}</Heading>
                  <Text>By { task.author}</Text>
                </Box>

</Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{ task.description}</Text>
            </CardBody>
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
              </HStack>
              
              <Divider  borderColor="gray.200"/>
            </CardFooter>
            
</Card>
        )
      })}
    </SimpleGrid>
     
  )
}


export const taskLoader = async () => {
  const res = await fetch("http://localhost:8000/tasks")
  return res.json()
}