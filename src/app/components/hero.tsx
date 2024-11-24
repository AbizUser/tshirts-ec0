import { Button } from '@/app/components/ui/button'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
          あなたの個性を着る
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-white text-center">
          ユニークなデザインと高品質な素材で、あなたらしさを表現するTシャツを。
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700 rounded-full">
            コレクションを見る
          </Button>
        </div>
      </div>
    </div>
  )
}

