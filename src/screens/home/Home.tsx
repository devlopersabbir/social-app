import React from "react";
import { Box, Heading, Pressable } from "native-base";
import { HomeScreens } from "../../utils/types/pageTypes";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC<HomeScreens> = ({ navigate }) => {
  const navigations = useNavigation();

  return (
    <Box>
      <Heading>Hello there</Heading>
      <Pressable onPress={() => navigate("Profile")}>Profile Screen</Pressable>
    </Box>
  );
};

export default Home;
