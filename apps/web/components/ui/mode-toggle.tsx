'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Desktop16, Moon, Moon16, Sun, Sun16 } from '@/icons/generated';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <div className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
            <Sun />
          </div>
          <div className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
            <Moon />
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={2}>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun16 className="mt-0.5" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon16 className="mt-0.5" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Desktop16 className="mt-0.5" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
