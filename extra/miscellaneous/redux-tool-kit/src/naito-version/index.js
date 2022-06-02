import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './index.module.css'
import {useSelector, useDispatch} from 'react-redux';
//Import actions needed
import {increment,decrement,increaseSpecific,increaseAsync,asyncLongHand} from './counter.reducer';


export function KnightApp()
{
    return(
        <div className={styles.App}>
            {/* SVG Icon */}
            <img src={logo} className="App-logo" alt="logo" />
            <KnightCounter/>
            <div>
                <p>Edit naito-version/Index.js and save to reload.</p>
            </div>
            <span>
                {/* Learn React, Redux Toolkit, and React Redux */}
                <span>Learn </span>
                <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
            >Redux</a>
            </span>
        </div>
    )
}

function KnightCounter(props)
{
    const count = useSelector((state)=>state.foo.foo);
    const dispatch = useDispatch();
    const [amount,setAmount] = useState('2')
    return(
    <div>
        {/* [+] 0 [-] */}
        <div className={styles.Row}>
            <button onClick={()=>dispatch(increment())} className={styles.Button}>+</button>
            <span className={styles.CounterText}>{count}</span>
            <button onClick={()=>dispatch(decrement())} className={styles.Button}>-</button>
        </div>
        {/* [2] [Add Amount] [Add Async] */}
        <div className={styles.Row}>
            <input onChange={e=> setAmount(e.target.value)} className={styles.InputText} value={amount}/>
            <button onClick={()=>dispatch(increaseSpecific(Number(amount)||0))} className={styles.Button}>Add Amount</button>
            {/* Finally, the async button */}
            <button className={styles.asyncButton} onClick={()=>
                {
                    console.log('click')
                    // dispatch(increaseAsync(10) || 1)
                    dispatch(asyncLongHand(50) || 1)
                }}>Add Async</button>
        </div>
    </div>
    )
}