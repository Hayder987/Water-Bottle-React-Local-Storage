

const Bottle = ({bottle, cartbtnHandellar}) => {
    const {img,name,price,stock} = bottle;

    return (
        <div className="border-2 p-4 rounded-xl">
            <h1 className="text-xl font-bold text-center mb-3">{name}</h1>
            <div className="mb-3">
              <img src={img} alt="" className="rounded-lg object-cover" />
            </div>
            <p className="text-gray-500">
                <span className="font-bold">Price:</span> {price}
            </p>
            <p className="text-gray-500 mb-4"><span className="font-bold">Stock:</span>
             {stock}
            </p>
            <div className="text-center">
               <button onClick={()=> cartbtnHandellar(bottle)} className="bg-blue-300 py-2 px-6 rounded-lg font-semibold">Add to Cart</button>
            </div>
        </div>
    );
};

export default Bottle;