import { View } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons, FontAwesome5, AntDesign, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

const Icon = ({ name, type, size, color }) => {
    switch (type) {
      case 'ionicons':
        return <Ionicons name={name} size={size} color={color} />;
      case 'material':
        return <MaterialIcons name={name} size={size} color={color} />;
      case 'materialcommunityicon':
        return <MaterialCommunityIcons name={name} size={size} color={color} />;
      case 'fontawesome5':
        return <FontAwesome5 name={name} size={size} color={color} />;
      case 'AntDesign':
        return <AntDesign name={name} size={size} color={color} />;
      case 'fontisto':
        return <Fontisto name={name} size={size} color={color} />;
      default:
        return null;
    }
  };
  
  export default Icon;
