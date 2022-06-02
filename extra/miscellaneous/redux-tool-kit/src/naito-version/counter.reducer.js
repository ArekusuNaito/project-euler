import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice(
    {
        name:"Counter",
        initialState:{
            foo:0
        },
        reducers:
        {
            increment: (state)=>
            {
                state.foo+=1
            },
            decrement: (state)=>
            {
                state.foo-=1
            },
            increaseSpecific:(state,action)=>
            {
                state.foo+=action.payload
            }
        }
    }
)

//Export actions, which were handled in slice
export const {increment,decrement,increaseSpecific} = counterSlice.actions;

export const increaseAsync = (amount)=>dispatch=>
{
    setTimeout(()=>
    {
        console.log('Short-hand',amount)
        dispatch(increment())
    }, 1000)
}

export function asyncLongHand(amount)
{
    return function dispatcher(dispatch)
    {
        setTimeout(() => 
        {
            console.log('Long-hand',amount)
            dispatch(increment())
        }, 1000);
    }
}


export default counterSlice.reducer;