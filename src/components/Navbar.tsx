import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
