'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Icon from '@/components/Icons'
import { useAuth } from '@/context/auth-context'

export default function Header() {
  const router = useRouter()
  const { isLoggedIn, userEmail, logout } = useAuth()

  const handleUserClick = () => {
    router.push(isLoggedIn ? '/views/User' : '/views/Login')
  }

	const handleLogout = () => {
		logout()
		router.push('/')
	}

  return (
    <header className="w-full p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
				<Link href="/" className="hover:underline">
					<Image
						src="https://gymbeam.sk/media/logo/stores/1/GB_Logo_Energy_SK.png"
						alt="GymBeam logo"
						width={180}
						height={50}
						className="w-[90px] sm:w-[180px] h-auto"
					/>
				</Link>
        <nav className="flex gap-4 items-center">
          <div className="icons_wrapper flex gap-4 items-center">
            <div className="flex items-center gap-2">
              {isLoggedIn && (
								<div className="flex items-center gap-2">
                  <span className="text-sm mr-2" style={{ color: 'var(--text-secondary)' }}>
                    {userEmail}
                  </span>
                  <div onClick={handleLogout} className="cursor-pointer">
                    <Icon name="logout" width={25} color="var(--text-secondary)" className="text-red-500" />
                  </div>
								</div>
              )}
              {!isLoggedIn && (
                <div onClick={handleUserClick} className="flex items-center cursor-pointer">
                  <Icon name="user" width={22} color="#010101" className="text-red-500" />
                </div>
              )}
            </div>
            <div className="flex items-center cursor-pointer">
              <Icon name="cart" width={34} color="#010101" className="text-red-500" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}