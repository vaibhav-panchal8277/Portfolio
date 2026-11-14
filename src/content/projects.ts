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
      "A multi-agent customer support platform where a supervisor routes each query to the right specialist, with fail-closed guardrails and access control around every message.",
    problem:
      "Customer support queries need intelligent routing, preserved context and safety guardrails across several specialized agents.",
    bullets: [
      "LangGraph supervisor routing to Billing, Technical and Refund sub-agents, with a loop guard",
      "Guardrails at 100% precision and recall, with 0% false positives, on a 35-message safety set in two runs",
      "97.5% end-to-end accuracy (39 of 40) across two runs of a 20-case live-API suite",
    ],
    tags: ["Python", "LangGraph", "FastAPI", "MongoDB", "NeMo Guardrails", "Langfuse", "Pytest"],
    repo: "https://github.com/vaibhav-panchal8277/Multi-Agent-Customer-Support-System",
    live: "https://multi-agent-customer-support-system-ten.vercel.app",
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
          "A LangGraph supervisor agent reads each query and routes it to a Billing, Technical or Refund sub-agent. Each sub-agent has its own prompts and its own set of tools. The system runs on FastAPI and MongoDB, with Groq's gpt-oss-120b as the model.",
          "When the supervisor isn't confident about a query, it asks a clarifying question instead of guessing. Hand-offs between agents pass a short summary rather than the whole conversation, and a loop guard stops agents handing a query back and forth.",
        ],
      },
      {
        heading: "Keeping it safe",
        body: [
          "Access is checked on the server, never left to the model. Each session has its own access key, and the admin dashboard needs a separate server-side token. The customer's identity is verified before any invoice or refund lookup, and a refund only executes when the customer explicitly confirms it.",
          "NVIDIA NeMo Guardrails sit on both the input and the output, blocking jailbreaks, prompt injection, off-topic and unsafe messages. Both rails fail closed. The input rail runs in parallel with the agents, which cannot run any tool until it passes. On a labeled set of 35 messages, 25 checked by the input rail and 10 by the output rail, they reached 100% precision and recall with a 0% false-positive rate, in two independent runs.",
        ],
      },
      {
        heading: "Measuring it",
        body: [
          "A 20-case suite drives the live API end to end. Across two runs it scored 97.5%, 39 of 40, with 100% intent classification, 100% tool-call precision and every unsafe message caught.",
          "Every turn is traced with Langfuse, and a dashboard shows each agent hop and tool call. 23 of 23 live end-to-end tests and 127 automated offline tests, backend and frontend, keep the system reliable as it changes.",
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
      "Hybrid retrieval with Pinecone and BM25 through Reciprocal Rank Fusion, with a keyword fallback",
      "A 45-question golden set scored on RAGAS, retrieval hit rate, MRR and refusal accuracy",
      "Guardrails before retrieval, untrusted-context handling and 72 offline tests in CI",
    ],
    tags: ["Python", "FastAPI", "React", "LangChain", "Pinecone", "BM25", "RAGAS", "Langfuse", "MongoDB", "Docker"],
    repo: "https://github.com/vaibhav-panchal8277/Production-RAG-System-with-Evaluation",
    live: "https://production-rag-system-with-evaluati-nine.vercel.app",
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
          "The system combines Pinecone with MiniLM 384-d embeddings and in-memory BM25, merged through Reciprocal Rank Fusion. If the vector store is unreachable, it falls back to keyword-only search instead of failing. Answers cite the chunks they came from.",
          "Every chunk gets a deterministic ID, so re-ingesting a document replaces it cleanly instead of duplicating it. PDF parsing, embedding and Pinecone calls run off the event loop, so one large upload doesn't stall other requests.",
        ],
      },
      {
        heading: "Evaluation",
        body: [
          "Every in-scope answer is scored with RAGAS for faithfulness, answer relevancy and context precision. On the 45-question golden set, the 40 in-scope questions are also checked against reference answers for answer correctness and context recall, and against the document they should come from for retrieval hit rate and mean reciprocal rank. The 5 out-of-scope questions are scored only on whether the system correctly refuses.",
          "Evaluations run as background jobs. Results go to MongoDB for the React dashboard, and each score is attached to its Langfuse trace, so a bad score leads straight to the retrieval and generation behind it.",
        ],
      },
      {
        heading: "Safety and deployment",
        body: [
          "Guardrails run before retrieval, so a blocked query costs no embedding or search work. Chunks containing instruction-like text are flagged at ingest, and all retrieved context reaches the model marked as untrusted data, not instructions. Out-of-scope questions still go through RAG, so the system gives a grounded refusal instead of a canned reply.",
          "Queries and conversation history need an API key, uploads are size-limited, and containers run as non-root. GitHub Actions CI runs linting, 72 offline tests and a live integration suite in its own Pinecone namespace.",
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
