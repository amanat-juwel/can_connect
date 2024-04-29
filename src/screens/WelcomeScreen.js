import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = () => {
  const { width, height } = Dimensions.get('window');

  const imageWidth = width * 0.38 * 0.7;
  const imageHeight = imageWidth * (138 / 184);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image in top right corner */}
      <Image
        source={require('../../assets/splashTopRight.png')}
        style={[styles.topRightImage, { opacity: 1.0 }]}
      />

      {/* Image in top left corner */}
      <ImageBackground
        source={require('../../assets/splashTopLeft.png')}
        style={[styles.topLeftImage, { opacity: 1.0 }]}
      />

      {/* White gradient from bottom to top */}
      <LinearGradient
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
        style={styles.gradient}
      />
      <View style={styles.iconContainer}>
        
        <View style={[styles.banner, {height: height/2.1, width: width, alignItems: 'center'}]} >
            <Image
              source={require('../../assets/bannerImg.png')}
              style={[styles.banner, { width: width * 0.9 }]}
              resizeMode="contain"
            />
        </View>    
        <Image
          source={require('../../assets/icon.png')}
          style={[{ width: imageWidth, height: imageHeight }]}
        />
        {/* Welcome Text and Message */}
        <Text style={styles.welcomeText}>Welcome to Can Connect</Text>
        <Text style={styles.welcomeMsg}>Connecting People To Recycle</Text>
        
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    zIndex: 1,
    marginTop: 0
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'normal',
  },
  welcomeMsg: {
    fontSize: 20,
    color: 'rgba(0, 167, 90, 1)',
  },
  topRightImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width, 
  },
  topLeftImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 1.25, // Adjust height if needed
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  banner: {
    height: Dimensions.get('window').height/1.75
  },
});

export default WelcomeScreen;
