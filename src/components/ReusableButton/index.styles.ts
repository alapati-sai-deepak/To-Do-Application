import { Platform, StyleSheet } from 'react-native';
 
export default StyleSheet.create({
    button: {
        width: '35%',
        paddingVertical: 9,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        height:45,
        marginHorizontal:'auto',
       
      },
      buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
      },
      disabled: {
        backgroundColor: '#B0B0B0'
     }
});