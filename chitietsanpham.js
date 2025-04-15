import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4">
        {/* Header */}
        <View className="flex-row justify-between items-center mt-2">
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="gray" />
          </TouchableOpacity>
          <Feather name="share-2" size={20} color="gray" />
        </View>

        {/* Product Image */}
        <View className="items-center mt-4">
          <Image
            source={require('./assets/shirt.png')}
            className="w-64 h-64 rounded-3xl border-4 border-gray-300"
            resizeMode="contain"
          />
        </View>

        {/* Product Info */}
        <View className="mt-6">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-xl font-bold">Sport shirt</Text>
              <Text className="text-sm text-gray-500">T-shirt</Text>
            </View>
            <TouchableOpacity>
              <AntDesign name="hearto" size={20} color="gray" />
            </TouchableOpacity>
          </View>

          {/* Quantity + Price */}
          <View className="flex-row justify-between items-center mt-4">
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-full"
              >
                <Text className="text-xl">-</Text>
              </TouchableOpacity>
              <Text className="mx-4 text-lg font-semibold">{quantity}</Text>
              <TouchableOpacity
                onPress={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded-full"
              >
                <Text className="text-xl">+</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-lg font-bold">${(quantity * 4.99).toFixed(2)}</Text>
          </View>

          {/* Product Detail */}
          <View className="mt-6">
            <Text className="text-base font-semibold mb-1">Product Detail</Text>
            <Text className="text-sm text-gray-500 leading-5">
              Sweat-absorbent quality, 100% cotton, suitable for sports,
              creating a dynamic, comfortable feeling for the user.
            </Text>
          </View>

          {/* Nutritions + Review */}
          <View className="mt-6">
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-semibold">Nutritions</Text>
              <Text className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                100g
              </Text>
            </View>

            <View className="mt-4">
              <Text className="text-base font-semibold mb-1">Review</Text>
              <View className="flex-row">
                {[...Array(5)].map((_, i) => (
                  <AntDesign
                    key={i}
                    name="star"
                    size={16}
                    color={i < 4 ? 'orange' : 'lightgray'}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Add to Basket */}
      <View className="p-4">
        <TouchableOpacity className="bg-green-500 py-4 rounded-xl">
          <Text className="text-white text-center text-lg font-bold">
            Add To Basket
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
