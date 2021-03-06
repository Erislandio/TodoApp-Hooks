export const appReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          completed: false
        }
      ];
    }
    case "delete": {
      return state.filter(item => item.id !== action.payload);
    }
    case "reset": {
      return action.payload;
    }
    case "change": {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            text: action.value
          };
        }
        return item;
      });
    }
    case "completed": {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    }
    default:
      return state;
  }
};
