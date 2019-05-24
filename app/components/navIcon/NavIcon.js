import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Expands RNVI/Ionicons to utilize platform-based icon
const NavIcon = ({ name, ...props }) => (
  <Icon
    name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
    {...props}
  />
);

// Styles are set up in app/lib/router.js > AppNavigator.tabBarOptions
// and also inside each app/view/screenName/index.js > navigationOptions.tabIconOptions
export default NavIcon;
