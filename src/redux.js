
import { createStore } from 'redux';

const reducer = (state, action)=>{
  if (action.type==="INC"){
    return state+action.payload;
  }
  return state
}
const store = createStore(reducer, 0);


store.subscribe(()=>{
  console.log('changed ', store.getState());
});
store.dispatch({type:'INC', payload:1});
