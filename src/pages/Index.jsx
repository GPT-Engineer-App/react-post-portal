import { Container, VStack, Heading, Text, Box, StackDivider } from "@chakra-ui/react";

const posts = [
  { id: 1, title: "First Post", content: "This is the content of the first post." },
  { id: 2, title: "Second Post", content: "This is the content of the second post." },
  { id: 3, title: "Third Post", content: "This is the content of the third post." },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} divider={<StackDivider borderColor="gray.200" />}>
        <Heading as="h1" size="2xl">Posts</Heading>
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading as="h2" size="lg" mb={2}>{post.title}</Heading>
            <Text>{post.content}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;