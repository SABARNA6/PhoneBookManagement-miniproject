import { useState } from "react";
export default function TodoPage(){
    const [inputValue, setInputValue] = useState("");
    const [items,setItems] = useState("");
    // function handleInput(event){
    //     const value= event.target.value;
    //     setInputValue(value);
    // }
    function handleAdd(){
        if (inputValue.trim() !=""){
        setItems(items+  inputValue.trim()+ ' , ');
        setInputValue("");
        } 
    }
    return (
        <>
            <main>
                <h1>To Do Application</h1>
                <section>
                    {/* <input type="text"  value={inputValue} onChange={handleInput} /> */}
                    <input 
                        type="text"  
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                    />
                    <br></br>
                    <button
                        onClick={handleAdd}
                    >
                         Add 
                    </button>
                </section>
                <section>
                    <div>
                        {items}
                    </div>
                    
                </section>
            </main>
        </>
    );

}
