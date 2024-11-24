import Header from './components/header'
import Hero from './components/hero'
import TshirtGrid from './components/tshirt-grid'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TshirtGrid />
      </main>
      <Footer />
    </div>
  )
}

