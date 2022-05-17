import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Text,
  Flex,
  chakra,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const BlogCard = ({
  slug,
  title,
  category,
  featured,
  publishedDate,
  thumbnail,
}) => {
  return (
    <>
      <Box
        width="full"
        backgroundColor="whiteAlpha.900"
        shadow="lg"
        borderRadius="2xl"
        overflow={`hidden`}
      >
        <HStack spacing={8}>
          <Box width="30%" height="full">
            <GatsbyImage
              image={getImage(thumbnail)}
              alt={title}
              objectFit="cover"
              height="full"
            />
          </Box>
          <Box p={8}>
            <Text>{publishedDate}</Text>
            <Link to={slug}>
              <Heading as="h3">{title}</Heading>
            </Link>
            <Text>{category}</Text>
            {featured && <p>Featured</p>}
          </Box>
        </HStack>
      </Box>
      {/* <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          mx={{ lg: 8 }}
          display={{ lg: "flex" }}
          maxW={{ lg: "5xl" }}
          shadow={{ lg: "lg" }}
          rounded={{ lg: "lg" }}
        >
          <Box w={{ lg: "50%" }}>
            <Box
              h={{ base: 64, lg: "full" }}
              rounded={{ lg: "lg" }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{ base: "xl", lg: "5xl" }}
            w={{ lg: "50%" }}
          >
            <chakra.h2 fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              Build Your New <chakra.span>Idea</chakra.span>
            </chakra.h2>
            <chakra.p mt={4}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </chakra.p>

            <Box mt={8}>
              <Link
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{ bg: "gray.800" }}
              >
                Start Now
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex> */}
    </>
  )
}

export default BlogCard
