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
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phonenumber: "",
  message: "",
};
const ContactUs = () => {
  const [allData, setAllData] = useState(initialState);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [response, setResponse] = useState("");

  const { name, email, phonenumber, message } = allData;

  const onChange = (e) => {
    setAllData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\d{10}$/;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }

    if (!phoneRegex.test(phonenumber)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
    fetch("http://localhost:8000/del", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert("submitted successfully");
    setAllData(initialState);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        height: "80vh",
      }}
    >
      <Heading as="h2">Querry Form</Heading>
      <form onSubmit={onSubmit}>
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
          {emailError && <span>{emailError}</span>}
        </FormControl>
        <FormControl isRequired>
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
            {phoneError && <span>{phoneError}</span>}
          </InputGroup>
        </FormControl>

        <Text mb="8px">Leave Your Message</Text>
        <Textarea
          isRequired
          placeholder="Write your querry message"
          size="sm"
          name="message"
          value={message}
          onChange={onChange}
        />
        <Button mt={[8]} w="100%" colorScheme="blue">
          submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
