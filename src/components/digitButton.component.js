import react from 'react';

import { ACTIONS } from './app.component';

export default function DigitButtonComponent({ dispatch, digit }) {
    return <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>;
}
