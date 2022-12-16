import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Onboarding from "../screens/OnBoarding";
import SignUp from "../screens/Account/SignUp";
import SignIn from "../screens/Account/SignIn";
import ChooseAccountType from "../screens/Account/ChooseAccountType";
import SelectLocation from "../screens/SelectLocation";
import DonationPackCards from "../screens/DonationPack/DonationPackCards";
import { DonorTabNavigator } from "./Tabs/DonorTabNavigator";
import { DonationPageNavigator } from "./Tabs/DonationPageNavigator";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";
import { useAuth } from "../hooks/useAuth";
import { RecepientTabNavigator } from "./Tabs/RecepientTabNavigator";
import DonorHistory from "../screens/History/DonorHistory";
import RecepientHistory from "../screens/History/RecepientHistory";
import DonationDetails from "../screens/DonationDetails";
import DonationHistoryCards from "../screens/DonationHistory/ViewDonationsHistory/DonationHistoryCards.js"
import TopDonationCards from "../screens/DonationHistory/TopDonationsHistory/TopDonationCards";
import AllDonations from "../screens/AllDonations";
import DonorDonationDetails from "../screens/DonationDetails/DonorDonationDetails";


const Stack = createStackNavigator();
const Tab = createStackNavigator()

const Navigator = () => {
  const auth = useAuth();

  // TODO: switch router by loggedIn state
  console.log("[##] loggedIn", auth.user);

  function Unauthenticated () {
    return (
      <Tab.Navigator
        initialRouteName="Onboarding"
        screenOptions={{headerShown: false}}
      >
        <Tab.Screen name="Onboarding" component={Onboarding} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="SignIn" component={SignIn} />
        <Tab.Screen name="ChooseAccountType" component={ChooseAccountType} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.user ? (
          <Stack.Group>
            <Stack.Screen
              name="DonorDashboard"
              component={DonorTabNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RecepientDashboard"
              component={RecepientTabNavigator}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="SelectLocation"
              component={SelectLocation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DonationPackStart"
              component={DonationPageNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DonationPackCards"
              component={DonationPackCards}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RecepientHistory"
              component={RecepientHistory}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DonorHistory"
              component={DonorHistory}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DonationDetails"
              component={DonationDetails}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DonorDonationDetails"
              component={DonorDonationDetails}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TopDonationCards"
              component={TopDonationCards}
            />
            <Stack.Screen
              name="DonationHistoryCards"
              component={DonationHistoryCards}
            />
            <Stack.Screen
              name="AllDonations"
              options={{headerShown: false}}
              component={AllDonations}
            />
          </Stack.Group>
        ) : (
          <Stack.Screen
            name="Unauthenticated"
            component={Unauthenticated}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
