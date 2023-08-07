import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../utils/types/types";
import Home from "./home/Home";
import Chat from "./chatBox/Chat";
import Profile from "./profile/Profile";
import { Box, Text } from "native-base";

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={
            <Box>
              <Text>Hello</Text>
            </Box>
          }
        />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="Chat" component={Chat} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
