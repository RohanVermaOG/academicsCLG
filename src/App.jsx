import { useState } from 'react'
import Bca from './Courses/Bca'
import Ba from './Courses/Ba'
import Bcom from './Courses/Bcom'
import Bsc from './Courses/Bsc'
import BBa from './Courses/BBA'
import Bvoc from './Courses/Bvoc'



function App() {
  const [degree, setDegree] = useState('BA')
const renderCourseComponent = () => {
  switch (degree) {
    case 'BA':
      return <Ba />;
    case 'BCom':
      return <Bcom />;
    case 'BSc':
      return <Bsc />;
    case 'BBA':
      return <BBa />;
    case 'BCA':
      return <Bca />;
    case 'BVOC':
      return <Bvoc />;
    default:
      return null;
  }
}

  return (
    <>
      <div>
        <label htmlFor="degree">Choose degree: </label>
        <select
          id="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        >
          <option value="BA">BA</option>
          <option value="BCom">BCom</option>
          <option value="BSc">BSc</option>
          <option value="BBA">BBA</option>
          <option value="BCA">BCA</option>
          <option value="BVOC">BVOC</option>
        </select>
        <div>
          {renderCourseComponent()}
        </div>
      </div>
     
    </>
  )
}

export default App
