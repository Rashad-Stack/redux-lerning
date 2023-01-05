import { Box, Card, Heading, Text } from "dracula-ui";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsslice";

const PostsView = () => {
  const { isLoading, error, posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Box>
      <Box pb="sm">
        <Heading as="h1" size="2xl">
          Posts
        </Heading>
      </Box>
      {error && (
        <Heading as="h1" size="2xl" color="red">
          {error}
        </Heading>
      )}
      {isLoading && (
        <Heading as="h1" size="2xl" color="cyanGreen">
          Loading...
        </Heading>
      )}
      {posts &&
        posts.map((post) => (
          <Card key={post.id} variant="subtle" color="pink" p="md">
            <Heading as="h2" size="xl" pb="sm">
              {post?.title}
            </Heading>
            <Text color="blackLight">{post?.body}</Text>
          </Card>
        ))}
    </Box>
  );
};

export default PostsView;
