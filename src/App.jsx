import React from 'react'
import App2 from "./practikaTwo/App2"
import { store } from './practikaTwo/store/configureStore';
import {Provider} from "react-redux"
import ScrollTop from './/practikaTwo/ScrollTop';



function App() {
  return (
    <div>
      <ScrollTop/>
      <Provider store={store}>
      <App2/>
      </Provider>
    </div>
  )
}

export default App
