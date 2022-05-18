import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},

  header: {
    opacity: 0.9,
    flexGrow: 3,
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    flexGrow: 3,
    margin: 5,
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#a167c9',
  },

  input: {
    borderColor: '#000000',
    backgroundColor: '#ADD8E6',
    width: 300,
    margin: 10,
    borderRadius: 10,
  },

  press: {
    color: 'black',
    padding: 5,
  },

  buttonfalse: {
    flexDirection: 'row',
  },

  touch: {
    backgroundColor: 'powderblue',
    margin: 3,
    borderRadius: 7,
  },

  img: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },

  viewImg: {
    marginEnd: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default styles;
