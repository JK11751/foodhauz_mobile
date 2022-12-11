import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { Box, ChevronLeftIcon, Text,HStack, Pressable, Spacer, ThreeDotsIcon, ScrollView } from 'native-base';
import { colors } from '../../theme';
import NotificationItem from '../../components/NotificationItem';

const Notifications = ({navigation}) => {
    const screenWidth = Dimensions.get("window").width;
  return (
    <View>
      <Box backgroundColor="#FFFFFF">
        <Box
          alignItems="center"
          borderBottomLeftRadius="20px"
          borderBottomRightRadius="20px"
          h="70px"
          w={screenWidth}
          bg={colors.primary_color}
          position="relative"
          onPress={() => {
            navigation.navigate("DonorDashboard");
          }}
        >
          <HStack paddingTop="20px" alignItems="center">
            <Pressable
              onPress={() => {
                navigation.navigate("DonorDashboard");
              }}
            >
              <ChevronLeftIcon paddingLeft="50px" color="white" />
            </Pressable>
            <Spacer />
            <Text color="#FFFFFF" fontSize="20px" fontWeight="700">
              Notifications
            </Text>
            <Spacer />
            <ThreeDotsIcon paddingRight="50px" color="white" />
          </HStack>
        </Box>
      </Box>
      <ScrollView p={"30px"}>
      <Text>Today</Text>
        <NotificationItem />
      </ScrollView>
    </View>
  );
}

export default Notifications

const styles = StyleSheet.create({})