import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoaderScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('GetStarted'); 
    }, 2000);
timer
    return () => clearTimeout();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/HireSide_Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default LoaderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // splash background color
  },
  logo: {
    width: 200,
    height: 200,
  },
  loader: {
    marginTop: 25,
  },
});
