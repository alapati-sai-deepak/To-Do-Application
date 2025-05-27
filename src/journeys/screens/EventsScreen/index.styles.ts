import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  noDateText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  noEventsText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
  eventItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 6,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'flex-end',
  },
  drawer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  usernameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  usernameText: {
    fontSize: 16,
  },
  usernameInput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    flex: 1,
  },
  editIcon: {
    marginLeft: 10,
    color: 'blue',
  },
  sectionLabel: {
    marginTop: 15,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    marginTop: 5,
  },
  saveBtn: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
  },
  saveText: {
    color: '#fff',
    textAlign: 'center',
  },
  closeBtn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#aaa',
  },
  closeText: {
    textAlign: 'center',
    color: '#fff',
  },
  logoutBtn: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
  },
});
