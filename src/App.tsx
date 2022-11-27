import type { Component } from "solid-js"
import { HellowWorld } from "./HelloWorld"

import logo from "./logo.svg"
import styles from "./App.module.css"

const App: Component = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <HellowWorld />
    </div>
  )
}

export default App
