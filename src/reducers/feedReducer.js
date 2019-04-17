import constants from '../constants'

var initialState = {
    all: null,
    selected: null,
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

        case constants.FEEDS_RECEIVED:
            newState['all'] = action.data
            return newState;
            
        case constants.FEED_CREATED:
            //initialState.all could be null, if so assign [].
            let all = (newState.all) ? Object.assign([], newState.all) : [];
            all.unshift(action.data);
            newState['all'] = all;
            return newState;

        case constants.SELECTED_FEED:
            newState['selected'] = action.data;
            return newState;
            
        default:
			return state;
	}
}