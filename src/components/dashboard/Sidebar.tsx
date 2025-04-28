
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href: string;
  collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  active = false, 
  href,
  collapsed 
}) => {
  return (
    <Link 
      to={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        active ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground"
      )}
    >
      <div className="text-lg">{icon}</div>
      {!collapsed && <span className="text-sm font-medium">{label}</span>}
      {active && collapsed && (
        <div className="absolute right-2 w-1 h-6 bg-sidebar-primary-foreground rounded-full" />
      )}
    </Link>
  );
};

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "flex flex-col h-screen bg-sidebar p-2 border-r border-sidebar-border transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between mb-6 px-3 py-2">
        {!collapsed && (
          <h1 className="text-xl font-bold text-danger">
            Hack<span className="text-white">Book.ai</span>
          </h1>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground ml-auto"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="flex-1 space-y-1">
        <SidebarItem 
          icon={<LayoutDashboard />} 
          label="Dashboard" 
          active={location.pathname === '/'}
          href="/"
          collapsed={collapsed}
        />
        <SidebarItem 
          icon={<Settings />} 
          label="Settings" 
          href="/settings"
          active={location.pathname === '/settings'}
          collapsed={collapsed}
        />
      </nav>
      
      <div className="mt-auto p-2 border-t border-sidebar-border">
        {!collapsed ? (
          <div className="flex items-center px-3 py-2 gap-3">
            <div className="w-8 h-8 bg-danger rounded-full flex items-center justify-center text-white font-bold">
              JS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-sidebar-foreground">John Smith</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-danger rounded-full flex items-center justify-center text-white font-bold">
              JS
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
