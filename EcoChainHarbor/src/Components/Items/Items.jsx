import { useState } from "react";
import Item from "../Item/Item";
import { useLoaderData } from "react-router-dom";

const Items = () => {
//   const [recipes, setRecipes] = useState([]);
  const [orders, setOrder] = useState([]);
//   const [cooking, setCooking] = useState([]);
  const [showDialog, setShowDialog] = useState({
    show: false,
    message: "",
    progressColor: "",
    iconType: "",
    backgroundColor: "",
  });
  
  const recipes = useLoaderData()

  // console.log(recipes)


  const handleCook = (recipe) => {
    // console.log(recipe)
    const isExist = orders.find((item) => item.recipe_id == recipe.recipe_id);

    if (!isExist) {
      setOrder([...orders, recipe]);

      const svg = `M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`;

      setShowDialog({
        show: true,
        message: "Order received !",
        progressColor: "success",
        iconType: `${svg}`,
        backgroundColor: "bg-green-500",
      });
      setTimeout(() => {
        setShowDialog((prevState) => ({
          ...prevState,
          show: false,
          message: "",
          progressColor: "",
          iconType: "",
          backgroundColor: "",
        }));
      }, 2000);
    } else {
      const svg = `M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z`;

      setShowDialog({
        show: true,
        message: "This recipe is already ordered !",
        progressColor: "error",
        iconType: `${svg}`,
        backgroundColor: "bg-red-600",
      });
      setTimeout(() => {
        setShowDialog((prevState) => ({
          ...prevState,
          show: false,
          message: "",
          progressColor: "",
          iconType: "",
          backgroundColor: "",
        }));
      }, 2000);
    }
  };

//   const handleCurrentlyCooking = (order) => {
//     // console.log(orders)
//     const isExist = cooking.find((item) => item.recipe_id == order.recipe_id);

//     const remaining = orders.filter(
//       (item) => item.recipe_id !== order.recipe_id
//     );

//     if (!isExist) {
//       setOrder(remaining);
//       setCooking([...cooking, order]);

//       const svg = `M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`;

//       setShowDialog({
//         show: true,
//         message: "Preparing Recipe !",
//         progressColor: "success",
//         iconType: `${svg}`,
//         backgroundColor: "bg-lime-600",
//       });
//       setTimeout(() => {
//         setShowDialog((prevState) => ({
//           ...prevState,
//           show: false,
//           message: "",
//           progressColor: "",
//           iconType: "",
//           backgroundColor: "",
//         }));
//       }, 2000);
//     } else {
//       const svg = `M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`;
//       setShowDialog({
//         show: true,
//         message: "Recipe is already being cooked !",
//         progressColor: "primary",
//         iconType: `${svg}`,
//         backgroundColor: "bg-blue-600",
//       });
//       setTimeout(() => {
//         setShowDialog((prevState) => ({
//           ...prevState,
//           show: false,
//           message: "",
//           progressColor: "",
//           iconType: "",
//           backgroundColor: "",
//         }));
//       }, 2000);
//     }
//   };

  return (
    <div>
      {/* Dialog box */}
      {showDialog.show && (
        <div className="dialog fixed top-0 w-screen lg:h-10">
          <div
            role="alert"
            className={`alert alert-${showDialog.progressColor} 
                    ${showDialog.backgroundColor} text-slate-100 font-bold`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={`${showDialog.iconType}`}
              />
            </svg>
            <span>{showDialog.message}</span>
          </div>
          <progress
            className={`progress progress-${showDialog.progressColor} ${showDialog.backgroundColor}`}
          ></progress>
        </div>
      )}

      <div className="container mx-auto p-4 space-y-5 text-center text-white ">
        <h1 className="mt-5 text-5xl font-bold">Our Recipes</h1>
        <p className="text-slate-300">
          Explore a diverse array of meticulously crafted recipes, blending
          traditional flavors with modern twists to inspire culinary adventures
          for all tastes.
        </p>
      </div>
      <div className="container mx-auto flex flex-col-reverse gap-8 md:flex-row ">

        <div className="flex flex-col gap-10 md:flex-row">
          <div className="w-3/2 mt-5 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <Item
                recipe={recipe}
                handleCook={handleCook}
                key={recipe.recipe_id}
              ></Item>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
