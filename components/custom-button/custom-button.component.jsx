import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontsize:30,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
  },  
  button:{
      alignItems: 'center',
      width: 'auto',
      height: '50px',
      padding: 10,
      backgroundColor: '#3b5998',
      },
}) 

const CustomButton = ({ title, ...otherProps}) => {
    return(
      <TouchableOpacity 
      style={styles.button}
      {...otherProps}
      >
        <Text style={{color: 'white', fontSize:25, fontFamily :'Open Sans'}}> 
        {title} 
        </Text>
      </TouchableOpacity>
    )
}

export default CustomButton;