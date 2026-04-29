import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createMessages, getMessages } from "../actions";

// Prefetch messages for a project to improve perceived performance when the user navigates to the messages view
/* prefetchMessages loads messages into the React Query cache before the user opens the messages view. Then useGetMessages reads that same cached data immediately because it uses the same query key. */

export const prefetchMessages = async (queryClient, projectId) => {
  await queryClient.prefetchQuery({
    queryKey: ["messages", projectId],
    queryFn: () => getMessages(projectId),
    staleTime: 10000, 
  });
};

export const useGetMessages = (projectId) => {
  return useQuery({
    queryKey: ["messages", projectId], 
    queryFn: () => getMessages(projectId),
    staleTime: 10000,
    refetchInterval: (data) => {
     // Refetch every 5 seconds if there are messages, otherwise don't refetch
      return data?.length ? 5000 : false;
    },
  });
};

export const useCreateMessages = (projectId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (value) => createMessages(value, projectId),
    onSuccess: () => {
     
      queryClient.invalidateQueries({ 
        queryKey: ["messages", projectId] 
      });
      queryClient.invalidateQueries(
        {
          queryKey: ["status"],
        }
      )
    },
  });
};