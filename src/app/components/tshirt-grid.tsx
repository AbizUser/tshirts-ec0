import Image from 'next/image'
import { Button } from '@/app/components/ui/button'

const tshirts = [
  { id: 1, name: 'サンセットドリーム', price: '¥3,900', image: '/placeholder.svg?height=400&width=300' },
  { id: 2, name: 'オーシャンブリーズ', price: '¥3,600', image: '/placeholder.svg?height=400&width=300' },
  { id: 3, name: 'アーバンジャングル', price: '¥4,200', image: '/placeholder.svg?height=400&width=300' },
  { id: 4, name: 'コズミックナイト', price: '¥3,800', image: '/placeholder.svg?height=400&width=300' },
]

export default function TshirtGrid() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">注目のデザイン</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {tshirts.map((tshirt) => (
            <div key={tshirt.id} className="group relative">
              <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <Image
                  src={tshirt.image}
                  alt={tshirt.name}
                  width={300}
                  height={400}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {tshirt.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{tshirt.price}</p>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full rounded-full">
                  カートに追加
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

