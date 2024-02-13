import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCards from "./GameCards";
import SkeletonGameCard from "./SkeletonGameCard";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGame();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {isLoading === true
          ? skeleton.map((s) => (
              <GameCardContainer>
                <SkeletonGameCard key={s} />
              </GameCardContainer>
            ))
          : null}
        {data?.map((game) => (
          <GameCardContainer>
            <GameCards key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
