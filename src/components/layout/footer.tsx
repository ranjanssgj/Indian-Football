import Link from 'next/link';
import { IndianFlagIcon } from '@/components/icons/indian-flag-icon';
import { Goal } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Goal className="h-7 w-7 text-primary" />
            <span className="text-lg font-headline font-semibold text-foreground">Indian Football Hub</span>
            <IndianFlagIcon className="ml-1 h-5 w-auto rounded-sm" />
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Indian Football Hub. All rights reserved.</p>
            <p>Dedicated to the passion of Indian Football.</p>
          </div>
          
          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Placeholder pages for footer links - these should be created if needed
// src/app/about/page.tsx
// src/app/contact/page.tsx
// src/app/privacy/page.tsx
