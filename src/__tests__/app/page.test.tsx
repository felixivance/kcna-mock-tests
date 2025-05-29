import { render, screen, waitFor, act } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import KCNAExamPractice from '@/app/page'
// import { act } from '@testing-library/react'
// import { render, screen, waitFor, act } from '@testing-library/react'
// Mock the exam data module
jest.mock('../../lib/exam-data', () => ({
 fetchExamQuestions: jest.fn(() => Promise.resolve([
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
    }
  ]))
}))



describe('KCNAExamPractice', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  

  test('renders loading state initially', () => {
    render(<KCNAExamPractice />)
    expect(screen.getByText('Loading KCNA exam questions...')).toBeInTheDocument()
  })

  test('renders quiz interface after loading', async () => {
    await act(async () => {
      render(<KCNAExamPractice />)
    })
    
    // Wait for async operations to complete
    await waitFor(() => {
      expect(screen.getByText('KCNA Practice Exam')).toBeInTheDocument()
    })
    
    expect(screen.getByText('Question 1 of 1')).toBeInTheDocument()
    expect(screen.getByText('What is Kubernetes?')).toBeInTheDocument()
  })

  test('allows selecting an answer', async () => {
    const user = userEvent.setup()
    
    await act(async () => {
      render(<KCNAExamPractice />)
    })
    
    // Wait for the component to load
    await waitFor(() => {
      expect(screen.getByText('What is Kubernetes?')).toBeInTheDocument()
    })
    
    const optionA = screen.getByText('A container orchestration platform')
    
    await act(async () => {
      await user.click(optionA)
    })
    
    // Check if the radio is selected
    const radio = screen.getByRole('radio', { name: /A container orchestration platform/i })
    expect(radio).toBeChecked()
  })

  test('enables next button when answer is selected', async () => {
    const user = userEvent.setup()
    
    await act(async () => {
      render(<KCNAExamPractice />)
    })
    
    // Wait for the component to load
    await waitFor(() => {
      expect(screen.getByText('What is Kubernetes?')).toBeInTheDocument()
    })
    
    const nextButton = screen.getByRole('button', { name: /finish|next/i })
    expect(nextButton).toBeDisabled()
    
    const optionA = screen.getByText('A container orchestration platform')
    
    await act(async () => {
      await user.click(optionA)
    })
    
    expect(nextButton).toBeEnabled()
  })
})