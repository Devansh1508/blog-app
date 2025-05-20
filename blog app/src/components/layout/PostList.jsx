import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {motion, LayoutGroup} from "framer-motion";
import React, { useEffect } from "react";
import {getBlogs} from "../../hooks/posts";
import SinglePost from "../posts/SinglePost";
import {useUser} from "../../hooks/user";
import {useState} from "react";
import { set } from "date-fns";

export default function PostList() {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  // const {user, isLoading: userLoading} = useUser();
  async function fetchPosts() {
    setLoading(true);
    const posts = await getBlogs();
    console.log(posts);
    setPosts(posts);
    setLoading(false);
    return posts;
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading)
    return (
      <Box pos='absolute' top='50%' left='50%'>
        <Spinner size='xl' />
      </Box>
    );

  return (
    <Container maxW={"7xl"} p='12'>
      <Heading as='h2' marginTop='5'>
        Latest articles
      </Heading>
      <Divider marginTop='5' />
      <Grid
        templateColumns='repeat(auto-fill, minmax(300px, 2fr))'
        gap={6}
        marginTop='5'
        >
        {posts.map((post) => (
          <GridItem key={post._id}>
            <motion.div layout>
              <SinglePost post={post} />
            </motion.div>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
