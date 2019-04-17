import constants from '../constants';

var inistialState = {

}

export default (state = inistialState, action) => {
    let newState = Object.assign({}, state);
    
    switch (action.type) {
        case constants.RSS_FEED_RECIVED:
            newState[action.data.feed.url] = action.data.items;
            return newState;
    
        default:
            return state;
    }

}