import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
} from "native-base";
import { TouchableOpacity } from "react-native";

const TopDonationCard = ({navigation, donation}) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("DonationDetails", {donation_id: donation._id})
    }
  >
    <Box alignItems="flex-start" mt="20px" paddingLeft="5px" paddingRight="5px">
      <Box alignItems="center">
        <Box
          w="100%"
          rounded="2xl"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "white",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 6}>
              <Image
                source={{
                  uri: donation.image
                    ? donation.image
                    : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="5" space={1}>
            <Stack space={1}>
              <Heading size="sm" ml="-1">
                {donation.foods.map((f) => {
                  return (
                    <Text>
                      {f.food.map((fd) => {
                        return <Text>{fd}</Text>;
                      })}
                    </Text>
                  );
                })}
              </Heading>
            </Stack>
            <Text fontWeight="400">
              Description:{" "}
              {donation.foods.map((d) => {
                return <Text> {d.description}</Text>;
              })}
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  </TouchableOpacity>
);
export default TopDonationCard;
