import React from 'react';
import { ACTIONS } from './app.component';

const OperationButtonComponent = ({ dispatch, operation }) => {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
            {operation}
        </button>
    );
};
export default OperationButtonComponent;
