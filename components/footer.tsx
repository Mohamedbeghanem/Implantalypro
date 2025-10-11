"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from '@/hooks/use-translations'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const { t, currentLanguage } = useTranslations()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gray-100 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
          {/* Company Info */}
          <div className="space-y-4 slide-up">
            <div>
              <Link href={`/${currentLanguage}`} className="flex items-center space-x-2">
                <Image
                  src="/logo.svg"
                  alt="Your Brand Logo"
                  width={200}
                  height={50}
                  priority
                />
              </Link>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-300 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-heading font-semibold text-lg text-gray-900">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {[
                { href: `/${currentLanguage}`, label: t('navigation.home') },
                { href: `/${currentLanguage}/about`, label: t('navigation.about') },
                { href: `/${currentLanguage}/services`, label: t('navigation.services') },
                { href: `/${currentLanguage}/appointment`, label: t('navigation.appointments') },
                { href: `/${currentLanguage}/contact`, label: t('navigation.contact') },
              ].map((link, index) => (
                <li
                  key={link.label}
                  className="fade-in-left"
                  style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-heading font-semibold text-lg text-gray-900">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {[
                'Dental Implants',
                'All-on-4 Implants',
                'Implant Consultation',
                'Implant Restoration',
                'Emergency Implant Care',
              ].map((service, index) => (
                <li
                  key={service}
                  className="fade-in-left"
                  style={{ animationDelay: `${index * 0.1 + 0.7}s` }}
                >
                  <span className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-heading font-semibold text-lg text-gray-900">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">25 Rue said greffon,hassan badi Alger</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">+213 28 461 584</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">contact@implantaly.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
