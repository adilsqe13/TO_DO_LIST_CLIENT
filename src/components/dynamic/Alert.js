import React, {useContext} from 'react';
import taskContext from '../../CONTEXT/context/taskContext';

export default function Alert() {
    const {alert} = useContext(taskContext);
    return (
        <>
            {alert && <div className={`alert alert-${alert.type} alert-style`} role="alert">
                <strong>{alert.Success}</strong>: {alert.msg}
            </div>}
        </>
    )
}