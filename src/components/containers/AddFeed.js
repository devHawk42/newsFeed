import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class AddFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeds:[],
            feed:{
                name:'',
                url:''
            }
        };
    }

    updateFeed(field, event){
        let feed = Object.assign({}, this.state.feed);
        feed[field] = event.target.value;

        this.setState({
            feed: feed
        });
    };

    addFeed(event){
        event.preventDefault();
        this.props.createFeed(this.state.feed)
        .then(data => {
            this.setState({ 
                feed : {
                    name : '',
                    url : ''
                }
            });
        })
        .catch(err => {
            alert(err)
        })
    }
    
    render() {
        return (
            <form method="post" action="#">
                <input onChange={this.updateFeed.bind(this, 'name')} value={this.state.feed.name} type="text" name="query" id="query" placeholder="Feed Name" /><br />
                <input onChange={this.updateFeed.bind(this, 'url')} value={this.state.feed.url} type="text" name="query" id="query" placeholder="Feed URL" /><br />
                <button onClick={this.addFeed.bind(this)}>Add Feed</button>
            </form>
        );
    }
}

const stateToProps = (state) => {
    return {
        feed: state.feed
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
        createFeed: (params) => dispatch(actions.createFeed(params))
    }
}

export default connect(stateToProps, dispatchToProps)(AddFeed);