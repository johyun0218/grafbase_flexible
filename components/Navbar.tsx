import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { NavLinks } from '@/constant';
import AuthProviders from './AuthProviders';

const Navbar = () => {
	const session = {}
  return (
    <nav className='flexBetween navbar'>
			<div className='flex-1 gap-10 flexStart'>
				<Link href="/">
					<Image src="/logo.svg"
						width={115}
						height={43}
						alt='Flexible'
					 />
				</Link>
				<ul className='hidden xl:flex text-small gap-7'>
					{NavLinks.map((link) => (
						<Link href={link.href} key={link.key}>{link.text}</Link>
					))}
				</ul>
			</div>

			<div className='gap-4 flexCenter'>
			   {session ? (
					<>
						UserPhoto
						<Link href="/create-product">
							Share work
						</Link>
					</>
				 ) : (
					<AuthProviders />
				 )}
			</div>
    </nav>
  )
}

export default Navbar