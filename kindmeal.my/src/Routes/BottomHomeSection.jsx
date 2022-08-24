import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

const BottomHomeSection = () => {
  return (
    <Box>
      <Heading>
        Introducing The World's 1st Meat-Free Lifestyle Platform
      </Heading>
      <Text
        style={{
          display: "flex",
          marginLeft: "500px",
          fontSize: "20px",
          marginTop: "20px",
        }}
      >
        Brought to you by
        <span>
          <img
            style={{ height: "50px", marginLeft: "20px" }}
            src="https://www.kindmeal.my/images/logo-petfinder.png"
            alt="logo"
          />
        </span>
      </Text>
      <Heading style={{ color: "gray", fontSize: "25px", marginTop: "30px" }}>
        Instant coupon & dining. No upfront coupon payment, booking or printing.
      </Heading>
      <Box
        style={{
          display: "flex",
          width: "70%",
          marginLeft: "230px",
          marginTop: "20px",
          gap: "20px",
          height: "auto",
          padding: "10px",
        }}
      >
        <Box
          style={{
            border: "1px solid lightgray",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "10px",
          }}
        >
          <Img
            style={{ padding: "20px" }}
            src="https://www.kindmeal.my/images/intro_deal.png"
            alt="logo"
          />
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            Get Great Deals
          </Text>
          <p style={{ padding: "20px" }}>
            Show our FREE digital coupons to instantly enjoy exciting deals
          </p>
        </Box>
        <Box
          style={{
            border: "1px solid lightgray",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "10px",
          }}
        >
          <Img
            style={{ padding: "20px", paddingLeft: "60px" }}
            src="https://www.kindmeal.my/images/intro_kindmoment.png"
            alt="logo"
          />
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            Share KindMoments
          </Text>
          <p style={{ padding: "20px" }}>
            Spread the joy by sharing your yummy dining moments
          </p>
        </Box>
        <Box
          style={{
            border: "1px solid lightgray",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "10px",
          }}
        >
          <Img
            style={{ padding: "20px", paddingLeft: "40px" }}
            src="https://www.kindmeal.my/images/intro_menu.png"
            alt="logo"
          />
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            Discover Delicious Food
          </Text>
          <p style={{ padding: "20px" }}>
            Explore the latest exquisite offerings and creative menus
          </p>
        </Box>
        <Box
          style={{
            border: "1px solid lightgray",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "10px",
          }}
        >
          <Img
            style={{ padding: "20px", paddingLeft: "40px" }}
            src="https://www.kindmeal.my/images/intro_friends.png"
            alt="logo"
          />
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            Meet Food Lovers
          </Text>
          <p style={{ padding: "20px" }}>
            Make new, compassionate friends and share great food tips
          </p>
        </Box>
      </Box>
      <Box
        style={{
          width: "70%",
          padding: "20px",
          marginLeft: "230px",
          marginTop: "50px",
        }}
      >
        <p style={{ fontSize: "20px", color: "gray" }}>
          Any restaurant or cafe can join KindMeal, vegetarian or not, as long
          as the deals and menu featured are meat-free. Enjoy a great meat-free
          dining experience. Easily save animal lives, health, environment and
          money now!
        </p>
      </Box>
      <Box>
        <Button
          style={{
            padding: "50px 100px 50px 100px",
            backgroundColor: "#f53838",
            color: "#ffff",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Join KindMeal Now
        </Button>
      </Box>

      <Box style={{ marginLeft: "200px", marginTop: "30px" }}>
        <Text
          style={{
            fontWeight: "bold",
            color: "gray",
            fontSize: "30px",
            marginLeft: "-200px",
            marginBottom: "20px",
          }}
        >
          As Featured In
        </Text>
        <Img
          src="https://www.kindmeal.my/images/media-feature2.png"
          alt="logo"
        />
      </Box>
      <Box
        style={{
          paddingLeft: "200px",
          marginTop: "30px",
          backgroundColor: "lightgray",
        }}
      >
        <Img
          src="https://www.kindmeal.my/images/banner_whykindmeal.png"
          alt="logo"
        />
      </Box>
    </Box>
  );
};

export default BottomHomeSection;
