import React from 'react'
import Header from './Header'
import Profile from './Profile'
import FriendSuggestion from './FriendSuggestion'
import Feed from './Feed'

export default function Grid () {
  
  return (

    <div className="container">
      <div className="item"><Header /></div>
      <div className="item"><Profile /></div>
      <div className="item"><Feed /></div>
      <div className="item"><FriendSuggestion /></div>
      {/* <div className="item">5</div>
      <div className="item">6</div> */}
    </div>
  )
}