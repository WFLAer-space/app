'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layout, Settings, Menu, X, ChevronDown, Files } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const links = [
  { href: '/', label: 'Home', icon: Home },
  {
    label: 'Resources',
    icon: Layout,
    children: [
      { href: '/components', label: 'Components' },
      { href: '/docs', label: 'Documentation' },
      { href: '/examples', label: 'Examples' },
      { href: '/resources', label: 'File System', icon: Files },
    ],
  },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Desktop navigation */}
      <nav
        className={`${
          isOpen
            ? 'absolute left-0 top-14 w-full border-b bg-background p-4 md:relative md:top-0 md:border-none md:p-0'
            : 'hidden md:block'
        }`}
      >
        <ul className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          {links.map((link) => {
            if ('children' in link) {
              return (
                <li key={link.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <ul className="mt-2 space-y-2 rounded-md border bg-card p-2 md:absolute md:left-0 md:min-w-[200px] md:shadow-subtle">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                              pathname === child.href
                                ? 'bg-muted text-foreground'
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                            }`}
                            onClick={closeAll}
                          >
                            {child.icon && <child.icon className="h-4 w-4" />}
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={closeAll}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
} 