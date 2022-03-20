import { Badge, Box,Link,Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { IProject } from "./../pages/projects";
interface IProjectCardProps {
  project: IProject;
}
const ProjectCard: FC<IProjectCardProps> = ({
  project: { title, descreption, imageUrl, url, tags },
}) => {
    
  return (
    <a href={url}   >
      <Box maxW="sm" borderRadius="lg" overflow="hidden" mx="5">
        <Image src={imageUrl} alt="project banner" />
        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h3" isTruncated fontSize="xl">
            {title}
          </Box>

          <Text fontSize="sm">{descreption}</Text>
          <Box display="flex" alignItems="baseline" mt="4">
            {tags.map((tag) => {
              return (
                <Badge key={tag} borderRadius="full" px="2" mx="2" colorScheme="teal">
                  {tag}
                </Badge>
              );
            })}
          </Box>
        </Box>
      </Box>
    </a>
  );
};

export default ProjectCard;
