import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const cartItems = [
  {
    id: 1,
    name: "Puma Pink",
    category: "Shoes",
    price: 200,
    quantity: 2,
    image: require("./assets/shoes.png"),
  },
  {
    id: 2,
    name: "Sport shirt",
    category: "T-shirt",
    price: 120,
    quantity: 2,
    image: require("./assets/shirt.png"),
  },
  {
    id: 3,
    name: "Sport pants",
    category: "Pants",
    price: 139,
    quantity: 2,
    image: require("./assets/pants.png"),
  },
];

export default function ShoppingCart() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id, action) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity =
            action === "add" ? item.quantity + 1 : Math.max(item.quantity - 1, 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      {/* Header */}
      <TouchableOpacity className="mt-4">
        <Ionicons name="chevron-back" size={24} color="gray" />
      </TouchableOpacity>

      <Text className="text-2xl font-bold mt-2">Shopping</Text>

      <ScrollView showsVerticalScrollIndicator={false} className="mt-4">
        {items.map(item => (
          <View
            key={item.id}
            className="flex-row items-center justify-between bg-gray-100 rounded-xl p-3 mb-3"
          >
            <Image source={item.image} className="w-16 h-16 rounded-md" resizeMode="contain" />
            <View className="flex-1 ml-4">
              <Text className="text-xs text-gray-500">{item.category}</Text>
              <Text className="text-base font-semibold">{item.name}</Text>
              <Text className="text-green-500 font-bold">{item.price}$</Text>
            </View>
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, "remove")}
                className="bg-white px-2 py-1 rounded-md border"
              >
                <Text className="text-lg">-</Text>
              </TouchableOpacity>
              <Text className="mx-2 font-semibold">{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, "add")}
                className="bg-white px-2 py-1 rounded-md border"
              >
                <Text className="text-lg">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Total & Pay Button */}
      <View className="mt-2 mb-6">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-semibold">Total</Text>
          <Text className="text-green-500 text-lg font-bold">{total}$</Text>
        </View>
        <TouchableOpacity className="bg-green-500 py-4 rounded-xl mt-4">
          <Text className="text-white text-center text-lg font-bold">PAY NOW</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center bg-white border-t border-gray-200 px-6 py-3">
        <Feather name="home" size={22} color="gray" />
        <Feather name="bell" size={22} color="gray" />
        <Feather name="clock" size={22} color="gray" />
        <View className="bg-green-100 p-2 rounded-full">
          <Feather name="shopping-cart" size={22} color="green" />
        </View>
      </View>
    </SafeAreaView>
  );
}
