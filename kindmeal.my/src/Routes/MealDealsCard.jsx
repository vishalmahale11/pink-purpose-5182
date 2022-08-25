import { Box, Button, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const MealDealsCard = ({ data }) => {
  return (
    <Box>
      <SimpleGrid
        style={{ marginLeft: "150px", marginTop: "60px" }}
        spacingX="30px"
        spacingY="40px"
        columns={2}
      >
        {data.map((item) => (
          <Box
            style={{
              height: "auto",
              width: "500px",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
            key={item.id}
          >
            <Img
              style={{
                width: "100%",
                height: "50%",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
              src={item.image}
              alt={item.id}
            />
            <Box
              style={{
                height: "30%",
                width: "100%",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <Text
                style={{
                  color: "#777777",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  marginLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                {item.desc}
              </Text>
              <Text
                style={{
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  marginLeft: "20px",
                  marginTop: "4px",
                }}
              >
                {item.subDesc}
              </Text>
              <Button
                style={{ fontWeight: "bold" }}
                ml="-300px"
                mt="20px"
                mb="20px"
                bgColor="#f53838"
                color="#fff"
              >
                Get FREE Coupon
              </Button>
            </Box>
            <Box
              style={{
                display: "flex",
                height: "17%",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  gap: "10px",
                  marginLeft: "10px",
                }}
              >
                <Img
                  style={{ height: "50px" }}
                  src={item.containsegg}
                  alt={item.containsegg}
                />
                <Img
                  style={{ height: "50px" }}
                  src={item.milk}
                  alt={item.milk}
                />
                <Img
                  style={{ height: "50px" }}
                  src={item.alcohol}
                  alt={item.alcohol}
                />
              </Box>
              <Box
                style={{
                  width: "150px",
                  marginLeft: "10px",
                }}
              >
                <Text>
                  KindMeal Discount
                  <br />
                  <span
                    style={{
                      color: "#fb2222",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {item.off}
                  </span>
                </Text>
              </Box>
              <Box
                style={{
                  marginLeft: "30px",
                }}
              >
                <Text>
                  Expires In <br />
                  <span style={{ color: "gray", fontSize: "30px" }}>
                    {item.expiray} Days
                  </span>
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MealDealsCard;
