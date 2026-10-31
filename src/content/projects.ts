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
      "NeMo Guardrails at 100% precision and recall on a labeled safety set",
      "23 of 23 end-to-end tests passing, at about 5.4s median guarded response",
    ],
    tags: ["Python", "LangGraph", "FastAPI", "MongoDB", "NeMo Guardrails", "Langfuse", "Pytest"],
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
        ],
      },
      {
        heading: "Keeping it safe",
        body: [
          "NeMo Guardrails sit on both the input and the output. On a labeled safety set they reached 100% precision and recall, with a 0% false-positive rate and about 1.8s of added overhead.",
        ],
      },
      {
        heading: "Measuring it",
        body: [
          "Routing, tool selection and guardrails were all evaluated end to end, with 23 of 23 tests passing and a median guarded response time of about 5.4s. Langfuse tracing and a Pytest suite make those checks repeatable.",
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
      "Deployed with API auth, non-root containers and CI checks",
    ],
    tags: ["Python", "FastAPI", "React", "Pinecone", "Langfuse", "RAGAS", "BM25", "Groq"],
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
          "The system combines Pinecone with MiniLM 384-d embeddings and in-memory BM25, merged through Reciprocal Rank Fusion. If the vector store is unavailable, it falls back to keyword-only search instead of failing.",
        ],
      },
      {
        heading: "Evaluation",
        body: [
          "A 45-question RAGAS golden set scores faithfulness, answer relevancy and context precision. A FastAPI endpoint runs the evaluation and a React dashboard shows the results, so a change can be checked before it ships.",
        ],
      },
      {
        heading: "Deployment",
        body: [
          "Prompt-injection filtering sits in front of retrieval. The service runs with API auth, non-root containers and CI checks.",
        ],
      },
    ],
  },
  {
    slug: "examforge",
    title: "ExamForge",
    eyebrow: "Personal · LLM tooling",
    summary:
      "An end-to-end RAG pipeline that turns syllabus PDFs into structured question papers, with configurable difficulty and Bloom's taxonomy tagging.",
    problem:
      "Educators spend hours drafting test questions that match a specific curriculum and difficulty level.",
    bullets: [
      "Ingests syllabus PDFs, then chunks and embeds the content for retrieval",
      "Runs on Ollama locally or OpenAI in the cloud, so it can work in air-gapped environments",
      "Validates structured JSON output against a strict schema before rendering to PDF",
    ],
    tags: ["Python", "LangChain", "Ollama", "OpenAI", "Streamlit"],
    cover: [
      { label: "Syllabus", sub: "PDF upload" },
      { label: "Embeddings", sub: "chunked content" },
      { label: "LLM", sub: "Ollama or OpenAI" },
      { label: "Question paper", sub: "validated, then PDF" },
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
      "Real-time recommendations through a Streamlit app",
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
