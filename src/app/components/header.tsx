import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            TシャツGallery
          </Link>
        </div>
        <div className="hidden sm:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              ホーム
            </Link>
            <Link href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              コレクション
            </Link>
            <Link href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              カスタムデザイン
            </Link>
            <Link href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              お問い合わせ
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <button className="text-gray-600 hover:text-indigo-600 p-2 rounded-full">
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">カートを見る</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

