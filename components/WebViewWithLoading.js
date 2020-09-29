import React, { useState } from 'react'
import WebView from 'react-native-webview'
import { View, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default ({uri, injectedJavaScript}) => {
  const [ loading, setLoading] = useState(true)
  return (
    <View style={{ flex: 1 }}>
      <WebView
        onLoad={() => setTimeout(() => setLoading(false), 500)}
        style={{ flex: 1 }}
        source={{ uri }}
        injectedJavaScript={injectedJavaScript}
      />
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
    </View>
  )
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  }
});
