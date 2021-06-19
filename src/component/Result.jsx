import React from 'react';
import {Card,CardImg,CardText,CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './body.css';

const Result = props => {
    return(
        <div>
            <Card className="card">
            <CardImg src={props.result.images} />
                <CardBody>
                    <Link to="/detail" className="link">
                        <CardTitle onClick={props.showResult} className="title">{props.result.title}</CardTitle>
                    </Link>
                    <CardText>{new Date().toDateString()}</CardText>
                    <CardSubtitle>{props.result.subTitle}</CardSubtitle>
                    <Button>Read More&gt;&gt;</Button>
                </CardBody>
            </Card>
        </div>
    )
}
export default Result;