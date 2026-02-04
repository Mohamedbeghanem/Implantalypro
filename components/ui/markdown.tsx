import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface MarkdownTextProps {
  content: string
  className?: string
}

type InlineToken =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "italic"; value: string }
  | { type: "code"; value: string }
  | { type: "link"; label: string; url: string }

function isSafeUrl(url: string) {
  return (
    url.startsWith("/") ||
    url.startsWith("#") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:") ||
    /^https?:\/\//i.test(url)
  )
}

function findNextToken(input: string) {
  const patterns = [
    { type: "link" as const, regex: /\[([^\]]+)\]\(([^)]+)\)/ },
    { type: "code" as const, regex: /`([^`]+)`/ },
    { type: "bold" as const, regex: /\*\*([^*]+)\*\*/ },
    { type: "italic" as const, regex: /\*([^*]+)\*/ },
  ]

  let bestMatch: {
    type: InlineToken["type"]
    index: number
    match: RegExpExecArray
  } | null = null

  for (const pattern of patterns) {
    const regex = new RegExp(pattern.regex.source)
    const match = regex.exec(input)
    if (!match) continue
    if (!bestMatch || match.index < bestMatch.index) {
      bestMatch = {
        type: pattern.type,
        index: match.index,
        match,
      }
    }
  }

  return bestMatch
}

function tokenizeInline(input: string): InlineToken[] {
  const tokens: InlineToken[] = []
  let remaining = input

  while (remaining.length > 0) {
    const next = findNextToken(remaining)
    if (!next || next.index === -1) {
      tokens.push({ type: "text", value: remaining })
      break
    }

    if (next.index > 0) {
      tokens.push({ type: "text", value: remaining.slice(0, next.index) })
    }

    const matchedText = next.match[0]
    switch (next.type) {
      case "link":
        tokens.push({
          type: "link",
          label: next.match[1],
          url: next.match[2],
        })
        break
      case "code":
        tokens.push({ type: "code", value: next.match[1] })
        break
      case "bold":
        tokens.push({ type: "bold", value: next.match[1] })
        break
      case "italic":
        tokens.push({ type: "italic", value: next.match[1] })
        break
      default:
        tokens.push({ type: "text", value: matchedText })
        break
    }

    remaining = remaining.slice(next.index + matchedText.length)
  }

  return tokens
}

function renderInline(input: string, keyPrefix: string): ReactNode[] {
  const tokens = tokenizeInline(input)
  return tokens.map((token, index) => {
    const key = `${keyPrefix}-inline-${index}`
    switch (token.type) {
      case "bold":
        return (
          <strong key={key} className="font-semibold text-foreground">
            {token.value}
          </strong>
        )
      case "italic":
        return (
          <em key={key} className="italic text-foreground">
            {token.value}
          </em>
        )
      case "code":
        return (
          <code
            key={key}
            className="rounded bg-muted px-1 py-0.5 text-xs font-medium text-foreground"
          >
            {token.value}
          </code>
        )
      case "link": {
        if (!isSafeUrl(token.url)) {
          return <span key={key}>{token.label}</span>
        }
        const isExternal = /^https?:\/\//i.test(token.url)
        return (
          <a
            key={key}
            href={token.url}
            className="font-medium text-primary underline-offset-4 hover:underline"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
          >
            {token.label}
          </a>
        )
      }
      default:
        return <span key={key}>{token.value}</span>
    }
  })
}

function isOrderedList(lines: string[]) {
  return lines.every((line) => /^\s*\d+\.\s+/.test(line))
}

function isUnorderedList(lines: string[]) {
  return lines.every((line) => /^\s*[-*+]\s+/.test(line))
}

function renderBlocks(content: string): ReactNode[] {
  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)

  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n").filter((line) => line.trim() !== "")
    if (lines.length > 0 && isOrderedList(lines)) {
      return (
        <ol
          key={`block-${blockIndex}`}
          className="ml-5 list-decimal space-y-2"
        >
          {lines.map((line, index) => {
            const text = line.replace(/^\s*\d+\.\s+/, "")
            return (
              <li key={`block-${blockIndex}-li-${index}`}>
                {renderInline(text, `block-${blockIndex}-li-${index}`)}
              </li>
            )
          })}
        </ol>
      )
    }

    if (lines.length > 0 && isUnorderedList(lines)) {
      return (
        <ul
          key={`block-${blockIndex}`}
          className="ml-5 list-disc space-y-2"
        >
          {lines.map((line, index) => {
            const text = line.replace(/^\s*[-*+]\s+/, "")
            return (
              <li key={`block-${blockIndex}-li-${index}`}>
                {renderInline(text, `block-${blockIndex}-li-${index}`)}
              </li>
            )
          })}
        </ul>
      )
    }

    return (
      <p key={`block-${blockIndex}`} className="leading-relaxed">
        {lines.map((line, index) => (
          <span key={`block-${blockIndex}-line-${index}`}>
            {renderInline(line, `block-${blockIndex}-line-${index}`)}
            {index < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    )
  })
}

export function MarkdownText({ content, className }: MarkdownTextProps) {
  if (!content) return null

  return (
    <div className={cn("space-y-3 text-sm text-muted-foreground", className)}>
      {renderBlocks(content)}
    </div>
  )
}
