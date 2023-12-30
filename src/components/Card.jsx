import React, { useState, useEffect } from 'react'

function Card(props) {
    let [count, setCount] = useState(0)
    const [reached, setReached] = useState(false);

    useEffect(() => {
      if (count === 33) {
        setReached(true);

        setTimeout(()=>
         setReached(false), 5000
        )
      }
    }, [count]);



  return (
    <div>
        <div className="card">
            <div className="head"><h2>{props.dikr}</h2></div>
            <div className="count-zone">{count}</div>
            <div className="functions">
                <button onClick={()=> {if(count>0){setCount(count-1)}}}>-</button>
                <button onClick={()=> {if(count<33){setCount(count+1)}}}>+</button>
            </div>
            <button className='reset' onClick={()=> setCount(count =0)}>اعادة الضبط</button>
        </div>

       {reached && (
          <div className="message">
            <p>!{props.dikr} تــــــمـــــت 33 مــــرة</p>
          </div>
       )}
    </div>
  )
}

export default Card