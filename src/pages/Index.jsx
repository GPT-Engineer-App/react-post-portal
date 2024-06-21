import { useState } from "react";
import { Container, VStack, Heading, Text, Box, StackDivider, Button, Input, Textarea } from "@chakra-ui/react";

const Index = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "This is the content of the second post." },
    { id: 3, title: "Third Post", content: "This is the content of the third post." },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleAddPost = () => {
    const newPostWithId = { ...newPost, id: posts.length + 1 };
    setPosts([...posts, newPostWithId]);
    setNewPost({ title: "", content: "" });
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} divider={<StackDivider borderColor="gray.200" />}>
        <Heading as="h1" size="2xl">Posts</Heading>
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading as="h2" size="lg" mb={2}>{post.title}</Heading>
            <Text mb={4}>{post.content}</Text>
            <Button colorScheme="red" onClick={() => handleDeletePost(post.id)}>Delete</Button>
          </Box>
        ))}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <Heading as="h2" size="lg" mb={2}>Add New Post</Heading>
          <Input
            placeholder="Title"
            mb={3}
            value={newPost.title}
            name="title"
            onChange={handleInputChange}
          />
          <Textarea
            placeholder="Content"
            mb={3}
            value={newPost.content}
            name="content"
            onChange={handleInputChange}
          />
          <Button colorScheme="teal" onClick={handleAddPost}>Add Post</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;