import { useState } from "react";
export default function TodoPage_v2(){
    const [inputValue, setInputValue] = useState("");
    const [items,setItems] = useState([]);
    // function handleInput(event){
    //     const value= event.target.value;
    //     setInputValue(value);
    // }
    function handleAdd(){
        if (inputValue.trim() !=""){
            items.push(inputValue.trim());
            // setItems(items);
            // // setInputValue("");
            setItems([...items]);
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
                        className="bg-red-600 text-white"
                    >
                         Add 
                    </button>
                </section>
                <section>
                    <div>
                        <ol className="list-decimal pl-5"> 
                            {
                                items.map( (value,index) => {
                                    return <li key={index}>{value}</li>;
                                } )
                            }
                        </ol>
                    </div>
                    
                </section>
            </main>
        </>
    );

}
