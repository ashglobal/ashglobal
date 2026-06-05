import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  organization: [
    { href: "/about", label: "About Us" },
    { href: "/about#team", label: "Our Team" },
    { href: "/about#story", label: "Our Story" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#beauty", label: "Beauty & Cosmetology" },
    { href: "/services#builders", label: "ASH Builders" },
    { href: "/services#outfitters", label: "Outfitters" },
    { href: "/services#agency", label: "Agency Services" },
  ],
  programs: [
    { href: "/training", label: "Vocational Training" },
    { href: "/training#courses", label: "Courses" },
    { href: "/resources", label: "Resource Center" },
    { href: "/media", label: "Podcast & Media" },
  ],
  support: [
    { href: "/donate", label: "Donate" },
    { href: "/donate#sponsor", label: "Sponsor a Student" },
    { href: "/donate#partner", label: "Partner With Us" },
    { href: "/contact", label: "Volunteer" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="ASH Global Initiatives"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <span className="font-serif text-xl font-bold text-foreground">ASH Global</span>
                <p className="text-xs text-muted-foreground">Initiatives</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building stronger people everywhere. Empowering communities through skills, 
              resources, and opportunities for sustainable development.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/ASHGlobalInitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ashglobalinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ashglobalinits"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@mrashglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Support Us</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href="https://wa.me/254728904762" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+254 728 904 762</span>
              </a>
              <a href="mailto:ashpoah@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>ashpoah@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ASH Global Initiatives. All rights reserved. 
            <span className="mx-2">|</span>
            Inspired by Isaiah 60:1 - &quot;Arise and Shine&quot;
          </p>
        </div>
      </div>
    </footer>
  )
}
