import React from 'react'

const CountOne = ({oneSet, setOneSet}) => {

    const setPlusHandler = e => {
        setOneSet(oneSet + 1)
    }
    const setMinusHandler = e => {
        setOneSet(oneSet - 1)
    }

    return (
        <>
        <div style={{display:'flex', alignItems:'center'}}>
            <button onClick={setPlusHandler} className='plus'>+</button>
            <button onClick={setMinusHandler} className='minus'>-</button>
            <strong style={{padding:'0 1rem'}}>{oneSet}</strong>
        </div>
        </>
    )
}

export default CountOne
