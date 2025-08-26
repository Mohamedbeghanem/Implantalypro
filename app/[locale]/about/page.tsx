import { AboutHero } from "@/components/about-hero"
import { TeamSection } from "@/components/team-section"
import { MissionSection } from "@/components/mission-section"
import { FacilitySection } from "@/components/facility-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <FacilitySection />
    </main>
  )
}
