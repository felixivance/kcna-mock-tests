# 🌐 KCNA Practice App

A Next.js-based interactive quiz platform to help you **learn and practice for the Kubernetes and Cloud Native Associate (KCNA)** certification.

🚀 Built by [@FelixIvance](https://github.com/FelixIvance) to solidify knowledge and help others prepare effectively through real-world practice questions and community collaboration.

---

## 📚 Features

- ✅ Practice with KCNA-style questions (domains: Kubernetes, Cloud Native, Security, Observability, etc.)
- 📈 Instant feedback with explanations
- 🔍 Filter questions by domain or difficulty
- 🔄 Review incorrect answers
- 💡 Add or suggest new questions via GitHub

---

## 🧪 Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **UI:** TailwindCSS / Shadcn UI *(optional: mention if used)*
- **State Management:** React Context / Zustand *(whichever applies)*
- **Deployment:** Vercel / GCP / Docker *(mention your method)*

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/kcna-practice-app.git
cd kcna-practice-app
```

### 2. Clone the repository

```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```

Then visit http://localhost:3000

### 🛠️ Contributing

We welcome all contributions to grow the question bank and improve the learning experience!

👉 How to contribute:
Add your question to lib/exam-data.ts following the format:

```json
{
  "number": "42",
  "question": "What component...",
  "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
  },
  "correctAnswer": "C",
  "explanation": "Because...",
  "domain": "Kubernetes Fundamentals",
  "competency": "Control Plane"
}
```

Create a Pull Request with a descriptive title

We’ll review and merge once it fits the exam's tone and structure!

---

### 🙋‍♂️ Why This Exists
I created this project to practice for the KCNA exam using real questions and deepen my understanding by building. 
Now that I’ve passed ✅ — I want to share the tool with the community to help others do the same!

