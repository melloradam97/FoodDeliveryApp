import React from "react";
import { View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Text, Card } from "react-native-elements";
import { SvgXml } from "react-native-svg";
import Rating from "../../../../assets/rating";
import OpenIcon from "../../../../assets/icon";

export const Takeaway = ({ takeaway = {} }) => {
  // Default information incase the api is not working - breaks the application to not have this
  const {
    name = "an egg takeaway",
    photos = [
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/283/283659/a-basket-of-eggs.jpg",
    ],
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    address = "100 street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = takeaway;

  const starRating = Array.from(new Array(Math.trunc(rating)));

  return (
    <Card style={tw`bg-white w-full`} key={name}>
      <Image
        style={tw`relative items-center w-full h-32`}
        source={{ uri: photos[0] }}
      />
      <View style={tw`p-4`}>
        <Text style={tw`text-xl font-bold`}>{name}</Text>
        <View style={tw`flex flex-row justify-between py-1`}>
          <View style={tw`flex-row py-0.5`}>
            {starRating.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={Rating}
                width={18}
                height={18}
              />
            ))}
          </View>
          <View style={tw`flex-row py-0.5`}>
            {isClosedTemporarily && (
              <Text style={tw`text-red-500 mx-2`}>CURRENTLY CLOSED</Text>
            )}
            {isOpenNow && <SvgXml xml={OpenIcon} width={18} height={18} />}
            <Image style={tw`w-5 h-5 mx-2`} source={{ uri: icon }} />
          </View>
        </View>
        <Text style={tw`text-base`}>{address}</Text>
      </View>
    </Card>
  );
};
