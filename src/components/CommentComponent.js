import React from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const CommentComponent = (props) => (
    <ListGroupItem>
        <ListGroupItemHeading>{props.name}</ListGroupItemHeading>
        <ListGroupItemText>{props.body}</ListGroupItemText>
    </ListGroupItem>
);

export default CommentComponent;