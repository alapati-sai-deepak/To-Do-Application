import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 14,
    color: 'gray',
  },
  activeTabLabel: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default styles;