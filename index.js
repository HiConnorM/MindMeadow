/**
 * @format
 */

import Amplify from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_rIKNLtDXF',
    identityPoolId: 'us-east-1:ba88a145-e9d6-4a13-aef2-667be5d7f5f2',
    userPoolWebClientId: '15cr5ur9o1hmjjbeu6n890vbmj',
  },
});

// Wrap the App component with the withAuthenticator Higher Order Component
const AuthenticatedApp = withAuthenticator(App);

// Register the AuthenticatedApp instead of App
AppRegistry.registerComponent(appName, () => AuthenticatedApp);
