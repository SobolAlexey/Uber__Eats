import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const ViewCart = () => {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalUSD);
  return (
    <>
      {total ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: 'center',
              padding: 15,
              borderRadius: 30,
              width: 300,
              position: "relative",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
            ViewCart
            </Text>
            <Text style={{ color: "white", fontSize: 20,}}>
            {totalUSD}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;
