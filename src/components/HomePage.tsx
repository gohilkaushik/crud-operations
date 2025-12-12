import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api";
import Card from "./Card";

export type Posts = {
  body: string;
  id: number;
  title: string;
  userId?: number;
};

const HomePage = () => {
  const fetchPosts = async () => {
    const response = await api.get("/posts");
    return response.data;
  };

  const { data, isPending, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const queryClient = useQueryClient();

  const deletePost = useMutation({
    mutationFn: (id: number) => api.delete(`/posts/${id}`),
    onSuccess: (_, id) => {
      queryClient.setQueryData<Posts[]>(["posts"], (oldPosts) => {
        if (!oldPosts) return [];
        return oldPosts.filter((post) => post.id !== id);
      });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isPending) {
    return <div>Pending...</div>;
  }

  return (
    <ul className="m-5 space-y-2">
      {data.map((posts: Posts, index: number) => (
        <Card
          posts={posts}
          serial={index + 1}
          onDelete={() => deletePost.mutate(posts.id)}
          key={index}
        />
      ))}
    </ul>
  );
};

export default HomePage;
