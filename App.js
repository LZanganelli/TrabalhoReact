import React, { useState } from 'react';
import Focus from './features/focus/Focus';
import Timer from './features/timer/Timer';
import {colors} from './utils/colors';

import { 
  StyleSheet, 
  View,
  Text,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkMode,
    flex: 1,
  }
});

export default function App() {

  const [focusSubject, setFocusSubject] = useState('dormir');

  return (  
    <View style={styles.container}>
      {
        focusSubject ? (
          <Timer focusSubject={focusSubject}/>
        )
        : (
          <Focus 
            addSubject={setFocusSubject}
          />
        ) 
      }  
    </View>  
    );
}
