import react from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import store from './app/store'
ReactDOM.render(
<BrowserRouter>
    <Provider store={store}> 
        <App/>
    </Provider>
    
</BrowserRouter>
,document.getElementById("root"))