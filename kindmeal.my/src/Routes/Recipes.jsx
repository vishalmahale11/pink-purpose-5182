import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { TbMinusVertical } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";
import { getRecipes } from "../API/fetch";
import Pagination from "./Pagination";
import RecipesCard from "./RecipesCard";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    getRecipes({
      page: page,
      limit: 6,
    }).then((res) => {
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
            Food & Drinks{" "}
          </Heading>
          <TbMinusVertical size={40} />
          <Heading style={{ fontSize: "30px", color: "gray" }}>
            Yummy Meat-Free Recipes
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
            Want to craft your own creative meat-free meals? Get inspiration
            from other food lovers, or share your own masterpieces!
          </p>
        </Box>
        <Box
          style={{
            width: "70%",
            marginLeft: "187px",
            marginTop: "20px",
          }}
        >
          <p style={{ textAlign: "left", marginLeft: "10px" }}>
            Transform into a master chef now.
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
          <Button style={{ backgroundColor: "#04be5a", color: "#fff" }}>
            Moments
          </Button>
          <Button>Deal Reviews</Button>
          <Button>Following</Button>
          <select
            name=""
            id=""
            style={{
              border: "1px solid gray.900",
              borderRadius: "5px",
              padding: "15px 15px 15px 15px",
            }}
          >
            <option value="">All Locations</option>
            <option value="">Kuala Lumpur</option>
            <option value="">Petailing Jaya</option>
            <option value="">Ampang</option>
            <option value="">Subhang</option>
          </select>
          <Button style={{ backgroundColor: "#f53838", color: "#fff" }}>
            Search
          </Button>
        </Box>
      </Box>
      <Box style={{ marginLeft: "-600px", marginTop: "50px" }}>
        <Pagination total={5} page={page} onChange={(page) => setPage(page)} />
      </Box>

      <RecipesCard data={data} />
    </>
  );
};

export default Recipes;
