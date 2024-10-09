import React, { useState } from 'react'
import { Search } from 'lucide-react'

interface LocationSearchProps {
  setLocation: (location: string) => void
}

const LocationSearch: React.FC<LocationSearchProps> = ({ setLocation }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLocation(input)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Enter your location"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-3 rounded-l-lg focus:outline-none"
        />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition-colors">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </form>
  )
}

export default LocationSearch