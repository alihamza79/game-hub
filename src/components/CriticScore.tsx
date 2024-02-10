import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  critics: number;
}

const CriticScore = ({ critics }: Props) => {
  let color = critics > 75 ? "green" : critics > 60 ? "yellow" : "";
  return (
    <Badge paddingX={2} colorScheme={color}>
      {critics}
    </Badge>
  );
};

export default CriticScore;
