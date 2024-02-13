import React from "react";
import useGenre from "../hooks/useGenre";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-optimize";

const GenreList = () => {
  const { data } = useGenre();

  return (
    <List>
      {data?.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
