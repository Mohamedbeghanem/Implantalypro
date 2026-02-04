"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useFormSubmit } from "@/hooks/useFormSubmit"

type FormData = {
  profile: string[]
  interests: string[]
  level: string
  goals: string[]
  name: string
  phone: string
  email: string
}

type StepConfig = {
  title: string
  description?: string
  question?: string
}

const PROFILE_OPTIONS = [
  "Chirurgien-dentiste",
  "Prothésiste dentaire",
  "Étudiant en fin de cycle",
  "Assistant(e) dentaire",
  "Community manager (clinique / cabinet dentaire)",
] as const

const INTEREST_OPTIONS = [
  "Chirurgie implantaire",
  "Live Surgery",
  "Prothèse fixe & esthétique",
  "Chirurgie guidée",
  "Workflow digital (CAD/CAM)",
  "Photographie dentaire",
] as const

const LEVEL_OPTIONS = [
  { label: "Débutant", value: "beginner" },
  { label: "Intermédiaire", value: "intermediate" },
  { label: "Avancé", value: "advanced" },
] as const

const GOAL_OPTIONS = [
  "Améliorer la qualité du travail clinique / technique",
  "Acquérir de nouvelles compétences professionnelles",
  "Se mettre à jour sur les techniques modernes",
  "Optimiser le travail en équipe (clinique & laboratoire)",
  "Développer et valoriser l’image du cabinet / labo",
  "Offrir de meilleurs résultats aux patients",
] as const

const STEP_CONFIG: StepConfig[] = [
  {
    title: "PROFIL PROFESSIONNEL",
    description:
      "Votre profil professionnel (Sélectionnez toutes les réponses possibles)",
    question:
      "Votre profil professionnel (Sélectionnez toutes les réponses possibles)",
  },
  {
    title: "DOMAINE D’INTÉRÊT",
    description: "Quel type de formation vous intéresse le plus ? (Choix multiples)",
    question: "Quel type de formation vous intéresse le plus ? (Choix multiples)",
  },
  {
    title: "NIVEAU D’EXPÉRIENCE",
    description: "Votre niveau actuel dans ce domaine",
    question: "Votre niveau actuel dans ce domaine",
  },
  {
    title: "OBJECTIF DE LA FORMATION (GLOBAL)",
    description:
      "Quel est votre objectif principal en suivant nos formations ? (Choix multiples)",
    question:
      "Quel est votre objectif principal en suivant nos formations ? (Choix multiples)",
  },
  {
    title: "COORDONNÉES (AUTOMATIQUE)",
    description: "Instagram pré-remplit … (Modifiable si besoin)",
  },
  {
    title: "Inscription prise en compte",
    description: "Message de confirmation.",
  },
]

const DEFAULT_DATA: FormData = {
  profile: [],
  interests: [],
  level: "",
  goals: [],
  name: "",
  phone: "",
  email: "",
}

const STORAGE_KEY = "inscription-formations-draft"
const TOTAL_STEPS = 6
const LAST_FORM_STEP = 4

const phoneRegex = /^\+?[\d\s().-]{6,}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getStepErrors(step: number, data: FormData) {
  const errors: Record<string, string> = {}

  if (step === 0 && data.profile.length === 0) {
    errors.profile = "Veuillez sélectionner au moins une option."
  }

  if (step === 1 && data.interests.length === 0) {
    errors.interests = "Veuillez sélectionner au moins une option."
  }

  if (step === 2 && !data.level) {
    errors.level = "Veuillez sélectionner votre niveau."
  }

  if (step === 3 && data.goals.length === 0) {
    errors.goals = "Veuillez sélectionner au moins une option."
  }

  if (step === 4) {
    if (data.name.trim().length < 2) {
      errors.name = "Veuillez renseigner votre nom et prénom."
    }
    if (!phoneRegex.test(data.phone.trim())) {
      errors.phone = "Veuillez renseigner un numéro de téléphone valide."
    }
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Veuillez renseigner un email valide."
    }
  }

  return errors
}

function sanitizeStoredData(
  raw: unknown
): { formData: FormData; step: number } | null {
  if (!raw || typeof raw !== "object") return null
  const record = raw as Record<string, unknown>
  const storedForm = record.formData as Record<string, unknown> | undefined
  const storedStep = record.currentStep

  if (!storedForm || typeof storedStep !== "number") return null

  const safeData: FormData = {
    profile: Array.isArray(storedForm.profile)
      ? storedForm.profile.filter((item) => typeof item === "string")
      : [],
    interests: Array.isArray(storedForm.interests)
      ? storedForm.interests.filter((item) => typeof item === "string")
      : [],
    level: typeof storedForm.level === "string" ? storedForm.level : "",
    goals: Array.isArray(storedForm.goals)
      ? storedForm.goals.filter((item) => typeof item === "string")
      : [],
    name: typeof storedForm.name === "string" ? storedForm.name : "",
    phone: typeof storedForm.phone === "string" ? storedForm.phone : "",
    email: typeof storedForm.email === "string" ? storedForm.email : "",
  }

  const safeStep = Number.isFinite(storedStep)
    ? Math.min(Math.max(storedStep, 0), TOTAL_STEPS - 1)
    : 0

  return { formData: safeData, step: safeStep }
}

