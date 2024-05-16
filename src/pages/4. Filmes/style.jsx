import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
  nav: {
    width: '100%',
    height: '7%',
    backgroundColor: '#424141',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '15%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconav: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  all: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  header: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: '100%',
    height: '88%',
  },
  bodyUp: {
    width: '100%',
    height: '35%',
    flexDirection: 'row',
  },
  bodyBelow: {
    width: '100%',
    height: '65%',
    backgroundColor: '#aaf',
  },
  bodyUpLeft: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyUpRight: {
    width: '50%',
    height: '100%',
    backgroundColor: '#faa',
    flexDirection: 'column'
  },
  cartaz: {
    width: '90%',
    height: '90%',
    borderRadius: 5
  },
  bodyUpRightUp: {
    width: '100%',
    height: '20%',
    backgroundColor: '#ada',
  },
  bodyUpRightBelow: {
    width: '100%',
    height: '80%',
    backgroundColor: '#faf',
  }
});
