import React, { Component } from 'react'
import './Student.css'
export default class Student extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <div>
{(!this.props.status) ? (<div className="card">
        <div className="cardName">
        {this.props.studentName}
        </div>
        <div className="cardDes">
        {this.props.studentMark}
        </div>
        <div style={{backgroundColor:(this.props.status) ? "green" : "red"}}>
            {(this.props.status) ? "online" : "offline"}
        </div>
      </div>) : null}
        </div>
        
      
    )
  }
}

