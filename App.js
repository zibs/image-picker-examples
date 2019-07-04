/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class App extends Component {
  launchImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      console.log(images);
    });
  };
  openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  takeVideo = () =>
    ImagePicker.openCamera({
      mediaType: 'video',
    }).then(image => {
      console.log(image);
    });
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.launchImagePicker}>
          <Text style={styles.welcome}>Select multiple images</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openCamera}>
          <Text style={styles.welcome}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.takeVideo}>
          <Text style={styles.welcome}>Take a Video</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
