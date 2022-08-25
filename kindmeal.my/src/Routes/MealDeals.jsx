import { Box, Button, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TbMinusVertical } from "react-icons/tb";
import { getMealDeals } from "../API/fetch";
import MealDealsCard from "./MealDealsCard";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";

const MealDeals = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    getMealDeals({
      page: page,
      limit: 10,
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [page]);

  useEffect(() => {
    setSearchParams({
      page,
    });
  }, [page, setSearchParams]);

  return (
    <>
      <Box style={{ backgroundColor: "#F0F0F0" }}>
        <Flex>
          <Heading style={{ fontSize: "30px", marginLeft: "200px" }}>
            Meat-Free Deals{" "}
          </Heading>
          <TbMinusVertical size={40} />
          <Heading style={{ fontSize: "30px", color: "gray" }}>
            Restaurants In India
          </Heading>
        </Flex>
        <Box
          style={{
            width: "70%",
            marginLeft: "200px",
            marginTop: "20px",
          }}
        >
          <p style={{ textAlign: "left" }}>
            Browse delicious meat-free, vegetarian deals from top restaurants
            and cafes! Just click on "Get Free Coupon" to obtain instant
            discounts and dine at the restaurants. No upfront payment, booking
            or printing is needed. If you share it on social media, you'll even
            DOUBLE your discount!
          </p>
        </Box>
        <Box
          style={{
            width: "70%",
            marginLeft: "187px",
            marginTop: "20px",
          }}
        >
          <p>
            Download our <span style={{ color: "blue" }}>mobile app</span> now
            to easily get coupons and start dining in a few seconds.
            Effortlessly save lives, health, environment and money now!
          </p>
        </Box>
        <Box
          style={{
            display: "flex",
            gap: "2rem",
            marginLeft: "187px",
            marginBottom: "20px",
            marginTop: "10px",
            padding: "15px",
            width: "75%",
            justifyContent: "space-between",
          }}
        >
          <input
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid gray.900",
              borderRadius: "5px",
            }}
            type="text"
            placeholder="Search Shop or Deal Name"
          />
          <select
            style={{ border: "1px solid gray.900", borderRadius: "5px" }}
            name=""
            id=""
          >
            <option value="">All Categories</option>
            <option value="">Pasta</option>
            <option value="">Burger</option>
            <option value="">Breakfast</option>
            <option value="">Salad</option>
            <option value="">Bakery</option>
            <option value="">Tea & Desert</option>
            <option value="">Local Delights</option>
            <option value="">Jap & Korean</option>
            <option value="">Chinese</option>
          </select>
          <select
            name=""
            id=""
            style={{ border: "1px solid gray.900", borderRadius: "5px" }}
          >
            <option value="">All Locations</option>
            <option value="">Kuala Lumpur</option>
            <option value="">Petailing Jaya</option>
            <option value="">Ampang</option>
            <option value="">Subhang</option>
          </select>
          <Button style={{ backgroundColor: "#f53838", color: "#fff" }}>
            Search Deals
          </Button>
          <Button style={{ backgroundColor: "#04be5a", color: "#fff" }}>
            Browse Restaurants
          </Button>
        </Box>
      </Box>
      <Box style={{ marginLeft: "200px", marginTop: "50px" }}>
        <Img
          src="https://www.kindmeal.my/images/ads/banner_advertising-1100x280.png"
          alt="Logo"
        />
      </Box>
      <Box style={{ marginLeft: "-600px", marginTop: "50px" }}>
        <Pagination total={9} page={page} onChange={(page) => setPage(page)} />
      </Box>
      <Box>
        <MealDealsCard data={data} />
      </Box>
      <Box mt="100px">
        <Img
          style={{ margin: "auto" }}
          src="https://www.kindmeal.my/images/how_kindmeal_works.png"
          alt="img"
        />
      </Box>
    </>
  );
};

export default MealDeals;
