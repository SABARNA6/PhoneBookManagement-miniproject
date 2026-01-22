import '../styles/Calculator.css'
import { useState } from 'react';
function Calculator(){
    const btn= {
        margin:'2px',
        paddingLeft: '2px',
        borderRadius:'3px',
        width:'3rem'
    }
    function calculate(){
        let str=equation;
        let value="";
        let tokens=[];
        for (let i=0;i<str.length;i++){
            if ( str[i]>='1' && str[i]<='9'){
                let digit=0;
                while ( str[i]>='1' && str[i]<='9'){
                    digit=(str[i]-'0')+(digit*10);
                }
                console.log(digit);
            }
        }
        setEquation(tokens);
    }
    const [equation,setEquation]=useState("");
    return (
        <main className='bg-red-400 min-h-screen font-mono flex flex-col justify-center items-center'>
            <h1 className='text-2xl  uppercase'>My Calculator</h1>
            <div className=' m-3 p-3 bg-indigo-300 rounded-2xl flex flex-col '>
                <input 
                    type="text"
                    placeholder='Enter the equation' 
                    className='bg-indigo-50 text-indigo-700 rounded-md p-3 pb-1 pt-1 m-1  text-right'
                    value={equation}
                    onChange={(e)=> setEquation(e.target.value)}
                    />
                <div className='flex flex-col items-center text-indigo-900'>
                    <div className=''>
                        <button style={btn}  className='bg-indigo-200 border-1 border-indigo-600 ' value="(" onClick={ (e)=>{setEquation(equation+e.target.value)}  }  >(</button>
                        <button style={btn}  className='bg-indigo-200 border-1 border-indigo-600 ' value=")" onClick={ (e)=>{setEquation(equation+e.target.value)}  }  >)</button>
                        <button style={btn}  className='bg-indigo-200 border-1 border-indigo-600 ' value="" onClick={ ()=>{setEquation("")}  } >C</button>
                        <button style={btn} className='bg-indigo-200 border-1 border-indigo-600 '  value="" >Del</button>
                    </div>
                    <div>
                        <button style={btn}  className="bg-indigo-200"  value="7" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >7</button>
                        <button style={btn}  className="bg-indigo-200"  value="8" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >8</button>
                        <button style={btn}  className="bg-indigo-200"  value="9" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >9</button>
                        <button style={btn}  className="bg-indigo-200 border-1 border-indigo-600"  value="/" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >/</button>
                    </div>
                    <div>
                        <button style={btn}  className="bg-indigo-200" value="4" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >4</button>
                        <button style={btn}  className="bg-indigo-200" value="5" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >5</button>
                        <button style={btn}  className="bg-indigo-200" value="6" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >6</button>
                        <button style={btn}  className="bg-indigo-200 border-1 border-indigo-600" value="*" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >x</button>
                    </div>
                    <div>
                        <button style={btn} className="bg-indigo-200"  value="1" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >1</button>
                        <button style={btn} className="bg-indigo-200"  value="2" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >2</button>
                        <button style={btn} className="bg-indigo-200"  value="3" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >3</button>
                        <button style={btn} className="bg-indigo-200 border-1 border-indigo-600"  value="-" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >-</button>
                    </div>
                    <div>
                        <button  style={btn} className="bg-indigo-200"  value="0" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >0</button>
                        <button style={btn}  className="bg-indigo-200"  value="." onClick={ (e)=>{setEquation(equation+e.target.value)}  } >.</button>
                        <button  style={btn} className="bg-indigo-200"    >=</button>
                        <button  style={btn} className="bg-indigo-200 border-1 border-indigo-600"  value="+" onClick={ (e)=>{setEquation(equation+e.target.value)}  } >+</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Calculator;