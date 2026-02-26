import React, { useState } from 'react'
import bcaData from '../ClassData/bcaData'

const Bca = () => {
    const[selectedSem,setSelectedSem] = useState();
      const currentData = bcaData.find(item => item.semester === selectedSem);
  return (
       <div className="p-4">
      {/* 1. The Navigation Buttons */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3, 4, 5, 6].map(num => (
          <button 
            key={num}
            onClick={() => setSelectedSem(num)}
            className={selectedSem === num ? 'bg-blue-400 text-white':undefined}
          >
            Semester {num}
          </button>
        ))}
      </div>

      {/* 2. Accessing the Nested Data */}
      {currentData ? (
        <div className="semester-card">
          <h2>Displaying Semester {currentData.semester}</h2>
          <hr />
          <ul>
            {currentData.subjects.map((sub) => (
              <li key={sub.code} className="subject-item">
                <span className="code">{sub.code}</span>
                <span className="name">{sub.name}</span>
                <span className="type-tag">{sub.type}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please select a semester to see the subjects.
          <span>hwwwlo</span>
        </p>
      )}
    </div>
  )
}

export default Bca