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
        <section className="col-md-6">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {title} Menu
                    </CardTitle>
                    <CardText className="text-center">
                        Check out our menu of delicious snacks!
                    </CardText>
                    <ListGroup>
                        {menuType.map((item) => (
                            <Link to={`/${urlSlug}/${item.id}`} key={item.id}>
                                <ListGroupItem>- {item.name}</ListGroupItem>
                            </Link>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
    );
}

export default Menu;
