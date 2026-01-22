function Card({
    id=0,
    title ="default title ",
    desc="default description",
    handleDelBtn ,
    handleEditBtn
}){
    return (
        <>
            <div className=" min-w-sm max-w-sm bg-blue-200 m-2 p-4 rounded-sm">
                <h3 className="font-semibold uppercase text-2xl">{id} {title}</h3>
                <p className="p-2 pb-4 text-gray-700">{desc}</p>
                <div className="flex justify-end gap-2">
                    <button className="bg-orange-400 text-white" onClick={()=> handleEditBtn(id-1)}>Edit</button>
                    <button className="bg-red-500  text-white" onClick={()=> handleDelBtn(id-1)}>Delete</button>
                </div>
            </div>
        </>
    );
}
export default Card;