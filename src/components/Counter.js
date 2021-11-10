import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux';

const Counter = (props) => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);
    return (
        <div>
            <h1>Sample App</h1>
            <button onClick={()=> dispatch({type: 'INCREMENT'})}> {count}</button>
           
        </div>
    )
}

export default connect()(Counter);
