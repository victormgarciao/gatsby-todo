
import React from "react";
import useGlobalHook from "use-global-hook";

import { actions } from "../actions/index.actions";

const initialState = {
    todos: {
        isFetched: false,
        todoList: [],
    },
}

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;