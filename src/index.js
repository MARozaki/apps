import ReactDOM from 'react-dom';
//import Signup from './Signup.js'
//import Login from './Login.js'
import {List} from './Content.js'
import Header from './header.js'
import Footer from './footer.js'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-grid.css"
import "bootstrap/dist/css/bootstrap-reboot.css"
import "bootstrap"
import "./index.css"

//ReactDom render
let arr = {
    "header": <Header />,
    //"content": <Connected store={store} />,
    //"signup":<Signup />,
    "article": <List />,
    "footer": <Footer />
}

for (let key of Object.keys(arr)) {
    ReactDOM.render(
        arr[key],
        document.querySelector(key)
    )
}