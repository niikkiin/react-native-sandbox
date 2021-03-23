import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        Child #1
      </Text>
      <Text style={styles.textStyle, styles.child2}>
        Child #2
      </Text>
      <Text style={styles.textStyle}>
        Child #3
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  child2: {
    marginTop: 100,
    width: 100,
    height: 100,
    backgroundColor: 'pink'
  }
});

export default BoxScreen
