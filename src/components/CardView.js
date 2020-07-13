import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Color from 'Color';

const CardView = ({icon, text}) => {
  return (
    <TouchableOpacity style={styles.CordContainer}>
      <Image style={styles.CardIconTitle} source={icon} />
      <Text style={styles.CardText}>{text}</Text>
      <Image
        style={styles.CardIconCommon}
        source={require('image/iconTest.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CordContainer: {
    flex: 1,
    margin: 8,
    padding: 24,
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    shadowColor: Color.GRAY,
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1.4,
    elevation: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardText: {
    flex: 8,
    margin: 24,
    color: Color.BLACK,
    fontSize: 16,
  },
  CardIconTitle: {
    width: 32,
    height: 32,
  },
  CardIconCommon: {
    width: 32,
    height: 32,
  },
});

export default CardView;
