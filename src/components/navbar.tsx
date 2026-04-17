'use client';

import Link from 'next/link';
import { PawPrint, BookOpen, Heart, ShoppingBag, Users, User, Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              猫狗物语
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/knowledge" icon={<BookOpen className="h-4 w-4" />}>
              科普百科
            </NavLink>
            <NavLink href="/virtual" icon={<Heart className="h-4 w-4" />}>
              虚实养宠
            </NavLink>
            <NavLink href="/services" icon={<ShoppingBag className="h-4 w-4" />}>
              养宠服务
            </NavLink>
            <NavLink href="/community" icon={<Users className="h-4 w-4" />}>
              社区救助
            </NavLink>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <Link
              href="/profile"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <User className="h-4 w-4" />
              <span>个人中心</span>
            </Link>
            <button
              className="md:hidden p-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <MobileNavLink href="/knowledge" icon={<BookOpen className="h-5 w-5" />}>
                科普百科
              </MobileNavLink>
              <MobileNavLink href="/virtual" icon={<Heart className="h-5 w-5" />}>
                虚实养宠
              </MobileNavLink>
              <MobileNavLink href="/services" icon={<ShoppingBag className="h-5 w-5" />}>
                养宠服务
              </MobileNavLink>
              <MobileNavLink href="/community" icon={<Users className="h-5 w-5" />}>
                社区救助
              </MobileNavLink>
              <MobileNavLink href="/profile" icon={<User className="h-5 w-5" />}>
                个人中心
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

function MobileNavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}
