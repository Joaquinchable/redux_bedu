const initialState = {
      
    counter: 0
}

const reducer = (state = initialState, action) => {
     console.log ('reducer')
    switch (action.type){
     case 'SUMAUNO' : 
          return {counter: state.counter + 1}
    default:
     return state

}

    
 
}

export default reducer;