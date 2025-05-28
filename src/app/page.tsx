"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, XCircle, Trophy, BookOpen, ChevronLeft, ChevronRight, Save, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import { type Question, fetchExamQuestions } from "@/lib/exam-data"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Answer {
  questionNumber: string
  selectedAnswer: string
  isCorrect: boolean
  timeSpent: number
}

interface QuizState {
  currentQuestionIndex: number
  answers: Answer[]
  showResults: boolean
  reviewMode: boolean
  startTime: number
  lastSaved: number
}

export default function KCNAExamPractice() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [answers, setAnswers] = useState<Answer[]>([])
  const [showResults, setShowResults] = useState(false)
  const [startTime, setStartTime] = useState<number>(Date.now())
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now())
  const [loading, setLoading] = useState(true)
  const [reviewMode, setReviewMode] = useState(false)
  const [hasSavedState, setHasSavedState] = useState(false)
  const [showRestorePrompt, setShowRestorePrompt] = useState(false)
  const [lastSaved, setLastSaved] = useState<number>(Date.now())

  // Load questions
  useEffect(() => {
    loadQuestions()
  }, [])

  // Check for saved state when questions are loaded
  useEffect(() => {
    if (questions.length > 0 && !hasSavedState) {
      checkForSavedState()
    }
  }, [questions, hasSavedState])

  // Save state to localStorage whenever relevant state changes
  useEffect(() => {
    if (questions.length > 0 && !loading) {
      saveStateToLocalStorage()
    }
  }, [currentQuestionIndex, answers, showResults, reviewMode])

  const loadQuestions = async () => {
    try {
      const examQuestions = await fetchExamQuestions()
      setQuestions(examQuestions)
      setLoading(false)
    } catch (error) {
      console.error("Error loading questions:", error)
      setLoading(false)
    }
  }

  const checkForSavedState = () => {
    try {
      const savedState = localStorage.getItem("kcnaQuizState")
      if (savedState) {
        const parsedState: QuizState = JSON.parse(savedState)

        // Check if the saved state is recent (within the last 7 days)
        const now = Date.now()
        const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000
        if (now - parsedState.lastSaved < sevenDaysInMs) {
          setShowRestorePrompt(true)
          return
        }
      }
      setHasSavedState(true)
    } catch (error) {
      console.error("Error checking for saved state:", error)
      setHasSavedState(true)
    }
  }

  const restoreSavedState = () => {
    try {
      const savedState = localStorage.getItem("kcnaQuizState")
      if (savedState) {
        const parsedState: QuizState = JSON.parse(savedState)

        setCurrentQuestionIndex(parsedState.currentQuestionIndex)
        setAnswers(parsedState.answers)
        setShowResults(parsedState.showResults)
        setReviewMode(parsedState.reviewMode)

        // Adjust the start time to maintain the elapsed time
        const elapsedSinceSave = Date.now() - parsedState.lastSaved
        setStartTime(parsedState.startTime + elapsedSinceSave)

        // If we're in the middle of a question, restore the selected answer
        if (!parsedState.showResults && !parsedState.reviewMode) {
          const currentAnswer = parsedState.answers.find(
            (a) => a.questionNumber === questions[parsedState.currentQuestionIndex]?.number,
          )
          setSelectedAnswer(currentAnswer?.selectedAnswer || "")
        }

        setLastSaved(parsedState.lastSaved)
      }
      setHasSavedState(true)
      setShowRestorePrompt(false)
    } catch (error) {
      console.error("Error restoring saved state:", error)
      setHasSavedState(true)
      setShowRestorePrompt(false)
    }
  }

  const discardSavedState = () => {
    try {
      localStorage.removeItem("kcnaQuizState")
      setHasSavedState(true)
      setShowRestorePrompt(false)
    } catch (error) {
      console.error("Error discarding saved state:", error)
      setHasSavedState(true)
      setShowRestorePrompt(false)
    }
  }

  const saveStateToLocalStorage = () => {
    try {
      const now = Date.now()
      const stateToSave: QuizState = {
        currentQuestionIndex,
        answers,
        showResults,
        reviewMode,
        startTime,
        lastSaved: now,
      }

      localStorage.setItem("kcnaQuizState", JSON.stringify(stateToSave))
      setLastSaved(now)
    } catch (error) {
      console.error("Error saving state to localStorage:", error)
    }
  }

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const handleNext = () => {
    if (selectedAnswer && !reviewMode) {
      const timeSpent = Date.now() - questionStartTime
      const isCorrect = selectedAnswer === questions[currentQuestionIndex].correctAnswer

      setAnswers([
        ...answers,
        {
          questionNumber: questions[currentQuestionIndex].number,
          selectedAnswer,
          isCorrect,
          timeSpent,
        },
      ])
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer("")
      setQuestionStartTime(Date.now())
    } else if (!reviewMode) {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      const previousAnswer = answers.find((a) => a.questionNumber === questions[currentQuestionIndex - 1].number)
      setSelectedAnswer(previousAnswer?.selectedAnswer || "")
    }
  }

  const startReview = () => {
    setShowResults(false)
    setReviewMode(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswer("")
  }

  const restartQuiz = (clearStorage = false) => {
    if (clearStorage) {
      try {
        localStorage.removeItem("kcnaQuizState")
      } catch (error) {
        console.error("Error clearing localStorage:", error)
      }
    }

    setCurrentQuestionIndex(0)
    setSelectedAnswer("")
    setAnswers([])
    setShowResults(false)
    setReviewMode(false)
    setStartTime(Date.now())
    setQuestionStartTime(Date.now())
  }

  const calculateScore = () => {
    const correct = answers.filter((a) => a.isCorrect).length
    const total = answers.length
    const percentage = total > 0 ? (correct / total) * 100 : 0
    return { correct, total, percentage }
  }

  const calculateDomainScores = () => {
    const domainStats: { [key: string]: { correct: number; total: number } } = {}

    answers.forEach((answer) => {
      const question = questions.find((q) => q.number === answer.questionNumber)
      if (question) {
        if (!domainStats[question.domain]) {
          domainStats[question.domain] = { correct: 0, total: 0 }
        }
        domainStats[question.domain].total++
        if (answer.isCorrect) {
          domainStats[question.domain].correct++
        }
      }
    })

    return Object.entries(domainStats).map(([domain, stats]) => ({
      domain,
      correct: stats.correct,
      total: stats.total,
      percentage: (stats.correct / stats.total) * 100,
    }))
  }

  const calculateCompetencyScores = () => {
    const competencyStats: { [key: string]: { correct: number; total: number } } = {}

    answers.forEach((answer) => {
      const question = questions.find((q) => q.number === answer.questionNumber)
      if (question) {
        if (!competencyStats[question.competency]) {
          competencyStats[question.competency] = { correct: 0, total: 0 }
        }
        competencyStats[question.competency].total++
        if (answer.isCorrect) {
          competencyStats[question.competency].correct++
        }
      }
    })

    return Object.entries(competencyStats).map(([competency, stats]) => ({
      competency,
      correct: stats.correct,
      total: stats.total,
      percentage: (stats.correct / stats.total) * 100,
    }))
  }

  const formatLastSaved = () => {
    if (!lastSaved) return ""

    const date = new Date(lastSaved)
    return date.toLocaleTimeString()
  }

  if (showRestorePrompt) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Save className="h-5 w-5" />
              Resume Previous Session
            </CardTitle>
            <CardDescription>
              We found a saved quiz session. Would you like to resume where you left off?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Last saved: {new Date(lastSaved).toLocaleString()}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={discardSavedState}>
              Start New Quiz
            </Button>
            <Button onClick={restoreSavedState}>Resume Session</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading KCNA exam questions...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <Alert>
              <AlertDescription>No questions found. Please check the data source.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showResults) {
    const { correct, total, percentage } = calculateScore()
    const domainScores = calculateDomainScores()
    const competencyScores = calculateCompetencyScores()
    const totalTime = Date.now() - startTime
    const averageTime = total > 0 ? answers.reduce((sum, a) => sum + a.timeSpent, 0) / total : 0

    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              KCNA Practice Exam Results
            </CardTitle>
            <CardDescription>Your performance analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{percentage.toFixed(1)}%</div>
                      <p className="text-sm text-muted-foreground">Overall Score</p>
                      <p className="text-lg mt-2">
                        {correct} / {total}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">
                        {Math.floor(totalTime / 60000)}m {Math.floor((totalTime % 60000) / 1000)}s
                      </div>
                      <p className="text-sm text-muted-foreground">Total Time</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{Math.floor(averageTime / 1000)}s</div>
                      <p className="text-sm text-muted-foreground">Avg Time per Question</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="domains" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="domains">By Domain</TabsTrigger>
                  <TabsTrigger value="competencies">By Competency</TabsTrigger>
                  <TabsTrigger value="questions">Question Review</TabsTrigger>
                </TabsList>

                <TabsContent value="domains" className="space-y-4">
                  <h3 className="text-lg font-semibold">Performance by Domain</h3>
                  {domainScores.map((domain) => (
                    <div key={domain.domain} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{domain.domain}</span>
                        <span className="text-sm text-muted-foreground">
                          {domain.correct}/{domain.total} ({domain.percentage.toFixed(0)}%)
                        </span>
                      </div>
                      <Progress value={domain.percentage} className="h-2" />
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="competencies" className="space-y-4">
                  <h3 className="text-lg font-semibold">Performance by Competency</h3>
                  {competencyScores.map((comp) => (
                    <div key={comp.competency} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{comp.competency}</span>
                        <span className="text-sm text-muted-foreground">
                          {comp.correct}/{comp.total} ({comp.percentage.toFixed(0)}%)
                        </span>
                      </div>
                      <Progress value={comp.percentage} className="h-2" />
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="questions" className="space-y-4">
                  <h3 className="text-lg font-semibold">Question-by-Question Review</h3>
                  <div className="space-y-2">
                    {answers.map((answer, index) => {
                      const question = questions.find((q) => q.number === answer.questionNumber)
                      return (
                        <div key={index} className="flex items-center gap-2 p-2 rounded-lg border">
                          {answer.isCorrect ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                          <span className="text-sm">
                            Question {answer.questionNumber}: {question?.domain} - {question?.competency}
                          </span>
                          <Badge variant={answer.isCorrect ? "default" : "destructive"} className="ml-auto">
                            {answer.selectedAnswer}
                          </Badge>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex gap-4 justify-center">
                <Button onClick={startReview} variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Review Answers
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default">
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Restart Quiz
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Restart Quiz</DialogTitle>
                      <DialogDescription>
                        Do you want to clear your saved progress? This will delete all saved data.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex justify-between sm:justify-between">
                      <Button variant="outline" onClick={() => restartQuiz(false)}>
                        Keep Saved Data
                      </Button>
                      <Button variant="destructive" onClick={() => restartQuiz(true)}>
                        Clear All Data
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-xs text-muted-foreground">Last saved: {formatLastSaved()}</p>
          </CardFooter>
        </Card>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100
  const userAnswer = reviewMode ? answers.find((a) => a.questionNumber === currentQuestion.number) : null

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>KCNA Practice Exam</CardTitle>
              <CardDescription>
                Question {currentQuestionIndex + 1} of {questions.length}
              </CardDescription>
            </div>
            {reviewMode && (
              <Badge variant="secondary" className="text-lg px-3 py-1">
                Review Mode
              </Badge>
            )}
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">{currentQuestion.domain}</Badge>
                <Badge variant="outline">{currentQuestion.competency}</Badge>
              </div>
              <h3 className="text-lg font-medium leading-relaxed">{currentQuestion.question}</h3>
            </div>

            <RadioGroup
              value={reviewMode ? userAnswer?.selectedAnswer || "" : selectedAnswer}
              onValueChange={!reviewMode ? handleAnswerSelect : undefined}
              disabled={reviewMode}
            >
              {Object.entries(currentQuestion.options).map(([letter, text]) => {
                const isCorrect = letter === currentQuestion.correctAnswer
                const isSelected = reviewMode && userAnswer?.selectedAnswer === letter
                const showFeedback = reviewMode

                return (
                  <div
                    key={letter}
                    className={cn(
                      "flex items-center space-x-2 p-4 rounded-lg border transition-colors",
                      showFeedback && isCorrect && "bg-green-50 border-green-500 dark:bg-green-950",
                      showFeedback && isSelected && !isCorrect && "bg-red-50 border-red-500 dark:bg-red-950",
                      !reviewMode && selectedAnswer === letter && "bg-accent",
                    )}
                  >
                    <RadioGroupItem value={letter} id={letter} />
                    <Label htmlFor={letter} className="flex-1 cursor-pointer font-normal">
                      <span className="font-medium mr-2">{letter}.</span>
                      {text}
                    </Label>
                    {showFeedback && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />}
                    {showFeedback && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500 ml-auto" />}
                  </div>
                )
              })}
            </RadioGroup>

            {reviewMode && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>Explanation:</strong> {currentQuestion.explanation}
                </AlertDescription>
              </Alert>
            )}

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {reviewMode ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Exit Review</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Exit Review Mode</DialogTitle>
                      <DialogDescription>
                        Do you want to restart the quiz? You can choose to keep or clear your saved progress.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex justify-between sm:justify-between">
                      <Button variant="outline" onClick={() => restartQuiz(false)}>
                        Keep Saved Data
                      </Button>
                      <Button variant="destructive" onClick={() => restartQuiz(true)}>
                        Clear All Data
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button onClick={handleNext} disabled={!selectedAnswer && !reviewMode}>
                  {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-xs text-muted-foreground">Last saved: {formatLastSaved()}</p>
        </CardFooter>
      </Card>
    </div>
  )
}
