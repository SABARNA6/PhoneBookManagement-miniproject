function Card({id=0, name="Name", phone=[], handleEditBtn, handleDelBtn, handleAddPhone, handleDelPhone}){
    return (
        <div className="flex flex-col p-4 rounded-md gap-4 bg-[#2C3E50] w-64 shadow-md text-white">
            <h3 className="text-xl overflow-hidden text-ellipsis uppercase font-semibold border-b border-slate-700 pb-1">
                {id}.{name}
            </h3>

            <div className="bg-slate-700/50 rounded-sm overflow-hidden">
                <div className="flex justify-between items-center p-2 bg-slate-900">
                    <h4 className="text-xs text-slate-400 uppercase">Phone</h4>
                    <button 
                        className="bg-orange-500 hover:bg-orange-600 text-white text-xs min-w-fit px-3 py-0.5 rounded-sm" 
                        onClick={()=>handleAddPhone(id-1)}
                    >
                        Add
                    </button>
                </div>

                <div className="flex flex-col">
                    {phone.map((value, index) => (
                        <div className="flex justify-between items-center p-2 border-b border-slate-700 last:border-0" key={index}>
                            <div className="text-sm font-mono">
                                <span className="text-orange-400">+{value.country}</span> {value.number}
                            </div>
                            <button 
                                className="flex items-center justify-center w-5 h-5 min-w-0 p-0 bg-red-500 hover:bg-red-600 text-white rounded-sm text-xs" 
                                onClick={() => handleDelPhone(id-1, index)}
                            >
                                -
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2">
                <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold min-w-[70px]" 
                    onClick={()=>handleEditBtn(id-1)}
                >
                    Edit
                </button>
                <button 
                    className="bg-slate-600 hover:bg-red-600 text-white text-sm font-bold min-w-[70px]" 
                    onClick={()=>handleDelBtn(id-1)}
                >
                    Del
                </button>
            </div>
        </div>
    );
}
export default Card;