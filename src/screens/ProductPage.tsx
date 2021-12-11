import React, { useMemo, useRef, useCallback } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
export const ProductPage = ({ navigation, route }) => {
  console.log("Look:" + route.params);
  console.log(route.params);
  const { product } = route.params;
  console.log(product.variants);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["12%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.productPageContainer}>
      <ImageBackground
        source={{ uri: product.thumbnail_url }}
        resizeMode="cover"
        blurRadius={5}
        style={{ width: "100%", height: "100%" }}
      >
        <Swiper
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={styles.wrapper}
        >
          <View style={styles.slide1}>
            <Image
              source={{ uri: product.thumbnail_url }}
              style={{
                flex: 1,
                width: "90%",
                alignSelf: "center",
                height: "90%",
                marginBottom: "5%",
              }}
              resizeMode="contain"
            />
          </View>
        </Swiper>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          handleStyle={{ backgroundColor: "whitesmoke", borderRadius: 40 }}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <View style={styles.productOverview}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: "3%",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderColor: "lightgray",
                  paddingBottom: "5%",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    maxWidth: "50%",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {product.name}
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Rs.{product.price}
                </Text>
              </View>
            </View>
            <View style={{ paddingHorizontal: "3%", marginTop: "2%" }}>
              <Text>Select Size</Text>
              <View style={{ flexDirection: "row", marginVertical: "2%" }}>
                {product.variants.map((variant) => {
                  return (
                    <View
                      style={{
                        borderWidth: 1,
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        backgroundColor: "white",
                        borderColor: "gray",
                        marginRight: "4%",
                        borderRadius: 5,
                      }}
                    >
                      <Text style={{ textAlign: "center" }}>
                        {variant.name}
                      </Text>
                    </View>
                  );
                })}
              </View>
              <Text>Product Description</Text>
            </View>
          </View>
        </BottomSheet>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  productPageContainer: {
    flex: 1,
    backgroundColor: "grey",
  },
  productOverview: {},
  contentContainer: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
