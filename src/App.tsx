import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import  { useState } from "react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface gameQuery {
  genre: Genre;
  platform: Platform;
  sortOrder: string;
  searchText: string;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200pxfr 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery?.genre}
            onSlectedGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginBottom={4} spacing={5} >
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
            />
            <SortSelector
              selectedOrder={gameQuery.sortOrder}
              onSelectOrder={(sortOrder) => {
                setGameQuery({ ...gameQuery, sortOrder });
              }}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
