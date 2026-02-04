import * as React from "react"

type SubmitPayload = {
  type: string
  data: Record<string, unknown>
}

type SubmitState = {
  isLoading: boolean
  isError: boolean
  error?: string
}

const SUBMIT_ENDPOINT = "/api/form-submissions"

async function submitForm(payload: SubmitPayload) {
  const res = await fetch(SUBMIT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const message = await res.text().catch(() => "")
    const suffix = message ? ` - ${message}` : ""
    throw new Error(`Submission failed (${res.status})${suffix}`)
  }
}

export function useFormSubmit() {
  const [state, setState] = React.useState<SubmitState>({
    isLoading: false,
    isError: false,
    error: undefined,
  })

  const submit = React.useCallback(async (payload: SubmitPayload) => {
    setState({ isLoading: true, isError: false, error: undefined })
    try {
      await submitForm(payload)
      setState({ isLoading: false, isError: false, error: undefined })
      return true
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Submission failed"
      setState({ isLoading: false, isError: true, error: message })
      return false
    }
  }, [])

  return { submit, ...state }
}
