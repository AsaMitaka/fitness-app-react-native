import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/navigate';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
