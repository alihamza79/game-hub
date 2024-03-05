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
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore critics={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}<Emoji rating={game.rating_top}/></Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCards;
