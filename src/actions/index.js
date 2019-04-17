import constants from '../constants'
import { TurboClient, HTTPClient } from '../utils'


export default {
	
	fetchRssFeed: (url, params) => {
		return dispatch => {
			return dispatch(HTTPClient.getAsync(url, params, null, constants.RSS_FEED_RECIVED));
		}
	},

	fetchFeeds: (params) => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('feed', params, constants.FEEDS_RECEIVED));
		};
	},

	createFeed: (params) => {
		return dispatch => {
			return dispatch(TurboClient.postRequest('feed',params,constants.FEED_CREATED));
		};
	},

	selectFeed : (feed) => {
		return {
			type : constants.SELECTED_FEED,
			data : feed,
		}
	}

	/*
  // The following are examples of AsyncAction creators (https://redux.js.org/advanced/asyncactions):
  // Feel free to remove and use your own


	createUser: (params) => {
		return dispatch => {
			return dispatch(HTTPClient.postAsync({
				endpoint: '/api/profile',
				params: params,
				headers: null,
				actionType: constants.USER_CREATED
			}))
		}
	},

  // Syncronous Action Creator example:
  userAdded: (user) => {
    return {
      user: user,
      actionType: constants.USER_CREATED
    }
  }

  */

}
