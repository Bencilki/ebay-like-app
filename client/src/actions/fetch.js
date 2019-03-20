import request from 'superagent'

export const ADS_FETCHED = 'ADS_FETCHED'
export const AD_CREATE_SUCCESS = 'AD_CREATE_SUCCESS'
export const AD_FETCHED = 'AD_FETCHED'

const baseUrl ='http://localhost:4000'


const adsFetched = advertisements => ({
    type: ADS_FETCHED,
    advertisements
  })
  export const loadAds = () => (dispatch, getState) => {
    // console.log("HREY")
    // when the state already contains ads, we don't fetch them again
    if (getState().advertisements) return
    // a GET /advertisements request
    request(`${baseUrl}/advertisements`)
      .then(response => {
        // dispatch an ADS_FETCHED action that contains the advertisements
        dispatch(adsFetched(response.body))
      })
      .catch(console.error)
  }
  
const adCreateSuccess = advertisement => ({
    type: AD_CREATE_SUCCESS,
    advertisement
  })
  export const createAdvertisement = (data) => dispatch => {
    request
      .post(`${baseUrl}/advertisements`)
      .send(data)
      .then(response => {
        dispatch(adCreateSuccess(response.body))
      })
      .catch(console.error)
  }
  
  
  const adFetched = advertisement =>({
    type: AD_FETCHED,
    advertisement 
  })
  export const loadAd = (id) => (dispatch) => {
    const requestUrl = `${baseUrl}/advertisements/${id}`
    // console.log('requestUrl test:', requestUrl)
    request(requestUrl)
      .then(response => {
        dispatch(adFetched(response.body))
      })
      .catch(console.error)
  }
  