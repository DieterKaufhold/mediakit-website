const knowledgeBase = [
    // --- AI USAGE ---
    {
        keywords: ["ai", "artificial intelligence", "machine learning", "ml", "automation", "automate"],
        topic: "ai",
        responses: [
            "AI is transforming how organizations work. In the context of agile transformations, AI can help in several key ways:\n\n1. **Automated testing & code review** \u2013 AI tools can accelerate development cycles by automating repetitive QA tasks.\n2. **Predictive analytics** \u2013 AI can forecast sprint velocity, identify bottlenecks, and suggest improvements.\n3. **Intelligent prioritization** \u2013 AI can analyze customer feedback, market data, and usage patterns to help Product Owners prioritize backlogs.\n4. **Process optimization** \u2013 AI identifies waste in workflows and suggests lean improvements.\n\nThe key is to use AI as an augmentation tool, not a replacement for human judgment and collaboration."
        ]
    },
    {
        keywords: ["ai team", "ai help team", "ai agile", "ai scrum", "ai development"],
        topic: "ai",
        responses: [
            "AI can support agile teams in powerful ways:\n\n- **Sprint Planning**: AI analyzes historical data to provide more accurate story point estimates.\n- **Daily Standups**: AI-powered dashboards highlight blockers and risks before the meeting even starts.\n- **Retrospectives**: Sentiment analysis tools can surface hidden team dynamics.\n- **Backlog Refinement**: Natural language processing can group and de-duplicate user stories.\n- **Continuous Improvement**: AI identifies patterns across sprints to suggest targeted improvements.\n\nRemember: the best AI implementations in agile enhance human collaboration rather than replace it."
        ]
    },
    {
        keywords: ["chatgpt", "gpt", "claude", "llm", "large language model", "generative ai", "gen ai"],
        topic: "ai",
        responses: [
            "Large Language Models (LLMs) like ChatGPT and Claude are game-changers for agile teams:\n\n- **Documentation**: Generate and refine user stories, acceptance criteria, and technical docs.\n- **Knowledge sharing**: Create onboarding materials and answer recurring team questions.\n- **Code assistance**: Help with code generation, debugging, and code review.\n- **Meeting facilitation**: Summarize discussions, extract action items, and draft communications.\n\nHowever, it is crucial to establish **AI governance** within your agile framework \u2013 define how AI tools are used, ensure data privacy, and maintain human oversight of AI-generated outputs."
        ]
    },
    {
        keywords: ["ai risk", "ai danger", "ai threat", "ai concern", "ai replace", "ai job"],
        topic: "ai",
        responses: [
            "Concerns about AI in the workplace are valid and should be addressed openly:\n\n**Common risks:**\n- Over-reliance on AI-generated outputs without human review\n- Data privacy and security when using AI tools\n- Bias in AI-driven decision-making\n- Team members feeling threatened rather than empowered\n\n**How to mitigate:**\n- Establish clear AI usage policies within your team agreement\n- Treat AI as a \u201Cpair partner\u201D \u2013 always review and validate AI outputs\n- Invest in upskilling so team members feel empowered, not replaced\n- Use retrospectives to discuss what\u2019s working and what\u2019s not with AI tools\n\nThe most successful transformations position AI as a tool that frees people to focus on creative, high-value work."
        ]
    },

    // --- SCRUM ---
    {
        keywords: ["scrum", "what is scrum", "scrum framework", "scrum basics"],
        topic: "scrum",
        responses: [
            "**Scrum** is a lightweight agile framework for developing and delivering complex products. Here are the essentials:\n\n**Three Roles:**\n- **Product Owner** \u2013 Maximizes the value of the product by managing the backlog\n- **Scrum Master** \u2013 Serves the team by facilitating Scrum events and removing impediments\n- **Developers** \u2013 Self-organizing professionals who deliver the Increment\n\n**Five Events:**\n- Sprint (1-4 week time-box)\n- Sprint Planning\n- Daily Scrum (15 min standup)\n- Sprint Review\n- Sprint Retrospective\n\n**Three Artifacts:**\n- Product Backlog\n- Sprint Backlog\n- Increment\n\nScrum\u2019s power lies in its simplicity \u2013 it creates transparency, inspection, and adaptation."
        ]
    },
    {
        keywords: ["sprint", "sprint planning", "iteration", "time-box", "timebox"],
        topic: "scrum",
        responses: [
            "A **Sprint** is the heartbeat of Scrum \u2013 a fixed time-box (usually 2 weeks) during which a usable Increment is created.\n\n**Sprint Planning** kicks off each Sprint:\n1. The team discusses the **Sprint Goal** \u2013 why this Sprint matters\n2. The Product Owner presents the highest-priority backlog items\n3. Developers select items they can commit to and create a plan\n\n**Key principles:**\n- Sprints are consistent in length \u2013 this creates a reliable cadence\n- No changes that endanger the Sprint Goal\n- The Sprint Goal provides focus and flexibility\n- Quality does not decrease \u2013 the Definition of Done is always met\n\nA good Sprint rhythm builds trust, predictability, and continuous delivery of value."
        ]
    },
    {
        keywords: ["product owner", "po", "backlog", "prioritize", "prioritization", "user story", "user stories"],
        topic: "scrum",
        responses: [
            "The **Product Owner** is accountable for maximizing the value delivered by the team. Key responsibilities:\n\n- **Maintaining the Product Backlog** \u2013 a single, ordered list of everything needed in the product\n- **Defining user stories** with clear acceptance criteria\n- **Prioritizing** based on business value, risk, and dependencies\n- **Communicating the vision** so the team understands the \u2018why\u2019\n\n**User Stories** follow the format: *As a [user], I want [goal] so that [benefit]*\n\nA great Product Owner makes tough prioritization decisions and says \u2018no\u2019 more often than \u2018yes\u2019 \u2013 this focus is what drives real value delivery."
        ]
    },
    {
        keywords: ["scrum master", "sm", "servant leader", "facilitator", "impediment"],
        topic: "scrum",
        responses: [
            "The **Scrum Master** is a servant-leader who helps the team and organization adopt Scrum effectively.\n\n**For the team:**\n- Facilitates Scrum events\n- Removes impediments\n- Coaches on self-organization\n- Shields the team from external disruptions\n\n**For the Product Owner:**\n- Helps with backlog management techniques\n- Facilitates stakeholder collaboration\n\n**For the organization:**\n- Leads agile adoption\n- Coaches other teams and leaders\n- Helps remove organizational impediments\n\nA mature Scrum Master works to make themselves unnecessary \u2013 the ultimate goal is a team that embodies Scrum values without needing constant facilitation."
        ]
    },
    {
        keywords: ["retrospective", "retro", "continuous improvement", "kaizen", "inspect and adapt"],
        topic: "scrum",
        responses: [
            "The **Sprint Retrospective** is arguably the most important Scrum event \u2013 it\u2019s where continuous improvement happens.\n\n**Structure:**\n1. **What went well?** \u2013 Celebrate successes\n2. **What could be improved?** \u2013 Identify pain points\n3. **What will we commit to?** \u2013 Pick 1-2 actionable improvements\n\n**Tips for effective retros:**\n- Create psychological safety \u2013 people must feel safe to speak honestly\n- Rotate formats to keep it fresh (sailboat, 4Ls, starfish, etc.)\n- Follow through on action items \u2013 nothing kills engagement faster than ignored feedback\n- Focus on the system, not individuals\n\nIn the age of AI, retros are also the perfect place to discuss how AI tools are impacting the team\u2019s workflow."
        ]
    },

    // --- SAFe ---
    {
        keywords: ["safe", "scaled agile", "scaled agile framework", "safe framework", "scale agile"],
        topic: "safe",
        responses: [
            "**SAFe (Scaled Agile Framework)** is the world\u2019s leading framework for scaling agile across large enterprises.\n\n**Key levels:**\n- **Team Level** \u2013 Agile teams using Scrum or Kanban\n- **Program Level (ART)** \u2013 Multiple teams aligned to deliver value via an Agile Release Train\n- **Large Solution** \u2013 Coordinating multiple ARTs\n- **Portfolio Level** \u2013 Strategy, investment funding, and lean governance\n\n**Core values:**\n- Alignment\n- Built-in Quality\n- Transparency\n- Program Execution\n\nSAFe works best when organizations commit to the mindset shift, not just the ceremonies. The framework provides structure, but culture determines success."
        ]
    },
    {
        keywords: ["art", "agile release train", "program increment", "pi", "pi planning"],
        topic: "safe",
        responses: [
            "The **Agile Release Train (ART)** is the primary value delivery mechanism in SAFe.\n\n**What is an ART?**\n- A long-lived team of agile teams (50-125 people)\n- Aligned to a common mission and value stream\n- Operates on a fixed cadence called a **Program Increment (PI)** \u2013 typically 8-12 weeks\n\n**PI Planning** is a landmark event:\n- All teams come together (ideally in person) for 2 days\n- Teams plan their work for the upcoming PI\n- Dependencies are identified and managed\n- Everyone leaves aligned on objectives and risks\n\nPI Planning is often called \u2018the heartbeat of SAFe\u2019 \u2013 it creates alignment at scale that\u2019s difficult to achieve any other way."
        ]
    },
    {
        keywords: ["rte", "release train engineer", "safe roles", "safe master"],
        topic: "safe",
        responses: [
            "The **Release Train Engineer (RTE)** is the servant leader and chief Scrum Master for the Agile Release Train.\n\n**Responsibilities:**\n- Facilitates PI Planning and ART-level events\n- Manages risks, dependencies, and impediments across teams\n- Drives continuous improvement at the program level\n- Ensures execution and delivery flow\n- Communicates with stakeholders and management\n\nThink of the RTE as a \u201Csuper Scrum Master\u201D who operates at the program level. They don\u2019t manage people but manage the *process* that enables teams to deliver together effectively.\n\nA great RTE makes complex coordination feel simple."
        ]
    },
    {
        keywords: ["lean portfolio", "portfolio", "epic", "value stream", "lean budgeting"],
        topic: "safe",
        responses: [
            "**Lean Portfolio Management** in SAFe connects strategy to execution:\n\n**Key elements:**\n- **Value Streams** \u2013 The flow of value from concept to delivery. Organizations organize around value streams, not projects.\n- **Epics** \u2013 Large initiatives that require a Lean Business Case and go through a Kanban system for approval.\n- **Lean Budgeting** \u2013 Instead of project-by-project funding, allocate budgets to value streams. This removes bureaucracy and speeds up delivery.\n\n**Why it matters:**\n- Traditional project-based funding creates delays and overhead\n- Lean Portfolio Management provides guardrails without micromanagement\n- It enables faster response to market changes and AI-driven opportunities\n\nThis is where transformation meets strategy \u2013 and where leadership buy-in is most critical."
        ]
    },

    // --- TRANSFORMATION ---
    {
        keywords: ["transformation", "change", "organizational change", "agile transformation", "transform"],
        topic: "transformation",
        responses: [
            "**Agile transformation** is the process of shifting an entire organization toward agile ways of working. It goes far beyond adopting Scrum or SAFe.\n\n**The four dimensions of transformation:**\n1. **Mindset & Culture** \u2013 From command-and-control to trust and empowerment\n2. **Structure** \u2013 From functional silos to cross-functional, value-oriented teams\n3. **Processes** \u2013 From waterfall to iterative, feedback-driven delivery\n4. **Technology** \u2013 From monoliths to modern, enabling platforms (including AI)\n\n**Common pitfalls:**\n- Treating it as a \u201Cprocess installation\u201D rather than a cultural shift\n- Lack of leadership commitment\n- Going too fast without building understanding\n- Ignoring the human side of change\n\nTrue transformation is a journey, not a destination. It takes patience, persistence, and genuine leadership support."
        ]
    },
    {
        keywords: ["resistance", "resist change", "pushback", "fear", "change management"],
        topic: "transformation",
        responses: [
            "**Resistance to change** is natural and should be respected, not fought.\n\n**Why people resist:**\n- Fear of losing control, status, or competence\n- Past negative experiences with change initiatives\n- Lack of understanding about the \u2018why\u2019\n- Change fatigue from too many initiatives\n\n**How to address it:**\n- **Listen first** \u2013 Resistance often carries valuable information\n- **Create safety** \u2013 People need to know it\u2019s okay to fail while learning\n- **Show, don\u2019t tell** \u2013 Pilot with willing teams and let success speak for itself\n- **Involve, don\u2019t impose** \u2013 Co-create the change with those affected\n- **Celebrate small wins** \u2013 Progress fuels motivation\n\nIn the age of AI, resistance often doubles because people fear both the new way of working AND being replaced by technology. Address both concerns openly."
        ]
    },
    {
        keywords: ["leadership", "leader", "management", "executive", "sponsor", "buy-in"],
        topic: "transformation",
        responses: [
            "**Leadership** is the single most critical factor in a successful transformation.\n\n**What leaders must do:**\n- **Model the behavior** \u2013 Be agile yourself, not just sponsor agile for others\n- **Create the conditions** \u2013 Remove organizational impediments, provide resources, protect teams\n- **Be patient** \u2013 Transformation takes 2-4 years for deep change; quick fixes don\u2019t last\n- **Stay visible** \u2013 Show up at PI Planning, Sprint Reviews, and town halls\n- **Accept short-term dips** \u2013 Performance often dips before it improves during a transition\n\n**In the AI era, leaders also need to:**\n- Champion AI literacy across the organization\n- Create ethical AI guidelines\n- Make AI-driven decisions transparent\n- Invest in upskilling, not just tools\n\nTransformation without leadership commitment is just theater."
        ]
    },
    {
        keywords: ["culture", "mindset", "agile mindset", "agile values", "agile principles"],
        topic: "transformation",
        responses: [
            "An **agile mindset** is the foundation everything else rests on.\n\n**Core values (from the Agile Manifesto):**\n- Individuals and interactions over processes and tools\n- Working solutions over comprehensive documentation\n- Customer collaboration over contract negotiation\n- Responding to change over following a plan\n\n**What this looks like in practice:**\n- Teams empowered to make decisions\n- Failure treated as a learning opportunity\n- Continuous feedback loops at every level\n- Transparency as the default\n- Focus on outcomes, not output\n\n**In the age of AI:**\nThe agile mindset becomes even more important \u2013 AI is accelerating the pace of change, so organizations need the adaptability and learning culture that agile provides. Those who combine agile culture with AI capabilities will have a significant competitive advantage."
        ]
    },
    {
        keywords: ["measure", "metric", "kpi", "success", "roi", "measure transformation"],
        topic: "transformation",
        responses: [
            "Measuring transformation success requires looking beyond velocity and output:\n\n**Outcome metrics (most important):**\n- Customer satisfaction and Net Promoter Score\n- Time-to-market for new features\n- Business value delivered per quarter\n- Employee engagement and retention\n\n**Flow metrics:**\n- Lead time (idea to production)\n- Cycle time (start to done)\n- Throughput (items delivered per time period)\n- Work in progress (WIP) levels\n\n**Health metrics:**\n- Team happiness and psychological safety\n- Quality (defect rates, technical debt)\n- Predictability (planned vs. delivered)\n\n**Avoid:**\n- Using velocity as a performance metric\n- Measuring individual productivity instead of team outcomes\n- Vanity metrics that look good but don\u2019t drive improvement\n\nMeasure what matters, and let the metrics drive conversations, not judgments."
        ]
    },

    // --- COMBINED / CROSS-TOPIC ---
    {
        keywords: ["start", "begin", "first step", "where to start", "how to start", "getting started"],
        topic: "general",
        responses: [
            "Great question! Here\u2019s a practical roadmap to get started with agile transformation in the age of AI:\n\n**Phase 1: Assess (Weeks 1-4)**\n- Understand your current state \u2013 processes, culture, pain points\n- Identify willing pilot teams\n- Assess AI readiness and current tool landscape\n\n**Phase 2: Pilot (Months 2-4)**\n- Start with 1-2 teams using Scrum\n- Introduce AI tools that solve immediate pain points\n- Provide coaching and training\n\n**Phase 3: Expand (Months 4-12)**\n- Scale to more teams based on pilot learnings\n- Consider SAFe if you need multi-team coordination\n- Establish an AI governance framework\n\n**Phase 4: Optimize (Ongoing)**\n- Continuous improvement through retrospectives\n- Expand AI usage based on proven value\n- Develop internal coaches and champions\n\nThe key: start small, learn fast, and scale what works."
        ]
    },
    {
        keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
        topic: "greeting",
        responses: [
            "Hello! Welcome to BizTrafo. I\u2019m here to help you with questions about agile transformations in the age of AI.\n\nI can help you with:\n- **AI usage** in agile teams and organizations\n- **Scrum** methodology and practices\n- **SAFe** (Scaled Agile Framework)\n- **The nature of transformations** \u2013 culture, leadership, change management\n\nWhat would you like to know?"
        ]
    },
    {
        keywords: ["thank", "thanks", "thx", "cheers", "appreciate"],
        topic: "closing",
        responses: [
            "You\u2019re welcome! If you have more questions about agile transformations, AI integration, Scrum, or SAFe, feel free to ask anytime. Good luck on your transformation journey!"
        ]
    },
    {
        keywords: ["help", "what can you do", "what do you know", "capabilities"],
        topic: "help",
        responses: [
            "I\u2019m the BizTrafo Assistant, and I specialize in agile transformations in the age of AI. Here\u2019s what I can help with:\n\n**AI Usage:**\n- How AI supports agile teams\n- AI risks and governance\n- LLMs and generative AI in the workplace\n\n**Scrum:**\n- Roles (Product Owner, Scrum Master, Developers)\n- Events (Sprints, Planning, Retros, Reviews)\n- Artifacts and practices\n\n**SAFe:**\n- Framework overview and levels\n- Agile Release Trains and PI Planning\n- Lean Portfolio Management\n\n**Transformations:**\n- How to start and what to expect\n- Dealing with resistance\n- Leadership\u2019s role\n- Measuring success\n\nJust ask a question in any of these areas!"
        ]
    }
];

// Fallback response when no match is found
const fallbackResponses = [
    "That\u2019s an interesting question! While it\u2019s outside my core expertise, I can help you with topics like AI in agile teams, Scrum, SAFe, and organizational transformation. Could you rephrase your question in one of those areas?",
    "I\u2019m not sure I have the best answer for that specific question. I\u2019m specialized in agile transformations and AI integration. Try asking me about Scrum practices, the SAFe framework, AI usage in teams, or how to drive organizational change!",
    "Hmm, I don\u2019t have a great answer for that one. My expertise covers:\n- AI in agile organizations\n- Scrum methodology\n- SAFe framework\n- Transformation leadership and culture\n\nWant to explore any of these topics?"
];
