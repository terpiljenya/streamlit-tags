import React from "react"
import ReactDOM from "react-dom"
import Custom_keywords from "./keywords"

// Lots of import to define a Styletron engine and load the light theme of baseui
// @ts-ignore
import { Client as Styletron } from "styletron-engine-atomic"
import { Provider as StyletronProvider } from "styletron-react"
import { LightTheme, BaseProvider } from "baseui"

const engine = new Styletron()

// Wrap your CustomSlider with the baseui them
ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme} children={<Custom_keywords/>} />
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
