import React from 'react';

import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Nikki';
  return (
    <View>
      <Text style={styles.textStyleOne}>
        Getting started with react native!
      </Text>
      <Text style={styles.textStyleTwo}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleOne: {
    fontSize: 45,
  },
  textStyleTwo: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
