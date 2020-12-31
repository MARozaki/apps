import ReactDOM from 'react-dom';
import {
    connect
} from 'react-redux'
import {
    createStore
} from 'redux'
import Header from './header.js'
import Content from './content.js'
import Footer from './footer.js'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-grid.css"
import "bootstrap/dist/css/bootstrap-reboot.css"
import "bootstrap"
import "./index.css"

//Redux buat store
const store = createStore((state, action)=> {
    if (action.type === "ADD_DATA") return {
        name: [...state.name,
            action.name],
        id: [...state.id,
            action.id]
    }
    else return {
        name: [],
        id: []
    }
});
//Redux connecting
const Connected = connect(
    state=> {
        return {
            data: state
        }
    },
    dispatch=> {
        return {
            //action
            setData: (name, id)=> {
                dispatch( {
                    type: "ADD_DATA",
                    name: name,
                    id: id
                })
            }
        }
    }
)(Content);

//ReactDom render
let arr = {
    "header": <Header />,
    "article": <Connected store={store} />,
    //"sidebar":<Sidebar />,
    //"footer":<Footer />
}

for (let key of Object.keys(arr)) {
    ReactDOM.render(
        arr[key],
        document.querySelector(key)
    )
}