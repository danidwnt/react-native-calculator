// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Form from '../components/form';
import Operator from '../components/operator';

export default function CalculatorScreen() {
  return (
    <View>
        <Operator />
    </View>
  );
}