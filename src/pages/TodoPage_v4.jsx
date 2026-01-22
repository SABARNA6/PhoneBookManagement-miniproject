// todoPage_v3
import { useState } from "react";
import Card from "./Card";
function TodoPage_v4(){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [items,setItems] =useState([]);
    const handleAdd= ()=>{
        if ( title.trim() !=""&& desc.trim() !=""){
            items.push({
                title : title,
                desc: desc
            });
            setItems([...items]);
            setTitle("");
            setDesc("");
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
        let newDesc=prompt("Enter the new Description");
        if ( newValue!=null && newValue.trim()!="" && newDesc!=null && newDesc.trim()!=""){
            let temp=[];
            for (let i=0;i<items.length;i++){
                   if(i==idx)
                        temp.push({title: newValue,desc:newDesc});
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
                <section className="flex flex-col justify-center gap-2">
                    <input 
                        className="bg-black border-amber-200 "
                        type="text" 
                        value={title} 
                        onChange={(e)=> setTitle(e.target.value)}
                        placeholder="Enter the Title"
                    />
                    <textarea 
                        rows={5}
                        className="bg-black border-amber-200 "
                        type="text" 
                        value={desc} 
                        onChange={(e)=> setDesc(e.target.value)}
                        placeholder="Enter Description"
                    >
                    </textarea>
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
                                title={value.title}
                                desc={value.desc}
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
export default  TodoPage_v4;