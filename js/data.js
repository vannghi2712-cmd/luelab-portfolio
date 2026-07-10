    /* ============================================================
       DATA OBJECTS (Edit these to update content)
    ============================================================ */

    var personal = {
      name: "Van Nghi (Louise) Nguyen",
      title: "AI Content & Creative Specialist",
      avatar: "images/avatar.webp",
      email: "vannghi2712@gmail.com",
      phone: "036 5054 941",
      location: "An Dong Ward, HCMC, Vietnam",
      bio: "I'm Van Nghi (Louise), an Artificial Intelligence and IoT graduate with a passion for combining technology, creativity, and problem-solving. My background spans both AI and digital marketing, where I've worked across content creation, social media, and AI-assisted workflows. I enjoy exploring emerging AI tools, experimenting with new technologies, and finding practical ways to improve research, productivity, and business processes. I believe creativity and analytical thinking complement each other. My technical foundation helps me approach problems systematically, while my creative experience enables me to communicate ideas that resonate with people. I'm driven by curiosity and continuous learning, and I enjoy turning new technologies into meaningful solutions that create real impact.",
      objective: "Aspiring AI Engineer with a foundation in IoT and Artificial Intelligence, strong programming experience (Python, C, C++), hands-on with embedded platforms (Raspberry Pi, Jetson) and cloud & database tools. Seeking to contribute to AnyGenAI's mission of enabling enterprise-scale generative AI solutions by leveraging my background in data-driven marketing, IoT systems and AI model foundations.",
      storyGallery: [
        "images/story/story1.webp",
        "images/story/story2.webp",
        "images/story/story3.webp",
        "images/story/story4.webp"
      ],
      social: {
        facebook: "https://www.facebook.com/nngblnk/",
        linkedin: "https://www.linkedin.com/in/van-nghi-nguyen-6b5081322/",
        instagram: "https://www.instagram.com/iz.lue/"
      }
    };

    var socialData = {
      tiktok: [
        {
          id: 1,
          title: "Louise",
          username: "@_bylue",
          category: "Personal \u2022 Lifestyle \u2022 Vlogs",
          description: "Sharing everyday moments, personal experiences, travel, and life outside of work.",
          avatar: "images/social/matcha.webp",
          url: "https://www.tiktok.com/@_bylue"
        },
        {
          id: 2,
          title: "Matcha Journal",
          username: "@luenguynnn",
          category: "Matcha \u2022 Caf\u00e9 \u2022 Food Reviews",
          description: "A dedicated space for matcha reviews, caf\u00e9s, and food discoveries.",
          avatar: "images/social/personal.webp",
          url: "https://www.tiktok.com/@luenguynnn"
        }
      ]
    };

    var quote = "Your life won't change by thinking positive - it changes when you start doing something about it.";

    var capabilities = [
      { id: "01", icon: "🤖", title: "Generative AI", desc: "Exploring emerging AI tools to solve creative challenges." },
      { id: "02", icon: "🎬", title: "Content Production", desc: "Transforming ideas into engaging content across multiple platforms." },
      { id: "03", icon: "✨", title: "Creative Automation", desc: "Streamlining repetitive creative workflows with AI." },
      { id: "04", icon: "📈", title: "Marketing Strategy", desc: "Turning audience insights into meaningful digital experiences." }
    ];

    var aboutTags = ['Creative', 'Data-Driven', 'Problem Solver', 'Storyteller', 'AI Enthusiast', 'Lifelong Learner'];


    var experiences = [
      {
        id: 8,
        company: "Smart Control Trading & Services Co., Ltd.",
        logoImg: "images/journey/smartcontrol.webp",
        industry: "Smart Automation & AI Solutions",
        role: "AI Automation Engineer Intern",
        employment: "Internship",
        period: "Jun 2026 \u2013 Aug 2026",
        tasks: [
          "Developed AI-powered internal tools using open-source LLM frameworks to automate business workflows.",
          "Built a 2D AI Livestreamer prototype by customizing the Antigravity open-source GitHub framework and integrating conversational AI capabilities.",
          "Designed and developed an automated order recording system that scanned QR codes, retrieved order information, and automatically generated package-recording videos.",
          "Integrated real-time timestamps, location overlays, and order metadata directly into the recording interface.",
          "Implemented local video management with automatic file naming and structured storage based on order IDs.",
          "Contributed to a token-based user management system, including usage quotas, storage allocation, and permission control.",
          "Assisted in designing scalable system architecture for future cloud deployment and custom domain integration.",
          "Supported marketplace operations, inventory management, and e-commerce workflows for smart devices and electronic components."
        ],
        skills: ["Python", "AI Workflow Automation", "LLM Applications", "Open-source AI Frameworks", "Computer Vision", "QR Code Processing", "API Integration", "System Architecture", "E-commerce Operations", "Inventory Management"],
        achievements: [
          "Customized the Antigravity open-source framework to develop an internal AI Livestreamer prototype.",
          "Built an automated QR-based package recording workflow that streamlined warehouse recording operations.",
          "Designed the foundation of a token-based user and storage management system for future SaaS deployment.",
          "Applied AI engineering to solve real operational challenges in automation and e-commerce environments."
        ],
        tools: ["Python", "Git", "GitHub", "VS Code", "OpenCV", "Antigravity (Open Source)", "ChatGPT", "Gemini", "Claude"]
      },
      {
        id: 1,
        company: "Maikaa Studio",
        logoImg: "images/journey/maikaa.webp",
        industry: "Local Women's Fashion Brand",
        role: "Booking KOL/KOC",
        employment: "Freelance",
        period: "Jan 2026 \u2013 Present",
        tasks: [
          "Identified suitable creators for brand campaigns.",
          "Contacted influencers and negotiated collaborations.",
          "Coordinated campaign timelines and deliverables.",
          "Managed communication between creators and internal teams.",
          "Followed up campaign progress and reporting.",
          "Organized creator databases and campaign documentation."
        ],
        projects: [],
        skills: ["Influencer Marketing", "Communication", "Campaign Coordination", "Relationship Management"],
        achievements: [
          "Identified KOL/KOC creators generating 100K\u2013700K+ organic views.",
          "Built a creator network matching different campaign objectives.",
          "Streamlined creator outreach, communication and approvals.",
          "Improved campaign efficiency through better creator-brand matching."
        ],
        tools: ["Google Sheets", "Email"]
      },
      {
        id: 2,
        company: "Sparkle",
        logoImg: "images/journey/sparkle.webp",
        industry: "Fashion Accessories",
        role: "Social Media & Content Influencer",
        employment: "Hybrid",
        period: "Jun 2025 \u2013 Present",
        tasks: [
          "Developed social media content strategies for TikTok and Instagram.",
          "Produced short-form video content combining storytelling and affiliate marketing.",
          "Integrated AI tools into the creative workflow for ideation, scripting, and content optimization.",
          "Managed creator partnerships from outreach to final content approval.",
          "Coordinated monthly lookbook campaigns with internal and external creative teams.",
          "Monitored audience behavior and campaign performance to continuously improve content strategy."
        ],
        projects: [
          "Organic TikTok Growth: Produced storytelling-driven jewelry videos reaching 9K\u201331K organic views. Focused on relatable storytelling rather than hard-selling.",
          "AI-assisted Content Workflow: Integrated ChatGPT, Gemini, and Claude into the creative workflow for trend research, scripting, captions, brainstorming, and optimization.",
          "Affiliate Content Strategy: Created TikTok Shop affiliate videos balancing storytelling with conversion.",
          "KOL/KOC Collaboration: Managed collaborations with 4 creators from outreach through final approval."
        ],
        skills: ["AI-assisted Content Creation", "TikTok Marketing", "Content Production", "Affiliate Marketing", "Creator Management", "Campaign Planning", "Creative Storytelling", "Photographer"],
        achievements: [
          "Increased overall Reach by 267.2%.",
          "Produced multiple organic TikTok videos reaching 9K\u201331K views without paid promotion.",
          "Established an AI-assisted content workflow using ChatGPT reducing ideation time.",
          "Successfully managed collaborations with content creators from outreach to delivery.",
          "Generated measurable GMV through affiliate video content.",
          "Improved engagement rate by approximately 3.2\u00d7."
        ],
        tools: ["ChatGPT", "CapCut", "Canva", "TikTok Studio", "Meta Business Suite", "Google Sheets"]
      },
      {
        id: 3,
        company: "Optimal 365 Chiropractic",
        logoImg: "images/journey/optimal365.webp",
        industry: "Wellness",
        role: "Content Creator",
        employment: "Full-time",
        period: "Feb 2026 \u2013 May 2026",
        tasks: [
          "Planned and managed social media content across multiple platforms.",
          "Wrote SEO articles for the company website.",
          "Produced educational and promotional video content.",
          "Designed AI-assisted creative workflows for content production.",
          "Monitored campaign performance and marketing reports.",
          "Collaborated with healthcare professionals to develop educational content.",
          "Researched trending topics and audience insights.",
          "Optimized content using Generative AI tools."
        ],
        projects: [],
        skills: ["SEO Writing", "Content Strategy", "AI Workflow", "Marketing Analytics", "Video Production"],
        achievements: [
          "Produced educational healthcare content for social media.",
          "Applied AI-assisted workflows to accelerate content production.",
          "Improved content consistency across multiple digital platforms.",
          "Contributed to brand awareness through educational storytelling."
        ],
        tools: ["ChatGPT", "Gemini", "Nano Banana", "Canva", "CapCut", "Google Analytics", "Veo", "Notebook LM", "Manus AI"]
      },
      {
        id: 4,
        company: "HUGU",
        logoImg: "images/journey/hugu.webp",
        industry: "Fashion & E-commerce",
        role: "E-commerce & Marketing Executive",
        employment: "Full-time",
        period: "Oct 2024 \u2013 Mar 2026",
        tasks: [
          "Managed Facebook Fanpage and daily social media content.",
          "Produced TikTok and Instagram short-form videos for fashion campaigns.",
          "Planned and executed monthly seasonal promotional campaigns.",
          "Operated e-commerce stores across multiple marketplaces.",
          "Managed KOL collaborations, image approvals, and campaign deliverables.",
          "Developed livestream concepts and promotional scripts.",
          "Coordinated livestream campaigns for product launches and seasonal sales.",
          "Managed marketplace operations and product listings.",
          "Monitored campaign performance and marketplace analytics.",
          "Ran advertising campaigns across marketplaces and social media channels.",
          "Conducted competitor research and sales analysis."
        ],
        projects: [
          "Daily Fashion Content Series: Produced and edited daily TikTok/IG videos featuring styling inspiration and trend-based storytelling.",
          "Livestream Campaign Planning: Developed scripts and concepts for monthly campaigns, improving audience interaction.",
          "Marketplace Growth: Managed store operations across e-commerce platforms while coordinating promos and performance analysis."
        ],
        skills: ["Content Production", "Social Media Management", "Marketplace Operations", "Campaign Strategy", "TikTok Marketing", "Livestream Planning", "Performance Analysis", "KOL Collaboration", "E-commerce Operations", "Advertising"],
        achievements: [
          "Managed daily operations across TikTok Shop and e-commerce platforms.",
          "Produced consistent TikTok & Instagram fashion content.",
          "Planned monthly promotional campaigns and livestream concepts.",
          "Combined marketplace operations with content marketing strategies.",
          "Improved campaign planning through performance analysis."
        ],
        tools: ["Meta Business Suite", "TikTok Shop Seller Center", "Shopee Seller Center", "Canva", "CapCut", "Ads Manager", "Google Sheets"]
      },
      {
        id: 5,
        company: "RITARA Fashion",
        logoImg: "images/journey/ritara.webp",
        industry: "Premium Women's Fashion",
        role: "Marketing & Content Executive",
        employment: "Full-time",
        period: "Apr 2024 \u2013 Sep 2024",
        tasks: [
          "Planned and managed monthly social media content calendars.",
          "Produced TikTok-first short-form videos, campaign content, and daily product showcases.",
          "Participated in seasonal lookbook photoshoots, supporting creative direction and on-site production.",
          "Designed commercial visuals and promotional assets for new collection launches.",
          "Built and optimized the brand's TikTok Shop storefront.",
          "Sourced KOLs, KOCs, and fashion models for daily campaigns and photoshoots.",
          "Recruited livestream hosts and coordinated livestream sessions across Facebook Live and TikTok Shop.",
          "Developed livestream scripts and promotional concepts for sales events.",
          "Planned monthly and seasonal marketing campaigns.",
          "Collaborated with wholesale partners from international markets including China and Indonesia."
        ],
        projects: [
          "Miss Grand Vietnam 2024: Led TikTok communication producing promotional videos. Flagship video reached nearly 150K organic views.",
          "Lookbook Project: Directed and edited seasonal lookbook videos focusing on storytelling, craftsmanship, and styling details.",
          "Daily TikTok Series: Applied trending formats to produce continuous short-form content to maintain engagement between campaigns."
        ],
        skills: ["Content Strategy", "TikTok Marketing", "Creative Direction", "Campaign Planning", "Lookbook Production", "Livestream Planning", "TikTok Shop", "KOL/KOC Management", "Commercial Design", "Brand Communication"],
        achievements: [
          "Led TikTok communication for Miss Grand Vietnam 2024 sponsorship campaign.",
          "Produced promotional videos that reached nearly 150K organic views.",
          "Directed seasonal lookbook productions and daily TikTok content.",
          "Built the brand's TikTok Shop foundation.",
          "Coordinated KOLs, livestream hosts and international wholesale partners.",
          "Planned seasonal campaigns that strengthened brand visibility."
        ],
        tools: ["CapCut", "Canva", "Meta Business Suite", "TikTok Shop Seller Center"]
      },
      {
        id: 6,
        company: "Namperfume",
        logoImg: "images/journey/namperfume.webp",
        industry: "Fragrance Retail",
        role: "TikTok Shop Manager & Livestream Host",
        employment: "Full-time",
        period: "Oct 2023 \u2013 Apr 2024",
        tasks: [
          "Managed end-to-end TikTok Shop operations, ensuring smooth daily store performance and promotional activities.",
          "Planned, scripted, hosted, and optimized livestream sessions to increase customer engagement and sales conversions.",
          "Produced promotional short-form videos for TikTok Shop campaigns, including Mega Live events during major sales seasons.",
          "Monitored livestream performance, audience behavior, and engagement metrics.",
          "Analyzed customer interactions and conversion drivers to optimize livestream strategies.",
          "Identified high-performing content formats through audience insights.",
          "Researched beauty and fragrance consumer trends.",
          "Generated actionable insights from livestream and content performance data.",
          "Combined storytelling with data-driven decision-making to create measurable business impact."
        ],
        projects: [
          "Mega Live Sales Campaign: Led planning and execution for TikTok Shop Mega Live sales campaigns. Produced livestream scripts, promotional videos, and campaign assets.",
          "Livestream Performance Optimization: Analyzed viewer behavior, watch time, CTR, and purchasing patterns to optimize livestream structure.",
          "TikTok Shop Content Strategy: Created product-focused short-form videos combining storytelling, demonstrations, and trend-based formats."
        ],
        skills: ["TikTok Shop Management", "Livestream Hosting", "Livestream Strategy", "Content Production", "Campaign Planning", "Consumer Insights", "Performance Analysis", "Social Commerce", "Beauty & Fragrance Marketing", "Video Editing"],
        achievements: [
          "Managed TikTok Shop operations throughout major promotional campaigns.",
          "Produced livestream scripts and promotional content for Mega Live events.",
          "Improved livestream performance through customer behavior analysis.",
          "Built a data-informed content workflow combining storytelling and analytics.",
          "Increased customer engagement through optimized livestream strategies."
        ],
        tools: ["TikTok Shop Seller Center", "TikTok LIVE Studio", "CapCut", "Canva", "Google Sheets"]
      }
    ];


    var toolkit = {
      ai: ["ChatGPT", "Gemini", "Claude", "DeepSeek", "Manus", "Flow (Google)", "Veo", "Midjourney","Evanto","Kling AI","Banana Nano"],
      technical: ["Python", "Raspberry Pi", "Jetson Nano", "SQL (Basic)"],
      creative: ["Canva", "CapCut"],
      learning: ["Agentic AI", "AI Product Thinking", "Workflow Automation", "LLM Applications"]
    };

    var skills = {
      "Programming": [
        { name: "Python", level: 90 },
        { name: "C", level: 80 },
        { name: "C++", level: 75 }
      ],
      "Embedded / Edge": [
        { name: "Raspberry Pi", level: 85 },
        { name: "NVIDIA Jetson", level: 70 },
        { name: "Linux Environment", level: 80 }
      ],
      "Cloud / Database": [
        { name: "SQL", level: 80 },
        { name: "Cloud Database", level: 75 },
        { name: "Query Optimization", level: 70 }
      ],
      "AI / ML": [
        { name: "Model Lifecycle", level: 70 },
        { name: "Data Preprocessing", level: 75 },
        { name: "TensorFlow/PyTorch", level: 65 }
      ],
      "Other": [
        { name: "Git Version Control", level: 80 },
        { name: "DevOps", level: 60 },
        { name: "Marketing Analytics", level: 85 },
        { name: "Content Creation", level: 90 }
      ]
    };

    var projects = [
      {
        id: 1,
        title: "CASE 01: Sparkle - AI-powered Organic Storytelling",
        thumbnail: "images/work/sparkle/project1.webp",
        description: "Turning product education into organic engagement through an AI-assisted creative workflow.",
        isPremiumCase: true,
        caseHtml: `
    <div class="case-study">
      <!-- 1. Overview -->
      <div class="case-section">
        <h3 class="case-title">Overview</h3>
        <p class="case-text">Sparkle wanted educational TikTok content instead of hard-selling products. The objective was to build trust while naturally introducing product quality.</p>
        <p class="case-text">To achieve this, AI was integrated into the creative workflow for ideation and scripting, ensuring a consistent and engaging narrative.</p>
      </div>

      <!-- 2. Creative Brief -->
      <div class="case-section">
        <div class="case-brief">
          <div class="brief-item"><strong>Brand:</strong> Sparkle</div>
          <div class="brief-item"><strong>Objective:</strong> Explain why Sparkle chooses Stainless Steel through storytelling instead of direct selling.</div>
          <div class="brief-item"><strong>Target Audience:</strong> Gen Z (18\u201325)</div>
          <div class="brief-item"><strong>Content Goals:</strong> Build trust, Increase watch time, Encourage saves, Soft selling</div>
        </div>
      </div>

      <!-- 3. AI Workflow -->
      <div class="case-section case-workflow">
        <div class="workflow-img">
          <img src="images/work/sparkle/prompt1.webp" alt="AI Prompt Screenshot" loading="lazy" />
        </div>
        <div class="workflow-content">
          <h3 class="case-title">AI-assisted Workflow</h3>
          <p class="case-text">Instead of writing everything from scratch, I designed a structured prompt for ChatGPT to generate the first creative draft.</p>
          <ul class="case-list">
            <li><i class="fas fa-check"></i> Hook &amp; Story structure</li>
            <li><i class="fas fa-check"></i> Voice-over &amp; Camera direction</li>
            <li><i class="fas fa-check"></i> Shot list &amp; On-screen text</li>
          </ul>
          <p class="case-text" style="margin-top:16px;">The AI output was then refined and adapted before filming.</p>
        </div>
      </div>

      <!-- 4. Hero Video -->
      <div class="case-section">
        <h3 class="case-title">Hero Video</h3>
        <div class="video-wrapper hero-video">
          <video controls preload="metadata">
            <source src="images/work/sparkle/brandstorytelling.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <p class="case-caption">This storytelling video became the flagship content of the campaign.</p>
      </div>

      <!-- 5. Performance -->
      <div class="case-section">
        <h3 class="case-title">Performance</h3>
        <div class="case-kpi-grid">
          <div class="kpi-card"><div class="kpi-num">31K</div><div class="kpi-label">Views</div></div>
          <div class="kpi-card"><div class="kpi-num">434</div><div class="kpi-label">Likes</div></div>
          <div class="kpi-card"><div class="kpi-num">11</div><div class="kpi-label">Comments</div></div>
          <div class="kpi-card"><div class="kpi-num">98</div><div class="kpi-label">Saves</div></div>
        </div>
      </div>

      <!-- 6. Content Series -->
      <div class="case-section">
        <h3 class="case-title">Content Series</h3>
        <p class="case-text">A series of short-form videos designed to showcase Sparkle's jewelry through authentic storytelling.</p>
        <div class="case-gallery-grid">
          <div class="gallery-item">
            <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/sparkle/productstorytelling_1.mp4" type="video/mp4"></video></div>
            <div class="gallery-metric"><i class="fas fa-eye"></i> 18K Views</div>
          </div>
          <div class="gallery-item">
            <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/sparkle/productstorytelling_2.mp4" type="video/mp4"></video></div>
            <div class="gallery-metric"><i class="fas fa-eye"></i> 14K Views</div>
          </div>
          <div class="gallery-item">
            <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/sparkle/productstorytelling_3.mp4" type="video/mp4"></video></div>
            <div class="gallery-metric"><i class="fas fa-eye"></i> 12K Views</div>
          </div>
        </div>
      </div>

      <!-- 7. My Contribution -->
      <div class="case-section">
        <h3 class="case-title">My Contribution</h3>
        <div class="case-contrib-grid">
          <div class="contrib-card"><div class="contrib-icon">💡</div><div class="contrib-label">Creative Ideation</div></div>
          <div class="contrib-card"><div class="contrib-icon">🤖</div><div class="contrib-label">Prompt Engineering</div></div>
          <div class="contrib-card"><div class="contrib-icon">🎥</div><div class="contrib-label">Production</div></div>
          <div class="contrib-card"><div class="contrib-icon">✂️</div><div class="contrib-label">Video Editing</div></div>
          <div class="contrib-card"><div class="contrib-icon">📊</div><div class="contrib-label">Performance Analysis</div></div>
        </div>
      </div>
    </div>
  `
      },
      {
        id: 6,
        title: "CASE 06: Smart Control - AI-powered Virtual Livestream Assistant",
        thumbnail: "images/work/smartcontrol/project6.webp",
        description: "Researching, deploying, and optimizing an AI-powered virtual livestream assistant based on the open-source Fay AI framework.",
        isPremiumCase: true,
        caseHtml: `
    <div class="case-study">
      
      <!-- 1. Overview -->
      <div class="case-section">
        <h3 class="case-title">Overview</h3>
        <p class="case-text">During my internship at Smart Control, I was responsible for researching, deploying, and optimizing an AI-powered virtual livestream assistant based on the open-source Fay AI framework.</p>
        <p class="case-text">The project integrated large language models, speech synthesis, and Live2D animation into a complete real-time livestream workflow. I customized the system for Vietnamese conversations, resolved integration issues across multiple AI components, and improved overall deployment stability.</p>
      </div>

      <!-- 2. Technical Overview -->
      <div class="case-section">
        <div class="case-brief">
          <div class="brief-item"><strong>Project:</strong> Vietnamese AI Virtual Livestream Assistant</div>
          <div class="brief-item"><strong>Objective:</strong> Build an end-to-end AI livestream system capable of understanding user input, generating natural Vietnamese responses, and synchronizing speech with a Live2D virtual avatar in real time.</div>
          <div class="brief-item"><strong>Technology Stack:</strong> Fay AI • DeepSeek • Edge-TTS • FunASR • Live2D • WebSocket • Python</div>
          <div class="brief-item"><strong>Deployment:</strong> Local AI deployment with real-time communication pipeline.</div>
        </div>
      </div>

      <!-- 3. System Architecture -->
      <div class="case-section">
        <h3 class="case-title" style="text-align: center; margin-bottom: 32px;">System Architecture</h3>
        <div class="workflow-flow">
          <div class="flow-step">Viewer Input</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">ASR<br><small>(FunASR)</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">LLM<br><small>(DeepSeek)</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">TTS<br><small>(Edge-TTS)</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">WebSocket</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">Live2D Avatar</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">OBS Studio</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step" style="background: var(--primary); color: var(--white); border: none;">Livestream</div>
        </div>
      </div>

      <!-- 4.5 Content Series -->
      <div class="case-section">
        <h3 class="case-title">Content Series</h3>
        <p class="case-text">Live Demo</p>
        <div class="video-wrapper video-wrapper--landscape">
          <video controls preload="metadata">
            <source src="images/work/smartcontrol/fay.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <!-- 5. Technical Highlights -->
      <div class="case-section">
        <h3 class="case-title">Technical Highlights</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <p class="case-text" style="margin: 0;"><strong>Open-source AI Deployment:</strong> Customized and deployed the Fay AI framework for Vietnamese AI livestream applications.</p>
          <p class="case-text" style="margin: 0;"><strong>LLM Integration:</strong> Integrated DeepSeek as the primary language model for real-time conversational responses.</p>
          <p class="case-text" style="margin: 0;"><strong>Speech Synthesis:</strong> Configured Vietnamese Edge-TTS voices and synchronized generated speech with Live2D lip movements.</p>
          <p class="case-text" style="margin: 0;"><strong>Real-time Communication:</strong> Established WebSocket communication between the AI backend and the virtual avatar frontend.</p>
          <p class="case-text" style="margin: 0;"><strong>System Debugging &amp; Optimization:</strong> Resolved dependency conflicts, API integration issues, encoding problems, timeout handling, and pipeline stability to ensure reliable real-time performance.</p>
        </div>
      </div>

      <!-- 6. Performance -->
      <div class="case-section">
        <h3 class="case-title">Performance</h3>
        <div class="case-kpi-grid">
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.4rem;">Vietnamese</div><div class="kpi-label">Real-time Conversation</div></div>
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.4rem;">Live2D</div><div class="kpi-label">Avatar Lip Sync</div></div>
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.4rem;">DeepSeek</div><div class="kpi-label">LLM Integration</div></div>
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.4rem;">End-to-End</div><div class="kpi-label">AI Deployment</div></div>
        </div>
      </div>

      <!-- 7. My Contribution -->
      <div class="case-section">
        <h3 class="case-title">My Contribution</h3>
        <div class="case-contrib-grid">
          <div class="contrib-card"><div class="contrib-icon">🧠</div><div class="contrib-label">Open-source AI Integration</div></div>
          <div class="contrib-card"><div class="contrib-icon">🤖</div><div class="contrib-label">LLM Deployment</div></div>
          <div class="contrib-card"><div class="contrib-icon">🔊</div><div class="contrib-label">Speech Pipeline</div></div>
          <div class="contrib-card"><div class="contrib-icon">🔌</div><div class="contrib-label">WebSocket Communication</div></div>
          <div class="contrib-card"><div class="contrib-icon">🐞</div><div class="contrib-label">AI Debugging</div></div>
        </div>
      </div>

      <!-- 8. Tools -->
      <div class="case-section">
        <h3 class="case-title">Tools</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <span style="background: var(--bg); border: 1px solid var(--border-light); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-secondary);">Python</span>
          <span style="background: var(--bg); border: 1px solid var(--border-light); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-secondary);">Fay AI</span>
          <span style="background: var(--bg); border: 1px solid var(--border-light); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-secondary);">DeepSeek</span>
          <span style="background: var(--bg); border: 1px solid var(--border-light); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-secondary);">Edge-TTS</span>
          <span style="background: var(--bg); border: 1px solid var(--border-light); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-secondary);">FunASR</span>
          <span style="background: var(--bg); border: 1px solid var(--border-light); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-secondary);">Live2D</span>
          <span style="background: var(--bg); border: 1px solid var(--border-light); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-secondary);">WebSocket</span>
          <span style="background: var(--bg); border: 1px solid var(--border-light); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-secondary);">OBS Studio</span>
          <span style="background: var(--bg); border: 1px solid var(--border-light); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-secondary);">GitHub</span>
          <span style="background: var(--bg); border: 1px solid var(--border-light); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-secondary);">VS Code</span>
        </div>
      </div>

    </div>
  `
      },
      {
        id: 2,
        title: "CASE 02: RITARA Fashion - Fashion Communication Campaigns",
        thumbnail: "images/work/ritara/project2.webp",
        description: "Building brand visibility through lookbooks, fashion sponsorships, and short-form storytelling.",
        isPremiumCase: true,
        caseHtml: `
    <div class="case-study">

      <!-- 1. Overview -->
      <div class="case-section">
        <h3 class="case-title">Overview</h3>
        <p class="case-text">During my time at RITARA, I contributed to the brand's communication strategy by creating content across multiple touchpoints—from seasonal lookbooks and daily TikTok content to one of the brand's biggest campaigns as an official fashion sponsor of Miss Grand Vietnam 2024.</p>
        <p class="case-text">My role combined creative production, campaign planning, and short-form storytelling to strengthen RITARA's digital presence and connect fashion collections with a wider audience.</p>
      </div>

      <!-- 2. Creative Brief -->
      <div class="case-section">
        <div class="case-brief">
          <div class="brief-item"><strong>Brand:</strong> RITARA Fashion</div>
          <div class="brief-item"><strong>Objective:</strong> Strengthen RITARA's premium fashion identity by showcasing new collections through elegant visual storytelling, luxury-inspired campaigns, and high-quality short-form content.</div>
          <div class="brief-item"><strong>Target Audience:</strong> Young women interested in fashion, styling inspiration, and local fashion brands.</div>
          <div class="brief-item"><strong>Deliverables:</strong> TikTok Campaign Videos, Lookbook Videos, Behind-the-scenes Content, Daily Fashion Content, Miss Grand Vietnam 2024 Communication</div>
        </div>
      </div>

      <!-- 3. Campaign Workflow -->
      <div class="case-section">
        <h3 class="case-title">Campaign Workflow</h3>
        <ul class="case-list" style="display: flex; flex-wrap: wrap; gap: 12px 24px; align-items: center;">
          <li><i class="fas fa-check"></i> Campaign Planning</li>
          <li><i class="fas fa-check"></i> Creative Concept</li>
          <li><i class="fas fa-check"></i> Lookbook Shooting</li>
          <li><i class="fas fa-check"></i> Video Editing</li>
          <li><i class="fas fa-check"></i> TikTok Publishing</li>
          <li><i class="fas fa-check"></i> Performance Review</li>
        </ul>
      </div>

      <!-- 4. Hero Video -->
      <div class="case-section">
        <h3 class="case-title">Miss Grand Vietnam 2024</h3>
        <p class="case-text" style="text-align: center; margin-top: -12px; margin-bottom: 24px;">Official Fashion Sponsorship Campaign</p>
        <div class="video-wrapper hero-video">
          <video controls preload="metadata">
            <source src="images/work/ritara/missgrand1.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <!-- 5. Performance -->
      <div class="case-section">
        <h3 class="case-title">Performance</h3>
        <div class="case-kpi-grid">
          <div class="kpi-card"><div class="kpi-num">150K</div><div class="kpi-label">Organic Views</div></div>
          <div class="kpi-card"><div class="kpi-num">Official</div><div class="kpi-label">Fashion Sponsor</div></div>
          <div class="kpi-card"><div class="kpi-num">20+</div><div class="kpi-label">Videos Produced</div></div>
          <div class="kpi-card"><div class="kpi-num">Higher</div><div class="kpi-label">Brand Visibility</div></div>
        </div>
      </div>

      <!-- 6. Content Series -->
      <div class="case-section">
        <h3 class="case-title">Content Series</h3>
        <p class="case-text">A selection of content produced across RITARA's brand communication projects</p>
        <div class="case-gallery-grid">
          <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/ritara/lookbook1.mp4" type="video/mp4"></video></div>
          <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/ritara/lookbook2.mp4" type="video/mp4"></video></div>
          <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/ritara/daily.mp4" type="video/mp4"></video></div>
        </div>
      </div>

      <!-- 7. My Contribution -->
      <div class="case-section">
        <h3 class="case-title">My Contribution</h3>
        <div class="case-contrib-grid">
          <div class="contrib-card"><div class="contrib-icon">🎬</div><div class="contrib-label">Video Production</div></div>
          <div class="contrib-card"><div class="contrib-icon">👗</div><div class="contrib-label">Lookbook Production</div></div>
          <div class="contrib-card"><div class="contrib-icon">📱</div><div class="contrib-label">TikTok Campaigns</div></div>
          <div class="contrib-card"><div class="contrib-icon">🤝</div><div class="contrib-label">Creator Coordination</div></div>
          <div class="contrib-card"><div class="contrib-icon">💡</div><div class="contrib-label">Campaign Ideation</div></div>
        </div>
      </div>

    </div>
  `
      },
      {
        id: 3,
        title: "CASE 03: Namperfume - Building Social Commerce Through TikTok Shop",
        thumbnail: "images/work/namperfume/project3.webp",
        description: "Launching TikTok Shop from the ground up through livestream commerce, promotional content, and data-driven customer engagement.",
        isPremiumCase: true,
        caseHtml: `
    <div class="case-study">
      
      <!-- 1. Overview -->
      <div class="case-section">
        <h3 class="case-title">Overview</h3>
        <p class="case-text">As one of the first team members responsible for launching Namperfume's TikTok Shop, I helped build the brand's social commerce presence from the ground up.</p>
        <p class="case-text">My responsibilities combined livestream hosting, promotional video production, TikTok Shop operations, and customer behavior analysis to increase trust, drive repeat purchases, and generate consistent monthly sales through livestream commerce.</p>
      </div>

      <!-- 2. Creative Brief -->
      <div class="case-section">
        <div class="case-brief">
          <div class="brief-item"><strong>Brand:</strong> Namperfume</div>
          <div class="brief-item"><strong>Objective:</strong> Build a sustainable TikTok Shop sales channel through livestream commerce, engaging product storytelling, and trust-driven customer experiences that encourage repeat purchases.</div>
          <div class="brief-item"><strong>Target Audience:</strong> Beauty and fragrance enthusiasts looking for authentic recommendations, livestream promotions, and affordable luxury fragrances.</div>
          <div class="brief-item"><strong>Deliverables:</strong> TikTok Promotional Videos, Mega Live Campaigns, Livestream Scripts, Product Showcase Videos, TikTok Shop Content, Campaign Performance Analysis</div>
        </div>
      </div>

      <!-- 3. Hero Video -->
      <div class="case-section">
        <h3 class="case-title">Hero Video</h3>
        <div class="video-wrapper hero-video">
          <video controls preload="metadata">
            <source src="images/work/namperfume/campaign1.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <!-- 4. Performance -->
      <div class="case-section">
        <h3 class="case-title">Performance</h3>
        <div class="case-kpi-grid">
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.8rem;">2x–5xM VND</div><div class="kpi-label">Monthly GMV</div></div>
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.8rem;">TikTok Shop</div><div class="kpi-label">Store Launch</div></div>
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.8rem;">Blind-buy</div><div class="kpi-label">Customer Trust</div></div>
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.8rem;">Customer</div><div class="kpi-label">Loyalty</div></div>
        </div>
      </div>

      <!-- 5. Content Series -->
      <div class="case-section">
        <h3 class="case-title">Content Series</h3>
        <p class="case-text">A collection of promotional content created for Namperfume's TikTok Shop and livestream campaigns.</p>
        <div class="case-gallery-grid">
          <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/namperfume/campaign2.mp4" type="video/mp4"></video></div>
          <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/namperfume/campaign3.mp4" type="video/mp4"></video></div>
        </div>
      </div>

      <!-- 6. My Contribution -->
      <div class="case-section">
        <h3 class="case-title">My Contribution</h3>
        <div class="case-contrib-grid">
          <div class="contrib-card"><div class="contrib-icon">🎬</div><div class="contrib-label">Video Production</div></div>
          <div class="contrib-card"><div class="contrib-icon">📺</div><div class="contrib-label">Livestream Planning</div></div>
          <div class="contrib-card"><div class="contrib-icon">🛍️</div><div class="contrib-label">TikTok Shop Operations</div></div>
          <div class="contrib-card"><div class="contrib-icon">📈</div><div class="contrib-label">Performance Analysis</div></div>
          <div class="contrib-card"><div class="contrib-icon">💡</div><div class="contrib-label">Campaign Strategy</div></div>
        </div>
      </div>

    </div>
  `
      },
      {
        id: 4,
        title: "CASE 04: HUGU - Trend-driven Fashion Content",
        thumbnail: "images/work/hugu/project4.webp",
        description: "Creating short-form fashion content that combines styling inspiration, trend integration, and authentic product experiences.",
        isPremiumCase: true,
        caseHtml: `
    <div class="case-study">
      
      <!-- 1. Overview -->
      <div class="case-section">
        <h3 class="case-title">Overview</h3>
        <p class="case-text">At HUGU, I focused on creating short-form fashion content that showcased products through trend-driven storytelling and authentic styling experiences.</p>
        <p class="case-text">From concept development to filming and editing, I produced TikTok and Instagram videos highlighting product details, outfit inspiration, and everyday wearability while maintaining a consistent brand identity across social platforms.</p>
      </div>

      <!-- 2. Creative Brief -->
      <div class="case-section">
        <div class="case-brief">
          <div class="brief-item"><strong>Brand:</strong> HUGU</div>
          <div class="brief-item"><strong>Objective:</strong> Increase product awareness and strengthen brand visibility through engaging short-form videos that combine trend-based storytelling with authentic styling experiences.</div>
          <div class="brief-item"><strong>Target Audience:</strong> Gen Z and young adults interested in casual fashion, everyday styling, and trend-inspired outfits.</div>
          <div class="brief-item"><strong>Deliverables:</strong> TikTok Videos, Instagram Reels, Product Showcase Videos, Styling Videos, Fashion Content Series, Social Media Campaign Content</div>
        </div>
      </div>

      <!-- 3. Hero Video -->
      <div class="case-section">
        <h3 class="case-title">Hero Video</h3>
        <div class="video-wrapper hero-video">
          <video controls preload="metadata">
            <source src="images/work/hugu/content1.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <!-- 4. Performance -->
      <div class="case-section">
        <h3 class="case-title">Performance</h3>
        <div class="case-kpi-grid">
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.8rem;">Daily</div><div class="kpi-label">Content Series</div></div>
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.8rem;">Trend-based</div><div class="kpi-label">Storytelling</div></div>
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.8rem;">Product</div><div class="kpi-label">Showcase</div></div>
          <div class="kpi-card"><div class="kpi-num" style="font-size: 1.8rem;">Brand</div><div class="kpi-label">Visibility</div></div>
        </div>
      </div>

      <!-- 5. Content Series -->
      <div class="case-section">
        <h3 class="case-title">Content Series</h3>
        <p class="case-text">A collection of short-form fashion videos created for HUGU's social media channels.</p>
        <div class="case-gallery-grid">
          <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/hugu/content2.mp4" type="video/mp4"></video></div>
          <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/hugu/content3.mp4" type="video/mp4"></video></div>
          <div class="video-wrapper"><video controls preload="metadata"><source src="images/work/hugu/content4.mp4" type="video/mp4"></video></div>
        </div>
      </div>

      <!-- 6. My Contribution -->
      <div class="case-section">
        <h3 class="case-title">My Contribution</h3>
        <div class="case-contrib-grid">
          <div class="contrib-card"><div class="contrib-icon">🎬</div><div class="contrib-label">Video Production</div></div>
          <div class="contrib-card"><div class="contrib-icon">👕</div><div class="contrib-label">Fashion Styling</div></div>
          <div class="contrib-card"><div class="contrib-icon">📱</div><div class="contrib-label">Short-form Content</div></div>
          <div class="contrib-card"><div class="contrib-icon">✨</div><div class="contrib-label">Trend Storytelling</div></div>
          <div class="contrib-card"><div class="contrib-icon">🎥</div><div class="contrib-label">Video Editing</div></div>
        </div>
      </div>

    </div>
  `
      },
      {
        id: 5,
        title: "CASE 05: Optimal 365 Chiropractic - AI-powered Healthcare Marketing",
        thumbnail: "images/work/optimal365/project5.webp",
        description: "Integrated Manus AI, ChatGPT, and Gemini into the healthcare marketing workflow\u2014from competitor research and campaign strategy to SEO, creative production, and content optimization.",
        isPremiumCase: true,
        caseHtml: `
    <div class="case-study">
      
      <!-- Overview -->
      <div class="case-section">
        <h3 class="case-title">Overview</h3>
        <p class="case-text">During my time at Optimal 365 Chiropractic, I integrated multiple Generative AI platforms into the healthcare marketing workflow\u2014from competitor research and campaign planning to SEO writing, visual design, and content optimization.</p>
        <p class="case-text">By combining Manus AI, ChatGPT, and Gemini, I significantly accelerated content production while maintaining brand consistency and improving creative decision-making.</p>
      </div>

      <!-- SECTION 1: Research & Strategy -->
      <div class="case-section">
        <div class="case-header-with-badge">
          <h3 class="case-title" style="margin-bottom:0;">Research &amp; Strategy</h3>
          <span class="case-badge ms-ai">Powered by Manus AI</span>
        </div>
        <div class="case-feature-grid">
          <div class="feature-card">
            <img src="images/work/optimal365/analys.webp" alt="Performance Analysis" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" />
            <h4 class="feature-title">Performance Analysis</h4>
            <p class="feature-desc">Uploaded Meta performance reports into Manus AI to identify key engagement patterns, high-performing content pillars, and content gaps. Used the AI-generated insights to recommend improvements for future Facebook and social media campaigns.</p>
          </div>
          <div class="feature-card">
            <img src="images/work/optimal365/doithu.webp" alt="Competitor Research" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" />
            <h4 class="feature-title">Competitor Research</h4>
            <p class="feature-desc">Conducted AI-assisted competitor benchmarking to analyze content strategies, posting frequency, audience engagement, and communication styles of leading chiropractic clinics. The findings helped identify best practices and market opportunities for Optimal 365.</p>
          </div>
          <div class="feature-card">
            <img src="images/work/optimal365/rebrand.webp" alt="Rebranding Strategy" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" />
            <h4 class="feature-title">Rebranding Strategy</h4>
            <p class="feature-desc">Used Manus AI to generate a comprehensive rebranding strategy, including brand positioning, communication direction, content pillars, and campaign recommendations tailored to the healthcare industry.</p>
          </div>
        </div>
      </div>

      <!-- SECTION 2: Creative Direction -->
      <div class="case-section">
        <div class="case-header-with-badge">
          <h3 class="case-title" style="margin-bottom:0;">Creative Direction</h3>
          <span class="case-badge chatgpt">Powered by ChatGPT</span>
        </div>
        <div class="case-compare-list">
          <div class="compare-card">
            <div class="compare-images">
              <div class="compare-img"><div class="compare-label">Prompt</div><img src="images/work/optimal365/prompt1.webp" alt="Prompt" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" /></div>
              <div class="compare-img"><div class="compare-label">Result</div><img src="images/work/optimal365/kq1.webp" alt="Result" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" /></div>
            </div>
            <h4 class="feature-title">Poster Layout Planning</h4>
            <p class="feature-desc">Collaborated with ChatGPT to develop poster layouts by refining visual hierarchy, typography, spacing, and composition. Applied the AI recommendations to create healthcare promotional designs aligned with the brand identity.</p>
          </div>
          <div class="compare-card">
            <div class="compare-images">
              <div class="compare-img"><div class="compare-label">Prompt</div><img src="images/work/optimal365/prompt2.webp" alt="Prompt" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" /></div>
              <div class="compare-img"><div class="compare-label">Result</div><img src="images/work/optimal365/kq2.webp" alt="Result" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" /></div>
            </div>
            <h4 class="feature-title">AI Image Prompt Engineering</h4>
            <p class="feature-desc">Designed detailed prompts with ChatGPT for Banana Nano image generation, iteratively refining prompts to achieve visuals suitable for healthcare marketing campaigns and social media content.</p>
          </div>
        </div>
      </div>

      <!-- SECTION 3: Content Production -->
      <div class="case-section">
        <div class="case-header-with-badge">
          <h3 class="case-title" style="margin-bottom:0;">Content Production</h3>
          <span class="case-badge gemini">Powered by Gemini</span>
        </div>
        <div class="case-feature-grid" style="grid-template-columns: repeat(2, 1fr);">
          <div class="feature-card">
            <img src="images/work/optimal365/prompt3.webp" alt="SEO Content Generation" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" />
            <h4 class="feature-title">SEO Content Generation</h4>
            <p class="feature-desc">Used Gemini to generate SEO-optimized healthcare articles based on target keywords and search intent, then refined the content to align with the clinic's tone of voice and marketing objectives.</p>
          </div>
          <div class="feature-card">
            <img src="images/work/optimal365/prompt4.webp" alt="AI Video Ideation" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" />
            <h4 class="feature-title">AI Video Ideation (Veo)</h4>
            <p class="feature-desc">Developed video concepts and Veo prompts for short-form healthcare content, focusing on storytelling, educational messaging, and audience engagement.</p>
          </div>
          <div class="feature-card">
            <img src="images/work/optimal365/prompt5.webp" alt="Social Media Caption Writing" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" />
            <h4 class="feature-title">Social Media Caption Writing</h4>
            <p class="feature-desc">Generated multiple caption variations using Gemini, adapting messaging for Facebook campaigns while balancing educational value, emotional appeal, and call-to-action effectiveness.</p>
          </div>
          <div class="feature-card">
            <img src="images/work/optimal365/prompt6.webp" alt="AI Image Generation" loading="lazy" onclick="window.open(this.src, '_blank')" style="cursor:zoom-in;" />
            <h4 class="feature-title">AI Image Generation</h4>
            <p class="feature-desc">Leveraged Gemini to generate AI-assisted visual concepts and image prompts, supporting faster creative exploration and content production for healthcare campaigns.</p>
          </div>
        </div>
      </div>

      <!-- SECTION 4: AI Workflow -->
      <div class="case-section">
        <h3 class="case-title" style="text-align: center; margin-bottom: 32px;">AI Workflow</h3>
        <div class="workflow-flow">
          <div class="flow-step">Competitor Research<br><small>(Manus AI)</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">Campaign Strategy<br><small>(Manus AI)</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">Creative Direction<br><small>(ChatGPT)</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">Poster &amp; Visual Design<br><small>(ChatGPT)</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">SEO Writing<br><small>(Gemini)</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">Social Caption<br><small>(Gemini)</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">AI Image &amp; Video<br><small>(Gemini)</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step" style="background: var(--primary); color: var(--white); border: none;">Publishing</div>
        </div>
      </div>

      <!-- SECTION 5: My Contribution -->
      <div class="case-section">
        <h3 class="case-title">My Contribution</h3>
        <div class="case-contrib-grid">
          <div class="contrib-card"><div class="contrib-icon">🔍</div><div class="contrib-label">Competitor Research</div></div>
          <div class="contrib-card"><div class="contrib-icon">🧠</div><div class="contrib-label">AI Strategy</div></div>
          <div class="contrib-card"><div class="contrib-icon">🎨</div><div class="contrib-label">Creative Direction</div></div>
          <div class="contrib-card"><div class="contrib-icon">✍️</div><div class="contrib-label">AI Content Production</div></div>
          <div class="contrib-card"><div class="contrib-icon">📊</div><div class="contrib-label">Performance Optimization</div></div>
        </div>
      </div>

    </div>
  `
      },
      {
        id: 7,
        title: "CASE 07: Personal Brand Lab",
        thumbnail: "images/work/canhan/project7.webp",
        description: "Building two creator brands through authentic storytelling and self-produced content.",
        isPremiumCase: true,
        caseHtml: `
      <div class="case-study">
        
        <!-- 1. Overview -->
        <div class="case-section">
          <h3 class="case-title">Overview</h3>
          <p class="case-text">I independently built two personal TikTok channels with different storytelling approaches, using real-life experiences instead of sponsored content.</p>
          <p class="case-text"><strong>@luenguynn</strong> focuses on honest F&amp;B reviews, especially the "Matcha Đậm Gu" series, which reached over 20K organic views and built an engaged community around specialty matcha experiences.</p>
          <p class="case-text"><strong>@_bylue</strong> documents lifestyle, travel, and productivity through practical storytelling. Recent videos covering cashless payment and concert experiences in Malaysia gained strong organic reach by turning personal experiences into useful tips.</p>
          <p class="case-text">Across both channels, I managed the complete production pipeline—from idea generation and scripting to voice-over, editing, publishing, and performance analysis.</p>
        </div>

        <!-- 2. Content Direction -->
        <div class="case-section">
          <h3 class="case-title">Content Direction</h3>
          <div class="case-feature-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
            <div class="feature-card">
              <img src="images/work/canhan/luenguynnn.webp" alt="@luenguynn" loading="lazy" style="border-radius: 12px; border: 1px solid var(--border-light); width: 100%; height: auto;" />
              <h4 class="feature-title" style="margin-top: 12px;">@luenguynn</h4>
              <p class="feature-desc" style="font-weight: 600; color: var(--primary); margin-bottom: 8px;">F&amp;B Review Creator</p>
              <ul style="padding-left: 20px; color: var(--text-secondary); line-height: 1.8; font-size: 0.95rem;">
                <li>Matcha Review Series</li>
                <li>Honest Experiences</li>
                <li>Organic Storytelling</li>
                <li>Community-driven Content</li>
              </ul>
            </div>
            <div class="feature-card">
              <img src="images/work/canhan/_bylue.webp" alt="@_bylue" loading="lazy" style="border-radius: 12px; border: 1px solid var(--border-light); width: 100%; height: auto;" />
              <h4 class="feature-title" style="margin-top: 12px;">@_bylue</h4>
              <p class="feature-desc" style="font-weight: 600; color: var(--primary); margin-bottom: 8px;">Lifestyle Creator</p>
              <ul style="padding-left: 20px; color: var(--text-secondary); line-height: 1.8; font-size: 0.95rem;">
                <li>Daily Lifestyle</li>
                <li>Travel Experiences</li>
                <li>Practical Tips</li>
                <li>Personal Storytelling</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 3. Content Workflow -->
        <div class="case-section">
          <h3 class="case-title" style="text-align: center; margin-bottom: 32px;">Content Workflow</h3>
          <div class="workflow-flow">
            <div class="flow-step">Topic Research</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Hook &amp; Title</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Shoot Raw Footage</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Rough Cut</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Write Voice-over Script</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Record Voice-over</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Final Editing</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Text + Motion Graphics</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Sound Design</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step" style="background: var(--primary); color: var(--white); border: none;">Publish &amp; Analyze</div>
          </div>
        </div>

        <!-- 4. Editing Style -->
        <div class="case-section">
          <h3 class="case-title">Editing Style</h3>
          <div class="case-contrib-grid">
            <div class="contrib-card"><div class="contrib-icon">🎙️</div><div class="contrib-label">Self-written Voice-over</div></div>
            <div class="contrib-card"><div class="contrib-icon">✂️</div><div class="contrib-label">Fast-paced Editing</div></div>
            <div class="contrib-card"><div class="contrib-icon">🎵</div><div class="contrib-label">Sound Design</div></div>
            <div class="contrib-card"><div class="contrib-icon">😂</div><div class="contrib-label">Emoji Reactions</div></div>
            <div class="contrib-card"><div class="contrib-icon">✨</div><div class="contrib-label">Motion Typography</div></div>
          </div>
        </div>

        <!-- 5. Performance -->
        <div class="case-section">
          <h3 class="case-title">Performance</h3>
          <div class="case-kpi-grid">
            <div class="kpi-card"><div class="kpi-num">20K+</div><div class="kpi-label">Organic Series Reach</div></div>
            <div class="kpi-card"><div class="kpi-num">2</div><div class="kpi-label">Creator Channels</div></div>
            <div class="kpi-card"><div class="kpi-num">100%</div><div class="kpi-label">Self-produced Content</div></div>
            <div class="kpi-card"><div class="kpi-num" style="font-size: 1.6rem;">Authentic</div><div class="kpi-label">Storytelling</div></div>
          </div>
        </div>

        <!-- 6. My Contribution -->
        <div class="case-section">
          <h3 class="case-title">My Contribution</h3>
          <div class="case-contrib-grid">
            <div class="contrib-card"><div class="contrib-icon">💡</div><div class="contrib-label">Content Strategy</div></div>
            <div class="contrib-card"><div class="contrib-icon">🎬</div><div class="contrib-label">Video Production</div></div>
            <div class="contrib-card"><div class="contrib-icon">✍️</div><div class="contrib-label">Script Writing</div></div>
            <div class="contrib-card"><div class="contrib-icon">🎙️</div><div class="contrib-label">Voice-over</div></div>
            <div class="contrib-card"><div class="contrib-icon">📈</div><div class="contrib-label">Content Optimization</div></div>
          </div>
        </div>

      </div>
    `
      }
    ];


    const reelsData = [
      {
        id: 1,
        channel: "@luenguynnn",
        title: "Matcha Đậm Gu Series",
        url: "https://www.tiktok.com/@luenguynnn/video/7495660556024597768",
        thumbnail: "images/reels/reel1.webp",
        metrics: { views: "27.4K", likes: "1.2K" }
      },
      {
        id: 2,
        channel: "@_bylue",
        title: "Concert Tips in Malaysia",
        url: "https://www.tiktok.com/@_bylue/video/7645317932536515848",
        thumbnail: "images/reels/reel2.webp",
        metrics: { views: "8K", likes: "420" }
      },
      {
        id: 3,
        channel: "@_bylue",
        title: "Cashless Payment in Malaysia",
        url: "https://www.tiktok.com/@_bylue/video/7626693604282486034",
        thumbnail: "images/reels/reel3.webp",
        metrics: { views: "12K", likes: "506" }
      }
    ];

    /* Keep tiktoks as alias so renderTikTokProfiles (dropdown) still works */
    var tiktoks = reelsData.map(function(r) {
      return {
        id: r.id,
        title: r.title,
        videoUrl: r.url,
        thumbnail: r.thumbnail,
        link: r.url,
        metrics: r.metrics,
        description: r.channel
      };
    });

    var education = {
      degree: "Bachelor's Degree in Internet of Things (IoT) and Artificial Intelligence Applications",
      school: "Industrial University of Ho Chi Minh City (IUH)",
      period: "2020 - 2026 (Completed)",
      description: "Specialized in embedded systems, machine learning, and data analytics. Key project: 'Smart Secure Solar' under USAID BUILT-IT DOW Vietnam STEM Program - designed IoT-based solar lighting & security system with sensor data pipeline and alert logic."
    };

    var certifications = [
      { name: "USAID BUILT-IT DOW VIETNAM STEM PROGRAM", issuer: "USAID", year: 2022 },
      { name: "Generative AI: Foundation Models and Platforms", issuer: "IBM", year: "2025 (In Progress)" },
      { name: "Introduction to Neural Networks and PyTorch", issuer: "IBM", year: "2026 (In Progress)" },
      { name: "Introduction to DevOps", issuer: "IBM", year: "2026 (In Progress)" },
      { name: "Introduction to Git and GitHub", issuer: "Google", year: "2026 (In Progress)" }
    ];

    var languages = [
      { name: "Vietnamese", level: "Native" },
      { name: "English", level: "Intermediate (Professional working proficiency)" }
    ];
