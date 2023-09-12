
import './App.css';
import Student from './components/student/Student';


// function App() {
//   return (
//     <div className="wrapper">
//       <Student
//         studentName="Козлов Виктор"
//         studentMark="3.6"
//         status={true}
//       />
//       <Student
//         studentName="Белов Виктор"
//         studentMark="3.6"
//         status={true}
//       />
//       <Student
//         studentName="Петров Виктор"
//         studentMark="3.6"
//         status={false}
//         />
//       <Student
//         studentName="Иванов Виктор"
//         studentMark="3.6"
//         status={false}
//       />
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Vacancy from './components/vacancy/Vacancy';
import Gallery from './components/gallery/Gallery';

export default function App() {
  return (
    <div>
      <h1>Галерея</h1>
      <div className="cards">
      <Gallery
      pic="https://cojo.ru/wp-content/uploads/2022/12/milye-kotiki-na-avu-14.webp"
      name="Вася"
      age={23}
      gender={true}
      />
      <Gallery
      pic="https://cojo.ru/wp-content/uploads/2022/12/milye-kotiki-na-avu-14.webp"
      name="Вася"
      age={23}
      gender={true}
      />
      <Gallery
      pic="https://cojo.ru/wp-content/uploads/2022/12/milye-kotiki-na-avu-14.webp"
      name="Вася"
      age={23}
      gender={false}
      />
      <Gallery
      pic="https://cojo.ru/wp-content/uploads/2022/12/milye-kotiki-na-avu-14.webp"
      name="Вася"
      age={23}
      gender={false}
      />
      </div>
    </div>
    
  )
}


