import { useEffect } from 'react';
import { pageLoadApi } from '../services';
//import { useAppContext } from '../store/AppContext'; if you have context api and want to update api response into that

function useApiOnPageLoad() {
  //const { dispatch } = useAppContext();
  //const startTimer = performance.now();
  const combine = (res) => {
    // multiple api response. if have passed two api url so two response will be there
    const [firstApiResponse, secondApiResponse] = res?.map?.((result) => result?.data) || [];
    const isError = res?.some?.((result) => result?.isError);
    let error;
    if (isError) {
      error = res?.find?.((result) => result?.error)?.error?.message;
    }

    return {
      orderData: firstApiResponse?.data?.res?.item,
      orderAem: secondApiResponse?.data?.res?.item,
      error,
      isLoading: res.some(
        ({ isLoading, isFetching }) => isLoading || isFetching,
      ),
      startTimer,
    };
  };

  const results = pageLoadApi({ combine }) || {};
// if you want to manupulate your response before sending to component
  try {
    
  } 
  catch (error) {
  }
/* if you have context api and want to update api response into that
  useEffect(() => {
    if (!results?.isLoading) {
    }
  }, [results?.isLoading]);
*/
  return { ...results };
}

export default useApiOnPageLoad;
