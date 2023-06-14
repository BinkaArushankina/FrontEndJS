import { Reducer } from 'redux';

interface ITodo {//opisali schto ssooj predstawlaet todo
    id: number;
    text: string;
    completed: boolean;
}

interface ITodoState {//tipisiruem todo
    todos: ITodo[];
}

interface AddTodoAction {
    type: 'ADD_TODO';
    payload: ITodo;//polesnaja nagruska budet todo, dobawlaem odnu todo w spisok del
}

type TodoAction = AddTodoAction;

const initialState: ITodoState = {
    todos: []
}

const todoReducer: Reducer<ITodoState, TodoAction> = (state = initialState, action): ITodoState => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,//witrachiwaem state starij
                todos: [...state.todos, action.payload ]//berem tolko todo ottuda witrschnuli i dobawili action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;