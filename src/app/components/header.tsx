import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            TシャツStore
          </Link>
        </div>
        <div className="hidden sm:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              ホーム
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              商品一覧
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              お問い合わせ
            </Link>
          </div>
          {/* <div className="flex items-center">
            <button className="text-gray-500 hover:text-indigo-600 px-0 py-0  rounded-md text-sm font-medium">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">カートを見る</span>
            </button>
          </div> */}
        </div>
      </nav>
    </header>
  )
}

