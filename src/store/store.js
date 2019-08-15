
import React from "react";
import useGlobalHook from "use-global-hook";

import { actions } from "../actions/index";
import { generateString } from "../utils/global";

const initialState = {
    todos: [
        {
            description: 'Apples',
            isChecked: false,
            id: generateString(),
        },
        {
            description: 'Pears',
            isChecked: true,
            id: generateString(),
        },
        {
            description: 'Bananas',
            isChecked: false,
            id: generateString(),
        },
    ],
}

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;