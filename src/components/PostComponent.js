import React from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const PostComponent = (props) => (
    <ListGroupItem tag="button" action onClick={props.handleClick}>
        <ListGroupItemHeading>{props.title}</ListGroupItemHeading>
        <ListGroupItemText>{props.body}</ListGroupItemText>
    </ListGroupItem>
);

export default PostComponent;