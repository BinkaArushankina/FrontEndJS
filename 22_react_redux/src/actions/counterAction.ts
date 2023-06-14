import { Action } from "redux";

export interface IncrementAction extends Action { // opisiwaem tip interface action( dejstwie) s sostojaniem
    type: 'INCREMENT';
}

export interface DecrementAction extends Action {  //menaem dejstwie poetomu propisiwaem interface
    type: 'DECREMENT';
}

export type CounterAction = IncrementAction | DecrementAction;//w etom klasse proisodat tolko dwa dejstwia


export const increment = ():IncrementAction => { //exportiruem dannie funkzii
    return {
        type: 'INCREMENT'
    }
}

export const decrement = ():DecrementAction => {
    return {
        type: 'DECREMENT'
    }
}