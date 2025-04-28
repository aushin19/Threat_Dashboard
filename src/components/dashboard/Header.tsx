
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const Header = ({ title }: { title: string }) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-border">
      <h1 className="text-2xl font-bold">{title}</h1>
      
      <div className="flex items-center space-x-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 bg-secondary w-[240px] focus:border-danger focus:ring-danger"
          />
        </div>
        
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-danger">
            3
          </Badge>
        </Button>
      </div>
    </header>
  );
};
