import React, { useEffect, useContext, useState } from "react";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import MapView from "react-native-maps";
import { SearchBar } from "../components/searchBar";

import { LocationContext } from "../../../services/location/locationContext";
import { TakeawaysContext } from "../../../services/takeaways/takeawayContext";

export const MapPage = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { takeaways = [] } = useContext(TakeawaysContext);

  const [latD, setLatD] = useState(0);

  const { lat, lng, viewport } = location;
  console.log(viewport.northeast);

  useEffect(() => {
    const neLat = viewport.northeast.lat;
    const seLat = viewport.southwest.lat;

    const latD = neLat - seLat;
    setLatD(latD);
  }, [location, viewport]);

  return (
    <>
      <SearchBar />
      <MapView
        style={tw`h-full w-full`}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latD,
          longitudeDelta: 0.04,
        }}
      >
        {takeaways.map((takeaway) => {
          return (
            <MapView.Marker
              key={takeaway.name}
              title={takeaway.name}
              coordinate={{
                latitude: takeaway.geometry.location.lat,
                longitude: takeaway.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("TakeawaysInfo", { takeaway })
                }
              >
                <View>
                  <Text style={tw`text-purple-600`}>{takeaway.name}</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapView>
    </>
  );
};
