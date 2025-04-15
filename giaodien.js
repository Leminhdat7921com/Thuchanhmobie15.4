import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GroceryStoreUI() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4">
        {/* Location */}
        <View className="flex-row items-center justify-center mt-2">
          <Ionicons name="location-outline" size={20} color="black" />
          <Text className="text-lg font-medium ml-1">Dhaka, Banassre</Text>
        </View>

        {/* Search Bar */}
        <View className="bg-gray-100 rounded-xl flex-row items-center px-4 py-2 mt-4">
          <Feather name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search Store"
            className="ml-2 flex-1 text-base"
          />
        </View>

        {/* Banner */}
        <View className="bg-green-100 rounded-xl mt-4 overflow-hidden">
          <Image
            source={require("./assets/banner.png")}
            className="w-full h-28"
            resizeMode="cover"
          />
          <View className="absolute inset-0 justify-center px-4">
            <Text className="text-xl font-semibold text-black">Fresh Vegetables</Text>
            <Text className="text-green-700 text-sm font-medium">
              Get Up To 40% OFF
            </Text>
          </View>
        </View>

        {/* Exclusive Offer */}
        <View className="mt-6 flex-row justify-between items-center">
          <Text className="text-lg font-semibold">Exclusive Offer</Text>
          <Text className="text-green-500 font-medium">See all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
          {["bananas", "apple"].map((item, index) => (
            <View
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-4 mr-4 w-40"
            >
              <Image
                source={
                  item === "bananas"
                    ? require("./assets/banana.png")
                    : require("./assets/apple.png")
                }
                className="w-full h-20"
                resizeMode="contain"
              />
              <Text className="mt-2 text-base font-semibold">
                {item === "bananas" ? "Organic Bananas" : "Red Apple"}
              </Text>
              <Text className="text-gray-500 text-sm">
                {item === "bananas" ? "7pcs, Priceg" : "1kg, Priceg"}
              </Text>
              <View className="flex-row justify-between items-center mt-2">
                <Text className="text-lg font-bold">$4.99</Text>
                <TouchableOpacity className="bg-green-100 p-1 rounded-full">
                  <Feather name="plus" size={18} color="green" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Best Selling */}
        <View className="mt-6 flex-row justify-between items-center">
          <Text className="text-lg font-semibold">Best Selling</Text>
          <Text className="text-green-500 font-medium">See all</Text>
        </View>

        {/* Add more products if needed */}
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-between items-center bg-white border-t border-gray-200 px-6 py-3">
        <View className="items-center">
          <Feather name="home" size={20} color="green" />
          <Text className="text-xs text-green-500 font-semibold">Shop</Text>
        </View>
        <View className="items-center">
          <Feather name="search" size={20} color="gray" />
          <Text className="text-xs text-gray-500">Explore</Text>
        </View>
        <View className="items-center">
          <Feather name="shopping-cart" size={20} color="gray" />
          <Text className="text-xs text-gray-500">Cart</Text>
        </View>
        <View className="items-center">
          <Feather name="heart" size={20} color="gray" />
          <Text className="text-xs text-gray-500">Favourite</Text>
        </View>
        <View className="items-center">
          <Feather name="user" size={20} color="gray" />
          <Text className="text-xs text-gray-500">Account</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
