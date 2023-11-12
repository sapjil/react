import React from 'react'

const CountTwo = ({twoSet, setTwoSet}) => {

    const setPlusHandler = e => {
        setTwoSet(twoSet + 1)
    }
    const setMinusHandler = e => {
        setTwoSet(twoSet - 1)
    }

    return (
        <>
            <div style={{display:'flex', alignItems:'center'}}>
                <button onClick={setPlusHandler} className='plus'>+</button>
                <button onClick={setMinusHandler} className='minus'>-</button>
                <strong style={{padding:'0 1rem'}}>{twoSet}</strong>
            </div>
        </>
    )
}

export default CountTwo
