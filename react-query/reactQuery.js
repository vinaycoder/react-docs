import { queryOptions, useQueries, useQuery, useMutation } from '@tanstack/react-query';
import fetchApi from 'you can create a fetch method';

const fiveMinutes = 1000 * 60 * 5;

const groupOptions = (
  url,
  { staleTime = fiveMinutes, cacheTime = fiveMinutes, config = {} } = {},
) => queryOptions({
  queryKey: [url],
  queryFn: () => fetchApi(url, { ...config }),
  staleTime,
  cacheTime,
  refetchOnWindowFocus: false, // Disable refetch on window focus
});

const useReactQueries = ({ queryArray, options = {} }) => {
  if (!queryArray?.length) return {};

  return useQueries({ queries: queryArray, ...options });
};

const useReactQuery = ({ queryObj, options = {} }) => {
  if (!queryObj?.queryKey || !queryObj?.queryKFn) return {};

  return useQuery({ ...queryObj, ...options });
};

const useReactQueryMutation = ({ url, config = {}, options = {} }) => {
  if (!url) return {};

  return useMutation({
    mutationFn: (payLoad) => fetchApi(url, { ...config, body: payLoad }),
    ...options,
  });
};

export { groupOptions, useReactQueries, useReactQuery, useReactQueryMutation };
