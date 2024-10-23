import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import RecommendationList from './components/RecommendationList'
import LocationSearch from './components/LocationSearch'
import { Product } from './types'
import { MapPin } from 'lucide-react'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [recommendations, setRecommendations] = useState<Product[]>([])
  const [location, setLocation] = useState<string>('')

  useEffect(() => {
    fetchProducts()
    fetchRecommendations()
  }, []) // 依存配列を空にする

  const fetchProducts = () => {
    // Simulated API call
    try {
      const dummyProducts: Product[] = [
        { id: 1, name: 'Smartphone', price: 599, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 2, name: 'Laptop', price: 999, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 3, name: 'Headphones', price: 199, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
      ]
      setProducts(dummyProducts)
    } catch (error) {
      console.error('製品の取得中にエラーが発生しました:', error)
    }
  }

  const fetchRecommendations = () => {
    // Simulated API call for recommendations
    try {
      const dummyRecommendations: Product[] = [
        { id: 4, name: 'Smart Watch', price: 299, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 5, name: 'Wireless Earbuds', price: 149, image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
      ]
      setRecommendations(dummyRecommendations)
    } catch (error) {
      console.error('おすすめ商品の取得中にエラーが発生しました:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <LocationSearch setLocation={setLocation} />
        {location && (
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Showing results for: {location}</span>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <ProductList products={products} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </main>
    </div>
  )
}





export default App
