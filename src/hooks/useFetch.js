import React from "react";

function waitFor(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function useFetch(url, options) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  async function doFetch() {
    try {
      setError(false);
      setLoading(true);
      await waitFor(2000);
      const fetchedData = await fetch(url, options).then(response =>
        response.json()
      );
      setData(fetchedData);
    } catch (error) {
      //console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    doFetch();
  }, [url]);

  return [{ data, loading, error }, doFetch];
}

export default useFetch;
