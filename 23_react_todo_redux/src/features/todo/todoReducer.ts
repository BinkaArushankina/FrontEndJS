import Action from "./types/Action";
import TodoState from "./types/todoState";
import todoState from "./types/todoState";

const initialState: todoState[] = [];

export default function todoReducer(
  state: todoState[] = initialState,
  action: Action
): TodoState[] {
  switch (action.type) {
    case "addToDo":
      state.push(action.payload);
      return state;
    case "deleteToDo":
      state = state.filter((obj) => obj.id !== action.payload);
      return state;
    case "editToDo":
      state.map((obj) => {
        if (obj.id === action.payload.id) {
          obj.description = action.payload.description;
        }
      });
      return state;
    default:
      return state;
  }
}


//eto olee prawilnaja wersia so spreadom i witrachiwaniem starogo snatschenia i priawlenie k nemu nowogo, no nado snatj kakismenitj
/*
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
*/