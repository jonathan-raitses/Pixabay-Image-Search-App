/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import NavigationService from '../../modules/NavigationService';
import { GlobalConsumer } from '../../contexts/GlobalContext';
import Icon from '../../components/NavIcon/NavIcon';
import ScreenTitle from '../../components/ScreenTitle';
import styles from './styles';

// Doesn't need lifecycle hooks and state is provided in provider in parent component
const SearchScreen = props => (
  <GlobalConsumer>
    {context => (
      <View style={styles.container}>
        <ScreenTitle text="Input the image you want below and then hit submit." />
        <View style={styles.search}>
          
        </View>
      </View>
    )}
  </GlobalConsumer>
);
// onPress={() => NavigationService.navigate('Details')}

// TODO: refactor .navigationOptions to be generated through a function for modularization.
SearchScreen.navigationOptions = {
  header: null,
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name="search"
      size={focused ? moderateScale(28) : moderateScale(22)}
      color={tintColor}
    />
  ),
};

export default SearchScreen;
