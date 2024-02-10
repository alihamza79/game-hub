import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCards from "./GameCards";
import SkeletonGameCard from "./SkeletonGameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {isLoading === true
          ? skeleton.map((s) => <SkeletonGameCard key={s} />)
          : null}
        {games?.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
