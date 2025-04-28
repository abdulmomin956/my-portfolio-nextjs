"use client"
import {
    CloseButton,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    const pathname = usePathname()

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
    }, [])

    const navigation = [
        { name: 'Home', href: '/', current: pathname === '/' },
        { name: 'About', href: '/about', current: pathname === "/about" },
        { name: 'Projects', href: '/projects', current: pathname === "/projects" },
        { name: 'Contact', href: '/contact', current: pathname === "/contact" },
    ]
    // console.log(pathname)
    return (
        <Disclosure as="nav" className={(colorChange ? "bg-white border-b border-gray-200" : "bg-transparent") + " fixed w-full z-[999]"}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#72B626]">
                                    {!open ? <Bars3Icon className="block h-6 w-6" aria-hidden="true" /> :
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex shrink-0 items-center">
                                    <CloseButton as={Link} href='/'>
                                        <Image
                                            priority
                                            className="h-7 w-auto"
                                            src={logo}
                                            alt="Abdul Momin"
                                        />
                                    </CloseButton>
                                </div>
                                <div className="hidden sm:mr-6 sm:block">
                                    <div className="flex space-x-8 border-b border-transparent">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'border-[#72B626] text-gray-900'
                                                        : 'border-transparent text-gray-500 hover:border-[#72B626] hover:text-gray-700',
                                                    'inline-flex items-center border-b-3 px-1 py-2 text-sm font-bold'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <a
                                    href="https://drive.google.com/u/0/uc?id=1ggFW7OTCV_pOO-boMmq9pV9KofAhaGy0&export=download"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button
                                        type="button"
                                        className="bg-[#72B626] p-1 px-4 text-white rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#72B626]"
                                    >
                                        <span className="sr-only">Download Resume</span>
                                        <FontAwesomeIcon icon={faFileDownload} className='mr-1' />
                                        <span className='hidden sm:inline'>Resume</span>
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden bg-white">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as={Link}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-100 text-[#72B626]'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}
