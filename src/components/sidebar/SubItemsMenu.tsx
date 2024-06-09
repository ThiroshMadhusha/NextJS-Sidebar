"use client"

import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo } from 'react'


  interface ISubItems {
    name: string;
    path: string;
  }

const SubItemsMenu = ({item}:{item:ISubItems}) => {

    const {name, path} = item;

    const router = useRouter();
    const pathname = usePathname();

    const onClick = () => {
        router.push(path);
    }

    // Active State
    const isActive = useMemo(() => {
        return path === pathname;
    },[path, pathname])

  return (
    <div className={`text-sm hover:text-sidebar-active hover: font-semibold cursor-pointer ${isActive && "text-sidebar-active font-semibold"}`}
    onClick={onClick}
    >
        {name}
    </div>
  )
}

export default SubItemsMenu