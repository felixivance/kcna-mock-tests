import { Question } from '@/lib/exam-data'
import { mockQuestions } from '../utils/test-utils'

export const fetchExamQuestions = jest.fn((): Promise<Question[]> => {
  return Promise.resolve(mockQuestions)
})