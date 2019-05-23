/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Icon from '../../components/navIcon/NavIcon';

export default class SearchScreen extends Component {
    static navigationOptions = {
      header: null,
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.header}>Search Screen</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
              <Text style={styles.navButton}>Go To Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}

SearchScreen.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name="search"
      // size={styles.navigationIcon}
      size={focused ? 28 : 22}
      color={tintColor}
    />
  ),
};