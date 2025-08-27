"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Home, User, Stethoscope, Mail, Clock, MapPin } from "lucide-react"
import { useTranslations } from '@/hooks/use-translations'
import { useRouter, usePathname } from 'next/navigation'
import { LanguageSwitcher } from './language-switcher'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, currentLanguage } = useTranslations()
  const router = useRouter()
  const pathname = usePathname()
  
  const navItems = useMemo(() => [
    { href: `/${currentLanguage}`, label: t('navigation.home'), icon: Home, description: "Welcome to Implantaly Group" },
    { href: `/${currentLanguage}/about`, label: t('navigation.about'), icon: User, description: "Learn about our team" },
    { href: `/${currentLanguage}/services`, label: t('navigation.services'), icon: Stethoscope, description: "Our implant services" },
    { href: `/${currentLanguage}/alta-academy`, label: t('navigation.altaAcademy'), icon: User, description: "Dental coaching & education" },
    { href: `/${currentLanguage}/idesign`, label: t('navigation.idesign'), icon: User, description: "3D dental design & concepts" },
    { href: `/${currentLanguage}/blog`, label: t('navigation.blog'), icon: Mail, description: "Read our latest articles" },
    { href: `/${currentLanguage}/contact`, label: t('navigation.contact'), icon: Mail, description: "Get in touch with us" },
  ], [t, currentLanguage])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav className="sticky top-0 z-50 glass border-b border-border slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div>
              <Link href={`/${currentLanguage}`} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">IG</span>
                </div>
                <span className="font-heading font-bold text-xl text-foreground gradient-text">Implantaly</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4 fade-in-right">
              <LanguageSwitcher />
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(555) 123-4567</span>
              </div>
              <div>
                <Link 
                  href={`/${currentLanguage}/appointment`}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 rounded-md"
                >
                  {t('navigation.bookNow')}
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/50 relative z-60 transition-all duration-300"
            >
              <div className={`transition-all duration-500 ${isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-0 right-0 w-80 h-full bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Link href={`/${currentLanguage}`} className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">IG</span>
                  </div>
                  <span className="font-heading font-bold text-xl text-foreground">Implantaly</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-6 space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 p-4 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm opacity-70">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-border space-y-4">
                <LanguageSwitcher />
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">(555) 123-4567</span>
                </div>
                <Link 
                  href={`/${currentLanguage}/appointment`} 
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 rounded-md"
                >
                  {t('navigation.bookNow')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
