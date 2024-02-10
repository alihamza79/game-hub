import {
  Card,
  Image,
  Heading,
  SimpleGrid,
  CardBody,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGame";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-optimize";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore critics={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
