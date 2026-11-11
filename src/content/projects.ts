import type { WorkItem, WorkSection } from "./work";

export type Project = Omit<WorkItem, "sections"> & {
  problem: string;
  // Only projects with sections get a case study page.
  sections?: WorkSection[];
};

export const projects: Project[] = [
  {
    slug: "mesh-support",
    title: "MESH Support",
    eyebrow: "Personal · Multi-agent system",
    summary:
      "A multi-agent customer support platform where a supervisor routes each query to the right specialist, with guardrails around every message.",
    problem:
      "Customer support queries need intelligent routing, preserved context and safety guardrails across several specialized agents.",
    bullets: [
      "LangGraph supervisor routing to Billing, Technical and Refund sub-agents",
      "Guardrails at 100% precision and recall, with 0% false positives, on a 35-message safety set",
      "100% end-to-end accuracy on a 20-case suite run through the live API",
    ],
    tags: ["Python", "LangGraph", "FastAPI", "MongoDB", "NeMo Guardrails", "Langfuse", "Pytest"],
    repo: "https://github.com/vaibhav-panchal8277/Multi-Agent-Customer-Support-System",
    cover: [
      { label: "Customer", sub: "query" },
      { label: "Guardrails", sub: "input rails" },
      { label: "Supervisor", sub: "LangGraph" },
      { label: "Specialist", sub: "billing, tech, refund" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "A LangGraph supervisor agent reads each query and routes it to a Billing, Technical or Refund sub-agent. Each sub-agent has its own prompts, tools and memory. The system runs on FastAPI and MongoDB, with Groq's gpt-oss-120b as the model.",
          "When the supervisor isn't confident about a query, it asks a clarifying question instead of guessing. Hand-offs between agents pass a short summary rather than the whole conversation.",
        ],
      },
      {
        heading: "Keeping it safe",
        body: [
          "NVIDIA NeMo Guardrails sit on both the input and the output, blocking jailbreaks, prompt injection, off-topic and unsafe messages. On a labeled set of 35 messages, 25 checked by the input rail and 10 by the output rail, they reached 100% precision and recall with a 0% false-positive rate, adding about 1.8s per turn.",
        ],
      },
      {
        heading: "Measuring it",
        body: [
          "A 20-case suite drives the live API end to end. It scored 100%: every query reached the right agent, all 6 tool-call cases used the right tool, and all 7 unsafe messages were blocked. Blocked messages are answered in about 2.5s, because the input rail stops them before any agent runs.",
          "Every turn is traced with Langfuse, and a real-time dashboard shows each agent hop and tool call. A Pytest suite, 21 of 21 passing, and 23 of 23 backend tests keep the system reliable as it changes.",
        ],
      },
    ],
  },
  {
    slug: "rag-evaluation",
    title: "RAG system with an evaluation pipeline",
    eyebrow: "Personal · Retrieval and evaluation",
    summary:
      "A hybrid retrieval system built so its quality can be measured, with a keyword fallback for when the vector store is down.",
    problem:
      "RAG systems need rigorous evaluation to catch made-up answers and quality regressions before they reach production.",
    bullets: [
      "Hybrid retrieval with Pinecone and BM25 through Reciprocal Rank Fusion",
      "A 45-question RAGAS golden set with a FastAPI evaluation endpoint",
      "Grounded refusals for out-of-scope questions, and Langfuse tracing throughout",
    ],
    tags: ["Python", "FastAPI", "React", "LangChain", "Pinecone", "BM25", "RAGAS", "Langfuse", "MongoDB", "Docker"],
    repo: "https://github.com/vaibhav-panchal8277/Production-RAG-System-with-Evaluation",
    cover: [
      { label: "Question", sub: "user query" },
      { label: "Dense", sub: "Pinecone, MiniLM" },
      { label: "Keyword", sub: "BM25" },
      { label: "Fusion", sub: "RRF, then answer" },
    ],
    sections: [
      {
        heading: "Retrieval",
        body: [
          "The system combines Pinecone with MiniLM 384-d embeddings and in-memory BM25, merged through Reciprocal Rank Fusion. If the vector store is unavailable, it falls back to keyword-only search instead of failing. Answers cite the chunks they came from.",
        ],
      },
      {
        heading: "Evaluation",
        body: [
          "A 45-question RAGAS golden set scores faithfulness, answer relevancy and context precision. A FastAPI endpoint runs the evaluation and a React dashboard backed by MongoDB shows the results, so a change can be checked before it ships. Langfuse traces both retrieval and generation, with the RAGAS scores attached to each trace.",
        ],
      },
      {
        heading: "Safety and deployment",
        body: [
          "Prompt-injection and jailbreak filtering sits in front of retrieval. Out-of-scope questions still go through RAG, so the system gives a grounded refusal instead of a canned reply.",
          "The service runs with API auth, upload limits and non-root Docker containers. GitHub Actions CI covers linting, compilation and integration tests.",
        ],
      },
    ],
  },
  {
    slug: "examforge",
    title: "ExamForge",
    eyebrow: "Personal · LLM tooling",
    summary:
      "A Streamlit app that reads a syllabus PDF, finds its topics with an LLM and generates a complete question paper from a custom marks distribution and difficulty level.",
    problem:
      "Educators spend hours drafting test questions that match a specific curriculum and difficulty level.",
    bullets: [
      "Extracts syllabus text from PDFs and uses an LLM to identify the topics",
      "Runs on local Ollama models, fully offline, or on OpenAI models in the cloud",
      "Enforces JSON output with a fallback parser and exports the paper as a PDF",
    ],
    tags: ["Python", "Streamlit", "OpenAI API", "Ollama", "pdfplumber", "ReportLab"],
    repo: "https://github.com/vaibhav-panchal8277/examforge",
    cover: [
      { label: "Syllabus", sub: "PDF upload" },
      { label: "Topics", sub: "found by the LLM" },
      { label: "Questions", sub: "marks and difficulty" },
      { label: "Paper", sub: "PDF export" },
    ],
  },
  {
    slug: "movie-recommendation-engine",
    title: "Movie Recommendation Engine",
    eyebrow: "Personal · Machine learning",
    summary:
      "A content-based recommender built on the TMDB 5000 dataset and served as a real-time Streamlit app.",
    problem:
      "People want recommendations based on what a film is actually like, not generic popularity lists.",
    bullets: [
      "TF-IDF vectorization and cosine similarity over the TMDB 5000 dataset",
      "Real-time recommendations in a Streamlit app, with sub-second latency",
      "Collaborative filtering or hybrid approaches can be added without restructuring the serving layer",
    ],
    tags: ["Python", "Scikit-learn", "TF-IDF", "Cosine Similarity", "Streamlit"],
    cover: [
      { label: "Metadata", sub: "TMDB 5000" },
      { label: "TF-IDF", sub: "vectorization" },
      { label: "Similarity", sub: "cosine" },
      { label: "Picks", sub: "Streamlit app" },
    ],
  },
];

export const caseStudies = projects.filter(
  (project): project is Project & Pick<WorkItem, "sections"> => Boolean(project.sections),
);
