import isNull from 'lodash/isNull';

export const loadState = () => {
    try {
        const serialezedState = localStorage.getItem('state');
        if (isNull(serialezedState)) {
            return undefined;
        }
        return JSON.parse(serialezedState);
    }catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serialezedState = JSON.stringify(state);
        localStorage.setItem('state', serialezedState);
    }catch (err) {
        console.error('localstorage.js', err);
    }
}