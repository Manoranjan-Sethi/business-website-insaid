import { PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ContactUs = () => {
  const [allData, setAllData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const { name, email, phonenumber, message } = allData;

  const onChange = (e) => {
    setAllData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  // const isError =
  //   name === " " || email === "" || phonenumber === "" || message === "";
  const onSumit = (e) => {
    e.preventDefault();
    // if (name === " " || email === "" || phonenumber === "" || message === "") {
    //   setError(true);
    // }
  };

  return (
    <form onSumit={onSumit}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Enter name"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input name="email" value={email} onChange={onChange} type="email" />
      </FormControl>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<PhoneIcon color="gray.300" />}
        />
        <Input
          type="tel"
          name="phonenumber"
          value={phonenumber}
          placeholder="Phone number"
          onChange={onChange}
        />
      </InputGroup>
      <Text mb="8px">Leave Your Message</Text>
      <Textarea
        isRequired
        placeholder="Write your querry message"
        size="sm"
        name="message"
        value={message}
        onChange={onChange}
      />
      <Button colorScheme="blue">submit</Button>
    </form>
  );
};

export default ContactUs;
