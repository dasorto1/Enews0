import AppNavigator from './src/AppNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/AuthProvider';
import {FireAuth} from './src/signupfunction';
import RNBootSplash from 'react-native-bootsplash';

// const moduleAlias = require("module-alias");
// moduleAlias.addAliases({
//   "react-native": require.resolve("react-native-web"),
// });
// moduleAlias();

function App() {
  React.useEffect(() => {//double check use of useeffect here
    setTimeout( () => {
      RNBootSplash.hide();
    }, 1000);
}, []);

  return <NavigationContainer><AuthProvider>
    <FireAuth/>
    </AuthProvider></NavigationContainer>;
  // return <AuthProvider><NavigationContainer>
  //   <FireAuth/></NavigationContainer>
  //   </AuthProvider>;
}

export default App;
