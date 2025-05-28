import { render, screen, fireEvent, waitFor } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import KCNAExamPractice from '@/app/page'

// Mock the exam data module
jest.mock('@/lib/exam-data', () => ({
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
    render(<KCNAExamPractice />)
    
    await waitFor(() => {
      expect(screen.getByText('KCNA Practice Exam')).toBeInTheDocument()
    })
    
    expect(screen.getByText('Question 1 of 1')).toBeInTheDocument()
    expect(screen.getByText('What is Kubernetes?')).toBeInTheDocument()
  })

  test('allows selecting an answer', async () => {
    const user = userEvent.setup()
    render(<KCNAExamPractice />)
    
    await waitFor(() => {
      expect(screen.getByText('What is Kubernetes?')).toBeInTheDocument()
    })
    
    const optionA = screen.getByLabelText(/A\. A container orchestration platform/)
    await user.click(optionA)
    
    expect(optionA).toBeChecked()
  })

  test('enables next button when answer is selected', async () => {
    const user = userEvent.setup()
    render(<KCNAExamPractice />)
    
    await waitFor(() => {
      expect(screen.getByText('What is Kubernetes?')).toBeInTheDocument()
    })
    
    const nextButton = screen.getByRole('button', { name: /finish/i })
    expect(nextButton).toBeDisabled()
    
    const optionA = screen.getByLabelText(/A\. A container orchestration platform/)
    await user.click(optionA)
    
    expect(nextButton).toBeEnabled()
  })
})