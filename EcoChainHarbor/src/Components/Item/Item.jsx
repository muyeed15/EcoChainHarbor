import { LuClock4 } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";


const Item = ({ recipe,handleCook }) => {

    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;


    return (
        <div className="container mx-auto shadow-lg shadow-white border-2 border-green-200 rounded-2xl  p-10 mb-3 space-y-2">
            <img src={recipe_image} className="w-full h-[300px] rounded-2xl" alt="" />
            <h1 className="text-xl font-bold text-white">{recipe_name}</h1>
            <p className="text-white text-sm opacity-70 mb-2">{short_description} </p>
            <hr className=" border-gray-600" />
            <div>
                <h1 className="text-xl font-bold text-green-500">Ingredients:{ingredients.length}</h1>
                <ul className="p-4">
                    {
                        ingredients.map((ingredient, idx) =>
                            <li type="disc" className="text-white text-sm opacity-60 mb-2" key={idx}
                            >{ingredient}</li>)
                    }
                </ul>
                <hr className=" border-gray-600" />
                <div className="flex gap-4 m-2 ">
                    <div className="flex items-center gap-1">
                        <LuClock4 className="text-sky-500"></LuClock4>
                        {preparing_time} min
                    </div>
                    <div className="flex items-center gap-1">
                        <AiOutlineFire className="text-green-500" size={20}></AiOutlineFire>
                        {calories} calories
                    </div>
                </div>
                <button onClick={()=>handleCook(recipe)} className="btn hover:bg-purple-400 border-none bg-green-500 text-black font-bold rounded-full">Want to Cook</button>
            </div>
        </div>
    );
};


export default Item;