const makeId = (prefix: string, index: number) => `${prefix}-${index}`

export default function TrainingSignupWizard() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [formData, setFormData] = React.useState<FormData>(DEFAULT_DATA)
  const [showErrors, setShowErrors] = React.useState(false)
  const hasLoadedRef = React.useRef(false)
  const [company, setCompany] = React.useState("")
  const pathname = usePathname()
  const { submit, isLoading, isError, error } = useFormSubmit()

  React.useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null
    if (!stored) {
      hasLoadedRef.current = true
      return
    }

    try {
      const parsed = JSON.parse(stored)
      const sanitized = sanitizeStoredData(parsed)
      if (sanitized) {
        setFormData(sanitized.formData)
        setCurrentStep(sanitized.step)
      }
    } catch {
      // Ignore malformed storage data.
    } finally {
      hasLoadedRef.current = true
    }
  }, [])

  React.useEffect(() => {
    if (!hasLoadedRef.current || typeof window === "undefined") return
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ currentStep, formData })
    )
  }, [currentStep, formData])

  const stepErrors = React.useMemo(
    () => getStepErrors(currentStep, formData),
    [currentStep, formData]
  )
  const isStepValid = Object.keys(stepErrors).length === 0
  const isConfirmation = currentStep === TOTAL_STEPS - 1
  const isLastFormStep = currentStep === LAST_FORM_STEP
  const stepMeta = STEP_CONFIG[currentStep]
  const progressValue = Math.round(((currentStep + 1) / TOTAL_STEPS) * 100)

  const toggleMultiSelect = (
    key: "profile" | "interests" | "goals",
    value: string
  ) => {
    setFormData((prev) => {
      const exists = prev[key].includes(value)
      const nextValues = exists
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value]
      return { ...prev, [key]: nextValues }
    })
  }

  const handleNext = () => {
    if (!isStepValid) {
      setShowErrors(true)
      return
    }
    setShowErrors(false)
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1))
  }

  const handlePrevious = () => {
    setShowErrors(false)
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = async () => {
    if (!isStepValid) {
      setShowErrors(true)
      return
    }

    const ok = await submit({
      type: "registrationSubmission",
      data: {
        formId: "training-signup",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        profession: formData.profile.join(", "),
        interests: formData.interests,
        experienceLevel: formData.level,
        message: formData.goals.join(" | "),
        pagePath: pathname,
        source: "website",
        company,
      },
    })

    if (ok) {
      toast({ title: "Inscription envoyée" })
      setShowErrors(false)
      setCurrentStep(TOTAL_STEPS - 1)
    } else {
      toast({
        title: "Échec de l'envoi",
        description: error ?? "Veuillez réessayer.",
      })
    }
  }

  const handleReset = () => {
    setFormData(DEFAULT_DATA)
    setCurrentStep(0)
    setShowErrors(false)
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY)
    }
  }

  return (
    <Card className="border-border/80 bg-surface/80 shadow-md backdrop-blur">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Inscription Formations
            </p>
            <CardTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {stepMeta?.title}
            </CardTitle>
            {stepMeta?.description ? (
              <CardDescription className="text-sm text-muted">
                {stepMeta.description}
              </CardDescription>
            ) : null}
          </div>
          <div className="text-sm font-medium text-muted">
            Étape {currentStep + 1}/{TOTAL_STEPS}
          </div>
        </div>
        <Progress value={progressValue} />
      </CardHeader>

      <CardContent>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
        <div key={currentStep} className="animate-fade-in-up">
          {currentStep === 0 && (
            <fieldset
              className="space-y-4"
              aria-invalid={showErrors && !!stepErrors.profile}
            >
              <legend className="sr-only">{stepMeta?.question}</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {PROFILE_OPTIONS.map((option, index) => {
                  const id = makeId("profile", index)
                  const checked = formData.profile.includes(option)
                  return (
                    <label
                      key={option}
                      htmlFor={id}
                      className="flex items-start gap-3 rounded-lg border border-border bg-surface p-3 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30"
                    >
                      <Checkbox
                        id={id}
                        checked={checked}
                        onCheckedChange={() =>
                          toggleMultiSelect("profile", option)
                        }
                        aria-invalid={showErrors && !!stepErrors.profile}
                      />
                      <span className="leading-5">{option}</span>
                    </label>
                  )
                })}
              </div>
              {showErrors && stepErrors.profile ? (
                <p className="text-xs text-destructive">
                  {stepErrors.profile}
                </p>
              ) : null}
            </fieldset>
          )}

          {currentStep === 1 && (
            <fieldset
              className="space-y-4"
              aria-invalid={showErrors && !!stepErrors.interests}
            >
              <legend className="sr-only">{stepMeta?.question}</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {INTEREST_OPTIONS.map((option, index) => {
                  const id = makeId("interest", index)
                  const checked = formData.interests.includes(option)
                  return (
                    <label
                      key={option}
                      htmlFor={id}
                      className="flex items-start gap-3 rounded-lg border border-border bg-surface p-3 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30"
                    >
                      <Checkbox
                        id={id}
                        checked={checked}
                        onCheckedChange={() =>
                          toggleMultiSelect("interests", option)
                        }
                        aria-invalid={showErrors && !!stepErrors.interests}
                      />
                      <span className="leading-5">{option}</span>
                    </label>
                  )
                })}
              </div>
              {showErrors && stepErrors.interests ? (
                <p className="text-xs text-destructive">
                  {stepErrors.interests}
                </p>
              ) : null}
            </fieldset>
          )}

          {currentStep === 2 && (
            <fieldset
              className="space-y-4"
              aria-invalid={showErrors && !!stepErrors.level}
            >
              <legend className="sr-only">{stepMeta?.question}</legend>
              <RadioGroup
                value={formData.level}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, level: value }))
                }
                className="grid gap-3"
              >
                {LEVEL_OPTIONS.map((option, index) => {
                  const id = makeId("level", index)
                  return (
                    <label
                      key={option.value}
                      htmlFor={id}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30",
                        formData.level === option.value && "border-primary/50"
                      )}
                    >
                      <RadioGroupItem
                        id={id}
                        value={option.value}
                        aria-invalid={showErrors && !!stepErrors.level}
                      />
                      <span>{option.label}</span>
                    </label>
                  )
                })}
              </RadioGroup>
              {showErrors && stepErrors.level ? (
                <p className="text-xs text-destructive">{stepErrors.level}</p>
              ) : null}
            </fieldset>
          )}

          {currentStep === 3 && (
            <fieldset
              className="space-y-4"
              aria-invalid={showErrors && !!stepErrors.goals}
            >
              <legend className="sr-only">{stepMeta?.question}</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {GOAL_OPTIONS.map((option, index) => {
                  const id = makeId("goal", index)
                  const checked = formData.goals.includes(option)
                  return (
                    <label
                      key={option}
                      htmlFor={id}
                      className="flex items-start gap-3 rounded-lg border border-border bg-surface p-3 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30"
                    >
                      <Checkbox
                        id={id}
                        checked={checked}
                        onCheckedChange={() =>
                          toggleMultiSelect("goals", option)
                        }
                        aria-invalid={showErrors && !!stepErrors.goals}
                      />
                      <span className="leading-5">{option}</span>
                    </label>
                  )
                })}
              </div>
              {showErrors && stepErrors.goals ? (
                <p className="text-xs text-destructive">{stepErrors.goals}</p>
              ) : null}
            </fieldset>
          )}

          {currentStep === 4 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="full-name">Nom & Prénom</Label>
                <Input
                  id="full-name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                  aria-invalid={showErrors && !!stepErrors.name}
                  aria-describedby={
                    showErrors && stepErrors.name ? "error-name" : undefined
                  }
                  placeholder="Dr. Ahmed Ben"
                />
                {showErrors && stepErrors.name ? (
                  <p id="error-name" className="text-xs text-destructive">
                    {stepErrors.name}
                  </p>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: event.target.value,
                    }))
                  }
                  aria-invalid={showErrors && !!stepErrors.phone}
                  aria-describedby={
                    showErrors && stepErrors.phone ? "error-phone" : undefined
                  }
                  placeholder="+213 6xx xxx xxx"
                />
                {showErrors && stepErrors.phone ? (
                  <p id="error-phone" className="text-xs text-destructive">
                    {stepErrors.phone}
                  </p>
                ) : null}
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  aria-invalid={showErrors && !!stepErrors.email}
                  aria-describedby={
                    showErrors && stepErrors.email ? "error-email" : undefined
                  }
                  placeholder="doctor@email.com"
                />
                {showErrors && stepErrors.email ? (
                  <p id="error-email" className="text-xs text-destructive">
                    {stepErrors.email}
                  </p>
                ) : null}
              </div>
            </div>
          )}

          {isConfirmation && (
            <div className="space-y-4 text-sm text-muted">
              <p className="text-base font-semibold text-foreground">
                Inscription prise en compte
              </p>
              <p>Merci pour votre intérêt.</p>
              <p>
                Notre équipe vous contactera prochainement pour vous transmettre
                les informations détaillées concernant la formation.
              </p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {isConfirmation ? (
          <Button onClick={handleReset} className="w-full sm:w-auto">
            Recommencer
          </Button>
        ) : (
          <>
            <Button
              variant="outline"
              onClick={handlePrevious}
              className={cn(
                "w-full sm:w-auto",
                currentStep === 0 && "invisible sm:visible"
              )}
            >
              Précédent
            </Button>
            {isLastFormStep ? (
              <Button
                onClick={handleSubmit}
                className="w-full sm:w-auto"
                disabled={isLoading}
              >
                {isLoading ? "Envoi..." : "Envoyer"}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="w-full sm:w-auto"
                disabled={isLoading}
              >
                Suivant
              </Button>
            )}
          </>
        )}
      </CardFooter>
      {isError ? (
        <p className="px-6 pb-6 text-sm text-destructive">{error}</p>
      ) : null}
    </Card>
  )
}
