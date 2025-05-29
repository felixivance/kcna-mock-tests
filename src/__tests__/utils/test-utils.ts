// src/__tests__/utils/test-utils.ts
import React, { ReactElement } from 'react'
import { render, RenderOptions, act } from '@testing-library/react'

// Define Question type locally for testing
export interface Question {
  number: string
  question: string
  options: { [key: string]: string }
  correctAnswer: string
  explanation: string
  domain: string
  competency: string
}

// Mock questions for testing
export const mockQuestions: Question[] = [
  {
    number: "1",
    question: "What is Kubernetes?",
    options: {
      A: "A container orchestration platform",
      B: "A programming language",
      C: "A database",
      D: "An operating system"
    },
    correctAnswer: "A",
    explanation: "Kubernetes is a container orchestration platform.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Architecture"
  },
  {
    number: "2",
    question: "What is a Pod?",
    options: {
      A: "A single container",
      B: "A group of containers",
      C: "A node",
      D: "A cluster"
    },
    correctAnswer: "B",
    explanation: "A Pod is a group of one or more containers.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes API Primitives"
  }
]

// Custom render function
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { ...options })

export * from '@testing-library/react'
export { customRender as renderWithAct }