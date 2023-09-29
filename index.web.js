import { AppRegistry } from 'react-native';
import App from './App';
import { name as MindMeadow } from './app.json';

AppRegistry.registerComponent(MindMeadow, () => App);

// For running the app on the web
if (window.document) {
  AppRegistry.runApplication(MindMeadow, {
    initialProps: {},
    rootTag: document.getElementById('app-root'),
  });
}
