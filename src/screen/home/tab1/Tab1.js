/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Color from 'Color';

export default function Tab1() {
  const data = [
    {
      time: '09:00',
      title: 'Event 1',
      description: 'Event 1 Description',
      icon: require('image/iconTest.png'),
    },
    {
      title: 'Event 1',
      description: 'Event 1 Description',
      icon: require('image/iconTest.png'),
    },
    {
      time: '10:45',
      title: 'Event 2',
      description:
        'Event 2 긴줄 테스트으으으으긴줄 테스트으으으으긴줄 테스트으으으으긴줄 테스트으으으으긴줄 테스트으으으으긴줄 긴줄 테스트으으으으긴줄 테스트으으으으긴줄 테스트으으으으긴줄 테스트으으으으긴줄 테스트으으으으',
      icon: require('image/iconTest.png'),
    },
    {
      time: '12:00',
      title: 'Event 3',
      description: 'Event 3 Description',
      icon: require('image/iconTest.png'),
    },
    {
      time: '14:00',
      title: 'Event 4',
      description: 'Event 4 Description',
      icon: require('image/iconTest.png'),
    },
    {
      time: '16:30',
      title: 'Event 5',
      description:
        'Event 5 긴줄 테스트으으으으 긴줄 테스트으으으으긴줄 테스트으으으으 긴줄 테스트으으으으 긴줄 테스트으으으으 긴줄 테스트으으으으 ',
      icon: require('image/iconTest.png'),
    },
    {
      time: '09:00',
      title: 'Archery Training',
      description:
        'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
      lineColor: '#009688',
      icon: require('image/iconTest.png'),
    },
    {
      time: '10:45',
      title: 'Play Badminton',
      description:
        'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
      icon: require('image/iconTest.png'),
    },
    {time: '12:00', title: 'Lunch', icon: require('image/iconTest.png')},
    {
      time: '14:00',
      title: 'Watch Soccer',
      description:
        'Team sport played between two teams of eleven players with a spherical ball. ',
      lineColor: '#009688',
      icon: require('image/iconTest.png'),
    },
    {
      time: '16:30',
      title: 'Go to Fitness center',
      description: 'Look out for the Best Gym & Fitness Centers around me :)',
      icon: require('image/iconTest.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <Timeline
        style={styles.list}
        data={data}
        innerCircle={'icon'}
        circleSize={24}
        circleColor={Color.WHITE}
        lineColor={Color.ACCENT}
        timeStyle={{
          color: Color.GRAY,
        }}
        eventDetailStyle={{
          flex: 1,
          margin: 6,
          padding: 16,
          backgroundColor: Color.WHITE,
          borderRadius: 8,
          shadowColor: Color.GRAY,
          shadowOpacity: 0.8,
          shadowOffset: {width: 0, height: 1},
          shadowRadius: 1.4,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
});
