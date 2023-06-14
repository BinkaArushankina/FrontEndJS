import { CounterAction } from "../actions/counterAction";

interface CounterState{ //sostojanie wsego naschego priloschenia
    count: number;
}

const initialState: CounterState = {//natschalnoe snatschenie priloschenia
    count: 0
};

//woswraschaet wseda nowij obnowlennij state(!)(globalnoe sostojanie wsego priloschenia)
const counterReducer = (state = initialState, action: CounterAction): CounterState => {  //state po umoltschaniu initialState, a action po umoltschaniu CounterAction
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,//witrachiwaem state
                count: state.count + 1 //i pribawlaem 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1// otnimaem 1
            }    
        default:
            return state;
    }
}

export default counterReducer;