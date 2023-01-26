import { PhoneIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
// import { Field, Form, Formik } from "formik";

const ContactUs = () => {
  return (
    <div>
      {/* <Formik> */}
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input sm placeholder="Enter name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<PhoneIcon color="gray.300" />}
        />
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>
      <Text mb="8px">Leave Your Message</Text>
      <Textarea
        value=""
        onChange=""
        placeholder="Here is a sample placeholder"
        size="sm"
      />
      {/* </Formik> */}
    </div>
  );
};

export default ContactUs;
