import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import styles from './index.styles';

 
interface ButtonProp {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  color?: string;
  disabled?: boolean;
  width?: ViewStyle;
}
 
const ReusableButton: React.FC<ButtonProp> = ({
  title,
  onPress,
  style = {marginTop: 10 , borderRadius: 50 },
  textStyle = {fontStyle: 'normal'},
  color = 'blue',
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: color},
        style,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
 
export default ReusableButton;