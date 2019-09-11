import React from 'react'
import List from './List'
import { getAdvertisements } from '../actions/getAdvertisements'
import { connect } from 'react-redux'

class Container extends React.Component {

  componentDidMount(){
    this.props.getAdvertisements()  
  }

  render(){
    if(!this.props.advertisements) return 'Loading plants...'
    return <List advertisements={this.props.advertisements} />  
  }
}

const mapStateToProps = (state) => {
  return {
    advertisements: state.advertisement.payload.advertisements
  }
}
console.log(mapStateToProps)
export default connect(mapStateToProps, {getAdvertisements})(Container)