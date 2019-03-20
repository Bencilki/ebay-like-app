import {AD_FETCHED} from '../actions/fetch'

const adFetched = (state = null, action) => {
    switch (action.type) {
      case AD_FETCHED:
        return  action.advertisement;
      
      default:
        return state;
    }
}

export default adFetched