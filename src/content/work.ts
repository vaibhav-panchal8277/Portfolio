export type CoverNode = { label: string; sub: string };

export type WorkSection = {
  heading: string;
  body: string[];
  list?: { lead: string; text: string }[];
};

export type WorkItem = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  bullets: [string, string, string];
  tags: string[];
  // Four steps at most. The last one is drawn as the output.
  cover: CoverNode[];
  sections: WorkSection[];
  repo?: string;
  live?: string;
};

export const work: WorkItem[] = [
  {
    slug: "ui-element-vision",
    title: "A local vision model for UI elements",
    eyebrow: "TestGrid · CoTester vision",
    summary:
      "CoTester has to understand what is on a screen before it can act. I researched and built the pipeline that moves that job off a hosted vision API and onto models we run ourselves.",
    bullets: [
      "Researched models, libraries and methods, then designed the replacement for a hosted vision API",
      "Built a FastAPI service around the new pipeline",
      "Added icon naming in ONNX and two-pass OCR to catch elements the first pass missed",
    ],
    tags: ["Python", "YOLO", "OCR", "ONNX", "VLM", "FastAPI"],
    cover: [
      { label: "Screenshot", sub: "web or mobile" },
      { label: "Detection", sub: "YOLO" },
      { label: "Text", sub: "two-pass OCR" },
      { label: "Elements", sub: "role, label, position" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "The pipeline takes a screenshot and returns a structured description of every interactive control: its role, its visible label and where it sits on the screen. It also writes an annotated image, so a person can check what the model saw.",
          "The goal was to replace a hosted vision API with a pipeline we control. That meant researching models and libraries first, then designing the method, then building a FastAPI application to serve it.",
        ],
      },
      {
        heading: "Finding what the first pass missed",
        body: [
          "A detector alone leaves gaps. Icons have no text to read, and some elements simply get missed. These changes went after those gaps.",
        ],
        list: [
          {
            lead: "Icon naming in ONNX.",
            text: "A small classifier gives wordless icons a usable name, so the agent can refer to them.",
          },
          {
            lead: "Two-pass OCR.",
            text: "A second OCR pass looks for elements the first run skipped.",
          },
          {
            lead: "VLM integration.",
            text: "Integrating a vision-language model resolved an issue in the new model.",
          },
        ],
      },
      {
        heading: "Testing it with the agent",
        body: [
          "A vision model is only useful if the agent can act on its output. I tested the new VLM release with the new version of CoTester, including its advanced mapping, to check the two worked together.",
          "I am now researching how CoTester could run on a local model, which is the next step in the same direction.",
        ],
      },
    ],
  },
  {
    slug: "device-tunnel",
    title: "Making a device tunnel easier to debug",
    eyebrow: "TestGrid · Connectivity",
    summary:
      "When a tunnel misbehaves on a customer's machine, the useful evidence sits on that machine. I worked on the logging, warnings and usage tracking that bring it within reach.",
    bullets: [
      "Stored client logs on the server, so issues can be debugged without asking the user for them",
      "Added overload warnings in the user's terminal and on their screen",
      "Shipped three releases, including a dedicated build for an enterprise telecom client",
    ],
    tags: ["Go", "Tunnelling", "Logging", "APIs"],
    cover: [
      { label: "Client", sub: "user's machine" },
      { label: "Tunnel", sub: "Go service" },
      { label: "Server logs", sub: "same view as user" },
      { label: "Warnings", sub: "terminal and screen" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "A tunnel connects a user's machine to a server. When something goes wrong, the logs that explain it are often on the user's side, which makes the issue slow to debug.",
        ],
      },
      {
        heading: "Seeing what the user sees",
        body: [
          "I reviewed the project and added a function that writes the same logs on the server that the user sees locally. A later release added the storage logic for those client logs, along with a tracker for server usage.",
        ],
      },
      {
        heading: "Warning before it fails",
        body: [
          "An overloaded tunnel is confusing from the outside, because things just slow down. I added a warning for that state with two parts.",
        ],
        list: [
          {
            lead: "In the terminal.",
            text: "A warning log is written where the user is already looking.",
          },
          {
            lead: "On screen.",
            text: "An API call shows the same warning on the user's screen.",
          },
        ],
      },
      {
        heading: "Working with real clients",
        body: [
          "I resolved an issue a client reported and released a fix with further improvements. I then took on an enterprise telecom client's requirements and shipped a build made only for them.",
        ],
      },
    ],
  },
  {
    slug: "testing-cotester",
    title: "Testing CoTester",
    eyebrow: "TestGrid · AI agent testing",
    summary:
      "An AI agent can fail in ways a normal test suite never predicts. I test new CoTester versions and features before release, and I am looking at how to evaluate the whole pipeline.",
    bullets: [
      "Ran development testing on CoTester 9.0",
      "Tested the autoheal, keyword and popup-handling features through their APIs",
      "Wrote test-case collections for a new code analysis agent",
    ],
    tags: ["Postman", "API testing", "Test design", "Agent evaluation", "React", "Express"],
    cover: [
      { label: "New feature", sub: "agent build" },
      { label: "API tests", sub: "Postman" },
      { label: "Collections", sub: "test cases" },
      { label: "Evaluation", sub: "agent pipeline" },
    ],
    sections: [
      {
        heading: "What I test",
        body: [
          "I ran development testing on CoTester 9.0, then tested newer features through their APIs in Postman: autoheal, keyword handling and the popup handler, including its newer API.",
          "I also tested the demo environment directly after issues were reported there.",
        ],
      },
      {
        heading: "Building things to test against",
        body: [
          "An agent needs realistic pages to work on. I built a portal full of test elements, with a React frontend and an Express backend, so CoTester's features could be shown and tried properly.",
          "For a new code analysis agent I wrote a collection of test cases, so its behaviour could be checked the same way each time.",
        ],
      },
      {
        heading: "From testing to evaluation",
        body: [
          "Manual testing shows a problem exists. Evaluation shows whether a change made things better. I am exploring evaluation frameworks for AI agents so the CoTester pipeline can be analysed that way.",
        ],
      },
    ],
  },
  {
    slug: "image-tap-locator",
    title: "Finding elements by image",
    eyebrow: "TestGrid · Mobile automation",
    summary:
      "Some elements can only be found by what they look like. I worked on the tool that locates them from a reference image, so a test can tap them, and cut its processing time by about 85%.",
    bullets: [
      "Cut the tool's processing time by about 85% and shipped a new release",
      "Fixed a missing-element bug raised in the bug sheet",
      "Added a time boost for faster image generation in a later release",
    ],
    tags: ["Python", "OpenCV", "Template matching"],
    cover: [
      { label: "Reference", sub: "element image" },
      { label: "Screen", sub: "current view" },
      { label: "Matching", sub: "across scales" },
      { label: "Tap target", sub: "coordinates" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "The tool takes an image of an element and finds it on the current screen, even when the two are at different sizes. It does this with multi-scale template matching in OpenCV, then returns where to tap.",
        ],
      },
      {
        heading: "What I changed",
        body: ["This work came in two releases."],
        list: [
          {
            lead: "Performance.",
            text: "I worked on how the tool performs and cut its processing time by about 85%, then built a new version from it.",
          },
          {
            lead: "A missing element.",
            text: "A small change fixed a case from the bug sheet where an element was not being found.",
          },
          {
            lead: "Faster images.",
            text: "The same release added a time boost for image generation.",
          },
        ],
      },
    ],
  },
];

export const featuredSlugs = ["ui-element-vision", "device-tunnel", "testing-cotester"];
