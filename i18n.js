/* Bilingual EN/中文 toggle — selector-based dictionary.
   All Chinese institutional names verified against official sources:
   产学研1+计划 (itf.gov.hk), 大学科技初创企业资助计划 (itf.gov.hk), 精英企业计划 (hkstp.org),
   医学工程及创新协会 (industryhk.org), 香港投资管理有限公司 (hkic.org.hk),
   海银国际 (finews.asia), 生物医药研发及产业化理学硕士 (PolyU programme),
   香港大专商学生联会 (hk01/HKFBS). Unverified names kept in original English. */
(function () {
  var META = {
    en: {
      htmlLang: 'en',
      title: 'Fred Li — Managing Director, Gobi Partners | 李佛创投笔记',
      desc: 'Fred Li is Managing Director & Head of University Ventures at Gobi Partners in Hong Kong, investing in deep tech, biotech, life sciences and university spin-offs across Hong Kong and the Greater Bay Area. Author of 李佛创投笔记 (Li Fo Venture Notes).',
      toggleLabel: '中文'
    },
    zh: {
      htmlLang: 'zh-CN',
      title: '李冠乐 Fred Li — 戈壁创投董事总经理 | 李佛创投笔记',
      desc: '李冠乐（Fred Li）是戈壁创投（Gobi Partners）董事总经理兼大学创投负责人，常驻香港，专注深科技、生物科技、生命科学及大学衍生企业投资，覆盖香港与大湾区。微信公众号《李佛创投笔记》作者。',
      toggleLabel: 'EN'
    }
  };

  var T = [
    /* Nav */
    { s: '.skip-link', en: 'Skip to main content', zh: '跳至主要内容' },
    { s: '.nav-links a[href="#about"], .nav-mobile a[href="#about"]', en: 'About', zh: '关于' },
    { s: '.nav-links a[href="#focus"], .nav-mobile a[href="#focus"]', en: 'Focus', zh: '投资方向' },
    { s: '.nav-links a[href="#posts"], .nav-mobile a[href="#posts"]', en: 'LinkedIn', zh: '领英' },
    { s: '.nav-links a[href="#popular"], .nav-mobile a[href="#popular"]', en: 'Writing', zh: '文章' },
    { s: '.nav-links a[href="#highlights"], .nav-mobile a[href="#highlights"]', en: 'Highlights', zh: '里程碑' },
    { s: '.nav-links a[href="#press"], .nav-mobile a[href="#press"]', en: 'Press', zh: '媒体报道' },
    { s: '.nav-mobile a[href="#connect"]', en: 'Connect', zh: '关注' },
    { s: '.nav-btn-li span', en: 'LinkedIn', zh: '领英' },
    { s: '.nav-btn-wc span', en: 'WeChat', zh: '微信' },

    /* Hero */
    { s: '.eyebrow-link', en: 'Gobi Partners · Hong Kong', zh: '戈壁创投 Gobi Partners · 香港' },
    { s: '.hero-text h1', en: 'Fred Li', zh: '李冠乐 Fred Li' },
    { s: '.hero-role', en: 'Managing Director &amp; Head of University Ventures', zh: '董事总经理 · 大学创投负责人' },
    { s: '.hero-lede', en: 'Turning breakthrough university research into scalable ventures across Hong Kong and the Greater Bay Area — with a focus on deep tech, biotech and life sciences.', zh: '专注把突破性的大学科研成果转化为可规模化的公司，深耕香港与大湾区的深科技、生物科技与生命科学。' },
    { s: '.hero-cta a[href^="mailto"]', en: 'Email', zh: '电邮' },
    { s: '.hero-tags li:nth-of-type(1)', en: 'Deep Tech', zh: '深科技' },
    { s: '.hero-tags li:nth-of-type(2)', en: 'Biotech &amp; Life Sciences', zh: '生物科技与生命科学' },
    { s: '.hero-tags li:nth-of-type(3)', en: 'University Spin-offs', zh: '大学衍生企业' },
    { s: '.hero-tags li:nth-of-type(4)', en: 'Greater Bay Area', zh: '大湾区' },
    { s: '.avatar-name', en: 'Fred Li', zh: '李冠乐' },
    { s: '.avatar-sub', en: 'VC &amp; private-market deal maker', zh: '风险投资人 · 私募市场交易' },

    /* About */
    { s: '#about .kicker', en: '— About —', zh: '— 关于 —' },
    { s: '#about h2', en: 'An investor who works at the seam of research and capital', zh: '站在科研与资本交汇处的投资人' },
    { s: '.about-body p:nth-of-type(1)', en: 'Fred Li is Managing Director and Head of University Ventures at <strong><a href="https://www.gobi.vc" target="_blank" rel="noopener" class="body-link">Gobi Partners</a></strong>, based in Hong Kong. He spearheads the firm\u2019s university\u2013industry\u2013research\u2013investment ecosystem, helping transform academic innovation into commercially viable companies.', zh: '李冠乐（Fred Li）是<strong><a href="https://www.gobi.vc" target="_blank" rel="noopener" class="body-link">戈壁创投（Gobi Partners）</a></strong>董事总经理兼大学创投负责人，常驻香港。他牵头构建戈壁的「产学研投」生态体系，助力学术创新转化为具商业价值的公司。' },
    { s: '.about-body p:nth-of-type(2)', en: 'With over 15 years of experience in private-market transactions, management operations and turnarounds — as both a deal maker and a former General Manager — Fred brings a rare blend of investment judgment and hands-on operating experience to the founders he backs.', zh: '他拥有逾15年私募市场交易、企业管理与业务重整经验——既是投资交易的操盘者，也曾出任企业总经理——为所支持的创始人带来投资判断与实战运营兼备的独特视角。' },
    { s: '.about-body p:nth-of-type(3)', en: 'Fred began his career in restructuring advisory at Deloitte, then built full-cycle deal experience across VC and PE — Senior Associate at Ocean Equity Partners (MFO), Vice President at CITIC CLSA Capital Partners, and Executive Director at Hywin International — serving on portfolio-company boards along the way. As Group General Manager of Gaia Group, a 1,000-person company in his previous portfolio, he led successful turnarounds and digital transformation first-hand.', zh: '他的职业生涯始于德勤（Deloitte）重组咨询，其后在 VC 与 PE 领域积累全周期交易经验——历任家族办公室 Ocean Equity Partners 高级投资经理、CITIC CLSA Capital Partners 副总裁及海银国际（Hywin International）执行董事，期间出任多家被投企业董事。他亦曾担任被投企业 Gaia Group（约1,000名员工）集团总经理，亲身主导企业扭亏为盈与数字化转型。' },
    { s: '.about-body p:nth-of-type(4)', en: 'He writes under the personal brand <strong>李佛创投笔记 (Li Fo Venture Notes)</strong>, sharing bilingual insights on biotech, AI, deep tech and the Greater Bay Area startup ecosystem.', zh: '他以个人品牌<strong>《李佛创投笔记》（Li Fo Venture Notes）</strong>持续写作，以中英双语分享生物科技、AI、深科技与大湾区创业生态的观察。' },
    { s: '.about-side h3:nth-of-type(1)', en: 'Education', zh: '教育背景' },
    { s: '.about-side ul:nth-of-type(1) li:nth-of-type(1) .fact-label', en: 'BBA, Accounting &amp; Finance', zh: '工商管理学士（会计及财务）' },
    { s: '.about-side ul:nth-of-type(1) li:nth-of-type(1) .fact-sub', en: 'The University of Hong Kong (HKU)', zh: '香港大学（HKU）' },
    { s: '.about-side ul:nth-of-type(1) li:nth-of-type(2) .fact-label', en: 'MSc, Biotechnology', zh: '理学硕士（生物技术）' },
    { s: '.about-side ul:nth-of-type(1) li:nth-of-type(2) .fact-sub', en: 'Hong Kong University of Science and Technology (HKUST)', zh: '香港科技大学（HKUST）' },
    { s: '.about-side h3:nth-of-type(2)', en: 'Credentials', zh: '专业资格' },
    { s: '.about-side ul:nth-of-type(2) li:nth-of-type(1) .fact-label', en: 'HKICPA Certified Public Accountant (CPA)', zh: '香港会计师公会注册会计师（CPA）' },
    { s: '.about-side ul:nth-of-type(2) li:nth-of-type(2) .fact-label', en: 'Certified ESG Analyst (CESGA®)', zh: '注册ESG分析师（CESGA®）' },
    { s: '.about-side ul:nth-of-type(2) li:nth-of-type(3) .fact-label', en: '技术经纪人 · Technology Broker', zh: '技术经纪人 · Technology Broker' },
    { s: '.about-side ul:nth-of-type(2) li:nth-of-type(3) .fact-sub', en: '国家技术转移南方中心 National Technology Transfer Southern Center, 2026', zh: '国家技术转移南方中心 · 2026年' },
    { s: '.appointments-title', en: 'Appointments &amp; advisory roles', zh: '公职与顾问任命' },
    { s: '.appointments-grid li:nth-of-type(1)', en: 'Vetting Panel, HKSTP Acceleration Programme &amp; ELITE Programme', zh: '香港科技园公司 Acceleration Programme 及「精英企业计划」（ELITE）评审委员' },
    { s: '.appointments-grid li:nth-of-type(2)', en: 'Lead Lecturer, MSc in Biopharmaceutical Company Development &amp; Commercialisation, PolyU', zh: '香港理工大学「生物医药研发及产业化」理学硕士课程首席讲师' },
    { s: '.appointments-grid li:nth-of-type(3)', en: 'Guest Trainer — HKU, HKUST, CUHK, PolyU, HKBU, CityU, MTR Corp, GUIDE GBA', zh: '客席培训导师 — 香港大学、香港科技大学、香港中文大学、香港理工大学、香港浸会大学、香港城市大学、港铁公司、GUIDE GBA' },
    { s: '.appointments-grid li:nth-of-type(4)', en: 'Vetting Panel, RAISe+ (HKU, HKUST, PolyU, HKBU, etc.)', zh: '「产学研1+计划」（RAISe+）评审委员（港大、科大、理大、浸大等）' },
    { s: '.appointments-grid li:nth-of-type(5)', en: 'Founding Organising Committee &amp; Chair of Angel Investment, HKU Super Angel Network (SAN)', zh: '香港大学 Super Angel Network（SAN）创始筹委会成员兼天使投资主席' },
    { s: '.appointments-grid li:nth-of-type(6)', en: 'Expert Panel &amp; Mentor, HKUMed Technology Transfer Unit', zh: '香港大学医学院（HKUMed）Technology Transfer Unit 专家委员兼导师' },
    { s: '.appointments-grid li:nth-of-type(7)', en: 'ExCo, Federation of Hong Kong Industries (FHKI) Medical Engineering &amp; Innovation Council', zh: '香港工业总会「医学工程及创新协会」执行委员会成员' },
    { s: '.appointments-grid li:nth-of-type(8)', en: 'Review Expert, Jingjinji National Center of Technology Innovation 京津冀国家技术创新中心', zh: '京津冀国家技术创新中心评审专家' },
    { s: '.appointments-grid li:nth-of-type(9)', en: 'Vetting Panel, TSSSU+ (HKU, HKUST, PolyU, HKBU, CityU)', zh: '「大学科技初创企业资助计划」（TSSSU+）评审委员（港大、科大、理大、浸大、城大）' },
    { s: '.appointments-grid li:nth-of-type(10)', en: 'Advisory Committee to EIF IC Panel, PolyVentures, PolyU', zh: '香港理工大学 PolyVentures EIF 投资委员会顾问委员' },
    { s: '.appointments-grid li:nth-of-type(11)', en: 'Task Force on the Review of Graduate Attributes for RPg Students, HKBU', zh: '香港浸会大学研究式研究生（RPg）毕业生特质检讨工作小组成员' },
    { s: '.appointments-grid li:nth-of-type(12)', en: 'Start-up Mentor &amp; Independent Consultant, BLOCK71 (NUS)', zh: '新加坡国立大学 BLOCK71 创业导师及独立顾问' },
    { s: '.appointments-grid li:nth-of-type(13)', en: 'Regular Start-up Mentor — HKU, HKUST, PolyU, HKBU, CUHK-Shenzhen', zh: '常任创业导师 — 港大、科大、理大、浸大、香港中文大学（深圳）' },
    { s: '.appointments-grid li:nth-of-type(14)', en: 'Industry Advisor, HKFBS', zh: '香港大专商学生联会（HKFBS）行业顾问' },

    /* Focus */
    { s: '#focus .kicker', en: '— Investment Focus —', zh: '— 投资方向 —' },
    { s: '#focus h2', en: 'Where I spend my conviction', zh: '我聚焦深耕的领域' },
    { s: '#focus .card:nth-of-type(1) h3', en: 'Deep Tech &amp; AI', zh: '深科技与 AI' },
    { s: '#focus .card:nth-of-type(1) p', en: 'Hard-tech ventures and AI applications emerging from frontier research labs across the GBA.', zh: '投资源自大湾区前沿科研实验室的硬科技公司与 AI 应用。' },
    { s: '#focus .card:nth-of-type(2) h3', en: 'Biotech &amp; Healthcare', zh: '生物科技与医疗健康' },
    { s: '#focus .card:nth-of-type(2) p', en: 'Life-sciences platforms — from AI-driven drug discovery to peptide design and therapeutics.', zh: '生命科学平台——从 AI 药物发现到多肽设计与创新疗法。' },
    { s: '#focus .card:nth-of-type(3) h3', en: 'University Spin-offs', zh: '大学衍生企业' },
    { s: '#focus .card:nth-of-type(3) p', en: 'Commercialising academic IP into investable companies with the right team and structure.', zh: '把学术知识产权商业化，配以合适的团队与架构，成为可投资的公司。' },
    { s: '#focus .card:nth-of-type(4) h3', en: 'GreenTech &amp; Sustainability', zh: '绿色科技与可持续发展' },
    { s: '#focus .card:nth-of-type(4) p', en: 'Patient capital for the next generation of sustainability and climate-impact founders.', zh: '以耐心资本支持新一代可持续发展与气候科技创始人。' },

    /* LinkedIn */
    { s: '#posts .kicker', en: '— On LinkedIn —', zh: '— 领英动态 —' },
    { s: '#posts h2', en: 'Notes from the field', zh: '来自一线的笔记' },
    { s: '#posts .section-sub', en: 'Recent posts from <a href="https://www.linkedin.com/in/fredkli" target="_blank" rel="noopener">@fredkli</a>.', zh: '来自 <a href="https://www.linkedin.com/in/fredkli" target="_blank" rel="noopener">@fredkli</a> 的最新帖子。' },
    { s: '#posts .wall-cta a', en: 'See all activity on LinkedIn', zh: '在领英查看全部动态' },

    /* WeChat articles */
    { s: '#popular .kicker', en: '— 精选文章 —', zh: '— 精选文章 —' },
    { s: '#popular h2', en: 'Latest on 李佛创投笔记', zh: '《李佛创投笔记》最新文章' },
    { s: '#popular .section-sub', en: 'Selected deep-dive articles from the WeChat blog, newest first.', zh: '精选公众号深度文章，最新在前。' },
    { s: '#popular .wall-cta a', en: 'Browse all on WeChat →', zh: '在微信查看全部 →' },

    /* Highlights */
    { s: '#highlights .kicker', en: '— Selected Highlights —', zh: '— 精选里程碑 —' },
    { s: '#highlights h2', en: 'Building bridges between universities and capital', zh: '在大学与资本之间架设桥梁' },
    { s: '#highlights .timeline li:nth-of-type(1) h3', en: 'Head of University Ventures, Gobi Partners', zh: '戈壁创投 大学创投负责人' },
    { s: '#highlights .timeline li:nth-of-type(1) .t-body p', en: 'Leading Gobi\u2019s dedicated university venture initiative across the Greater Bay Area, connecting research, industry and investment.', zh: '领导戈壁在大湾区的大学创投计划，连接科研、产业与投资。' },
    { s: '#highlights .timeline li:nth-of-type(2) h3', en: 'HKU Entrepreneurship Engine Fund × Gobi Partners', zh: 'HKU Entrepreneurship Engine Fund × 戈壁创投' },
    { s: '#highlights .timeline li:nth-of-type(2) .t-body p', en: 'Joined HKU and Hong Kong Investment Corporation (HKIC) leaders to launch a joint initiative supporting university innovation.', zh: '与香港大学及香港投资管理有限公司（港投公司）领导层共同启动支持大学创新的合作计划。' },
    { s: '#highlights .timeline li:nth-of-type(3) h3', en: 'Gobi–Redbird Innovation Fund with HKUST', zh: 'Gobi–Redbird Innovation Fund（与香港科技大学）' },
    { s: '#highlights .timeline li:nth-of-type(3) .t-body p', en: 'Part of Gobi\u2019s commitment to commercialising university research and backing early-stage Hong Kong start-ups.', zh: '戈壁推动大学科研成果商业化、支持香港早期初创承诺的重要一步。' },
    { s: '#highlights .timeline li:nth-of-type(4) .t-date', en: 'Ongoing', zh: '持续' },
    { s: '#highlights .timeline li:nth-of-type(4) h3', en: 'Educator, speaker &amp; mentor', zh: '教育者 · 讲者 · 导师' },
    { s: '#highlights .timeline li:nth-of-type(4) .t-body p', en: 'Lecturer, panelist, trainer and mentor across HKU, HKUST, PolyU, HKBU, CityU, CUHK-Shenzhen, NUS BLOCK71, HKSTP, Cyberport, BIOHK and BIOCHINA ecosystem programmes.', zh: '于香港大学、香港科技大学、香港理工大学、香港浸会大学、香港城市大学、香港中文大学（深圳）、新加坡国立大学 BLOCK71、香港科技园、数码港、BIOHK 及 BIOCHINA 等生态计划中担任讲师、评审、培训导师与创业导师。' },

    /* Press */
    { s: '#press .kicker', en: '— In the News —', zh: '— 媒体报道 —' },
    { s: '#press h2', en: 'Press &amp; media coverage', zh: '媒体报道与访谈' },
    { s: '#press .section-sub', en: 'Selected appearances and interviews across Hong Kong and regional media.', zh: '香港及区域媒体的精选报道与访谈。' },
    { s: '.press-item:nth-of-type(1) .press-date', en: 'Jun 2026 · Feature interview', zh: '2026年6月 · 专访' },
    { s: '.press-item:nth-of-type(2) .press-date', en: 'May 2026 · Interview / feature', zh: '2026年5月 · 访谈报道' },
    { s: '.press-item:nth-of-type(3) .press-date', en: 'May 2026 · Forum panel', zh: '2026年5月 · 论坛圆桌' },
    { s: '.press-item:nth-of-type(4) .press-date', en: 'Apr 2026 · Feature interview', zh: '2026年4月 · 专访' },
    { s: '.press-item:nth-of-type(5) .press-date', en: 'Mar 2026 · News coverage', zh: '2026年3月 · 新闻报道' },
    { s: '.press-item:nth-of-type(6) .press-date', en: 'Mar 2026 · News coverage', zh: '2026年3月 · 新闻报道' },
    { s: '.press-item:nth-of-type(7) .press-date', en: 'Oct 2025 · News coverage', zh: '2025年10月 · 新闻报道' },
    { s: '.press-item:nth-of-type(8) .press-date', en: 'Sep 2025 · Feature / quoted', zh: '2025年9月 · 专题报道 · 获引述' },
    { s: '.press-item:nth-of-type(9) .press-date', en: 'Jun 2025 · Radio / podcast', zh: '2025年6月 · 电台节目' },
    { s: '.press-item:nth-of-type(10) .press-date', en: '2025 · Summit / speaker', zh: '2025年 · 峰会讲者' },
    { s: '.press-item:nth-of-type(11) .press-date', en: 'Mar 2025 · Radio / commentary · PDF', zh: '2025年3月 · 电台评论 · PDF' },
    { s: '.press-item:nth-of-type(12) .press-date', en: 'Dec 2024 · Interview', zh: '2024年12月 · 专访' },
    { s: '.press-item:nth-of-type(13) .press-date', en: 'Dec 2023 · Interview', zh: '2023年12月 · 专访' },

    /* FAQ */
    { s: '#faq .kicker', en: '— FAQ —', zh: '— 常见问题 —' },
    { s: '#faq h2', en: 'Frequently asked questions', zh: '常见问题' },
    { s: '#faq .section-sub', en: 'Quick answers about Fred Li and 李佛创投笔记.', zh: '关于 Fred Li 与《李佛创投笔记》的快速解答。' },
    { s: '.faq-list details:nth-of-type(1) summary', en: 'Who is Fred Li (李冠乐)?', zh: '李冠乐（Fred Li）是谁？' },
    { s: '.faq-list details:nth-of-type(1) p', en: 'Fred Li (李冠乐, Li Koon Lok) is Managing Director &amp; Head of University Ventures at Gobi Partners, based in Hong Kong. He leads Gobi\u2019s university ventures strategy across the Greater Bay Area — including the Gobi-HKU Fund I with The University of Hong Kong and the Gobi-Redbird Innovation Fund with HKUST — investing in deep tech, biotech and university spin-offs.', zh: '李冠乐（Fred Li，Li Koon Lok）是戈壁创投董事总经理兼大学创投负责人，常驻香港。他领导戈壁在大湾区的大学创投战略——包括与香港大学合作的 Gobi-HKU Fund I 及与香港科技大学合作的 Gobi-Redbird Innovation Fund——投资深科技、生物科技与大学衍生企业。' },
    { s: '.faq-list details:nth-of-type(2) summary', en: 'What is 李佛创投笔记 (Li Fo Venture Notes)?', zh: '《李佛创投笔记》是什么？' },
    { s: '.faq-list details:nth-of-type(2) p', en: '李佛创投笔记 is Fred\u2019s WeChat official account (公众号), publishing Chinese-language deep dives on venture capital, university spin-offs, technology transfer, and the Hong Kong / Greater Bay Area innovation ecosystem.', zh: '《李佛创投笔记》是 Fred 的微信公众号，发表关于风险投资、大学衍生企业、技术转移及香港与大湾区创新生态的中文深度文章。' },
    { s: '.faq-list details:nth-of-type(3) summary', en: 'What does Fred Li invest in?', zh: 'Fred Li 投资哪些领域？' },
    { s: '.faq-list details:nth-of-type(3) p', en: 'Early-stage deep tech: university spin-offs, healthcare &amp; biotechnology, AI and robotics, and greentech — primarily across Hong Kong and the Greater Bay Area.', zh: '早期深科技：大学衍生企业、医疗健康与生物科技、AI 与机器人、绿色科技——主要布局香港与大湾区。' },
    { s: '.faq-list details:nth-of-type(4) summary', en: 'How can I contact Fred Li?', zh: '如何联系 Fred Li？' },
    { s: '.faq-list details:nth-of-type(4) p', en: 'Email <a href="mailto:fred@gobi.vc">fred@gobi.vc</a>, connect on <a href="https://www.linkedin.com/in/fredkli" target="_blank" rel="noopener">LinkedIn</a>, or follow 李佛创投笔记 on WeChat.', zh: '电邮 <a href="mailto:fred@gobi.vc">fred@gobi.vc</a>、在<a href="https://www.linkedin.com/in/fredkli" target="_blank" rel="noopener">领英</a>联系，或在微信关注《李佛创投笔记》。' },

    /* Moments carousel */
    { s: '#moments .kicker', en: '— In the Field —', zh: '— 活动掠影 —' },
    { s: '#moments h2', en: 'Teaching, workshops &amp; ecosystem moments', zh: '授课、工作坊与生态活动瞬间' },
    { s: '#carTag1', en: 'Teaching', zh: '授课' },
    { s: '#carCap1', en: 'Speaking at the PolyU Venture Building Workshop', zh: '于香港理工大学 Venture Building Workshop 主讲' },
    { s: '#carTag2', en: 'Teaching', zh: '授课' },
    { s: '#carCap2', en: 'Guest lecture &ldquo;Deal Maker — About Venture Capital&rdquo; at The University of Hong Kong', zh: '于香港大学客席讲授《Deal Maker — About Venture Capital》' },
    { s: '#carTag3', en: 'Teaching', zh: '授课' },
    { s: '#carCap3', en: 'Investment Connect for RAISe+ — PolyU Entrepreneurship Elite Gathering (Jun 2025)', zh: '香港理工大学「产学研1+计划」（RAISe+）投资对接活动（2025年6月）' },
    { s: '#carTag4', en: 'Sharing', zh: '分享' },
    { s: '#carCap4', en: 'HKSTP Elite Inno Day 2024 — sharing on market expansion &amp; business development', zh: '香港科技园 Elite Inno Day 2024 — 市场拓展与业务发展分享' },
    { s: '#carTag5', en: 'Workshop', zh: '工作坊' },
    { s: '#carCap5', en: 'Sharing venture insights at an investor workshop', zh: '于投资者工作坊分享创投洞察' },
    { s: '#carTag6', en: 'Panel', zh: '座谈' },
    { s: '#carCap6', en: 'Panel at the HKUST Redbird Innovation Fund &times; Gobi Partners fund launch (Oct 2025)', zh: '香港科技大学 Redbird Innovation Fund &times; 戈壁创投基金启动座谈（2025年10月）' },
    { s: '#carTag7', en: 'Ceremony', zh: '典礼' },
    { s: '#carCap7', en: 'Gobi &times; HKU joint fund first close &amp; first batch investment ceremony', zh: 'Gobi &times; HKU 联合基金首关暨首批项目投资仪式（香港大学）' },
    { s: '#carTag8', en: 'Ecosystem', zh: '生态' },
    { s: '#carCap8', en: 'Panelist for the PolyU Micro Fund (2023–24 Cohort 2)', zh: '担任香港理工大学 Micro Fund 评审（2023–24 年度第二期）' },
    { s: '#carTag9', en: 'Ecosystem', zh: '生态' },
    { s: '#carCap9', en: 'SCMP China Conference, Hong Kong (Jul 2025)', zh: '《南华早报》SCMP China Conference（2025年7月 · 香港）' },
    { s: '#carTag10', en: 'Panel', zh: '座谈' },
    { s: '#carCap10', en: 'Roundtable at the Phoenix Bay Area Financial Forum &middot; Finance Summit, Shenzhen (May 2026)', zh: '2026凤凰湾区财经论坛·金融峰会圆桌对话（深圳）' },
    { s: '#carTag11', en: 'Media', zh: '媒体' },
    { s: '#carCap11', en: 'Guest on RTHK Radio 1&rsquo;s 《投資多面睇》', zh: '香港电台第一台《投资多面睇》节目嘉宾' },

    /* Connect */
    { s: '#connect .kicker', en: '— Follow —', zh: '— 关注 —' },
    { s: '#connect .section-sub', en: 'Bilingual insights on biotech, AI, deep tech and the GBA startup ecosystem.', zh: '以中英双语分享生物科技、AI、深科技与大湾区创业生态的洞察。' },
    { s: '.qr-label', en: 'Scan to follow 李佛创投笔记', zh: '扫码关注《李佛创投笔记》' },
    { s: '.qr-text > p', en: 'Follow my WeChat publication <strong>李佛创投笔记</strong> for first-person notes from the deal table — patient-capital perspectives on deep tech and life sciences in Hong Kong and the Greater Bay Area.', zh: '关注我的微信公众号<strong>《李佛创投笔记》</strong>——来自交易一线的第一视角笔记，以耐心资本的视角解读香港与大湾区的深科技与生命科学。' },
    { s: '#wechatLink', en: 'Open 李佛创投笔记 on WeChat', zh: '在微信打开《李佛创投笔记》' },

    /* Footer */
    { s: '.footer-links a[href*="gobi.vc"]', en: 'Gobi Partners', zh: '戈壁创投' },
    { s: '.footer-links a[href*="linkedin"]', en: 'LinkedIn', zh: '领英' },
    { s: '.footer-links a[href^="mailto"]', en: 'Email', zh: '电邮' },
    { s: '.footer-copy', en: '&copy; <span id="year"></span> Fred Li. All rights reserved. · Last updated: Jul 15, 2026', zh: '&copy; <span id="year"></span> 李冠乐 Fred Li · 版权所有 · 最后更新：2026年7月15日' }
  ];

  function applyLang(lang) {
    if (lang !== 'en' && lang !== 'zh') lang = 'en';
    T.forEach(function (entry) {
      document.querySelectorAll(entry.s).forEach(function (el) {
        el.innerHTML = entry[lang];
      });
    });
    document.documentElement.lang = META[lang].htmlLang;
    document.title = META[lang].title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', META[lang].desc);
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = META[lang].toggleLabel;
      btn.setAttribute('aria-label', lang === 'en' ? '切换至中文' : 'Switch to English');
    }
    /* Re-fill year (footer innerHTML was replaced) */
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
    try { localStorage.setItem('fl-lang', lang); } catch (e) { /* private mode */ }
    window.__flLang = lang;
  }

  function initLang() {
    var lang = null;
    try { lang = localStorage.getItem('fl-lang'); } catch (e) { /* private mode */ }
    if (lang !== 'en' && lang !== 'zh') {
      var nav = (navigator.language || '').toLowerCase();
      lang = nav.indexOf('zh') === 0 ? 'zh' : 'en';
    }
    applyLang(lang);
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        applyLang(window.__flLang === 'en' ? 'zh' : 'en');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }
})();
