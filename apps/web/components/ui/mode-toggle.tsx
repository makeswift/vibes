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
        <Button size="icon" variant="ghost">
          <div className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90">
            <Sun />
          </div>
          <div className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0">
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
