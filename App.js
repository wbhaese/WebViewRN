import React from "react"
import { WebView } from "react-native-webview"
import { View } from "react-native"

export default function App() {
  return (
    <View style={{ flex: 1 }}>
       <WebView source={{ uri: "https://m.gamingbuddy.gg/" }} />
    </View>
  )
}