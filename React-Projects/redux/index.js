const redux = require('redux')
const createStore = redux.createStore
const BYE_CAKE = 'BYE_CAKE'

function byecake(){
    return {
        type : BYE_CAKE
    }
}

const intialState = {
    numOfCakes : 10
}

const reducer = (state = intialState,action) => {
     switch(action.type){
        case BYE_CAKE: return {
            ...state,
            numOfCakes : state.numOfCakes - 1 
        }
        default : return state
     }
}

const store = createStore(reducer)
console.log('initial state' , store.getState())
const unsubscribe = store.subscribe(() => (console.log('updated state' , store.getState())))

store.dispatch(byecake())
store.dispatch(byecake())

unsubscribe()
