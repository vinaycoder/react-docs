import { groupOptions, useReactQueries, useReactQueryMutation } from './reactQuery';
export const pageLoadApi = (options) => useReactQueries({
  queryArray: [
    groupOptions(apiURl),
    groupOptions(anotherApiUrl),
    groupOptions(apiURl, { staleTime: 0, cacheTime: 0, config }),
  ],
  options: { ...options },
});

export const PostApi = (options) => useReactQueryMutation({
  url: postapiUrl,
  config: {
    headers: {
      api_access_key: '',
    },
    method: 'POST',
  },
  options,
});
