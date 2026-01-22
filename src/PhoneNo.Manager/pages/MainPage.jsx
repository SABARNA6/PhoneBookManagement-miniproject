import { useState } from "react";
import Card from "../components/Card";

function MainPage(){
    /*
        {
            name: " Default name",
            phone: [ {country: "+91" , number:"1234567891"}]
        }
    */
    const [phBook,setPhBook]=useState([]);
    const [name,setName]=useState("");
    const [c , setC]=useState("");
    const [number,setNumber]=useState("");
    function handleAdd(){
        if (number!="" && c!=""&& name!=""){
        let phone ={country: c,number:number};
        let obj={ name: name ,phone:[phone] };

        phBook.push(obj);
        setPhBook([...phBook]);
        console.log(phBook);
        setC("");
        setName("");
        setNumber("");
        }
        else alert("Invalid Input")
    }
    function handleEdit(indx){
        let name=prompt("Original Name : "+phBook[indx].name+"\n New One");
        let ph=[];
        for (let i=0;i<phBook[indx].phone.length;i++){
            let input=prompt("Old:\n"+phBook[indx].phone[i].country+" "+phBook[indx].phone[i].number+" :\nNewOne(seperated by comma):");
            input=input.split(",");
            console.log("Input: "+input[0]);
            
            if (input.length==2 && input[0]!="" && input[1]!="")
            {
                ph.push({country:input[0],number:input[1]});
            }
            else{
                alert("Enter Valid One");
            }

        }
            if ( name!="" && ph.length>=1)
            {
                phBook[indx].name=name;
                phBook[indx].phone=ph;
                setPhBook([...phBook]);
                console.log(phBook);
            }
        }
    function handleDel(indx){
        let temp=[];
        for (let i=0;i<phBook.length;i++){
            if ( i!=indx)
             temp.push(phBook[i])
        }
        setPhBook(temp);
        console.log(phBook);

    }
    function handleAddPhone(indx){
        let co =prompt("Country Code: ");
        let nu =prompt("Number: ");
        if ( co!=null && co.trim()!="" && nu!=null &&nu.trim()!=""){
            phBook[indx].phone.push({country:co,number:nu});
            setPhBook([...phBook]);
        }else 
            alert("Invalid Input");
    }
    function handleDelPhone(id,index){
        if ( phBook[id].phone.length<=1){
            let temp=[];
            for (let i=0;i<phBook.length;i++){
                if ( i!=id)
                temp.push(phBook[i])
            }
            setPhBook(temp);
        }else
        {
           let temp=[];
            for (let i=0;i<phBook[index].phone.length;i++){
                if ( i!=id)
                temp.push(phBook[index].phone[i]);
            } 
            setPhBook([...phBook]);
        }
    }
    return (
        <>
            <div className="min-h-screen p-4">
            <main className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
                <h1 className="text-3xl uppercase font-black tracking-widest text-slate-200">
                    Phone Number Manager
                </h1>

                {/* Styled Input Section */}
                <section className="w-full max-w-md flex flex-col gap-4 p-6 rounded-lg bg-[#2C3E50] shadow-xl">
                    <div className="flex flex-col gap-2">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="w-full bg-slate-600 border-none outline-none focus:ring-2 focus:ring-orange-500"
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                        />
                        <div className="flex gap-1">
                            <input 
                                type="text" 
                                placeholder="Country Code" 
                                className="w-24 bg-slate-600 border-none outline-none focus:ring-2 focus:ring-orange-500" 
                                value={c}
                                onChange={(e)=> setC(e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="PhoneNumber"  
                                className="flex-1 bg-slate-600 border-none outline-none focus:ring-2 focus:ring-orange-500" 
                                value={number}
                                onChange={(e)=> setNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <button 
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 shadow-md" 
                        onClick={handleAdd}
                    >
                        Add
                    </button>
                </section>

                <section className="flex flex-wrap justify-center gap-4 w-full">
                    {phBook.map((val, idx) => (
                        <Card 
                            key={idx} 
                            id={idx + 1} 
                            phone={val.phone} 
                            name={val.name} 
                            handleEditBtn={handleEdit}
                            handleDelBtn={handleDel}
                            handleAddPhone={handleAddPhone}
                            handleDelPhone={handleDelPhone}
                        />
                    ))}
                </section>
            </main>     
        </div>   
        </>
    );
}
export default MainPage;