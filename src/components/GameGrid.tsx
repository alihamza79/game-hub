import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCards from "./GameCards";
import SkeletonGameCard from "./SkeletonGameCard";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { gameQuery } from "../App";

interface Props {
  gameQuery: gameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3  }} spacing={6}>
        {isLoading === true
          ? skeleton.map((skele) => (
              <GameCardContainer key={skele}>
                <SkeletonGameCard />
              </GameCardContainer>
            ))
          : null}
        {data?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
