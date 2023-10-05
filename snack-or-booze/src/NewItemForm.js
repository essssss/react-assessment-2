import { useState } from "react";
import SnackOrBoozeApi from "./Api";
import { Button, Card, CardBody, FormGroup, Input } from "reactstrap";
import "./NewItemFrom.css";
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
        <Card className="col-md-6">
            <CardBody>
                <FormGroup className="NewItemForm-formGroup">
                    <form id="itemForm" onSubmit={handleSubmit}>
                        {/* <label htmlFor="id">Item id:</label> */}
                        <Input
                            id="id"
                            type="text"
                            name="id"
                            placeholder="Item ID"
                            value={formData.id}
                            onChange={handleChange}
                            required={true}
                        />
                        <br />
                        {/* <label htmlFor="name">Name:</label> */}
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Item Name"
                            value={formData.name}
                            onChange={handleChange}
                            required={true}
                        />
                        <br />
                        {/* <label htmlFor="description">Item Description:</label> */}
                        <Input
                            id="description"
                            type="textarea"
                            name="description"
                            placeholder="Item Description"
                            value={formData.description}
                            onChange={handleChange}
                            required={true}
                        />
                        <br />
                        {/* <label htmlFor="recipe">Recipe:</label> */}
                        <Input
                            id="recipe"
                            type="textarea"
                            name="recipe"
                            placeholder="Recipe"
                            value={formData.recipe}
                            onChange={handleChange}
                            required={true}
                        />
                        <br />
                        {/* <label htmlFor="serve">Serving Instructions:</label> */}
                        <Input
                            id="serve"
                            type="textarea"
                            name="serve"
                            placeholder="Serving Intstructions"
                            value={formData.serve}
                            onChange={handleChange}
                            required={true}
                        />
                        <br />

                        <Input
                            type="select"
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
                        </Input>
                        <br />
                        <Button color="light">Add Item</Button>
                    </form>
                </FormGroup>
            </CardBody>
        </Card>
    );
};

export default NewItemForm;
