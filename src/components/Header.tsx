import Link from 'next/link'
import Image from 'next/image'
import Icon from '@/components/Icons'

export default function Header() {
  return (
    <header className="w-full p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
				<Link href="/" className="hover:underline">
					<Image
						src="https://gymbeam.sk/media/logo/stores/1/GB_Logo_Energy_SK.png"
						alt="GymBeam logo"
						width={180}
						height={50}
						className="h-auto w-auto"
					/>
				</Link>
        <nav className="flex gap-4">
          <Link href="/views/products" className="hover:underline">Produkty</Link>
					<div className='icons_wrapper flex gap-4 items-center'>
						<div className='flex items-start cursor-pointer'>
							<Icon name="user" width={22} color={'#010101'} className="text-red-500" />
						</div>
						<div className='flex items-start cursor-pointer'>
							<Icon name="cart" width={34} color={'#010101'} className="text-red-500" />
						</div>
					</div>
        </nav>
      </div>
    </header>
  )
}