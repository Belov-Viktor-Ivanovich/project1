import React, { Component } from 'react'

export default class Vacancy extends Component {
  render() {
    return (
      <div className='Spisok' >
        <div className="vacansia">
        Java-developer
            <div>
                <li>Aston</li>
                <li>Яндекс</li>
            </div>
            
            .NET-developer
            <div>
                <li>Aston</li>
            </div>
            React-developer
            <div>
                <li>Aston</li>
                <li>Яндекс</li>
                <li>ВТБ</li>
            </div>
        </div>
      </div>
    )
  }
}
