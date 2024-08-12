import axios from "axios";

/*
params:
q={searchQuery}
apiKey={apiKey}
category={catagoryName}

*/

axios.defaults.params = {
  apikey: import.meta.env.VITE_GNEWS_1,
};

export const getTopHeadlines = (params) => {
  return axios.request({
    url: "https://gnews.io/api/v4/top-headlines?country=us",
    method: "get",
    params: params,
  });
};
