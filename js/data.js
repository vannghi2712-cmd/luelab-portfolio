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
        period: "Jan 2026 \u2013 May 2026",
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
        id: 9,
        title: "CASE 09: AIHome \u2013 48-Hour AI-Powered Content Creator Assessment",
        thumbnail: "images/work/aihome/project9.webp",
        isFeatured: true,
        description: "A 48-hour AI-Powered Content Creator hiring assessment \u2013 designing a reusable AI content system to deliver strategy, scripts, SEO assets and AI-generated videos for AIHOME Malaysia.",
        isPremiumCase: true,
        caseHtml: `
    <div class="case-aihome">
      <style>
      /* ================================================================
         AIHOME CASE STUDY \u2014 SCOPED STYLES
         Every selector starts with .case-aihome \u2014 zero global pollution.
         No generic tag targets. No global class targets.
      ================================================================ */
      .case-aihome * { box-sizing: border-box; }
      .case-aihome p  { font-weight: 400; margin: 0 0 10px; }
      .case-aihome strong { font-weight: 700; }
      .case-aihome em { font-style: italic; font-weight: 400; }

      /* Section cadence */
      .case-aihome .ca-sec  { margin-bottom: 52px; }
      .case-aihome .ca-sec:last-child { margin-bottom: 0; }

      /* Prose width cap (not applied to tables / media / cards) */
      .case-aihome .ca-prose { max-width: 65ch; }

      /* Headings */
      .case-aihome .ca-h2  { font-size: 1.2rem;  font-weight: 700; color: var(--text-primary); margin: 0 0 6px; line-height: 1.35; }
      .case-aihome .ca-h3  { font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin: 0 0 6px; }
      .case-aihome .ca-sub { font-size: 0.92rem; font-weight: 400; color: var(--text-secondary); margin: 0 0 18px; line-height: 1.65; }

      /* ---- PRIMARY METRICS (3-up) ---- */
      .case-aihome .ca-pm-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin: 20px 0 12px; }
      .case-aihome .ca-pm {
        background: var(--bg);
        border: 2px solid var(--primary-light, rgba(214,151,255,.25));
        border-radius: 16px; padding: 18px 10px; text-align: center;
      }
      .case-aihome .ca-pm-n { font-size: 1.85rem; font-weight: 700; color: var(--primary-dark); line-height: 1.1; }
      .case-aihome .ca-pm-l { font-size: 0.67rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--text-secondary); margin-top: 4px; }

      /* ---- SECONDARY METRICS (2-col) ---- */
      .case-aihome .ca-sm-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 10px; }
      .case-aihome .ca-sm {
        background: var(--bg); border: 1px solid var(--border-light);
        border-radius: 10px; padding: 10px 14px;
        display: flex; align-items: center; gap: 8px;
      }
      .case-aihome .ca-sm-ic { font-size: 1rem; flex-shrink: 0; line-height: 1; }
      .case-aihome .ca-sm-tx { font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); }

      @media (max-width: 540px) {
        .case-aihome .ca-pm-grid { grid-template-columns: 1fr 1fr; }
        .case-aihome .ca-sm-grid { grid-template-columns: 1fr; }
      }

      /* ---- ASSESSMENT SNAPSHOT ---- */
      .case-aihome .ca-snap {
        border: 1px solid var(--border-light);
        border-left: 4px solid var(--primary);
        border-radius: 16px; overflow: hidden;
      }
      .case-aihome .ca-snap-g { display: grid; grid-template-columns: 1fr 1fr; }
      @media (max-width: 540px) { .case-aihome .ca-snap-g { grid-template-columns: 1fr; } }
      .case-aihome .ca-snap-r { padding: 13px 18px; border-bottom: 1px solid var(--border-light); }
      .case-aihome .ca-snap-g .ca-snap-r:nth-child(even) { border-left: 1px solid var(--border-light); }
      .case-aihome .ca-snap-g .ca-snap-r:last-child,
      .case-aihome .ca-snap-g .ca-snap-r:nth-last-child(2):nth-child(odd) { border-bottom: none; }
      .case-aihome .ca-snap-lbl { font-size: 0.66rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--primary-dark); margin-bottom: 3px; }
      .case-aihome .ca-snap-val { font-size: 0.87rem; font-weight: 400; color: var(--text-primary); line-height: 1.5; }

      /* ---- QUOTES ---- */
      .case-aihome .ca-quotes { display: flex; flex-direction: column; gap: 10px; }
      .case-aihome .ca-q {
        border-left: 3px solid var(--primary);
        border-radius: 0 10px 10px 0;
        padding: 14px 18px; background: var(--bg);
      }
      .case-aihome .ca-q-mark { font-size: 1.5rem; color: var(--primary); font-weight: 700; line-height: 1; margin-bottom: 4px; }
      .case-aihome .ca-q-text { margin: 0; font-style: italic; font-size: 0.97rem; font-weight: 400; color: var(--text-primary); }

      /* ---- TIMELINE ---- */
      .case-aihome .ca-tl-wrap { max-width: 460px; margin: 0 auto; }
      .case-aihome .ca-tl-row  { display: flex; gap: 14px; align-items: flex-start; }
      .case-aihome .ca-tl-sp   { display: flex; flex-direction: column; align-items: center; width: 26px; flex-shrink: 0; }
      .case-aihome .ca-tl-dot  { width: 11px; height: 11px; border-radius: 50%; background: var(--primary); border: 2px solid var(--primary-light, rgba(214,151,255,.3)); margin-top: 5px; flex-shrink: 0; }
      .case-aihome .ca-tl-dot-s { background: var(--text-secondary); }
      .case-aihome .ca-tl-dot-e { background: var(--primary-dark); width: 14px; height: 14px; }
      .case-aihome .ca-tl-line  { flex: 1; width: 2px; background: var(--border-light); min-height: 20px; }
      .case-aihome .ca-tl-body  { padding-bottom: 22px; }
      .case-aihome .ca-tl-tag   { font-size: 0.66rem; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: var(--primary-dark); }
      .case-aihome .ca-tl-name  { font-size: 0.9rem; font-weight: 600; color: var(--text-primary); margin: 2px 0; }
      .case-aihome .ca-tl-note  { font-size: 0.78rem; font-weight: 400; color: var(--text-secondary); }

      /* ---- WORKFLOW TABLES ---- */
      .case-aihome .ca-tw { overflow-x: auto; border-radius: 12px; border: 1px solid var(--border-light); }
      .case-aihome .ca-tbl { width: 100%; border-collapse: collapse; font-size: 0.85rem; min-width: 360px; }
      .case-aihome .ca-tbl thead { background: var(--primary-light, rgba(214,151,255,.1)); }
      .case-aihome .ca-tbl th {
        padding: 11px 14px; text-align: left;
        font-weight: 700; font-size: 0.69rem;
        text-transform: uppercase; letter-spacing: .07em;
        color: var(--primary-dark); border-bottom: 2px solid var(--border-light);
      }
      .case-aihome .ca-tbl td {
        padding: 11px 14px; border-bottom: 1px solid var(--border-light);
        color: var(--text-primary); vertical-align: top; line-height: 1.5; font-weight: 400;
      }
      .case-aihome .ca-tbl tbody tr:last-child td { border-bottom: none; }
      .case-aihome .ca-tbl .ca-stg { font-weight: 600; color: var(--primary-dark); white-space: nowrap; }
      .case-aihome .ca-pill {
        display: inline-block;
        background: var(--primary-light, rgba(214,151,255,.15));
        color: var(--primary-dark);
        font-size: 0.71rem; font-weight: 700;
        padding: 2px 9px; border-radius: 20px; white-space: nowrap;
      }

      /* ---- SKILL CARDS ---- */
      .case-aihome .ca-skills { display: flex; flex-direction: column; gap: 14px; }
      .case-aihome .ca-skill {
        border: 1px solid var(--border-light);
        border-left: 4px solid var(--primary);
        border-radius: 0 12px 12px 0;
        padding: 16px 18px; background: var(--bg);
      }
      .case-aihome .ca-skill-nm {
        display: inline-block;
        font-family: 'Courier New', monospace;
        font-size: 0.76rem; font-weight: 700;
        color: var(--primary-dark);
        background: var(--primary-light, rgba(214,151,255,.15));
        padding: 2px 8px; border-radius: 4px; margin-bottom: 8px;
      }
      .case-aihome .ca-skill-ds { font-size: 0.86rem; font-weight: 400; color: var(--text-secondary); line-height: 1.6; margin: 0; }

      /* ---- TOOL BADGES ---- */
      .case-aihome .ca-tools { display: flex; flex-wrap: wrap; gap: 8px; }
      .case-aihome .ca-tbadge {
        display: inline-flex; align-items: center;
        background: var(--bg); border: 1px solid var(--border-light);
        border-radius: 8px; padding: 6px 14px;
        font-size: 0.82rem; font-weight: 600; color: var(--text-primary);
      }

      /* ---- PROMPT FLOW ---- */
      .case-aihome .ca-pflow { display: flex; align-items: center; overflow-x: auto; padding: 4px 0; gap: 0; }
      .case-aihome .ca-pf-step {
        flex: 1; min-width: 88px; background: var(--bg);
        border: 1px solid var(--border-light); border-radius: 10px;
        padding: 12px 8px; text-align: center; flex-shrink: 0;
      }
      .case-aihome .ca-pf-final { background: var(--primary); border-color: var(--primary); }
      .case-aihome .ca-pf-nm   { font-size: 0.75rem; font-weight: 700; color: var(--text-primary); line-height: 1.3; }
      .case-aihome .ca-pf-nt   { font-size: 0.65rem; font-weight: 400; color: var(--text-secondary); margin-top: 3px; }
      .case-aihome .ca-pf-final .ca-pf-nm { color: var(--white); }
      .case-aihome .ca-pf-final .ca-pf-nt { color: rgba(255,255,255,.8); }
      .case-aihome .ca-pf-arr  { color: var(--primary); font-weight: 700; padding: 0 5px; flex-shrink: 0; font-size: 0.9rem; }

      /* ---- STRATEGY REPORT CTA CARD ---- */
      .case-aihome .ca-rpt {
        border: 1px solid var(--border-light); border-radius: 16px;
        padding: 22px; background: var(--bg);
        display: flex; flex-direction: column; gap: 14px;
      }
      .case-aihome .ca-rpt-ttl  { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0; }
      .case-aihome .ca-rpt-tags { display: flex; flex-wrap: wrap; gap: 6px; }
      .case-aihome .ca-rtag     { font-size: 0.7rem; font-weight: 700; background: var(--primary-light, rgba(214,151,255,.15)); color: var(--primary-dark); padding: 2px 9px; border-radius: 20px; }
      .case-aihome .ca-rpt-cta  { display: flex; gap: 10px; flex-wrap: wrap; }

      /* ---- KEY TAKEAWAY 5-CARD GRID ---- */
      .case-aihome .ca-tgrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-top: 16px; }
      @media (max-width: 560px) { .case-aihome .ca-tgrid { grid-template-columns: 1fr 1fr; } }
      @media (max-width: 360px) { .case-aihome .ca-tgrid { grid-template-columns: 1fr; } }
      .case-aihome .ca-tc {
        background: var(--bg); border: 1px solid var(--border-light);
        border-radius: 14px; padding: 18px 14px; text-align: center;
        transition: transform .18s ease, border-color .18s ease;
      }
      .case-aihome .ca-tc:hover { transform: translateY(-3px); border-color: var(--primary); }
      .case-aihome .ca-tc-ic  { font-size: 1.7rem; margin-bottom: 8px; line-height: 1; }
      .case-aihome .ca-tc-ttl { font-size: 0.82rem; font-weight: 700; color: var(--text-primary); margin-bottom: 5px; }
      .case-aihome .ca-tc-ds  { font-size: 0.74rem; font-weight: 400; color: var(--text-secondary); line-height: 1.45; margin: 0; }
      </style>

      <!-- =========================================================
           1. HERO
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">48-Hour AI-Powered Content Creator Assessment</h2>
        <p class="ca-sub">Designing an AI-powered content production system to deliver strategy, scripts, SEO assets, and AI-generated videos for AIHOME Malaysia &mdash; executed under a strict 48-hour deadline.</p>

        <div class="ca-pm-grid" role="list" aria-label="Primary assessment metrics">
          <div class="ca-pm" role="listitem">
            <div class="ca-pm-n">48H</div>
            <div class="ca-pm-l">Deadline</div>
          </div>
          <div class="ca-pm" role="listitem">
            <div class="ca-pm-n">2</div>
            <div class="ca-pm-l">Products</div>
          </div>
          <div class="ca-pm" role="listitem">
            <div class="ca-pm-n">6</div>
            <div class="ca-pm-l">Deliverables</div>
          </div>
        </div>

        <div class="ca-sm-grid" role="list" aria-label="Supporting metrics">
          <div class="ca-sm" role="listitem">
            <span class="ca-sm-ic" aria-hidden="true">&#129302;</span>
            <span class="ca-sm-tx">20&ndash;30 AI Concepts per Product</span>
          </div>
          <div class="ca-sm" role="listitem">
            <span class="ca-sm-ic" aria-hidden="true">&#9881;</span>
            <span class="ca-sm-tx">2 Custom Manus AI Skills Built</span>
          </div>
          <div class="ca-sm" role="listitem">
            <span class="ca-sm-ic" aria-hidden="true">&#127916;</span>
            <span class="ca-sm-tx">2 AI Videos Produced</span>
          </div>
          <div class="ca-sm" role="listitem">
            <span class="ca-sm-ic" aria-hidden="true">&#10003;</span>
            <span class="ca-sm-tx">Completed &amp; Submitted On Time</span>
          </div>
        </div>
      </div>

      <!-- =========================================================
           2. ASSESSMENT SNAPSHOT
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">Assessment Snapshot</h2>
        <div class="ca-snap">
          <div class="ca-snap-g">
            <div class="ca-snap-r">
              <div class="ca-snap-lbl">Company</div>
              <div class="ca-snap-val">AIHOME Malaysia</div>
            </div>
            <div class="ca-snap-r">
              <div class="ca-snap-lbl">Role</div>
              <div class="ca-snap-val">AI Powered Content Creator</div>
            </div>
            <div class="ca-snap-r">
              <div class="ca-snap-lbl">Assessment</div>
              <div class="ca-snap-val">48-Hour Practical Challenge</div>
            </div>
            <div class="ca-snap-r">
              <div class="ca-snap-lbl">Objective</div>
              <div class="ca-snap-val">Design an AI-native content production workflow for the Malaysian smart home market</div>
            </div>
            <div class="ca-snap-r">
              <div class="ca-snap-lbl">Scope</div>
              <div class="ca-snap-val">2 Products &middot; 6 Video Strategies &middot; AI SEO Assets &middot; AI Video Production &middot; Publishing Framework</div>
            </div>
            <div class="ca-snap-r">
              <div class="ca-snap-lbl">Evaluation Criteria</div>
              <div class="ca-snap-val">Speed &middot; Prompt Engineering &middot; Conversion Thinking &middot; AI Workflow Design &middot; Execution Quality</div>
            </div>
          </div>
        </div>
      </div>

      <!-- =========================================================
           3. THE BRIEF
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">The Brief</h2>
        <p class="ca-sub">The assessment framing made the hiring bar explicit. Three directives defined the evaluation criteria:</p>
        <div class="ca-quotes">
          <div class="ca-q">
            <div class="ca-q-mark" aria-hidden="true">&ldquo;</div>
            <p class="ca-q-text">We do not hire traditional content creators.</p>
          </div>
          <div class="ca-q">
            <div class="ca-q-mark" aria-hidden="true">&ldquo;</div>
            <p class="ca-q-text">We hire AI-augmented growth machines.</p>
          </div>
          <div class="ca-q" style="border-left-color:var(--primary-dark);">
            <div class="ca-q-mark" aria-hidden="true">&ldquo;</div>
            <p class="ca-q-text">Show us how you use AI as a weapon.</p>
          </div>
        </div>
      </div>

      <!-- =========================================================
           4. EXECUTION TIMELINE
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2" style="text-align:center;margin-bottom:24px;">Execution Timeline</h2>
        <div class="ca-tl-wrap" role="list" aria-label="48-hour execution timeline">

          <div class="ca-tl-row" role="listitem">
            <div class="ca-tl-sp"><div class="ca-tl-dot ca-tl-dot-s"></div><div class="ca-tl-line"></div></div>
            <div class="ca-tl-body">
              <div class="ca-tl-tag">Start</div>
              <div class="ca-tl-name">Assignment Received</div>
              <div class="ca-tl-note">Hour 0 &mdash; brief and products confirmed</div>
            </div>
          </div>

          <div class="ca-tl-row" role="listitem">
            <div class="ca-tl-sp"><div class="ca-tl-dot"></div><div class="ca-tl-line"></div></div>
            <div class="ca-tl-body">
              <div class="ca-tl-tag">Phase 1</div>
              <div class="ca-tl-name">Product &amp; Market Research</div>
              <div class="ca-tl-note">Aqara &amp; Narwal positioning &middot; Malaysian smart home audience</div>
            </div>
          </div>

          <div class="ca-tl-row" role="listitem">
            <div class="ca-tl-sp"><div class="ca-tl-dot"></div><div class="ca-tl-line"></div></div>
            <div class="ca-tl-body">
              <div class="ca-tl-tag">Phase 1</div>
              <div class="ca-tl-name">Prompt Engineering</div>
              <div class="ca-tl-note">Built 2 custom Manus AI skills encoding full platform &amp; SEO logic</div>
            </div>
          </div>

          <div class="ca-tl-row" role="listitem">
            <div class="ca-tl-sp"><div class="ca-tl-dot"></div><div class="ca-tl-line"></div></div>
            <div class="ca-tl-body">
              <div class="ca-tl-tag">Phase 1</div>
              <div class="ca-tl-name">20&ndash;30 AI Concepts Generated</div>
              <div class="ca-tl-note">Per product &mdash; hooks, angles, captions, hashtag stacks</div>
            </div>
          </div>

          <div class="ca-tl-row" role="listitem">
            <div class="ca-tl-sp"><div class="ca-tl-dot"></div><div class="ca-tl-line"></div></div>
            <div class="ca-tl-body">
              <div class="ca-tl-tag">Phase 1</div>
              <div class="ca-tl-name">Best Concepts Selected &amp; Scripted</div>
              <div class="ca-tl-note">3 per product &rarr; full scene-by-scene scripts with voiceover &amp; cues</div>
            </div>
          </div>

          <div class="ca-tl-row" role="listitem">
            <div class="ca-tl-sp"><div class="ca-tl-dot"></div><div class="ca-tl-line"></div></div>
            <div class="ca-tl-body">
              <div class="ca-tl-tag">Phase 1</div>
              <div class="ca-tl-name">SEO Assets Produced</div>
              <div class="ca-tl-note">Platform captions &amp; hashtag stacks &mdash; English (Localized for Malaysian Market)</div>
            </div>
          </div>

          <div class="ca-tl-row" role="listitem">
            <div class="ca-tl-sp"><div class="ca-tl-dot"></div><div class="ca-tl-line"></div></div>
            <div class="ca-tl-body">
              <div class="ca-tl-tag">Phase 2</div>
              <div class="ca-tl-name">AI Video Production</div>
              <div class="ca-tl-note">Kling AI &middot; ElevenLabs &middot; CapCut &middot; Photoshop</div>
            </div>
          </div>

          <div class="ca-tl-row" role="listitem">
            <div class="ca-tl-sp"><div class="ca-tl-dot ca-tl-dot-e"></div></div>
            <div class="ca-tl-body">
              <div class="ca-tl-tag">Completed</div>
              <div class="ca-tl-name">Submission</div>
              <div class="ca-tl-note">Strategy report &plus; scripts &plus; SEO assets &plus; AI videos delivered</div>
            </div>
          </div>

        </div>
      </div>

      <!-- =========================================================
           5. PHASE 1 WORKFLOW TABLE
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">Phase 1 &mdash; AI Content Strategy</h2>
        <p class="ca-sub">A reusable AI skill system was built first, generating all content assets at scale and eliminating repetitive prompting.</p>
        <div class="ca-tw">
          <table class="ca-tbl" aria-label="Phase 1 AI Content Strategy workflow">
            <thead>
              <tr>
                <th scope="col">Stage</th>
                <th scope="col">Tool</th>
                <th scope="col">Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ca-stg" scope="row">Product Research</td>
                <td><span class="ca-pill">Manual</span></td>
                <td>Competitive positioning for Aqara &amp; Narwal in the Malaysian smart home market</td>
              </tr>
              <tr>
                <td class="ca-stg" scope="row">Platform Analysis</td>
                <td><span class="ca-pill">Manual</span></td>
                <td>Content format, hook structure &amp; SEO requirements per platform (TikTok, Instagram, Facebook)</td>
              </tr>
              <tr>
                <td class="ca-stg" scope="row">Concept Generation</td>
                <td><span class="ca-pill">Manus AI</span></td>
                <td>20&ndash;30 distinct video concepts per product &mdash; hooks, angles, SEO captions, hashtag stacks</td>
              </tr>
              <tr>
                <td class="ca-stg" scope="row">Script Development</td>
                <td><span class="ca-pill">Manus AI</span></td>
                <td>6 full scene-by-scene scripts (3 per product) with voiceover lines &amp; transition cues</td>
              </tr>
              <tr>
                <td class="ca-stg" scope="row">SEO Distribution</td>
                <td><span class="ca-pill">Manus AI</span></td>
                <td>Platform-specific captions &amp; hashtag stacks in English (Localized for Malaysian Market)</td>
              </tr>
              <tr>
                <td class="ca-stg" scope="row">Human Review</td>
                <td><span class="ca-pill">Manual</span></td>
                <td>Tone, accuracy &amp; brand alignment verified before advancing to production</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- =========================================================
           6. PHASE 2 WORKFLOW TABLE
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">Phase 2 &mdash; AI Video Production</h2>
        <p class="ca-sub">Scripts were translated into produced video assets using an AI-native stack &mdash; no traditional filming required.</p>
        <div class="ca-tw">
          <table class="ca-tbl" aria-label="Phase 2 AI Video Production workflow">
            <thead>
              <tr>
                <th scope="col">Stage</th>
                <th scope="col">AI Tool</th>
                <th scope="col">Deliverable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ca-stg" scope="row">Storyboard</td>
                <td><span class="ca-pill">ChatGPT Image 2.0 </span></td>
                <td>Scene-by-scene composition layouts defining visuals, text positions &amp; flow</td>
              </tr>
              <tr>
                <td class="ca-stg" scope="row">Asset Sourcing</td>
                <td><span class="ca-pill">ChatGPT Image 2.0</span></td>
                <td>Product compositions, UI mockups &amp; background preparation</td>
              </tr>
              <tr>
                <td class="ca-stg" scope="row">AI Video Generation</td>
                <td><span class="ca-pill">Kling AI</span></td>
                <td>Scene-level video clips rendered from static assets &mdash; no live filming</td>
              </tr>
              <tr>
                <td class="ca-stg" scope="row">AI Voiceover</td>
                <td><span class="ca-pill">ElevenLabs</span></td>
                <td>English AI voiceover timed &amp; toned for Malaysian market audiences</td>
              </tr>
              <tr>
                <td class="ca-stg" scope="row">Assembly &amp; Finishing</td>
                <td><span class="ca-pill">CapCut</span></td>
                <td>Synced video with captions, transitions &amp; platform-specific formatting</td>
              </tr>
              <tr>
                <td class="ca-stg" scope="row">Export</td>
                <td><span class="ca-pill">CapCut</span></td>
                <td>Vertical 9:16 video optimized for TikTok, Instagram Reels &amp; Facebook Reels</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- =========================================================
           7. CUSTOM AI SKILLS
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">Custom Manus AI Skills</h2>
        <p class="ca-sub">Two purpose-built skills encoded the full production logic &mdash; making the workflow repeatable for any product without re-prompting.</p>
        <div class="ca-skills">
          <div class="ca-skill">
            <div class="ca-skill-nm">Aihome_Master_Content_SEO_Machine.skill</div>
            <p class="ca-skill-ds"><strong>Role:</strong> Master orchestrator. Ingests a product brief and target platform, then generates 20&ndash;30 distinct video concepts with hook angles, narrative structures, SEO captions, and hashtag stacks. Encodes educational and entertainment-led formats simultaneously for diverse content angles from a single invocation.</p>
          </div>
          <div class="ca-skill">
            <div class="ca-skill-nm">Aihome_ShortForm_Content_Machine.skill</div>
            <p class="ca-skill-ds"><strong>Role:</strong> Refinement engine. Expands a selected concept into a full short-form script: scene-by-scene direction, voiceover lines, on-screen text cues, and transition logic &mdash; adapted for vertical video pacing and English (Localized for Malaysian Market) tone register.</p>
          </div>
        </div>
      </div>

      <!-- =========================================================
           8. AI TOOL STACK
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">AI Tool Stack</h2>
        <div class="ca-tools">
          <span class="ca-tbadge">Manus AI</span>
          <span class="ca-tbadge">ChatGPT Image 2.0</span>
          <span class="ca-tbadge">Kling AI</span>
          <span class="ca-tbadge">ElevenLabs</span>
          <span class="ca-tbadge">CapCut</span>
        </div>
      </div>

      <!-- =========================================================
           9. PROMPT ENGINEERING WORKFLOW
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">Prompt Engineering Workflow</h2>
        <p class="ca-sub">Each AI skill was designed around a repeatable 5-stage prompt architecture:</p>
        <div class="ca-pflow" role="list" aria-label="Prompt engineering workflow steps">
          <div class="ca-pf-step" role="listitem">
            <div class="ca-pf-nm">Prompt<br>Objective</div>
            <div class="ca-pf-nt">Define goal &amp; constraints</div>
          </div>
          <div class="ca-pf-arr" aria-hidden="true">&rarr;</div>
          <div class="ca-pf-step" role="listitem">
            <div class="ca-pf-nm">Input<br>Context</div>
            <div class="ca-pf-nt">Product &middot; Platform &middot; Audience</div>
          </div>
          <div class="ca-pf-arr" aria-hidden="true">&rarr;</div>
          <div class="ca-pf-step" role="listitem">
            <div class="ca-pf-nm">AI<br>Output</div>
            <div class="ca-pf-nt">Concepts &middot; Scripts &middot; Captions</div>
          </div>
          <div class="ca-pf-arr" aria-hidden="true">&rarr;</div>
          <div class="ca-pf-step" role="listitem">
            <div class="ca-pf-nm">Human<br>Review</div>
            <div class="ca-pf-nt">Tone &middot; Accuracy &middot; Fit</div>
          </div>
          <div class="ca-pf-arr" aria-hidden="true">&rarr;</div>
          <div class="ca-pf-step ca-pf-final" role="listitem">
            <div class="ca-pf-nm">Final<br>Asset</div>
            <div class="ca-pf-nt">Approved output</div>
          </div>
        </div>
      </div>

      <!-- =========================================================
           10. VIDEO SHOWCASE
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">Video Showcase</h2>

        <h3 class="ca-h3" style="margin-top:20px;">Aqara Script 1 &mdash; Storyboard</h3>
        <div style="margin-bottom:24px;">
          <img src="images/work/aihome/Aqara_Script1_Storyboard_Mockup.webp"
               alt="Aqara Script 1 storyboard showing scene-by-scene composition layout for AIHOME Malaysia TikTok campaign"
               loading="lazy"
               style="width:100%;border-radius:12px;" />
        </div>

        <h3 class="ca-h3">Aqara Script 1 &mdash; Final Video</h3>
        <div class="video-wrapper video-wrapper--landscape" style="margin-bottom:24px;">
          <video controls preload="metadata" playsinline
                 title="Aqara Script 1 - AI-generated product video for AIHOME Malaysia">
            <source src="https://media.luelab.io.vn/port-media/aihome/aqara_script1.mp4" type="video/mp4">
            Your browser does not support the video element.
            <a href="https://media.luelab.io.vn/port-media/aihome/aqara_script1.mp4">Download Aqara video</a>.
          </video>
        </div>

        <h3 class="ca-h3">Narwal Script 1 &mdash; Final Video</h3>
        <div class="video-wrapper video-wrapper--landscape" style="margin-bottom:0;">
          <video controls preload="metadata" playsinline
                 title="Narwal Script 1 - AI-generated product video for AIHOME Malaysia">
            <source src="https://media.luelab.io.vn/port-media/aihome/Final_Narwal_Script1.mp4" type="video/mp4">
            Your browser does not support the video element.
            <a href="https://media.luelab.io.vn/port-media/aihome/Final_Narwal_Script1.mp4">Download Narwal video</a>.
          </video>
        </div>
      </div>

      <!-- =========================================================
           11. STRATEGY REPORT CTA
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">Strategy Report</h2>
        <div class="ca-rpt">
          <h3 class="ca-rpt-ttl">AIHOME Content Strategy Report</h3>
          <div class="ca-rpt-tags">
            <span class="ca-rtag">Research</span>
            <span class="ca-rtag">Scripts</span>
            <span class="ca-rtag">SEO Framework</span>
            <span class="ca-rtag">84 Pages</span>
          </div>
          <div class="ca-rpt-cta">
            <a href="images/work/aihome/AIHOME_Content_Strategy_Report.pdf"
               class="btn btn--outline btn--sm"
               target="_blank"
               rel="noopener noreferrer">&#128279; View Strategy Report &rarr;</a>
            <a href="images/work/aihome/AIHOME_Content_Strategy_Report.pdf"
               class="btn btn--accent btn--sm"
               target="_blank"
               rel="noopener noreferrer">&#128196; Open Report &rarr;</a>
          </div>
        </div>
      </div>

      <!-- =========================================================
           12. KEY TAKEAWAYS
      ========================================================= -->
      <div class="ca-sec">
        <h2 class="ca-h2">Key Takeaways</h2>
        <div class="ca-tgrid" role="list" aria-label="Key takeaways">
          <div class="ca-tc" role="listitem">
            <div class="ca-tc-ic" aria-hidden="true">&#129302;</div>
            <div class="ca-tc-ttl">AI Workflow Design</div>
            <p class="ca-tc-ds">Skill-based AI systems eliminate repetitive prompting and maintain output consistency at scale.</p>
          </div>
          <div class="ca-tc" role="listitem">
            <div class="ca-tc-ic" aria-hidden="true">&#9997;&#65039;</div>
            <div class="ca-tc-ttl">Prompt Engineering</div>
            <p class="ca-tc-ds">Encoding platform context and product specifics into skill logic prevents generic output and reduces review cycles.</p>
          </div>
          <div class="ca-tc" role="listitem">
            <div class="ca-tc-ic" aria-hidden="true">&#127474;&#127486;</div>
            <div class="ca-tc-ttl">Malaysian Localization</div>
            <p class="ca-tc-ds">Hook structures, caption tone, and hashtag density were adapted for Malaysian audiences &mdash; not just translated.</p>
          </div>
          <div class="ca-tc" role="listitem">
            <div class="ca-tc-ic" aria-hidden="true">&#128200;</div>
            <div class="ca-tc-ttl">Scalability</div>
            <p class="ca-tc-ds">Adding a third product requires only a new brief input. The workflow and skills remain unchanged.</p>
          </div>
          <div class="ca-tc" role="listitem">
            <div class="ca-tc-ic" aria-hidden="true">&#9889;</div>
            <div class="ca-tc-ttl">Production Speed</div>
            <p class="ca-tc-ds">Full content strategy plus AI video production completed in under 48 hours &mdash; no live filming needed.</p>
          </div>
        </div>
      </div>

    </div>
  `
      },
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
            <source src="https://media.luelab.io.vn/port-media/sparkle/brandstorytelling.mp4" type="video/mp4">
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
            <div class="video-wrapper"><video controls preload="metadata"><source src="https://media.luelab.io.vn/port-media/sparkle/productstorytelling_1.mp4" type="video/mp4"></video></div>
            <div class="gallery-metric"><i class="fas fa-eye"></i> 18K Views</div>
          </div>
          <div class="gallery-item">
            <div class="video-wrapper"><video controls preload="metadata"><source src="https://media.luelab.io.vn/port-media/sparkle/productstorytelling_2.mp4" type="video/mp4"></video></div>
            <div class="gallery-metric"><i class="fas fa-eye"></i> 14K Views</div>
          </div>
          <div class="gallery-item">
            <div class="video-wrapper"><video controls preload="metadata"><source src="https://media.luelab.io.vn/port-media/sparkle/productstorytelling_3.mp4" type="video/mp4"></video></div>
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
            <source src="https://media.luelab.io.vn/port-media/smartcontrol/fay.mp4" type="video/mp4">
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
            <source src="https://media.luelab.io.vn/port-media/ritara/missgrand1.mp4" type="video/mp4">
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
          <div class="video-wrapper"><video controls preload="metadata"><source src="https://media.luelab.io.vn/port-media/ritara/lookbook1.mp4" type="video/mp4"></video></div>
          <div class="video-wrapper"><video controls preload="metadata"><source src="https://media.luelab.io.vn/port-media/ritara/lookbook2.mp4" type="video/mp4"></video></div>
          <div class="video-wrapper"><video controls preload="metadata"><source src="https://media.luelab.io.vn/port-media/ritara/daily.mp4" type="video/mp4"></video></div>
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
            <source src="https://media.luelab.io.vn/port-media/hugu/content1.mp4" type="video/mp4">
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
          <div class="video-wrapper"><video controls preload="metadata"><source src="https://media.luelab.io.vn/port-media/hugu/content2.mp4" type="video/mp4"></video></div>
          <div class="video-wrapper"><video controls preload="metadata"><source src="https://media.luelab.io.vn/port-media/hugu/content3.mp4" type="video/mp4"></video></div>
          <div class="video-wrapper"><video controls preload="metadata"><source src="https://media.luelab.io.vn/port-media/hugu/content4.mp4" type="video/mp4"></video></div>
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
      },
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
