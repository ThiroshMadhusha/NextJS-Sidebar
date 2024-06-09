"use client";
import React, { useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, LucideIcon } from 'lucide-react'
import { useState } from 'react';
import SubItemsMenu from './SubItemsMenu';

interface ISidebarItem {
    name: string;
    icon: LucideIcon;
    path: string;
    items?: ISubItems[];
  }

  interface ISubItems {
    name: string;
    path: string;
  }

const SidebarItemsList = ({item}:{
    item: ISidebarItem
}) => {

    const {name, icon: Icon, items, path} = item;
    const [expanded, setExpanded] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const onClick = () => {

        if(items && items.length > 0){
            return setExpanded(!expanded);
        }
        // alert(path);
        router.push(path);
    }

    // Active State
    const isActive = useMemo(() => {
        
        if(items && items.length > 0){
            if (items.find(item => item.path === pathname)) {
                setExpanded(true);
                return true;
            }
        }

        return path === pathname;
    },[path, pathname])

  return (

    <>
    <div className={`flex items-center space-x-2 p-3 rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active justify-between text-sidebar-iconColor ${isActive && "text-sidebar-active bg-sidebar-background"}`}
    onClick={onClick}
    >
    
    <div className='flex items-center space-x-2'>
        <Icon size={20} />
        <p className='text-sm font-semibold'>        
            {name}
        </p>
    
        </div>
        {items && items.length > 0 &&(
            <ChevronDown size={16} className={expanded ? "rotate-180 duration-300" : ""}/>
        )}
    </div>

    {/* For Expand Settings and Help Dropdowns */}
    {expanded && 
        items && 
        items.length > 0 && (<div className='flex flex-col space-y-2 ml-10 mt-2'>
        {
            items.map((item) => <SubItemsMenu key = {item.path} item={item}/>)
        }
    </div>)
    }
    </>
  )
}

export default SidebarItemsList