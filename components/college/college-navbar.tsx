"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

// Navigation item type
interface NavItem {
  label: string;
  href: string;
  exact?: boolean;
}

// Navigation items configuration
const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/colleges", exact: true },
  { label: "Colleges", href: "/colleges/colleges" },
  { label: "Admissions", href: "/colleges/admissions" },
  { label: "Scholarships", href: "/colleges/scholarships" },
  { label: "Notices", href: "/colleges/notices" },
  { label: "Resources", href: "/colleges/resources" },
];

// Theme configuration

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={`font-medium transition-colors duration-200 hover:text-[#FF3855] ${isActive
      ? "text-[#FF3855]"
      : "text-gray-700"
      }`}
  >
    {children}
  </Link>
);

const CollegeNavbar = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for floating navbar
  useEffect(() => {
    const handleScroll = () => {
      const shouldFloat = window.scrollY > 40;
      setIsFloating(shouldFloat);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const toggleExplore = () => setIsExploreOpen(v => !v);

  const navbarClasses = `
    bg-white/95 backdrop-blur-md border-b border-gray-200 
    w-full sticky top-0 z-50 transition-all duration-300 ease-in-out
    ${isFloating
      ? "rounded-2xl shadow-xl border-none max-w-4xl mx-auto mt-4 scale-[0.98]"
      : "rounded-none shadow-sm max-w-full mx-auto mt-0 scale-100"
    }
  `;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand (optional - can be added later) */}
            <div className="shrink-0">
              {/* Logo placeholder */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Explore dropdown */}
              <div className="relative">
                <button
                  onClick={toggleExplore}
                  className={`font-medium transition-colors duration-200 hover:text-[#FF3855] flex items-center ${isExploreOpen ? 'text-[#FF3855]' : 'text-gray-700'}`}
                >
                  Explore
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>

                {isExploreOpen && (
                  <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <Link
                        href="/colleges"
                        onClick={() => setIsExploreOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Studsphere for Education
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isActive={isActive(item.href, item.exact)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <Link
                href="/institutions/profile"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-[#e0324a] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF3855]"
              >
                For Institutions
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#FF3855] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF3855] transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile navigation links */}
                  <nav className="flex-1 px-4 py-6 space-y-4">
                    {/* Explore section in mobile menu */}
                    <div>
                      <div className="text-sm font-medium text-gray-700 px-4 pb-2">Explore</div>
                      <Link href="/colleges" onClick={toggleMobileMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        Studsphere for Education
                      </Link>
                    </div>

                    {NAV_ITEMS.map((item) => (
                      <NavLink
                        key={item.href}
                        href={item.href}
                        isActive={isActive(item.href, item.exact)}
                        onClick={toggleMobileMenu}
                      >
                        <div className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50">
                          <span className="text-base">{item.label}</span>
                          <ChevronDown className="h-4 w-4 rotate-270" />
                        </div>
                      </NavLink>
                    ))}
                  </nav>

              {/* Mobile menu footer */}
              <div className="p-4 border-t border-gray-200">
                <Link
                  href="/institutions/profile"
                  onClick={toggleMobileMenu}
                  className="block w-full bg-indigo-600 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors hover:bg-[#e0324a]"
                >
                  For Institutions
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CollegeNavbar
