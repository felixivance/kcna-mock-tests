import '@testing-library/jest-dom'

// Required for React 19 act() support
global.IS_REACT_ACT_ENVIRONMENT = true

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock

// Mock Date.now for consistent testing
const mockDateNow = jest.fn(() => 1234567890000)
global.Date.now = mockDateNow

// Reset mocks before each test
beforeEach(() => {
  localStorageMock.getItem.mockClear()
  localStorageMock.setItem.mockClear()
  localStorageMock.removeItem.mockClear()
  localStorageMock.clear.mockClear()
  mockDateNow.mockClear()
})