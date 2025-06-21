import { useApiOnPageLoad, PostApi } from '../services';
const YourContainerComponent = () =>{
    const { isLoading, error, startTimer, orderData, orderAem } = useApiOnPageLoad(); /// this is a get api call
    // below is example of post api call
     const submitFomr = async (payLoad) => {
    try {
      const [orderRes] = await Promise.allSettled([
        // mutateAsync(payLoad),
        PostApi(consentPayload),
      ]);

      const aemErrorMessage = orderRes?.value.error;
      if (aemErrorMessage) {
        return;
      }

    } catch (error) {
    }
  };
  
}
