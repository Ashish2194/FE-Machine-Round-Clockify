const initState = {
    count: 0
};

function counterReducer(state=initState, action){
    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count+1};
        default:
            return state;
    }
}

export default counterReducer;
