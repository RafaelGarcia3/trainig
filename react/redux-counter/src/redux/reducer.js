const initialState = {
    count: 0
};

export default function counterReducer(state = initialState, action){
    switch(action.type){
        case 'counter/increment':
            return { count: state.count + 1 };
        case 'counter/decrement':
            return { count: state.count - 1 };
        case 'counter/incrementIfOdd':
            return state.count % 2 !== 0 ? {count: state.count + 1} : state;
        default:
            return state;
    }
}