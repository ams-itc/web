"use client"

import { ChevronDown, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string,
      icon?: LucideIcon
    }[]
  }[]
}) {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Department Header */}
        <div className="py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Department of</h1>
          <h2 className="text-xl font-semibold text-gray-700">Applied Mathematics and Statistics</h2>
        </div>
        
        {/* Navigation Menu - Converted to Horizontal */}
        <SidebarGroup className="border-none">
          <SidebarMenu className="flex flex-row space-x-0">
            {items.map((item) => (
              <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
                <SidebarMenuItem className="relative group">
                  <div className="flex items-center">
                    <SidebarMenuButton 
                      asChild 
                      className="rounded-none px-4 py-3 hover:bg-gray-100 data-[state=open]:bg-gray-50"
                    >
                      <NavLink 
                        to={item.url}
                        className="flex items-center gap-1"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <CollapsibleTrigger asChild>
                        <SidebarMenuAction className="data-[state=open]:rotate-180">
                          <ChevronDown className="h-4 w-4" />
                          <span className="sr-only">Toggle</span>
                        </SidebarMenuAction>
                      </CollapsibleTrigger>
                    ) : null}
                  </div>
                  {item.items?.length ? (
                    <CollapsibleContent className="absolute left-0 mt-0 w-48 rounded-b-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <NavLink 
                                to={subItem.url}
                                className="flex items-center gap-2"
                              >
                                {subItem.icon ? (
                                  <subItem.icon className="h-4 w-4" />
                                ) : (
                                  <item.icon className="h-4 w-4" />
                                )}
                                <span>{subItem.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </div>
    </div>
  )
}