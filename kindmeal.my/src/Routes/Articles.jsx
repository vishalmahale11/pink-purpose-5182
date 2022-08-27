import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getArticles } from "../API/fetch";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import ArticlesCard from "./ArticlesCard";

const Articles = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    getArticles({
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
      <Box style={{ backgroundColor: "#F0F0F0", paddingBottom: "30px" }}>
        <Flex>
          <Heading
            style={{ fontSize: "30px", marginLeft: "200px", color: "#666666" }}
          >
            Yummy News, Articles & Videos{" "}
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
            Want to keep updated on the latest news of delicious meat-free meals
            and adorable animals? Check out this section for interesting daily
            happenings and articles that will melt your tummy (and heart too).
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
      </Box>
      <Box style={{ marginLeft: "-600px", marginTop: "50px" }}>
        <Pagination total={5} page={page} onChange={(page) => setPage(page)} />
      </Box>
      <ArticlesCard data={data} />
    </>
  );
};

export default Articles;
