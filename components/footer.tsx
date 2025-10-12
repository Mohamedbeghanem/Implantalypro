"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "@/hooks/use-translations"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react"

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
  >
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
  </svg>
)

export function Footer() {
  const { t, currentLanguage } = useTranslations()
  const lang = currentLanguage || "en" // fallback to avoid undefined routes

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/implantaly", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/implantaly_dental_clinic_by_hs", label: "Instagram" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@implantaly.dental.clinic", label: "TikTok" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/implantaly-dental-clinic-by-hs/", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gray-100 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
          {/* Company Info */}
          <div className="space-y-4 slide-up">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Implantaly Dental Clinic Logo"
                width={200}
                height={50}
                priority
              />
            </Link>
            <p className="text-gray-600 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-300 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-heading font-semibold text-lg text-gray-900">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: `/${lang}`, label: t("navigation.home") },
                { href: `/${lang}/about`, label: t("navigation.about") },
                { href: `/${lang}/services`, label: t("navigation.services") },
                { href: `/${lang}/appointment`, label: t("navigation.appointments") },
                { href: `/${lang}/contact`, label: t("navigation.contact") },
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
          <div className="space-y-4 slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-heading font-semibold text-lg text-gray-900">
              {t("footer.services")}
            </h3>
            <ul className="space-y-3">
              {[
                "Dental Implants",
                "All-on-4 Implants",
                "Implant Consultation",
                "Implant Restoration",
                "Emergency Implant Care",
              ].map((service, index) => (
                <li
                  key={service}
                  className="fade-in-left"
                  style={{ animationDelay: `${index * 0.1 + 0.7}s` }}
                >
                  <Link
                    href={`/${lang}/services`}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 slide-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-heading font-semibold text-lg text-gray-900">
              {t("footer.contact")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">
                  25 Rue said greffon, hassan badi Alger
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <a
                  href="tel:+21328461584"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  +213 28 461 584
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <a
                  href="mailto:contact@implantaly.com"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  contact@implantaly.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Mon–Fri: 8AM–6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">{t("footer.copyright")}</p>
            <div className="flex space-x-6">
              <Link
                href={`/${lang}/privacy`}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href={`/${lang}/terms`}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
