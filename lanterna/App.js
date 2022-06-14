/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    //liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      handleChangeToggle();
      //setToggle(oldToggle => !oldToggle);
    });
    return () => subscription.remove();

  }, []);

  return (
    <View style={toggle ? styles.containerLight : styles.container} >
      <TouchableOpacity onPress={handleChangeToggle} >

        <Image style={toggle ? styles.lightinOn : styles.lightinOff}
          source={toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')}
        />

        <Image style={styles.diologo}
          source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')}
        />
      </TouchableOpacity>
    </View>

  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightinOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightinOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  diologo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});