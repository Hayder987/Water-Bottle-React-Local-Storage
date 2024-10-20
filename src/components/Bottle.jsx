

const Bottle = ({bottle}) => {
    const {img} = bottle;
    return (
        <div className="border-2 p-4 rounded-xl">
            <div className="">
              <img src={img} alt="" className="rounded-lg object-cover" />
            </div> 
        </div>
    );
};

export default Bottle;