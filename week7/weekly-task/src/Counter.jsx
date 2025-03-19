import { useReducer } from "react"
const LIMIT = 100
const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return action.payload.length <= LIMIT ? { text: action.payload, count: action.payload.length } : state
        default:
            return state
    }
}
const Counter = () => {

    const [state, dispatch] = useReducer(reducer, { text: '', count: 0 })
    const percentage = (state.count / LIMIT) * 100
    return (
        <div>
            <h2>Character Counter</h2>

            <textarea
                value={state.text}
                name="counter"
                rows='8'
                cols='30'
                onChange={(e) => dispatch({ type: 'update', payload: e.target.value })}
                id="counter"></textarea>
            <div>
                <progress value={state.count} max={LIMIT}>{percentage} %</progress>
                <p>{state.count >= 90 && 'warning 90% limit reached'}</p>
                <p>Character Count: {state.count}/100</p>
            </div>

        </div>
    )
}

export default Counter