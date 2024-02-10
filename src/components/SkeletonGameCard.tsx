import { Skeleton, SkeletonText, Card, CardBody } from "@chakra-ui/react";

const SkeletonGameCard = () => {
  return (
    <Card width={"300px"} borderRadius={"10px"} overflow={"hidden"}>
      <Skeleton height={"200px"}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default SkeletonGameCard;
