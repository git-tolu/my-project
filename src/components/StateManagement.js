import {useReducer} from 'react'
const reduce = (state, action) => {
    if (action.type === 'ride') return {money: state.money + 10}
    if (action.type === 'fuel') return {money: state.money - 50}
    return new Error();
}

function Reducer() {
    const initialState = {money: 100};
    const [state, dispatch] = useReducer(reduce, initialState)
    return(
        <>
            <div className='justify-center mx-auto text-center align-middle'>
                <h1 className='text-lg leading-6 text-slate-900'> Wallet: {state.money}</h1>
                <button className='px-2 py-1 m-1 text-white bg-blue-400 rounded hover:bg-blue-500' onClick={() => {dispatch({type: 'ride'})}}>A New Customer</button>
                <button className='px-2 py-1 text-white bg-blue-400 rounded hover:bg-blue-500' onClick={() => {dispatch({type: 'fuel'})}}>Refill The Tank</button>
            </div>
        </>
    )
}

export default Reducer