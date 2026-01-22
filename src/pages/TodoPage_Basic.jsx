// todoPage_v3
import { useState } from "react";
import Card from "./Card";
function TodoPage_Basic(){
    const [inputValue, setInputValue] = useState("");
    const [items,setItems] =useState([]);
    const handleAdd= ()=>{
        if ( inputValue.trim() !=""){
            items.push(inputValue.trim());
            setItems([...items]);
            setInputValue("");
        }
    }
    const handleDelete=function (idx) {
        let temp= [];
        for (let i=0;i <items.length;i++){
            if ( idx!= i){
                temp.push(items[i])
            }
        }
        setItems(temp);
    }
    function handleEdit(idx){
        let newValue =prompt("Enter New Title");
        if ( newValue!=null && newValue.trim()!=""){
            let temp=[];
            for (let i=0;i<items.length;i++){
                   if(i==idx)
                        temp.push(newValue);
                   else 
                        temp.push(items[i]);
            }
            setItems(temp);
        }else
            alert("Enter Valid Value ");

    }
    return (
        <>
           <main className=" font-mono  min-h-screen w-screen   flex flex-col  justify-center items-center  shadow-md shadow-amber-300">
                <h1 className="text-red-500 uppercase">To do Application</h1>
                <section className="">
                    <input 
                        className="bg-zinc-300 border-amber-200 "
                        type="text" 
                        value={inputValue} 
                        onChange={(e)=> setInputValue(e.target.value)}
                    />
                    <button 
                    className="bg-green-700 text-white "
                    onClick={handleAdd}> Add </button>
                </section>
                <section>
                    {
                        items.map( (value,index)=>{
                             return <Card 
                                id={index+1} 
                                key={index} 
                                title={value}
                                handleDelBtn={handleDelete}
                                handleEditBtn={handleEdit}
                             />
                        } )
                    }
                </section>
           </main>
        </>
    );
}
export default  TodoPage_Basic;