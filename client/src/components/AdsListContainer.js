import React from 'react'
import {connect} from 'react-redux'
import {loadAds} from '../actions/fetch'
import AdsList from './AdList'

class AdsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds()
  }

  render() {
    // console.log(this.props)
    return <div>
      <h2>Container</h2>
      <AdsList advertisements={this.props.advertisements} />
    </div>
  }
}

const mapStateToProps = state => ({
  advertisements: state.advertisements
})

export default connect(mapStateToProps, {loadAds})(AdsListContainer)