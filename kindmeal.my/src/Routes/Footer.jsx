import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Box
        bgColor="#2bb673"
        style={{
          height: "400px",
          width: "100%",
          display: "flex",
          gap: "2rem",
          color: "white",
          listStyle: "none",
        }}
      >
        <Box
          style={{ marginLeft: "200px", marginTop: "30px", listStyle: "none" }}
        >
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            Genral
            <li>Home</li>
            <li>Sign Up</li>
            <li>Businesses / Restaurateurs</li>
            <li>Advertising</li>
            <li>About KindMeal.my</li>
            <li>Help & FAQ</li>
            <li>Terms & Conditions</li>
            <li>Inspiring Partners</li>
            <li>Lifestyle Ambassadors</li>
            <li>Jobs & Careers</li>
            <li>Contact Us</li>
          </ul>
        </Box>
        <Box style={{ marginLeft: "30px", marginTop: "30px" }}>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            Features
            <li>Meat-Free Deals</li>
            <li>Tasty Menus</li>
            <li>Kind Moments</li>
            <li>Meat-Free Recipes</li>
            <li>Member Recommendations</li>
            <li>Featured Restaurants</li>
            <li>Vegetarian & Vegan Directory</li>
            <li>Food Map</li>
            <li>Become A Superhero</li>
            <li>Vegan News & Vegetarian Articles</li>
            <li>Latest Comments</li>
          </ul>
        </Box>
        <Box style={{ marginLeft: "30px", marginTop: "30px" }}>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            Social Media
            <li>KindMeal Widget</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </Box>
        <Box style={{ marginLeft: "30px", marginTop: "30px" }}>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            Mobile
            <li>iPhone & iPod App</li>
            <li>Android App</li>
          </ul>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            Exciting Promos
            <li>Gadhimai: Ending Mass Slaughter</li>
            <li>Free Meals</li>
            <li>Food Bloggers</li>
            <li>Uber CHIRP</li>
            <li>Jane Goodall Contest</li>
            <li>Win Digi iPhone 6</li>
            <li>Feed The Poor</li>
            <li>Win Superhero Gifts</li>
            <li>Win an iPad Mini 3</li>
          </ul>
        </Box>
        <Box style={{ marginLeft: "30px", marginTop: "30px" }}>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <ul>Adopt A Pet</ul>
            <li>Smartphone Apps</li>
            <li>WAGazine</li>
            <li>Discussion Forum</li>
            <li>Medical Fund</li>
            <li>PetFinder.my</li>
          </ul>
        </Box>
      </Box>
      <Box style={{ backgroundColor: "#2bb673", color: "#fff" }}>
        <Text style={{ width: "70%", marginLeft: "220px" }}>
          Copyright © KindMeal.my, 2014 - 2022. All rights reserved. This
          website promotes compassionate, meat-free dining experience. Some food
          may contain eggs, dairy products or alcohol, please view individual
          listings for details.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
