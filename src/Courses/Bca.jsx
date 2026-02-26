import React, { useState } from 'react'
import bcaData from '../ClassData/bcaData'

const Bca = () => {
  const [selectedSem, setSelectedSem] = useState(null);
  const currentData = bcaData.find(item => item.semester === selectedSem);

  return (
    <div className="p-4 max-w-3xl mx-auto text-gray-100">
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[1, 2, 3, 4, 5, 6].map(num => (
          <button
            key={num}
            onClick={() => setSelectedSem(num)}
            aria-pressed={selectedSem === num}
              className={`px-3 py-1 rounded-md border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                selectedSem === num
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700'
              }`}
          >
            Semester {num}
          </button>
        ))}
      </div>

      {/* Semester Card */}
      {currentData ? (
        <div className="bg-gray-900 border border-gray-800 shadow-sm rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-100">Semester {currentData.semester} Subjects</h2>
          <hr className="mb-4 border-gray-800" />

          <ul className="divide-y divide-gray-800">
            {currentData.subjects.map((sub) => (
              <li key={sub.code} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gray-200 bg-gray-800 px-2 py-1 rounded">{sub.code}</span>
                  <span className="text-sm font-medium text-gray-100">{sub.name}</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">{sub.type}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-400">Please select a semester to see the subjects.</p>
      )}
    </div>
  )
}

export default Bca