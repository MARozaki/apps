import {
    connect
} from 'react-redux'
import {
    createStore
} from 'redux'

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
export default connected = connect(
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
);