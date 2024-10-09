import React from 'react'
import { Product } from '../types'

interface RecommendationListProps {
  recommendations: Product[]
}

const RecommendationList: React.FC<RecommendationListProps> = ({ recommendations }) => {
  return (
    <div className="space-y-4">
      {recommendations.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <img src={product.image} alt={product.name} className="w-24 h-24 object-cover" />
          <div className="p-4 flex-grow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecommendationList