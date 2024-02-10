import { Skeleton, SkeletonText, Card, CardBody } from "@chakra-ui/react";

const SkeletonGameCard = () => {
  return (
    <Card>
      <Skeleton height={"200px"}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default SkeletonGameCard;
