import { useState } from "react";
import SnackOrBoozeApi from "./Api";
//TODO - The drinks/snacks pages and menubars aren't re-rendering.

const NewItemForm = ({ addItem, snacks, setSnacks, drinks, setDrinks }) => {
    const INITIAL_STATE = {
        id: "",
        name: "",
        description: "",
        recipe: "",
        serve: "",
    };
    const [menuType, setMenuType] = useState();
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        SnackOrBoozeApi.addItem(menuType, formData);
        setSnacks(await SnackOrBoozeApi.getMenu("snacks"));
        setDrinks(await SnackOrBoozeApi.getMenu("drinks"));
        setFormData(INITIAL_STATE);
    };

    return (
        <form id="itemForm" onSubmit={handleSubmit}>
            {/* <label htmlFor="id">Item id:</label> */}
            <input
                id="id"
                type="text"
                name="id"
                placeholder="Item ID"
                value={formData.id}
                onChange={handleChange}
            />
            <br />
            {/* <label htmlFor="name">Name:</label> */}
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Item Name"
                value={formData.name}
                onChange={handleChange}
            />
            <br />
            {/* <label htmlFor="description">Item Description:</label> */}
            <input
                id="description"
                type="text"
                name="description"
                placeholder="Item Description"
                value={formData.description}
                onChange={handleChange}
            />
            <br />
            {/* <label htmlFor="recipe">Recipe:</label> */}
            <input
                id="recipe"
                type="text"
                name="recipe"
                placeholder="Item Name"
                value={formData.recipe}
                onChange={handleChange}
            />
            <br />
            {/* <label htmlFor="serve">Serving Instructions:</label> */}
            <input
                id="serve"
                type="text"
                name="serve"
                placeholder="Serving Intstructions"
                value={formData.serve}
                onChange={handleChange}
            />
            <br />

            <select
                value={menuType}
                onChange={(e) => setMenuType(e.target.value)}
                form="itemForm"
                name="menuType"
                id="menuType"
                required={true}
            >
                <option value="">--Drink or Snack?--</option>
                <option value="drinks">Drink</option>
                <option value="snacks">Snack</option>
            </select>
            <br />
            <button>Add Item</button>
        </form>
    );
};

export default NewItemForm;
