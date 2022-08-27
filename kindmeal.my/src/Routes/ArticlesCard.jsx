import { Box, Button, Img, Text } from "@chakra-ui/react";
import React from "react";

const ArticlesCard = ({ data }) => {
  console.log(data);
  return (
    <Box>
      {data.map((item) => (
        <>
          <Box
            style={{
              display: "flex",   
              height: "350px",
              width: "1000px",
              marginLeft: "250px",
              marginTop: "60px",
              marginBottom: "30px",
              borderRadius: "10px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <Box
              style={{
                height: "100%",
                width: "500px",
              }}
            >
              {" "}
              <Img
                style={{
                  height: "100%",
                  width: "500px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                src={item.img}
              />
            </Box>
            <Box
              style={{
                height: "100%",
                width: "500px",
                padding: "20px",
              }}
            >
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                }}
              >
                {item.heading}
              </Text>
              <p style={{ textAlign: "left", color: "#666666" }}>
                by KindMeal.my
              </p>
              <p
                style={{
                  color: "#666666",
                  textAlign: "left",
                  marginTop: "30px",
                }}
              >
                {item.deasc}
              </p>
              <Box style={{ marginTop: "20px", marginLeft: "-300px" }}>
                <Button style={{ backgroundColor: "#f53838", color: "#fff" }}>
                  View Article
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      ))}
    </Box>
  );
};

export default ArticlesCard;
