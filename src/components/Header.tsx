"use client";
import React, { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import Image from 'next/image'
import {imgPath} from "@/data/projectsData";



export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        {name: 'Home', href: '/'},
        {name: 'Teams', href: '/teams'},
        {name: 'Matvey', href: '/matvey'},
        {name: 'Dima', href: '/dima'},
    ]

    return (
        <header className="">
            <Link key={"logo"}
                  href={"/"}
                  className={"nav-link"}
            >
                <img src={imgPath+"logo-portrait.png"} alt="" width={120}/>
            </Link>


            <nav>
                {navigation.map((item) => (
                    <Link key={item.name}
                          href={item.href}
                          className={"nav-link"}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </header>

    );
}
