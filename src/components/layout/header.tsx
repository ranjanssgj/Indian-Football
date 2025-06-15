
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IndianFlagIcon } from '@/components/icons/indian-flag-icon';
import { navLinks, type NavLink as NavLinkType } from './nav-links';
import { cn } from '@/lib/utils';
import { Goal, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const NavLink = ({ href, label, icon: Icon, children }: NavLinkType) => {
  const pathname = usePathname();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  
  const checkActiveState = () => {
    if (pathname === href) return true;
    if (children) {
      const isActiveChild = children.some(child => pathname === child.href || pathname.startsWith(child.href + '/'));
      if (isActiveChild) return true;
    }
    // Check if the current path starts with the parent link's href, indicating a child route is active
    if (children && children.some(child => pathname.startsWith(href + '/') && href !== '/')) return true;


    return false;
  };
  const isActive = checkActiveState();

  const handleDesktopToggle = (openState: boolean) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) { // 768px is md breakpoint
      setIsSubmenuOpen(openState);
    }
  };

  const handleMobileClickToggle = () => {
     if (typeof window !== 'undefined' && window.innerWidth < 768) {
        setIsSubmenuOpen(!isSubmenuOpen);
     }
  }

  const handleButtonClick = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  }

  if (children) {
    return (
      <div 
        className="relative"
        onMouseEnter={() => handleDesktopToggle(true)}
        onMouseLeave={() => handleDesktopToggle(false)}
      >
        <button
          onClick={handleButtonClick}
          aria-expanded={isSubmenuOpen}
          className={cn(
            'flex items-center justify-between w-full gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
            isActive
              ? 'bg-primary/20 text-primary'
              : 'text-foreground hover:bg-accent/10 hover:text-accent-foreground focus-visible:bg-accent/10 focus-visible:text-accent-foreground'
          )}
        >
          <span className="flex items-center gap-2">
            {Icon && <Icon className="h-5 w-5" />}
            {label}
          </span>
          {isSubmenuOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {/* Mobile Submenu (rendered inside Sheet) */}
        {isSubmenuOpen && (
          <div className="md:hidden mt-1 pl-4 space-y-1 py-1 rounded-md bg-background/50">
            {children.map((childLink) => (
              <NavLink key={childLink.href} {...childLink} />
            ))}
          </div>
        )}

        {/* Desktop Submenu (Grid layout) */}
        <div
          className={cn(
            "hidden md:grid", 
            "absolute left-0 top-full z-20 mt-2 p-3 w-auto max-w-xl gap-x-3 gap-y-2", 
            "bg-background border border-border rounded-lg shadow-xl", 
            `grid-cols-${Math.min(children.length, 3)}`, 
            "transform transition-all duration-200 ease-out origin-top-left", 
            isSubmenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible" 
          )}
        >
          {children.map((childLink) => (
            <NavLink key={childLink.href} {...childLink} />
          ))}
        </div>
      </div>
    );
  }

  // Single link, no children
  return (
    <Link
      href={href}
      onClick={() => setIsSubmenuOpen(false)} 
      className={cn(
        'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors w-full text-left whitespace-nowrap',
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground'
      )}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {label}
    </Link>
  );
};


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "bg-background/80 backdrop-blur-lg shadow-md border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-headline font-semibold text-primary hover:text-primary/80 transition-colors">
            <Goal className="h-7 w-7" />
            <span>Indian Football Hub</span>
            <IndianFlagIcon className="ml-1 h-5 w-auto rounded-sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-0 overflow-y-auto">
              <div className="flex flex-col ">
                <div className="flex justify-between items-center p-4 border-b border-border">
                   <Link href="/" className="flex items-center gap-2 text-lg font-headline font-semibold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    <Goal className="h-7 w-7" />
                    <span>Indian Football Hub</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex-grow p-4 space-y-1">
                  {navLinks.map((link) => (
                     <div key={link.href} onClick={() => {
                       if (!link.children) setIsMobileMenuOpen(false);
                     }}>
                       <NavLink {...link} />
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
