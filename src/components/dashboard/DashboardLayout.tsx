
import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useIsMobile } from '@/hooks/use-mobile';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children,
  title
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-2 sm:p-4">
          <div className="max-w-[2000px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
