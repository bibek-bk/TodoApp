
// loadState function tries to load the state from local storage.

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('todos');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };

//   saveState function saves the current state to local storage.

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('todos', serializedState);
    } catch {
      // Ignore write errors
    }
  };
  