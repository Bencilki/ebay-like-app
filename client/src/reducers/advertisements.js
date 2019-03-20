import {ADS_FETCHED, AD_CREATE_SUCCESS} from '../actions/fetch'

 const adsFetched = (state = null, action) => {
    switch (action.type) {
      case ADS_FETCHED:
        return action.advertisements;
      case AD_CREATE_SUCCESS:
        return state.concat(action.advertisement)
      default:
        return state;
    }
  }

  export default adsFetched



  // [...state, action.advertisements]