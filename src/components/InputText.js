import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const InputText = ({
  placeholder,
  ico,
  secure,
  keyBoard,
  changeText,
  value,
  type,
}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
          placeholder={placeholder}
          //   autoCompleteType={type}
          secureTextEntry={secure}
          keyboardType={keyBoard}
          autoCapitalize="none"
          onChangeText={changeText}
          placeholderTextColor="grey"
          value={value}
          style={Styles.input}
        />
        <Icons name={ico} style={Styles.icon} />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  input: {
    marginTop: '15%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: 0,
    color: 'black',
    width: '90%',
    fontSize: 15,
  },
  icon: {
    marginTop: '15%',
    padding: 0,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '10%',
    color: '#463EC9',
  },
});

export default InputText;
