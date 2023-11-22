import React, { Component } from 'react'
import Reviews from '../reviews/Reviews'
import Headshot from '../Headshot'

export class ReviewSection extends Component {
  render() {
    return (
      <div className='flex'>
        <Reviews />
        <Headshot />
      </div>
    )
  }
}

export default ReviewSection