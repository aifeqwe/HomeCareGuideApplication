import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#2a9d8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchSection: {
    marginTop: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2a9d8f',
    height: 50,
  },
  searchIcon: {
    padding: 10,
    color: '#2a9d8f',
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
    width: '90%',
    backgroundColor: '#2a9d8f',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 20,
    width: '90%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2a9d8f',
  },
  resultText: {
    fontSize: 16,
  },
  resultItem: {
    marginTop: 10,
  },
  resultTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultDescription: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default styles;