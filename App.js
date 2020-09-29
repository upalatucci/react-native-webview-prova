import React from 'react';
import { StyleSheet } from 'react-native';
import WebViewWithLoading from './components/WebViewWithLoading'
import {
  Scene,
  Router,
  Tabs
} from 'react-native-router-flux';

export default function App() {
  const jsCode = `
  document.querySelector("header").remove()
  `
  
  return (
    <Router sceneStyle={styles.inner}>
      <Scene key="root">
        <Tabs key="home" hideNavBar>
          <Scene
            key="Presentazione"
            component={WebViewWithLoading}
            uri='https://www.sgi-italia.org/breve-presentazione/'
            title="Presentazione"
            initial={true}
            hideNavBar
            injectedJavaScript={jsCode}
          />
          <Scene
            key="Domande e Risposte"
            component={WebViewWithLoading}
            uri='https://www.sgi-italia.org/domande/'
            title="Domande e Risposte"
            hideNavBar
            injectedJavaScript={jsCode}
          />
          <Scene
            key="Buddismo e Società"
            component={WebViewWithLoading}
            uri='https://buddismoesocieta.org/'
            title="Buddismo e Società"
            hideNavBar
            injectedJavaScript={jsCode}
          />
          <Scene
            key="Nuovo Rinascimento"
            component={WebViewWithLoading}
            uri='https://ilnuovorinascimento.org/'
            title="Nuovo Rinascimento"
            hideNavBar
            injectedJavaScript={jsCode}
          />
        </Tabs>
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    marginTop: 20
  },
});
