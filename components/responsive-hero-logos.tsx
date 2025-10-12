"use client"

import Link from "next/link"
import { useTranslations } from "@/hooks/use-translations"
import { Award, Cpu, HeartPulse, Users } from "lucide-react"

export function ResponsiveHeroLogos() {
  const { t } = useTranslations()
  const tr = (key: string, fallback: string) => {
    const value = t(key) as string
    return value === key ? fallback : value
  }
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-5 lg:px-6 py-6 md:py-10 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8 items-center">
          {/* Left column: text + CTAs */}
          <div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-gray-900">
              {(() => {
                const parts = (t("hero.title") as string).split("\n")
                return (
                  <>
                    {parts[0]}
                    <br className="hidden sm:block" />
                    {parts[1] ?? ""}
                  </>
                )
              })()}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mt-4 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={`#appointment`}
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-white bg-black hover:bg-gray-900 transition-colors"
              >
                {t("hero.cta")}
              </Link>
              <Link
                href={`#about`}
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {t("hero.learnMore")}
              </Link>
            </div>

          </div>

          {/* Right column: dashed circle with logo cards */}
          <div className="relative flex items-center justify-center py-12 sm:py-16 md:py-8">
            <div className="relative flex items-center justify-center overflow-hidden min-h-[320px] sm:min-h-[380px]"></div>

            {/* Gradient blobs (decor) */}
            <div className="hidden md:block absolute -top-10 -left-10 w-56 h-56 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none"></div>
            <div className="hidden md:block absolute -bottom-10 -right-8 w-72 h-72 bg-gradient-to-tr from-indigo-100 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none"></div>

            {/* Curved line */}
            <svg
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-[300px] pointer-events-none z-0"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M50 180 C 120 80, 280 260, 350 180"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-40"
              />
              <path
                d="M50 200 C 130 90, 270 280, 350 200"
                stroke="#E5E7EB"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="opacity-25"
              />
            </svg>

            {/* Circle container */}
            <div className="relative z-10 w-[200px] sm:w-[260px] md:w-[320px] lg:w-[360px] aspect-square mx-auto">
              <div className="hidden md:block absolute inset-0 border border-dashed border-gray-200 rounded-full opacity-40 scale-110 pointer-events-none"></div>
              <div className="absolute inset-0 border-[3px] border-dashed border-gray-300 rounded-full pointer-events-none"></div>
              <div className="hidden md:block absolute inset-6 border border-dashed border-gray-200 rounded-full opacity-50 pointer-events-none"></div>
              <div className="hidden md:block absolute inset-12 border border-gray-100 rounded-full opacity-60 pointer-events-none"></div>
              <div className="hidden md:block absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-gray-200 rounded-full opacity-60 pointer-events-none"></div>

              {/* Decorative accents */}
              <div className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border border-gray-200 rounded-full shadow-sm"></div>
              <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-3 h-3 bg-white border border-gray-200 rounded-full shadow-sm"></div>
              <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border border-gray-200 rounded-full shadow-sm"></div>
              <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 w-3.5 h-3.5 bg-white border border-gray-200 rounded-full shadow-sm"></div>
              <div className="hidden md:block absolute -top-10 right-10 h-8 w-8 border-2 border-gray-200 rounded-full opacity-60"></div>
              <div className="hidden md:block absolute -bottom-8 left-12 h-6 w-6 border border-dashed border-gray-300 rounded-full opacity-70"></div>

              {/* Top card */}
              <a
                href="https://implantaly.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Implantaly Dental Clinic"
                className="group absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src="/logo.svg"
                  alt="Implantaly Dental Clinic Logo"
                  className="h-8 sm:h-12 md:h-14 w-14 sm:w-20 md:w-24 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>

              {/* Right card */}
              <a
                href="https://implantaly.com/alt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Implantaly Dental Clinic Alt"
                className="group absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                <div className="h-8 sm:h-12 md:h-14 w-14 sm:w-20 md:w-24 flex items-center justify-center text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium">
                  Implantaly Alt
                </div>
              </a>

              {/* Bottom card */}
              <a
                href="https://altaacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALTA Academy"
                className="group absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                <div className="h-8 sm:h-12 md:h-14 w-14 sm:w-20 md:w-24 flex items-center justify-center text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium">
                  ALTA Academy
                </div>
              </a>

              {/* Left card */}
              <a
                href="https://idesign.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="iDesign"
                className="group absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                <div className="h-8 sm:h-12 md:h-14 w-14 sm:w-20 md:w-24 flex items-center justify-center text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium">
                  iDesign
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}