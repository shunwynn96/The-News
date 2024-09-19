import axios from "axios";

/*
params:
q={searchQuery}
apiKey={apiKey}
category={catagoryName}

*/
let apiKey;

axios.defaults.params = {
  apikey: apiKey,
};

export const getTopHeadlines = (params) => {
  return axios.request({
    url: "https://gnews.io/api/v4/top-headlines",
    method: "get",
    params: params,
  });
};
export const getCategory = (params) => {
  return axios.request({
    url: "https://gnews.io/api/v4/top-headlines",
    method: "get",
    params: params,
  });
};
export const getSearch = (params) => {
  return axios.request({
    url: `https://gnews.io/api/v4/search?country=us&q=${
      store.state.search_query
    }&apikey=${process.env[key_list[key_num.value]]}`,
    method: "get",
    params: params,
  });
};
