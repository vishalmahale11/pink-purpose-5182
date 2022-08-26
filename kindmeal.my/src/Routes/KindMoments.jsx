import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { TbMinusVertical } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";
import { getKindMeals } from "../API/fetch";
import KindMomentsCard from "./KindMomentsCard";
import Pagination from "./Pagination";

const KindMoments = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    getKindMeals({
      page: page,
      limit: 9,
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
            KindMoments{" "}
          </Heading>
          <TbMinusVertical size={40} />
          <Heading style={{ fontSize: "30px", color: "gray" }}>
            Saving Lives with Yummy Photos
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
            Discover new, delicious meat-free cuisines enjoyed by other
            compassionate food lovers. Share your interesting KindMoments, and
            build your own fans and followers to encourage kind, healthy meals.
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
        <Pagination total={7} page={page} onChange={(page) => setPage(page)} />
      </Box>

      <KindMomentsCard data={data} />
    </>
  );
};

export default KindMoments;
