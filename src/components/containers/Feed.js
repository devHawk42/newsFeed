import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap';

class Feed extends Component {
    render() {
        const selectedFeed = this.props.feed.selected;
        
        let feedName = 'Welcome to NewsFeed';
        let items = [];

        if(selectedFeed){
            name = selectedFeed.name;
            items = (this.props.rss[selectedFeed.url]) ? this.props.rss[selectedFeed.url] : [] ;
        };
        //TODO: 1.Render every feed on cards, and open on modals.
        //2. Remove a feed
        //contact email: dkwon@velocity360.io
        return (
            <div className="content">
                <header>
                    <h1>{feedName}</h1>
                    <hr/>
                    <p>A free and fully responsive site template</p>
                </header>
                <ol>
                    {items.map((item,i) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        feed: state.feed,
        rss : state.rss
    }
}

const dispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(stateToProps, dispatchToProps)(Feed);