import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Hurda Party", path: "/hurda-party-solapur" },
    { label: "Family Package", path: "/family-package" },
    { label: "Nearby Attractions", path: "/nearby-attractions" },
    { label: "Gallery", path: "/gallery" },
    { label: "Blog", path: "/blog" },
    { label: "Reviews", path: "/reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">Picnic Point</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Menubar className="border-0 bg-transparent">
            {menuItems.map((item) => (
              <MenubarMenu key={item.path}>
                <Link to={item.path}>
                  <MenubarTrigger
                    className={`cursor-pointer ${
                      isActive(item.path) ? "text-primary font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            ))}
          </Menubar>

          <div className="flex items-center space-x-4 ml-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call Us</span>
            </a>
            <a
              href="mailto:info@picnicpoint.com"
              className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden lg:inline">Email</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 px-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-3 rounded-md transition-colors ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-3 border-t">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:info@picnicpoint.com"
                className="flex items-center space-x-2 text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
