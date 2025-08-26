import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesFAQ() {
  const faqs = [
    {
      question: "Do you accept dental insurance?",
      answer:
        "Yes, we accept most major dental insurance plans. Our team will help verify your benefits and maximize your coverage. We also offer flexible payment plans for treatments not covered by insurance.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend visiting every 6 months for routine cleanings and checkups. However, some patients may need more frequent visits based on their oral health needs. We'll create a personalized schedule that's right for you.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit includes a comprehensive oral examination, digital X-rays if needed, professional cleaning, and a consultation about your oral health goals. We'll also review your medical history and discuss any concerns you may have.",
    },
    {
      question: "Do you offer emergency dental services?",
      answer:
        "Yes, we provide emergency dental care for urgent situations like severe tooth pain, dental trauma, or lost fillings. Contact our office immediately, and we'll do our best to see you the same day.",
    },
    {
      question: "How long do dental procedures typically take?",
      answer:
        "Treatment times vary depending on the procedure. Routine cleanings take 45-60 minutes, while more complex treatments like implants or root canals may require multiple visits. We'll provide a detailed timeline during your consultation.",
    },
    {
      question: "What payment options do you offer?",
      answer:
        "We accept cash, credit cards, and most insurance plans. We also offer flexible financing options through CareCredit and in-house payment plans to make dental care more affordable.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Common questions about our dental services and what to expect during your visit.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
              <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="font-heading font-semibold text-xl text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground">
            Our friendly team is here to help. Contact us for personalized answers about your dental care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 rounded-md"
            >
              Contact Us
            </Link>
            <Link 
              href="/appointment"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-md"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
