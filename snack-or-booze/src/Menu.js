import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem,
} from "reactstrap";

function Menu({ menuType, title }) {
    const urlSlug = title.toLowerCase();
    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {title} Menu
                    </CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </CardText>
                    <ListGroup>
                        {menuType.map((item) => (
                            <Link to={`/${urlSlug}/${item.id}`} key={item.id}>
                                <ListGroupItem>{item.name}</ListGroupItem>
                            </Link>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
    );
}

export default Menu;
