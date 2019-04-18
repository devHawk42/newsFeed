import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feed extends Component {
    render() {
        const selectedFeed = this.props.feed.selected;
        let firstDesc = <div>
            <h3>This is a Web App built with react-redux! Try to add a new feed on the sidebar:</h3><br/>
            <h4>Feed Name:</h4> <p>Reddit-Programming</p>
            <h4>Feed Url:</h4> <p>https://www.reddit.com/r/programming.rss</p>
        </div>;
        
        let feedName = 'Welcome to NewsFeed';
        let mainDesc = (selectedFeed) ? 'Here you will see the latest news from your favorite sites!' : firstDesc;
        let items = [];

        if(selectedFeed){
            name = selectedFeed.name;
            items = (this.props.rss[selectedFeed.url]) ? this.props.rss[selectedFeed.url] : [] ;
        };
        //TODO: Remove a feed
        //contact email: dkwon@velocity360.io
        return (
            <div className="content">
                <header>
                    <h1>{feedName}</h1>
                    <hr/>
                    <p>{mainDesc}</p>
                </header>
                <ol>
                    {items.map((item,i) => {
                        return (
                            <li style={style.li}><a style={style.link} target="_blank" href={item.link}> {item.title} </a></li>      
                        );
                    })}
                </ol>
            </div>
        );
    }
}

const style = {
    link:{
        textDecoration: 'none',
        border: 'none',
        color:'blue',
        fontSize:'larger'
    },
    li:{
        marginBottom: '25px'
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