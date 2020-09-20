import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Container, ListGroup } from 'reactstrap';
import CommentComponent from './CommentComponent';

class CommentsComponent extends Component {
    state = {
        commentData: []
    }

    fetchCommentsByPost = () => {
        fetch(`/api/v1/comments/byPostId/${this.props.match.params.postNo}`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                commentData: json
            });
        });
    }

    componentDidMount() {
        this.fetchCommentsByPost();
    }

    render() {
        return (
            <Container className="themed-container" fluid="sm">
                <ListGroup>
                    {
                        this.state.commentData.map((comment) => (
                            <CommentComponent key={comment.id} name={comment.name} body={comment.body} />
                        ))
                    }
                </ListGroup>
            </Container>
        );
    }
}

export default withRouter(CommentsComponent);