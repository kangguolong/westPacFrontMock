import React, { Component } from 'react';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import PostComponent from './PostComponent'
import { withRouter, Link } from 'react-router-dom'
import { Container, ListGroup } from 'reactstrap';

class WestpacFront extends Component {
    state = {
        postData: []
    };

    fetchPosts = () => {
        fetch(`/api/v1/posts`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                postData: json,
            });
        });
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        return (
            <Container className="themed-container" fluid="sm">
                <ListGroup>
                    {
                        this.state.postData.map((post) => (
                            <Link key={post.id} to={`/comments/${post.id}`}>
                                <PostComponent title={post.title} body={post.body} handleClick={this.clickThePost} />
                            </Link>
                        ))
                    }
                </ListGroup>
            </Container>
        );
    }
}

export default withRouter(WestpacFront);