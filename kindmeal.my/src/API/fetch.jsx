import axios from "axios";

const getMealDeals = ({ page, limit }) => {
  return axios({
    url: "https://kindmealm.herokuapp.com/mealDeals",
    method: "get",
    params: {
      _page: page,
      _limit: limit,
    },
  });
};

export { getMealDeals };
