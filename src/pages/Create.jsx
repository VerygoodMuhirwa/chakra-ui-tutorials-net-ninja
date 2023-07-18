import { Box, FormControl , Input,Button, FormLabel,Checkbox, HStack, FormHelperText, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";
export default function Create() {
  return (

    <Box maxW="480px" >
      <Form method="post" action="/create"> 

        <FormControl isRequired mb="40px">
          <FormLabel>Task name: </FormLabel>
<Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task Description</FormLabel>
<Textarea placeholder="Enter a detailed description fro the task..." name="description" />
        </FormControl>

        <FormControl mb="30px" >
          <HStack>
            <Checkbox colorScheme="purple" name="isPriority" size="lg" />
            <FormLabel ml="10px">Make this a priority task.</FormLabel>
         </HStack>
        </FormControl>
        <Button type="submit">Submit</Button>
      </Form>

    </Box>

  )
  
   
}


export const createAction = async ({ request }) => {
  const data = await request.formData()
  
  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority:data.get("isPriority")=== ""
  }

  console.log(task);
return redirect("/")
}