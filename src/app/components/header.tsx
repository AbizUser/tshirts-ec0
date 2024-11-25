// import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'

export default function Header() {
  return (
    <>
      <Head>
        <title>TシャツStore | 高品質なデザインTシャツをお届け</title>
        <meta
          name="description"
          content="TシャツStoreでは、ユニークで高品質なデザインのTシャツを豊富に取り揃えています。ファッション性の高い商品をチェックしてみてください！"
        />
        <meta
          name="keywords"
          content="Tシャツ, デザインTシャツ, ファッション, 通販, オンラインショップ"
        />
        <meta name="author" content="TシャツStore運営チーム" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="TシャツStore | 高品質なデザインTシャツをお届け" />
        <meta
          property="og:description"
          content="TシャツStoreでは、ユニークで高品質なデザインのTシャツを豊富に取り揃えています。ファッション性の高い商品をチェックしてみてください！"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:image" content="https://yourwebsite.com/images/og-image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Head>

      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              TシャツStore
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                ホーム
              </Link>
              <Link
                href="/products"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                商品一覧
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}


//           {/* <div className="flex items-center">
//             <button className="text-gray-500 hover:text-indigo-600 px-0 py-0  rounded-md text-sm font-medium">
//               <ShoppingCart className="h-6 w-6" />
//               <span className="sr-only">カートを見る</span>
//             </button>
//           </div> */}