import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import {HTTPClient} from '../../utils/';

class Feeds extends Component {
    constructor(props){
        super(props);
        this.state = {
            feeds:[],
            feed:{
                name:'',
                url:''
            }
        };
    };

    componentDidMount() {
        this.props.fetchFeeds(null)
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            alert(err)
        })
    }

    selectFeed(feed, event){
        event.preventDefault();
        this.props.selectFeed(feed);

        const items = this.props.rss[feed.url];

        //TODO: check if there is an update every 15' or so;

        if (items != null) { //we already have the data!
            return console.log(this.props.rss[feed.url])
        }

        //https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/hacker-daily/tagged/hacker-news
        const endpoint = 'https://api.rss2json.com/v1/api.json';
        const params = {
            rss_url : feed.url
        }

        this.props.fetchRssFeed(endpoint, params)
        .then(data => {
            console.log("rssFeedReached: ", data)
        })
        .catch(err => {
            alert(err)
        })
    }
    render() {
        const feeds = this.props.feed.all || [];

        return (
            <ul>
                {feeds.map((feed, i) => {
                    const color = (feed == this.props.feed.selected) ? 'red' : '#333'
                    return <li key = {feed.id}>
                    <a style={{color:color}} onClick={this.selectFeed.bind(this, feed)} href="#">{feed.name}</a></li>
                })}
            </ul>
        );
    }
}

const stateToProps = (state) => {
    return {
        feed: state.feed,
        rss: state.rss
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
        createFeed: (params) => dispatch(actions.createFeed(params)),
        selectFeed: (feed) => dispatch(actions.selectFeed(feed)),
        fetchRssFeed: (url, params) => dispatch(actions.fetchRssFeed(url, params))
    }
}

export default connect(stateToProps, dispatchToProps)(Feeds);