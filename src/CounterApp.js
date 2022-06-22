//2 clse udemy
import {useState} from 'react'
import Proptypes from 'prop-types'
const CounterApp = ({value}) => {

    //hook
    const  [counter,setCounter] = useState(0)
    

    const handleAdd = ()=>{
            //setCounter(counter+1);
            setCounter((c)=> c+1);
 
            console.log(counter);
    }
    const handleSubstract = ()=>{
        //setCounter(counter+1);
        setCounter((c)=> c-1);

        console.log(counter);
}

const handleReset = ()=>{
    //setCounter(counter+1);
    setCounter((c)=> c-c);

    console.log(counter);
}

    return (
    <>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>
   <button onClick={handleAdd}> +1</button>
   <button onClick={handleSubstract}> -1</button>
   <button onClick={handleReset}>Reset</button>
    </>)
    
}

CounterApp.propTypes={
    value: Proptypes.number.isRequired
}
CounterApp.defaultProps={
    value: 0
}

export default CounterApp;