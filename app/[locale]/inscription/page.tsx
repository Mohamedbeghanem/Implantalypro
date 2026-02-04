import TrainingSignupWizard from "@/components/forms/TrainingSignupWizard"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-20 lg:pt-24">
        <div className="container px-4 md:px-6">
          <TrainingSignupWizard />
        </div>
      </section>
      <Footer />
      <Toaster />
    </main>
  )
}
