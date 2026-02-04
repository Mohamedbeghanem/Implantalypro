"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MarkdownText } from "@/components/ui/markdown"

export interface FaqItem {
  id: string
  question: string
  answer: string
}

interface FAQAccordionProps {
  heading: string
  items: FaqItem[]
}

export function FAQAccordion({ heading, items }: FAQAccordionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {heading}
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {items.map((item, index) => (
            <AccordionItem key={item.id || index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <MarkdownText content={item.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
