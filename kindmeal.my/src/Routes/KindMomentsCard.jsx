import { Box, Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const KindMomentsCard = ({ data }) => {
  return (
    <Box>
      <SimpleGrid
        ml="60px"
        mr="20px"
        mt="50px"
        spacingX="30px"
        spacingY="40px"
        columns={3}
      >
        {data.map((item) => (
          <>
            <Box
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderRadius: "10px",
                height: "auto",
                width: "90%",
              }}
            >
              <Box
                style={{
                  alignItems: "center",
                  padding: "5px",
                }}
                key={item.id}
              >
                <Flex>
                  <Img
                    style={{
                      height: "60px",
                      marginLeft: "10px",
                      borderRadius: "50%",
                    }}
                    src={item.avatar}
                    alt={item.id}
                  />
                  <Box
                    style={{
                      height: "10%",
                      width: "35%",
                      textAlign: "left",
                      lineHeight: "25px",
                      marginLeft: "20px",
                      marginTop: "10px",
                    }}
                  >
                    <Text
                      style={{
                        color: "#666666",
                        fontWeight: "normal",
                        fontSize: "20px",
                      }}
                    >
                      {item.username}
                    </Text>
                    <Text style={{ color: "#aaaaaa", fontSize: "15px" }}>
                      {item.date}
                    </Text>
                  </Box>
                  <Button
                    style={{
                      marginLeft: "100px",
                      marginTop: "10px",
                      backgroundColor: "#f53838",
                      color: "#ffff",
                    }}
                  >
                    View
                  </Button>
                </Flex>
              </Box>
              <Box>
                <Img
                  style={{ width: "100%", height: "300px" }}
                  src={item.img}
                  alt={item.id}
                />
                <Text style={{ color: "#666666", fontFamily: "sans-serif" }}>
                  {item.desc}
                </Text>
              </Box>
            </Box>
          </>
        ))}
      </SimpleGrid>
      <Box style={{ marginTop: "80px", marginLeft: "200px" }}>
        <Img
          src="https://www.kindmeal.my/images/ads/banner_advertising-1100x280.png"
          alt="logo"
        />
      </Box>
    </Box>
  );
};

export default KindMomentsCard;

// "id": 1,
// "avatar": "https://www.kindmeal.my/photos/member/14/14287-s.jpg",
// "username": "Bvelyn",
// "date": "Aug 25th 2022",
// "img": "https://www.kindmeal.my/photos/moment/24/24291-46633-m.jpg",
// "desc": "薑黃糙米飯+綜合芽 清炒芥蘭花 燜番茄馬鈴薯杏鮑菇 😊"
