import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import NavigationService from '../../modules/NavigationService';
import GlobalContext from '../../contexts/GlobalContext';
import styles from './styles';

const QueryTextInput = ({ title }) => {
  const { state, updateKey } = useContext(GlobalContext);

  // Formatted using TouchableOpacy and text because a regular button
  // has fewer styling options.
  return (
    // onPress takes data generated from QueryTextInput in state and
    // queries pixabay using function in GlobalContext
    <TouchableOpacity
      onPress={
        () => state.queryPixabay(state.query)
          .then((res) => {
            // takes docs from query, and updates provider
            updateKey('docs', res.data);
            // navigates to results once docs are in state
            NavigationService.navigate('Results');
            // TODO: add 'loading' to state and render a loading gif.
          })
          .catch((err) => {
            throw new Error('Error querying pixabay: ', err);
            // TODO: Notify user that there was an issue and the following steps.
          })
      }
    >
      {/* styling goes into text */}
      <Text style={styles.button}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

QueryTextInput.propTypes = {
  title: PropTypes.string.isRequired,
};

export default QueryTextInput;
