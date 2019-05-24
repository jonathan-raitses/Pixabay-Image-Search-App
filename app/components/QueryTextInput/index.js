import React, { useContext } from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './styles';
import GlobalContext from '../../contexts/GlobalContext';

const QueryTextInput = (props) => {
  const { state, updateKey } = useContext(GlobalContext);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        style={styles.input}
        placeholder="Enter your query here."
        onChangeText={userInput => updateKey('query', userInput)}
        value={state.query}
      />
    </View>
  );
};

export default QueryTextInput;