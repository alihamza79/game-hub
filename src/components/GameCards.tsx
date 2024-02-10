import { Card, Image, Heading, SimpleGrid, CardBody } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGame";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCards;
