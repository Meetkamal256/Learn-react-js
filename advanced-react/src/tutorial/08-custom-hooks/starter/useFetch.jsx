import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false); // hide loading
    };

    fetchData();
  }, [url]); // Include 'url' in the dependency array if you want to re-run the effect when 'url' changes
  
  return { isLoading, isError, data };
};

export default useFetch;
