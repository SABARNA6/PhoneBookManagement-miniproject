import { useState } from "react";

function Counter_v2(){
    const [count ,setCount] =useState(0);
    // function handleIncre(){
    //     setCount(count + 1);
    // }
    // function handleDecre(){
    //     setCount(count - 1);
    // }
    function handleClick(x){
        setCount(count +x);
    }
    return (
        <>
        <div className=" font-mono border-2 m-2 p-2 rounded-md w-fit text-center border-grey-900 shadow-sm shadow-gray-500 bg-white  ">
            <h1 className="text-gray-700 font-bold" >Count : <span className="w-2"> {count } </span></h1>
            {/* <button className=" transition-all duration-75 border-2 m-2 px-2 active:shadow-sm shadow-md shadow-gray-500 bg-green-400  border-gray-700 rounded-md" onClick={handleIncre}> Incre</button>
            <button className=" transition-all duration-75 border-2 m-2 px-2 active:shadow-sm  shadow-md shadow-gray-500 bg-yellow-400 border-gray-700 rounded-md" onClick={handleDecre}>Decre</button> */}
            <button className=" transition-all duration-75 border-2 m-2 px-2 active:shadow-sm shadow-md shadow-gray-500 bg-green-400  border-gray-700 rounded-md" onClick={() => handleClick(+1)}> Incre</button>
            <button className=" transition-all duration-75 border-2 m-2 px-2 active:shadow-sm  shadow-md shadow-gray-500 bg-yellow-400 border-gray-700 rounded-md" onClick={() => handleClick(-1)}>Decre</button>
        </div>
        </> 
    );
}
export default Counter_v2;