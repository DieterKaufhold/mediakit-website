(function () {
  "use strict";

  // Prevent double-initialization
  if (window.__btChatbotLoaded) return;
  window.__btChatbotLoaded = true;

  // ---------------------------------------------------------------------------
  // Knowledge base
  // ---------------------------------------------------------------------------
  const KB = [
    // --- Greetings / meta ---
    {
      keys: ["hello", "hi", "hey", "greet", "good morning", "good afternoon"],
      answer:
        "Hello! I'm here to help you with questions about AI in business, Agile & Scrum methodology, SAFe framework, organizational transformations, and how AI is reshaping Agile transformations. What would you like to explore?",
    },
    {
      keys: ["who are you", "what can you do", "help", "about", "what do you know"],
      answer:
        "I'm a knowledge assistant specializing in five key areas:\n\n1. **AI usage in business transformations** -- how organizations leverage artificial intelligence to drive change.\n2. **Scrum methodology** -- roles, events, artifacts, and core principles.\n3. **SAFe (Scaled Agile Framework)** -- ARTs, PI Planning, Lean-Agile principles, and roles.\n4. **Organizational transformations** -- change management, culture shifts, and transformation strategies.\n5. **Agile transformations in the age of AI** -- how AI is accelerating and reshaping Agile ways of working.\n\nAsk me anything in these areas!",
    },

    // --- AI in business transformations ---
    {
      keys: ["ai", "artificial intelligence", "machine learning", "business transformation", "ai transformation", "ai strategy"],
      answer:
        "**AI in Business Transformations**\n\nArtificial Intelligence is fundamentally reshaping how organizations operate, compete, and deliver value. Key dimensions include:\n\n**Strategic impact:**\n- AI enables data-driven decision-making at scale, replacing gut-feel with predictive analytics.\n- It automates repetitive cognitive tasks (document processing, customer routing, anomaly detection), freeing human talent for higher-value work.\n- AI-powered products and services open entirely new revenue streams and business models.\n\n**Common transformation patterns:**\n1. **Process automation** -- RPA combined with ML to streamline back-office operations.\n2. **Customer experience** -- Chatbots, recommendation engines, and personalization at scale.\n3. **Product intelligence** -- Embedding AI into existing products (predictive maintenance, smart analytics dashboards).\n4. **Decision augmentation** -- AI copilots that help leaders make faster, better-informed decisions.\n\n**Critical success factors:**\n- Executive sponsorship and a clear AI vision tied to business outcomes.\n- Data readiness -- clean, governed, accessible data is the foundation.\n- Upskilling the workforce -- AI literacy across all levels, not just data scientists.\n- Ethical AI governance -- bias detection, explainability, and responsible use policies.\n- Start small, learn fast -- pilot projects that prove value before scaling.\n\nOrganizations that treat AI as a *transformation enabler* rather than a standalone technology initiative see significantly better outcomes.",
    },
    {
      keys: ["ai use case", "ai example", "ai application", "how companies use ai", "ai adoption"],
      answer:
        "**Common AI Use Cases Across Industries**\n\n**Finance & Banking:**\n- Fraud detection using real-time transaction analysis\n- Algorithmic trading and risk modeling\n- Automated credit scoring and loan decisioning\n\n**Healthcare:**\n- Diagnostic imaging analysis (radiology, pathology)\n- Drug discovery acceleration\n- Patient flow optimization and readmission prediction\n\n**Manufacturing:**\n- Predictive maintenance to reduce downtime\n- Quality inspection via computer vision\n- Supply chain demand forecasting\n\n**Retail & E-commerce:**\n- Personalized product recommendations\n- Dynamic pricing optimization\n- Inventory management and demand sensing\n\n**HR & Talent:**\n- Resume screening and candidate matching\n- Employee attrition prediction\n- Learning path personalization\n\n**Key adoption advice:** Start with use cases that have clear ROI, available data, and executive support. Build internal capability incrementally rather than outsourcing everything.",
    },
    {
      keys: ["generative ai", "genai", "gpt", "llm", "large language model", "chatgpt", "copilot"],
      answer:
        "**Generative AI in Enterprise Transformations**\n\nGenerative AI (GenAI) -- including large language models (LLMs) like GPT-4 and Claude -- represents a step change in AI capability:\n\n**Enterprise applications:**\n- **Content generation** -- marketing copy, reports, documentation drafts at scale.\n- **Code assistance** -- AI pair-programming, code review, test generation.\n- **Knowledge management** -- intelligent search across enterprise documents, automated Q&A.\n- **Customer service** -- sophisticated conversational AI that handles complex queries.\n- **Data analysis** -- natural-language querying of databases and dashboards.\n\n**Transformation considerations:**\n- GenAI lowers the barrier to AI adoption -- business users can leverage AI without deep technical skills.\n- It amplifies productivity but requires guardrails (hallucination management, data privacy, IP protection).\n- Organizations need a clear GenAI policy covering acceptable use, data handling, and quality assurance.\n- The competitive window is narrow -- early adopters gain significant advantages in efficiency and innovation.\n\n**Implementation approach:**\n1. Identify high-impact, low-risk use cases first.\n2. Establish governance and acceptable-use policies.\n3. Run controlled pilots with measurable KPIs.\n4. Build internal prompt-engineering and AI-integration skills.\n5. Scale successful pilots with enterprise-grade infrastructure.",
    },

    // --- Scrum ---
    {
      keys: ["scrum", "scrum methodology", "scrum framework", "what is scrum", "scrum overview"],
      answer:
        "**Scrum Methodology Overview**\n\nScrum is a lightweight Agile framework for developing, delivering, and sustaining complex products. It is founded on empiricism (transparency, inspection, adaptation) and lean thinking.\n\n**The three pillars of empiricism:**\n1. **Transparency** -- significant aspects of the process must be visible to those responsible for the outcome.\n2. **Inspection** -- Scrum artifacts and progress are inspected frequently to detect variances.\n3. **Adaptation** -- if inspection reveals deviation, the process or material must be adjusted promptly.\n\n**Core values:** Commitment, Focus, Openness, Respect, Courage.\n\n**Structure:** Scrum organizes work in fixed-length iterations called *Sprints* (typically 1-4 weeks). Each Sprint produces a potentially releasable product increment.\n\n**Key benefits:**\n- Faster time-to-market through iterative delivery.\n- Better quality via continuous feedback and testing.\n- Higher team morale through self-management and autonomy.\n- Improved stakeholder satisfaction through frequent demos and collaboration.\n- Greater adaptability to changing requirements.",
    },
    {
      keys: ["scrum role", "product owner", "scrum master", "developer", "scrum team", "po", "sm"],
      answer:
        "**Scrum Roles (Accountabilities)**\n\n**1. Product Owner (PO)**\n- Maximizes the value of the product and the work of the Scrum Team.\n- Owns and manages the Product Backlog -- ordering, refining, and clearly expressing items.\n- Ensures the backlog is transparent, visible, and understood.\n- Represents stakeholders and makes prioritization decisions.\n- One person, not a committee (though they may represent a committee's wishes).\n\n**2. Scrum Master (SM)**\n- Accountable for establishing Scrum as defined in the Scrum Guide.\n- Serves the team by coaching self-management and cross-functionality.\n- Helps remove impediments to the team's progress.\n- Facilitates Scrum events as requested or needed.\n- Coaches the organization in Scrum adoption and Agile practices.\n- Acts as a true leader who serves the Scrum Team and the broader organization.\n\n**3. Developers**\n- Professionals who create the product Increment each Sprint.\n- Self-managing -- they decide *how* to turn backlog items into increments of value.\n- Cross-functional -- the team collectively has all skills needed to create value.\n- Accountable for creating a plan for the Sprint (Sprint Backlog), adhering to the Definition of Done, and adapting their plan daily.\n\nThe entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint. Teams are typically 10 or fewer people.",
    },
    {
      keys: ["sprint", "sprint planning", "daily scrum", "sprint review", "sprint retrospective", "scrum event", "scrum ceremony"],
      answer:
        "**Scrum Events (Ceremonies)**\n\nAll events are time-boxed and create regularity, minimizing the need for ad-hoc meetings.\n\n**1. Sprint**\n- The container event; all other events happen within it.\n- Fixed length: 1-4 weeks (most common: 2 weeks).\n- A new Sprint starts immediately after the previous one ends.\n- No changes that endanger the Sprint Goal; scope may be clarified and renegotiated with the PO.\n\n**2. Sprint Planning** (time-box: 8 hours max for a 1-month Sprint)\n- *Why is this Sprint valuable?* -- The PO proposes how the product could increase its value; the team defines a Sprint Goal.\n- *What can be Done this Sprint?* -- Developers select items from the Product Backlog.\n- *How will the chosen work get done?* -- Developers decompose items into tasks (typically one day or less).\n\n**3. Daily Scrum** (time-box: 15 minutes)\n- For Developers to inspect progress toward the Sprint Goal and adapt the Sprint Backlog.\n- Held every working day at the same time and place.\n- Format is chosen by the Developers (not mandated as three questions).\n\n**4. Sprint Review** (time-box: 4 hours max for a 1-month Sprint)\n- Inspect the outcome of the Sprint and determine future adaptations.\n- The team presents results to stakeholders; the Product Backlog may be adjusted.\n- This is a working session, not just a presentation.\n\n**5. Sprint Retrospective** (time-box: 3 hours max for a 1-month Sprint)\n- The team inspects how the last Sprint went with regard to people, interactions, processes, tools, and Definition of Done.\n- Identify the most impactful improvements and address them in the next Sprint.\n- Ends the Sprint.",
    },
    {
      keys: ["product backlog", "sprint backlog", "increment", "definition of done", "scrum artifact", "artifact", "dod"],
      answer:
        "**Scrum Artifacts & Commitments**\n\nEach artifact contains a *commitment* to ensure transparency and focus:\n\n**1. Product Backlog** (Commitment: *Product Goal*)\n- An emergent, ordered list of everything needed to improve the product.\n- Single source of work for the Scrum Team.\n- Continuously refined -- items are broken down and clarified as they near the top.\n- The Product Goal describes a future state of the product, giving the team a long-term objective.\n\n**2. Sprint Backlog** (Commitment: *Sprint Goal*)\n- The set of Product Backlog items selected for the Sprint, plus the plan for delivering them and the Sprint Goal.\n- A real-time picture of the Developers' plan, updated throughout the Sprint.\n- The Sprint Goal is the single objective for the Sprint; it creates coherence and focus.\n\n**3. Increment** (Commitment: *Definition of Done*)\n- A concrete stepping stone toward the Product Goal.\n- Each Increment is additive to all prior Increments and is verified to work together.\n- Multiple Increments may be created within a Sprint; they can be delivered at any time.\n- The Definition of Done (DoD) is a formal description of the state of the Increment when it meets the quality standards required. If an item does not meet the DoD, it cannot be released or presented at the Sprint Review.",
    },

    // --- SAFe ---
    {
      keys: ["safe", "scaled agile", "safe framework", "scaled agile framework", "safe overview"],
      answer:
        "**SAFe (Scaled Agile Framework) Overview**\n\nSAFe is a comprehensive framework for scaling Lean-Agile practices across large enterprises. It synchronizes the alignment, collaboration, and delivery of multiple Agile teams.\n\n**Core configurations:**\n1. **Essential SAFe** -- the minimal set: Team Level + ART (Agile Release Train) level.\n2. **Large Solution SAFe** -- adds coordination across multiple ARTs via Solution Trains.\n3. **Portfolio SAFe** -- adds Lean Portfolio Management for strategy and investment alignment.\n4. **Full SAFe** -- combines all levels for the largest enterprises.\n\n**Key concepts:**\n- **Agile Release Train (ART)** -- a long-lived team of Agile teams (typically 50-125 people) that plans, commits, and executes together.\n- **Program Increment (PI)** -- a time-box (typically 8-12 weeks) during which an ART delivers incremental value.\n- **PI Planning** -- the heartbeat event where all ART members align on a shared vision and plan.\n\n**Lean-Agile principles (abbreviated):**\n1. Take an economic view.\n2. Apply systems thinking.\n3. Assume variability; preserve options.\n4. Build incrementally with fast, integrated learning cycles.\n5. Base milestones on objective evaluation of working systems.\n6. Make value flow without interruptions.\n7. Apply cadence; synchronize with cross-domain planning.\n8. Unlock the intrinsic motivation of knowledge workers.\n9. Decentralize decision-making.\n10. Organize around value.\n\nSAFe provides a structured path for enterprises that need to coordinate many teams while preserving the benefits of Agile.",
    },
    {
      keys: ["art", "agile release train", "release train"],
      answer:
        "**Agile Release Train (ART)**\n\nThe ART is the primary value delivery vehicle in SAFe.\n\n**Characteristics:**\n- A virtual organization of 50-125 people (5-12 Agile teams).\n- Long-lived -- the train runs continuously, delivering value every PI.\n- Aligned to a significant value stream or a major segment of a product/solution.\n- Operates on a fixed cadence (PI cadence) with synchronized iterations.\n\n**Key ART roles:**\n- **Release Train Engineer (RTE)** -- servant leader and chief Scrum Master for the ART. Facilitates ART events, manages risks, drives continuous improvement.\n- **Product Management** -- owns the Program Backlog, defines features, and prioritizes work at the ART level.\n- **System Architect** -- provides architectural guidance and governance across teams.\n- **Business Owners** -- key stakeholders accountable for the business outcomes of the ART.\n\n**How the ART works:**\n1. Teams on the ART plan together during PI Planning.\n2. They execute in synchronized iterations (typically 2-week Sprints).\n3. They integrate and demo at System Demos (every iteration).\n4. At the end of the PI, they hold an Inspect & Adapt (I&A) workshop.\n5. The cycle repeats.\n\n**Benefits:**\n- Alignment across many teams without heavy bureaucracy.\n- Predictable delivery cadence.\n- Built-in mechanisms for dependency management and risk mitigation.",
    },
    {
      keys: ["pi planning", "program increment", "pi", "big room planning"],
      answer:
        "**PI Planning (Program Increment Planning)**\n\nPI Planning is the essential, cadence-based event that aligns all teams on the ART to a shared mission and vision.\n\n**Duration:** Typically 2 days (in-person or remote).\n\n**Inputs:**\n- Top 10 features from the Program Backlog (prioritized by Product Management).\n- Vision presentation from Product Management/Business Owners.\n- Architecture vision and runway from System Architect.\n\n**Agenda (typical):**\n- **Day 1:** Business context, product/solution vision, architecture briefing, team breakouts (draft plans), draft plan review, management review & problem-solving.\n- **Day 2:** Planning adjustments, final team breakouts, final plan review, ART-level risks (ROAM), PI confidence vote, planning retrospective.\n\n**Key outputs:**\n- **PI Objectives** -- SMART objectives each team commits to, with business value assigned by Business Owners.\n- **Program Board** -- a visual showing features, dependencies, and milestones across iterations.\n- **ROAM'd risks** -- Resolved, Owned, Accepted, or Mitigated.\n\n**Why it matters:**\n- Creates face-to-face (or synchronous) alignment across all teams.\n- Surfaces dependencies and risks early.\n- Establishes trust, social connections, and shared understanding.\n- Builds a realistic, team-owned plan (not a top-down mandate).\n\nPI Planning is often called the 'heartbeat' of SAFe -- if you're doing SAFe without PI Planning, you're not really doing SAFe.",
    },
    {
      keys: ["safe role", "rte", "release train engineer", "safe product management", "system architect", "safe roles"],
      answer:
        "**Key SAFe Roles**\n\n**At the Team Level:**\n- Scrum Master, Product Owner, and Developers (same as Scrum).\n\n**At the ART (Program) Level:**\n- **Release Train Engineer (RTE):** Servant leader for the ART. Facilitates PI Planning, coaches teams, manages ART-level risks and impediments, tracks ART health metrics.\n- **Product Management:** Owns the Program Backlog, defines and prioritizes features, works with customers and POs, responsible for the program vision.\n- **System Architect/Engineer:** Defines the overall architecture, provides cross-team technical guidance, enables architectural runway, balances innovation with stability.\n- **Business Owners:** Senior stakeholders with ultimate accountability for business outcomes. Assign business value to PI objectives and evaluate ART performance.\n\n**At the Large Solution Level:**\n- **Solution Train Engineer (STE):** Facilitates Solution Train events.\n- **Solution Management:** Defines capabilities and solution-level features.\n- **Solution Architect:** Guides cross-ART architecture.\n\n**At the Portfolio Level:**\n- **Lean Portfolio Management (LPM):** Strategy and investment funding, Agile portfolio operations, Lean governance.\n- **Enterprise Architect:** Guides technology strategy across portfolios.\n- **Epic Owners:** Shepherd portfolio-level Epics through the Lean business case and Kanban system.\n\nA well-functioning SAFe implementation requires clarity in these roles and strong collaboration between them.",
    },

    // --- Transformations / Change Management ---
    {
      keys: ["transformation", "organizational change", "change management", "business transformation"],
      answer:
        "**Organizational Transformations**\n\nA transformation is a fundamental, organization-wide change in how a company operates, delivers value, and competes. It goes beyond process improvements to touch strategy, structure, culture, technology, and people.\n\n**Types of transformation:**\n- **Digital transformation** -- leveraging technology to reinvent business models and customer experiences.\n- **Agile transformation** -- shifting from traditional plan-driven approaches to iterative, value-driven ways of working.\n- **AI-driven transformation** -- embedding artificial intelligence as a core organizational capability.\n- **Cultural transformation** -- changing mindsets, behaviors, and values across the organization.\n\n**Key change management frameworks:**\n- **Kotter's 8-Step Model:** Urgency, coalition, vision, communication, empowerment, short-term wins, consolidation, anchoring.\n- **ADKAR (Prosci):** Awareness, Desire, Knowledge, Ability, Reinforcement.\n- **Lewin's 3-Stage Model:** Unfreeze, Change, Refreeze.\n\n**Critical success factors:**\n1. **Leadership alignment** -- transformation starts at the top; leaders must model the change.\n2. **Clear 'why'** -- a compelling narrative that connects the transformation to business survival or growth.\n3. **People first** -- invest in training, coaching, and psychological safety.\n4. **Measure outcomes, not activities** -- track business value, not just process compliance.\n5. **Celebrate early wins** -- build momentum and prove the new way works.\n6. **Patience and persistence** -- true transformation takes 2-5 years; don't declare victory too early.\n\nTransformations fail most often due to insufficient leadership commitment, unclear vision, or neglecting the human side of change.",
    },
    {
      keys: ["culture", "culture change", "organizational culture", "mindset", "cultural transformation"],
      answer:
        "**Culture in Transformations**\n\nPeter Drucker famously said *'Culture eats strategy for breakfast.'* No transformation succeeds without addressing organizational culture.\n\n**What is organizational culture?**\nThe shared values, beliefs, behaviors, and norms that define 'how things are done here.' It includes visible elements (rituals, language, office layout) and invisible ones (assumptions, power dynamics, unwritten rules).\n\n**Why culture matters in transformations:**\n- New processes imposed on an old culture will be rejected or subverted.\n- Culture determines how people respond to change -- with curiosity or resistance.\n- Sustainable transformation requires a shift in underlying beliefs, not just surface behaviors.\n\n**How to shift culture:**\n1. **Define the target culture explicitly** -- what behaviors, values, and norms do you want to see?\n2. **Leaders go first** -- culture change is modeled from the top. If leaders don't change, nobody will.\n3. **Change the system, not just the people** -- incentive structures, hiring criteria, promotion paths, and meeting formats all shape culture.\n4. **Create safe-to-fail experiments** -- let teams try new ways of working without fear of punishment.\n5. **Storytelling** -- share success stories that embody the new culture.\n6. **Measure cultural indicators** -- engagement surveys, psychological safety scores, collaboration metrics.\n\n**Cultural anti-patterns to watch for:**\n- Blame culture that kills experimentation.\n- Siloed departments that resist collaboration.\n- 'Hero culture' that rewards individual overwork instead of sustainable teamwork.\n- Lip service to values that aren't reflected in actual decisions.",
    },
    {
      keys: ["resistance", "resistance to change", "change resistance", "overcome resistance"],
      answer:
        "**Overcoming Resistance to Change**\n\nResistance is a natural, human response to change -- not a defect to be eliminated. Understanding its root causes is the key to addressing it constructively.\n\n**Common sources of resistance:**\n- **Fear of the unknown** -- uncertainty about what the change means for individuals.\n- **Loss of control** -- feeling that change is being done *to* people, not *with* them.\n- **Competence anxiety** -- worry about not having the skills needed in the new world.\n- **Past failures** -- 'we tried something like this before and it failed.'\n- **Misaligned incentives** -- the change asks for new behaviors, but rewards haven't changed.\n\n**Strategies for constructive engagement:**\n1. **Listen first** -- resistance often contains valuable information about real obstacles.\n2. **Involve people early** -- co-creation builds ownership; top-down mandates build resentment.\n3. **Communicate relentlessly** -- the 'why', the 'what's in it for me', and the support available.\n4. **Provide safety nets** -- training, coaching, permission to make mistakes, and time to learn.\n5. **Find and empower change champions** -- peer influence is more powerful than management directives.\n6. **Show, don't tell** -- working examples and quick wins are more persuasive than slide decks.\n7. **Address the 'frozen middle'** -- middle management often bears the most disruption; invest in their development.\n\nRemember: resistance is feedback. The goal isn't to eliminate it but to understand it and channel it into a better transformation.",
    },

    // --- Agile Transformations in times of AI ---
    {
      keys: ["agile transformation ai", "ai agile", "agile ai", "ai and agile", "agile transformation in times of ai", "future of agile"],
      answer:
        "**Agile Transformations in the Age of AI**\n\nThe convergence of Agile and AI is creating a new paradigm for organizational transformation. Neither Agile nor AI alone is sufficient -- together they amplify each other.\n\n**How AI enhances Agile:**\n- **Accelerated delivery** -- AI coding assistants, automated testing, and AI-powered DevOps reduce cycle times dramatically.\n- **Smarter backlog management** -- AI can analyze customer feedback, support tickets, and usage data to suggest and prioritize backlog items.\n- **Better estimation** -- ML models trained on historical velocity and complexity data improve Sprint forecasting.\n- **Enhanced retrospectives** -- sentiment analysis and pattern detection help teams identify systemic issues.\n- **Real-time insights** -- AI dashboards give Product Owners and Scrum Masters live visibility into flow, quality, and value delivery.\n\n**How Agile enables AI adoption:**\n- **Iterative experimentation** -- Agile's 'build-measure-learn' cycles are ideal for AI projects where outcomes are uncertain.\n- **Cross-functional teams** -- AI initiatives need data engineers, ML engineers, domain experts, and product people working together.\n- **Fast feedback loops** -- Agile ceremonies surface AI model issues early (bias, accuracy, user acceptance).\n- **Incremental value delivery** -- AI is deployed in small, validated increments rather than big-bang releases.\n\n**Key themes for Agile leaders today:**\n1. **AI literacy is the new Agile literacy** -- every team member should understand AI basics.\n2. **Human-AI teaming** -- the future Scrum Team includes AI tools as 'team members' that augment human capability.\n3. **Ethical guardrails** -- Agile teams must build responsible AI practices into their Definition of Done.\n4. **Continuous learning culture** -- the pace of AI change demands even more emphasis on learning and adaptation.\n5. **Redefining roles** -- Product Owners become AI product strategists; Scrum Masters coach human-AI collaboration.\n\nOrganizations that master both Agile and AI will out-learn and out-deliver their competitors.",
    },
    {
      keys: ["ai team", "ai scrum team", "ai product development", "ai project", "ai development team"],
      answer:
        "**Building AI-Capable Agile Teams**\n\nAI product development has unique characteristics that require adaptations to traditional Agile team structures:\n\n**Team composition for AI products:**\n- Data engineers (data pipelines, data quality)\n- ML engineers (model development, training, deployment)\n- Domain experts (business context, success criteria)\n- Product Owner (value definition, prioritization)\n- UX/UI designers (human-AI interaction design)\n- Scrum Master (facilitation, impediment removal, coaching)\n\n**Adaptations to Scrum for AI work:**\n- **Spikes and experiments** -- AI work often starts with exploratory research; plan for uncertainty.\n- **Definition of Done for AI** -- include model accuracy thresholds, bias checks, explainability requirements, and data quality standards.\n- **Dual-track backlogs** -- separate (but connected) tracks for data/model work and application/integration work.\n- **Longer feedback cycles** -- model training can take days/weeks; plan iterations accordingly.\n- **MLOps as a first-class concern** -- continuous integration and deployment of models (CI/CD for ML).\n\n**Common pitfalls:**\n- Treating AI as a 'project' instead of a product with ongoing learning and improvement.\n- Ignoring data quality -- 'garbage in, garbage out' is especially true for AI.\n- Over-promising AI capabilities to stakeholders before validation.\n- Isolating data scientists from the rest of the team.\n\nThe most successful AI teams combine deep technical skills with Agile discipline and strong product thinking.",
    },

    // --- Lean / Kanban / Agile general ---
    {
      keys: ["lean", "lean thinking", "lean principles", "waste", "muda"],
      answer:
        "**Lean Thinking in Transformations**\n\nLean thinking, originating from the Toyota Production System, is a foundational pillar of both Agile and SAFe.\n\n**Core Lean principles:**\n1. **Identify value** -- define value from the customer's perspective.\n2. **Map the value stream** -- visualize all steps and eliminate non-value-adding activities.\n3. **Create flow** -- make remaining value-creating steps flow smoothly without interruptions.\n4. **Establish pull** -- produce only what the customer demands, when they demand it.\n5. **Pursue perfection** -- continuously improve through relentless waste elimination.\n\n**Types of waste (Muda) in knowledge work:**\n- Partially done work (WIP)\n- Handoffs and context switching\n- Waiting and delays\n- Extra features nobody uses (gold plating)\n- Defects and rework\n- Unnecessary processes and approvals\n- Unused talent and skills\n\n**Lean in SAFe:**\nSAFe explicitly builds on Lean. Lean Portfolio Management, value stream mapping, WIP limits, and flow metrics (lead time, throughput, cycle time) are core practices.\n\nLean thinking provides the *why* behind many Agile practices -- it's not about doing ceremonies; it's about maximizing value delivery while minimizing waste.",
    },
    {
      keys: ["kanban", "kanban board", "wip limit", "flow", "cumulative flow"],
      answer:
        "**Kanban and Flow-Based Working**\n\nKanban is a method for managing knowledge work that emphasizes continuous flow and visual management.\n\n**Core Kanban practices:**\n1. **Visualize the workflow** -- make all work visible on a board.\n2. **Limit Work in Progress (WIP)** -- constrain the amount of work in each state to improve flow.\n3. **Manage flow** -- monitor, measure, and optimize the movement of work items.\n4. **Make policies explicit** -- define clear rules for how work moves through the system.\n5. **Implement feedback loops** -- regular reviews and stand-ups.\n6. **Improve collaboratively, evolve experimentally** -- use data to drive small, incremental improvements.\n\n**Key metrics:**\n- **Lead Time** -- total time from request to delivery.\n- **Cycle Time** -- time from work-started to work-completed.\n- **Throughput** -- number of items completed per unit of time.\n- **WIP** -- number of items currently in progress.\n- **Cumulative Flow Diagram** -- visualizes flow, bottlenecks, and WIP over time.\n\n**Kanban vs. Scrum:**\nKanban is flow-based (no fixed iterations), while Scrum is cadence-based (fixed Sprints). Many teams use a hybrid ('Scrumban'). In SAFe, Kanban is used at the portfolio level for Epic management and at the team level where appropriate.",
    },

    // --- Catch-all / fallback helpers ---
    {
      keys: ["agile", "agile methodology", "agile manifesto", "agile principles", "agile values"],
      answer:
        "**The Agile Manifesto & Principles**\n\nThe Agile Manifesto (2001) established four core values:\n\n1. **Individuals and interactions** over processes and tools.\n2. **Working software** over comprehensive documentation.\n3. **Customer collaboration** over contract negotiation.\n4. **Responding to change** over following a plan.\n\n*While there is value in the items on the right, we value the items on the left more.*\n\n**The 12 Agile Principles (summarized):**\n1. Highest priority: satisfy the customer through early and continuous delivery.\n2. Welcome changing requirements, even late in development.\n3. Deliver working software frequently (weeks, not months).\n4. Business people and developers work together daily.\n5. Build projects around motivated individuals; trust them.\n6. Face-to-face conversation is the most effective communication.\n7. Working software is the primary measure of progress.\n8. Sustainable development pace.\n9. Continuous attention to technical excellence and good design.\n10. Simplicity -- maximize the amount of work not done.\n11. Self-organizing teams produce the best outcomes.\n12. Regular reflection and adaptation.\n\nAgile is a *mindset*, not a methodology. Scrum, Kanban, XP, and SAFe are all frameworks that embody Agile principles in different ways.",
    },
    {
      keys: ["devops", "ci cd", "continuous integration", "continuous delivery", "continuous deployment"],
      answer:
        "**DevOps and Continuous Delivery in Agile/SAFe**\n\nDevOps bridges development and operations to enable continuous, reliable delivery of value.\n\n**Core DevOps practices:**\n- **Continuous Integration (CI)** -- developers merge code frequently; automated builds and tests run on every commit.\n- **Continuous Delivery (CD)** -- every change is automatically deployable to production (one-click deploy).\n- **Continuous Deployment** -- every passing change is automatically deployed to production.\n- **Infrastructure as Code** -- environments are provisioned and managed through version-controlled code.\n- **Monitoring and observability** -- real-time visibility into system health, performance, and user behavior.\n\n**DevOps in SAFe:**\nSAFe's Continuous Delivery Pipeline has four dimensions:\n1. **Continuous Exploration** -- understand the market and customer needs.\n2. **Continuous Integration** -- build and test frequently.\n3. **Continuous Deployment** -- release on demand.\n4. **Release on Demand** -- make value available to customers when they need it.\n\n**Cultural aspects:**\n- Shared ownership between Dev and Ops.\n- Blame-free incident reviews (blameless post-mortems).\n- 'You build it, you run it' accountability.\n- Automation as a force multiplier.\n\nDevOps and Agile are deeply complementary -- Agile without DevOps creates bottlenecks at deployment; DevOps without Agile lacks upstream alignment with customer value.",
    },
    {
      keys: ["okr", "objectives and key results", "metric", "kpi", "measure", "measurement"],
      answer:
        "**Measuring Transformation Success**\n\n**OKRs (Objectives and Key Results):**\nA goal-setting framework that connects ambitious objectives with measurable key results.\n- **Objective:** Qualitative, inspiring, time-bound (e.g., 'Become the most responsive team in the department').\n- **Key Results:** Quantitative measures of progress (e.g., 'Reduce average lead time from 14 days to 5 days').\n\n**Key metrics for Agile transformations:**\n- **Flow metrics:** Lead time, cycle time, throughput, WIP.\n- **Quality:** Defect escape rate, automated test coverage, production incidents.\n- **Value delivery:** Customer satisfaction (NPS/CSAT), business value delivered per PI, feature adoption rate.\n- **Team health:** Engagement scores, psychological safety index, attrition rate.\n- **Predictability:** PI objective achievement rate, Sprint Goal success rate.\n\n**Avoid vanity metrics:**\n- Story points completed (easily gamed).\n- Number of Sprints run (activity, not outcome).\n- Velocity as a cross-team comparison (meaningless and harmful).\n\n**Best practice:** Measure *outcomes* (customer and business impact) over *outputs* (features shipped). Use metrics to learn and improve, never to punish.",
    },
    {
      keys: ["coach", "agile coach", "coaching", "transformation coach"],
      answer:
        "**The Role of Agile Coaching in Transformations**\n\nAgile coaches are critical catalysts in organizational transformations, operating at multiple levels:\n\n**Coaching stances (Lyssa Adkins model):**\n- **Teacher** -- imparting Agile knowledge and practices.\n- **Mentor** -- sharing experience and guiding growth.\n- **Facilitator** -- enabling effective collaboration and decision-making.\n- **Coach** -- asking powerful questions that unlock insight and ownership.\n\n**Levels of coaching:**\n1. **Team coaching** -- helping individual Scrum teams improve their practices, dynamics, and delivery.\n2. **ART/Program coaching** -- enabling effective PI Planning, cross-team collaboration, and ART-level improvements.\n3. **Enterprise/Organizational coaching** -- working with leadership on strategy, structure, culture, and systemic change.\n\n**What great Agile coaches do:**\n- Build capability rather than creating dependency.\n- Challenge the status quo respectfully.\n- Create safe spaces for experimentation and learning.\n- Connect teams to purpose and customer value.\n- Navigate organizational politics and resistance constructively.\n- Model the behaviors they want to see.\n\n**The coaching paradox:** The best coaches work themselves out of a job -- their goal is to make the organization self-sustaining in its Agile practices.",
    },
  ];

  // ---------------------------------------------------------------------------
  // Keyword matching engine
  // ---------------------------------------------------------------------------
  function findBestAnswer(input) {
    const text = input.toLowerCase().replace(/[^\w\s]/g, " ");
    const words = text.split(/\s+/).filter(Boolean);

    let bestScore = 0;
    let bestEntry = null;

    for (const entry of KB) {
      let score = 0;
      for (const key of entry.keys) {
        const keyLower = key.toLowerCase();
        // Full-phrase match (highest value)
        if (text.includes(keyLower)) {
          score += keyLower.split(/\s+/).length * 3;
        } else {
          // Partial word matches
          const keyWords = keyLower.split(/\s+/);
          for (const kw of keyWords) {
            for (const w of words) {
              if (w === kw) score += 2;
              else if (w.length > 3 && kw.startsWith(w)) score += 1;
              else if (kw.length > 3 && w.startsWith(kw)) score += 1;
            }
          }
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestEntry = entry;
      }
    }

    if (bestScore >= 2 && bestEntry) return bestEntry.answer;

    return "That's an interesting question! My expertise covers **AI in business transformations**, **Scrum**, **SAFe**, **organizational change management**, and **Agile transformations in the age of AI**. Could you rephrase your question or ask about one of these topics? For example:\n\n- \"What is Scrum?\"\n- \"Explain PI Planning in SAFe\"\n- \"How does AI change Agile transformations?\"\n- \"What are key success factors in change management?\"";
  }

  // ---------------------------------------------------------------------------
  // Simple markdown-ish rendering (bold, line breaks, bullet lists)
  // ---------------------------------------------------------------------------
  function renderMarkdown(text) {
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Bold **text**
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    // Italic *text*
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

    // Convert lines
    const lines = html.split("\n");
    let result = "";
    let inList = false;

    for (const line of lines) {
      const trimmed = line.trim();
      if (/^[-*] /.test(trimmed) || /^\d+\.\s/.test(trimmed)) {
        if (!inList) { result += "<ul>"; inList = true; }
        result += "<li>" + trimmed.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, "") + "</li>";
      } else {
        if (inList) { result += "</ul>"; inList = false; }
        if (trimmed === "") {
          result += "<br>";
        } else {
          result += "<p>" + trimmed + "</p>";
        }
      }
    }
    if (inList) result += "</ul>";
    return result;
  }

  // ---------------------------------------------------------------------------
  // CSS (injected as a string)
  // ---------------------------------------------------------------------------
  const CSS = `
    :host {
      all: initial;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: #1a1a2e;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* --- Bubble --- */
    .bt-bubble {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #0f7b8a, #0a5c72);
      color: #fff;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(15, 123, 138, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2147483646;
      pointer-events: auto;
      transition: transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s ease;
    }
    .bt-bubble:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 24px rgba(15, 123, 138, 0.6);
    }
    .bt-bubble svg {
      width: 28px;
      height: 28px;
      fill: #fff;
    }
    .bt-bubble.bt-hidden {
      transform: scale(0);
      pointer-events: none;
    }

    /* --- Chat window --- */
    .bt-window {
      position: fixed;
      bottom: 96px;
      right: 24px;
      width: 380px;
      max-width: calc(100vw - 32px);
      height: 520px;
      max-height: calc(100vh - 120px);
      border-radius: 16px;
      background: #fff;
      box-shadow: 0 12px 48px rgba(0,0,0,0.18);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      z-index: 2147483647;
      transform: scale(0.4) translateY(40px);
      transform-origin: bottom right;
      opacity: 0;
      pointer-events: none;
      transition: transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.3s ease;
    }
    .bt-window.bt-open {
      transform: scale(1) translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    /* --- Header --- */
    .bt-header {
      background: linear-gradient(135deg, #0f7b8a, #0a5c72);
      color: #fff;
      padding: 16px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
    }
    .bt-header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .bt-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .bt-avatar svg {
      width: 20px;
      height: 20px;
      fill: #fff;
    }
    .bt-header-info h2 {
      font-size: 15px;
      font-weight: 600;
      margin: 0;
      line-height: 1.3;
    }
    .bt-header-info span {
      font-size: 11px;
      opacity: 0.8;
    }
    .bt-close {
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    .bt-close:hover {
      background: rgba(255,255,255,0.2);
    }
    .bt-close svg {
      width: 18px;
      height: 18px;
      fill: #fff;
    }

    /* --- Messages area --- */
    .bt-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #f4f7f9;
    }
    .bt-messages::-webkit-scrollbar {
      width: 5px;
    }
    .bt-messages::-webkit-scrollbar-track {
      background: transparent;
    }
    .bt-messages::-webkit-scrollbar-thumb {
      background: #c4cdd5;
      border-radius: 3px;
    }

    .bt-msg {
      max-width: 85%;
      padding: 10px 14px;
      border-radius: 14px;
      font-size: 13.5px;
      line-height: 1.55;
      animation: bt-fade-in 0.3s ease;
    }
    @keyframes bt-fade-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .bt-msg-bot {
      align-self: flex-start;
      background: #fff;
      color: #1a1a2e;
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }
    .bt-msg-bot p {
      margin: 0 0 6px 0;
    }
    .bt-msg-bot p:last-child {
      margin-bottom: 0;
    }
    .bt-msg-bot ul {
      margin: 4px 0 8px 18px;
      padding: 0;
    }
    .bt-msg-bot li {
      margin-bottom: 3px;
    }
    .bt-msg-bot strong {
      color: #0a5c72;
    }
    .bt-msg-user {
      align-self: flex-end;
      background: linear-gradient(135deg, #0f7b8a, #0a5c72);
      color: #fff;
      border-bottom-right-radius: 4px;
    }

    /* --- Typing indicator --- */
    .bt-typing {
      align-self: flex-start;
      display: flex;
      gap: 4px;
      padding: 12px 18px;
      background: #fff;
      border-radius: 14px;
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      animation: bt-fade-in 0.3s ease;
    }
    .bt-typing span {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #0f7b8a;
      animation: bt-bounce 1.2s infinite;
    }
    .bt-typing span:nth-child(2) { animation-delay: 0.15s; }
    .bt-typing span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes bt-bounce {
      0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
      30% { transform: translateY(-6px); opacity: 1; }
    }

    /* --- Input area --- */
    .bt-input-area {
      display: flex;
      align-items: center;
      padding: 12px 14px;
      border-top: 1px solid #e8ecef;
      background: #fff;
      gap: 8px;
      flex-shrink: 0;
    }
    .bt-input {
      flex: 1;
      border: 1px solid #dce1e6;
      border-radius: 24px;
      padding: 10px 16px;
      font-size: 13.5px;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s;
      background: #f9fafb;
      color: #1a1a2e;
    }
    .bt-input::placeholder {
      color: #9ca3af;
    }
    .bt-input:focus {
      border-color: #0f7b8a;
      background: #fff;
    }
    .bt-send {
      width: 38px;
      height: 38px;
      border: none;
      border-radius: 50%;
      background: linear-gradient(135deg, #0f7b8a, #0a5c72);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .bt-send:hover {
      transform: scale(1.06);
      box-shadow: 0 2px 8px rgba(15,123,138,0.4);
    }
    .bt-send svg {
      width: 18px;
      height: 18px;
      fill: #fff;
    }

    /* --- Powered by --- */
    .bt-powered {
      text-align: center;
      font-size: 10px;
      color: #b0b8c1;
      padding: 4px 0 8px 0;
      background: #fff;
    }

    /* --- Mobile --- */
    @media (max-width: 480px) {
      .bt-window {
        bottom: 0;
        right: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        border-radius: 0;
      }
      .bt-bubble {
        bottom: 16px;
        right: 16px;
        width: 54px;
        height: 54px;
      }
    }
  `;

  // ---------------------------------------------------------------------------
  // SVG icons
  // ---------------------------------------------------------------------------
  const ICON_CHAT = `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/><path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/></svg>`;
  const ICON_CLOSE = `<svg viewBox="0 0 24 24"><path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71a1 1 0 00-1.42 1.42L10.59 12l-4.89 4.88a1 1 0 001.42 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.41z"/></svg>`;
  const ICON_SEND = `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`;
  const ICON_BOT = `<svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7v1H3v-1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM7 17h10a5 5 0 00-10 0zm2-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/></svg>`;

  // ---------------------------------------------------------------------------
  // Build DOM inside Shadow DOM
  // ---------------------------------------------------------------------------
  const host = document.createElement("div");
  host.id = "bt-chatbot-host";
  host.style.cssText = "position:fixed;z-index:2147483646;bottom:0;right:0;width:0;height:0;pointer-events:none;";
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "closed" });

  // Inject styles
  const styleEl = document.createElement("style");
  styleEl.textContent = CSS;
  shadow.appendChild(styleEl);

  // --- Bubble ---
  const bubble = document.createElement("button");
  bubble.className = "bt-bubble";
  bubble.setAttribute("aria-label", "Open chat");
  bubble.innerHTML = ICON_CHAT;
  shadow.appendChild(bubble);

  // --- Window ---
  const win = document.createElement("div");
  win.className = "bt-window";
  win.innerHTML = `
    <div class="bt-header">
      <div class="bt-header-left">
        <div class="bt-avatar">${ICON_BOT}</div>
        <div class="bt-header-info">
          <h2>Transformation Assistant</h2>
          <span>AI &bull; Agile &bull; SAFe &bull; Change</span>
        </div>
      </div>
      <button class="bt-close" aria-label="Close chat">${ICON_CLOSE}</button>
    </div>
    <div class="bt-messages"></div>
    <div class="bt-input-area">
      <input class="bt-input" type="text" placeholder="Ask me anything..." aria-label="Type a message" />
      <button class="bt-send" aria-label="Send message">${ICON_SEND}</button>
    </div>
    <div class="bt-powered">Powered by Transformation Knowledge Base</div>
  `;
  shadow.appendChild(win);

  // References
  const closeBtn = win.querySelector(".bt-close");
  const messagesEl = win.querySelector(".bt-messages");
  const inputEl = win.querySelector(".bt-input");
  const sendBtn = win.querySelector(".bt-send");

  // ---------------------------------------------------------------------------
  // State & logic
  // ---------------------------------------------------------------------------
  let isOpen = false;
  let greeted = false;

  function openChat() {
    isOpen = true;
    win.classList.add("bt-open");
    bubble.classList.add("bt-hidden");
    inputEl.focus();
    if (!greeted) {
      greeted = true;
      addBotMessage("What can I do for you?");
    }
  }

  function closeChat() {
    isOpen = false;
    win.classList.remove("bt-open");
    bubble.classList.remove("bt-hidden");
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    });
  }

  function addUserMessage(text) {
    const el = document.createElement("div");
    el.className = "bt-msg bt-msg-user";
    el.textContent = text;
    messagesEl.appendChild(el);
    scrollToBottom();
  }

  function addBotMessage(text) {
    const el = document.createElement("div");
    el.className = "bt-msg bt-msg-bot";
    el.innerHTML = renderMarkdown(text);
    messagesEl.appendChild(el);
    scrollToBottom();
  }

  function showTyping() {
    const el = document.createElement("div");
    el.className = "bt-typing";
    el.innerHTML = "<span></span><span></span><span></span>";
    el.id = "bt-typing-indicator";
    messagesEl.appendChild(el);
    scrollToBottom();
    return el;
  }

  function removeTyping(el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function handleSend() {
    const text = inputEl.value.trim();
    if (!text) return;
    inputEl.value = "";
    addUserMessage(text);

    const typingEl = showTyping();
    const delay = 600 + Math.random() * 800;

    setTimeout(() => {
      removeTyping(typingEl);
      const answer = findBestAnswer(text);
      addBotMessage(answer);
    }, delay);
  }

  // ---------------------------------------------------------------------------
  // Event listeners
  // ---------------------------------------------------------------------------
  bubble.addEventListener("click", openChat);
  closeBtn.addEventListener("click", closeChat);
  sendBtn.addEventListener("click", handleSend);
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) closeChat();
  });
})();
