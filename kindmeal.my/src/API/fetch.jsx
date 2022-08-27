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

const getKindMeals = ({ page, limit }) => {
  return axios({
    url: "https://kindmealm.herokuapp.com/kindmoments",
    method: "get",
    params: {
      _page: page,
      _limit: limit,
    },
  });
};

const getRecipes = ({ page, limit }) => {
  return axios({
    url: "https://kindmealm.herokuapp.com/recipes",
    method: "get",
    params: {
      _page: page,
      _limit: limit,
    },
  });
};

const getArticles = ({ page, limit }) => {
  return axios({
    url: "https://kindmealm.herokuapp.com/articles",
    method: "get",
    params: {
      _page: page,
      _limit: limit,
    },
  });
};

export { getMealDeals, getKindMeals, getRecipes, getArticles };
