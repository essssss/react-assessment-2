import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./MenuItem.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

function MenuItem({ items, cantFind }) {
    const { id } = useParams();

    let item = items.find((snack) => snack.id === id);
    if (!item) return <Redirect to={cantFind} />;

    return (
        <section className="col-md-6">
            <Card className="MenuItem-card">
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {item.name}
                    </CardTitle>
                    <CardText className="font-italic">
                        {item.description}
                    </CardText>
                    <p>
                        <b>Recipe:</b> {item.recipe}
                    </p>
                    <p>
                        <b>Serve:</b> {item.serve}
                    </p>

                    <Link to="/" style={{ color: "#22491d" }}>
                        <p>DELETE ITEM</p>
                    </Link>
                </CardBody>
            </Card>
        </section>
    );
}

export default MenuItem;
