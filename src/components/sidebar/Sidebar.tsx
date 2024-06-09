"use client"

import React from 'react'
import { BadgeDollarSign, CircleUserRound, HelpingHand, LayoutDashboard, LogOutIcon, LucideIcon, ScanFaceIcon, Settings, WalletCards } from 'lucide-react'
import SidebarItems from './SidebarItemsList'

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

// Create an Item Array
const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "Transactions",
    icon: BadgeDollarSign,
    path: "/transaction",
  },
  {
    name: "Payments",
    icon: WalletCards,
    path: "/payments",
  },
  {
    name: "Accounts",
    icon: CircleUserRound,
    path: "/accounts",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
    items: [
      {
        name: "General",
        path: "/settings/general"
      },
      {
        name: "Security",
        path: "/settings/security"
      },
      {
        name: "Notifications",
        path: "/settings/notifications"
      },
    ]
  },
  {
    name: "Help",
    icon: HelpingHand,
    path: "/help",
    items: [
      {
        name: "FAQs",
        path: "/help/faq"
      },
      {
        name: "Support",
        path: "/help/support"
      },
      {
        name: "Contact US",
        path: "/help/contact"
      }
    ]
  },
  {
    name: "Profile",
    icon: ScanFaceIcon,
    path: "/profile",
    items: [
      {
        name: "Bio",
        path: "/profile/bio"
      },
      {
        name: "Test",
        path: "/profile/text"
      }
    ]
  },
  {
    name: "Logout",
    icon: LogOutIcon,
    path: "/logout",
  }
]

// Left Side Bar

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4 flex flex-col'>
      <div className='flex flex-col flex-grow'>
        <div className='flex items-center mb-10'>
          <img className='h-16' src="/logo.jpg" alt="logo" />
          <span className='ml-6 text-3xl font-bold p-3'> PhoeniX </span>
        </div>
        {/* Render the Main Items */}
        <div className='flex flex-col flex-grow space-y-1'>
          {items.map((item) => (
            <SidebarItems key={item.path} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
