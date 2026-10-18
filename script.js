/* =========================================================
   Pramuditha Coomasaru — site interactivity
   - EN / SI language toggle (English default)
   - Mobile navigation
   - WhatsApp links + message-composing form
   ========================================================= */

(function () {
  "use strict";

  var WA_NUMBER = "94777728081"; // +94 77 772 8081

  /* ---------- Translations ---------- */
  var I18N = {
    en: {
      "brand.role": "Business Analysis &amp; Market Expansion Consultant",
      "nav.services": "Services",
      "nav.approach": "How I Work",
      "nav.proof": "Evidence",
      "nav.about": "About",
      "nav.contact": "Contact",

      "hero.eyebrow": "For entrepreneurs, SME owners &amp; growing businesses in Sri Lanka",
      "hero.title": "Turn your business data and daily operations into clear decisions and new growth.",
      "hero.lead": "I help Sri Lankan business owners find what is holding them back, fix and automate the process, and expand into new markets — backed by evidence, not guesswork.",
      "hero.cta1": "For when you need me",
      "hero.cta2": "See how I work",
      "hero.note": "No hard sell. When the time is right, you'll know exactly where to look.",
      "hero.card.role": "Business &amp; Market Expansion Consultant",
      "hero.card.cred1": "University Lecturer at SLIIT — 10+ years teaching",
      "hero.card.cred2": "Master's in Business Studies — University of Colombo",
      "hero.card.cred3": "PG Diploma in Business Management",
      "hero.card.cred4": "Technical Member, IQSSL · Published researcher",

      "trust.1a": "University Lecturer", "trust.1b": "Teaching at SLIIT for 10+ years",
      "trust.2a": "Postgraduate Qualified", "trust.2b": "Master's in Business Studies, Univ. of Colombo",
      "trust.3a": "10+ Years in Industry", "trust.3b": "Senior roles across engineering &amp; business",
      "trust.4a": "Evidence-Based", "trust.4b": "Every recommendation backed by data",

      "problem.title": "Whatever you run, some of this will sound familiar",
      "problem.1": "You're busy from dawn to dusk — yet you can't say for certain which products, outlets or customers are truly making the money.",
      "problem.2": "The numbers sit in a system or a pile of books, but the real picture only becomes clear long after the month has closed.",
      "problem.3": "The money owed to you keeps climbing, and chasing it drains the very people you need out selling and serving customers.",
      "problem.4": "You can sense there's room to grow — a new town, a new product, an online push — but not which move is worth making first.",
      "problem.5": "Too much of the business lives in your own head and a few phone calls — and you quietly wonder what happens the day you step back.",
      "problem.close": "Every growing business meets these quietly. The owners who get ahead are the ones who deal with them before they start to cost.",

      "services.eyebrow": "What I do",
      "services.title": "Services",
      "services.sub": "Four ways I help you run a stronger, more profitable business. Every engagement ends with something practical you can use.",
      "svc.deliver": "You get:",
      "svc.1.title": "Business Analysis &amp; Process Automation",
      "svc.1.body": "I map how your business actually runs, find the bottlenecks that cost you time and money, and redesign the process — order flow, stock, credit control, coordination — and automate the routine parts.",
      "svc.1.deliver": "a process map, a bottleneck report, and a step-by-step automation blueprint.",
      "svc.2.title": "Market Expansion &amp; Distribution",
      "svc.2.body": "Plan your entry into new territories, build or strengthen your dealer and distribution network, and decide where to focus your effort for the best return — not guesswork, but a costed plan.",
      "svc.2.deliver": "a market-entry and route/territory plan with priorities and targets.",
      "svc.3.title": "Sales &amp; Data Analytics",
      "svc.3.body": "Turn your billing, ERP and sales data into clear dashboards and answers: who your best customers are, what is really selling, where margin is leaking, and what to do about it.",
      "svc.3.deliver": "a sales and inventory dashboard plus a plain-language insight report.",
      "svc.4.title": "Feasibility &amp; Business Planning",
      "svc.4.body": "Know whether a project or investment is worth it before you commit. Costing, feasibility and a solid business case you can take to a bank, investor or partner with confidence.",
      "svc.4.deliver": "a feasibility study and a bankable business plan.",

      "strengths.eyebrow": "What sets me apart",
      "strengths.title": "My core strengths",
      "str.1.t": "Strong research background",
      "str.1.b": "A university researcher's rigour — I dig for the real evidence, test it, and never settle for assumptions.",
      "str.2.t": "Deep data analysis",
      "str.2.b": "I turn raw sales, stock and financial data into clear patterns and decisions most owners simply cannot see.",
      "str.3.t": "Proven hands-on experience",
      "str.3.b": "Years across industry and academia, plus real analytics and automation systems built for operating businesses.",
      "str.4.t": "Business expansion expertise",
      "str.4.b": "Practical strategy for entering new markets, growing distribution, and scaling what already works.",

      "approach.eyebrow": "Simple and practical",
      "approach.title": "How I work with you",
      "step.1.title": "Understand",
      "step.1.body": "A free first conversation to understand your business, your goals and what is frustrating you. No cost, no obligation.",
      "step.2.title": "Diagnose",
      "step.2.body": "I study your data and your process and find the real problems — not the symptoms. You see the evidence, not opinions.",
      "step.3.title": "Recommend",
      "step.3.body": "A clear, practical plan in plain language — what to change, in what order, and what it is worth to you.",
      "step.4.title": "Implement &amp; Measure",
      "step.4.body": "I support you through the changes and we track the results, so you know the work actually paid off.",

      "proof.eyebrow": "Why you can trust this work",
      "proof.title": "Evidence, not promises",
      "proof.case.title": "Recent project — island-wide distribution business",
      "proof.case.body": "I recently worked with a distribution company operating across the districts of Sri Lanka through a large field sales and cash-collection network of hundreds of retail shops. I rebuilt how their sales and credit data was collected and verified, designed a process-automation blueprint for route planning, order flow, credit control and cash collection, and built management dashboards that gave same-day visibility instead of waiting days after month end.",
      "proof.point.1": "A verified, traceable sales and credit data pipeline",
      "proof.point.2": "An end-to-end process-automation blueprint",
      "proof.point.3": "Management dashboards for real-time decisions",
      "proof.confidential": "Client details are kept strictly confidential. Your business information is always treated the same way.",
      "proof.cred.title": "Academic &amp; professional grounding",
      "proof.cred.1": "<strong>University Lecturer</strong> — SLIIT, with 10+ years of teaching experience",
      "proof.cred.2": "<strong>Master's in Business Studies</strong> — University of Colombo",
      "proof.cred.3": "<strong>Postgraduate Diploma in Business Management</strong> — University of Colombo",
      "proof.cred.4": "<strong>Postgraduate researcher</strong> — active in peer-reviewed research and symposia",
      "proof.cred.5": "<strong>Senior industry experience</strong> in operations, cost and project management",
      "proof.cred.6": "<strong>Data-driven practitioner</strong> — builds real analytics and automation for operating businesses",

      "proof.pubs.title": "Selected research &amp; publications",
      "pub.1": "<em>Applicability of Green Certification Systems for Domestic Construction Projects in Sri Lanka</em> — FARU Proceedings, 2022",
      "pub.2": "<em>Adoption of 3D Printing Technology in Sri Lanka's Construction Industry</em> — FARU Proceedings, 2022",
      "pub.3": "<em>Minimizing Concrete Wastage Using Lean Construction Techniques</em> — World Construction Symposium, 2018",
      "pub.4": "Further papers presented at IQSSL technical sessions (2018, 2020), the International Research Symposium on TVET (2019), and the SICET, SLASS &amp; ICSBE symposia (2022–2025).",
      "proof.mem": "<strong>Professional memberships:</strong> Technical Member, Institute of Quantity Surveyors Sri Lanka (IQSSL) · Member, Sri Lanka Association for the Advancement of Science (SLAAS)",

      "work.eyebrow": "See the work",
      "work.title": "A look at the analytics I build",
      "work.sub": "Real tools from real engagements — demand forecasting, stock-out prevention, credit control and customer insight. Client identities and sensitive details are always kept confidential.",
      "work.cap1": "Cumulative revenue against a probabilistic forecast band — catching pace and surprises early.",
      "work.cap2": "Stock-depletion curve with a predicted stock-out date and reorder lead time.",
      "work.cap3": "Monte-Carlo demand simulation — 2,000 possible futures with reorder timing.",
      "work.cap4": "Daily demand simulation, separating ordinary sales from bulk orders.",
      "work.cap5": "Per-product demand forecast ranges to guide reorder quantities.",
      "work.cap6": "New vs repeat-customer demand, split day by day.",
      "work.cap7": "Billing-visit frequency against invoiced revenue and a rolling benchmark.",
      "work.cap8": "Credit extended versus repayments, tracked month by month.",

      "why.title": "Why work with me",
      "why.1.t": "I know the local market",
      "why.1.b": "Sri Lankan business realities, in Sinhala or English. I understand how dealer networks, credit and field sales actually work here.",
      "why.2.t": "I won't overpromise",
      "why.2.b": "If the data does not support a claim, I will tell you. You get honest answers you can act on with confidence.",
      "why.3.t": "Practical, not academic",
      "why.3.b": "Clear plans in plain language — something your team can actually put to work, not a report that sits on a shelf.",
      "why.4.t": "Right-sized for SMEs",
      "why.4.b": "Focused engagements that fit a small or growing business — real value without the big-firm price tag.",

      "about.eyebrow": "About",
      "about.title": "Pramuditha Coomasaru",
      "about.p1": "I have taught at SLIIT as a university lecturer for over ten years' worth of academic experience, alongside senior roles in industry across operations, cost and project management. I combine that academic depth with hands-on business practice and a practical, data-first way of working.",
      "about.p2": "Alongside my Master's in Business Studies and Postgraduate Diploma in Business Management from the University of Colombo, I have built real analytics and process-automation systems for operating businesses. That mix — academia, industry and technology — is what I bring to every client.",
      "about.p3": "My approach is simple: understand the business deeply, let the evidence lead, and hand you something practical that makes money or saves time. Clarity before the decision — and growth you can actually measure.",
      "about.cta": "Start a conversation",

      "contact.eyebrow": "When the time comes",
      "contact.title": "You'll know where to find me",
      "contact.sub": "Nothing to decide today. But when a question starts keeping you up at night, a quiet, confidential conversation is where clarity begins — no cost, no obligation.",
      "contact.wa": "Save my WhatsApp — +94 77 772 8081",
      "contact.or": "— or, whenever you're ready, leave a note and it opens WhatsApp with your message —",
      "contact.email": "Prefer email? You'll find me at",
      "form.name": "Your name",
      "form.biz": "Your business / type of business",
      "form.msg": "What's on your mind?",
      "form.submit": "Send it when you're ready",

      "footer.role": "Business Analysis &amp; Market Expansion Consultant · Sri Lanka",
      "footer.wa": "WhatsApp: +94 77 772 8081",
      "footer.copy": "© {year} Pramuditha Coomasaru. All rights reserved.",

      "_waDefault": "Hello Pramuditha, I would like to talk about my business."
    },

    si: {
      "brand.role": "ව්‍යාපාර විශ්ලේෂණ සහ වෙළෙඳපොළ ව්‍යාප්ති උපදේශක",
      "nav.services": "සේවාවන්",
      "nav.approach": "ක්‍රියාපිළිවෙත",
      "nav.proof": "සාධක",
      "nav.about": "මා පිළිබඳව",
      "nav.contact": "සම්බන්ධ වන්න",

      "hero.eyebrow": "ශ්‍රී ලංකාවේ ව්‍යවසායකයින්, සුළු හා මධ්‍ය පරිමාණ ව්‍යාපාර හිමියන් සහ නැගී එන ව්‍යාපාර උදෙසා",
      "hero.title": "ඔබේ ව්‍යාපාරික දත්ත සහ දෛනික මෙහෙයුම්, නිවැරදි තීරණ හා නව වර්ධනයක් කරා මෙහෙයවන්න.",
      "hero.lead": "ව්‍යාපාරයේ ප්‍රගතියට හරස් වන බාධක හඳුනාගෙන, ක්‍රියාවලීන් විධිමත් හා ස්වයංක්‍රීය කරමින්, නව වෙළෙඳපොළ අවස්ථා ජය ගැනීමට — හුදු අනුමාන මත නොව, තහවුරු කළ දත්ත හා සාධක මත පදනම්ව — මම ශ්‍රී ලාංකික ව්‍යාපාර හිමියන්ට මඟ පෙන්වමි.",
      "hero.cta1": "ඔබට මාගේ සහාය අවශ්‍ය වූ විට",
      "hero.cta2": "මාගේ ක්‍රියාපිළිවෙත",
      "hero.note": "අනවශ්‍ය බලපෑම් නොමැත. සුදුසුම අවස්ථාව එළඹි විට, මා සම්බන්ධ කරගත හැකි තැන ඔබ දනී.",
      "hero.card.role": "ව්‍යාපාර සහ වෙළෙඳපොළ ව්‍යාප්ති උපදේශක",
      "hero.card.cred1": "විශ්වවිද්‍යාල කථිකාචාර්ය (SLIIT) — වසර 10කට වැඩි අධ්‍යයන පළපුරුද්ද",
      "hero.card.cred2": "ව්‍යාපාර අධ්‍යයනපති උපාධිය (MBS) — කොළඹ විශ්වවිද්‍යාලය",
      "hero.card.cred3": "ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාව — කොළඹ විශ්වවිද්‍යාලය",
      "hero.card.cred4": "තාක්ෂණික සාමාජික (IQSSL) · පර්යේෂණ ග්‍රන්ථ හා පත්‍රිකා කර්තෘ",

      "trust.1a": "විශ්වවිද්‍යාල කථිකාචාර්ය", "trust.1b": "SLIIT ආයතනයේ වසර 10කට වැඩි දේශන පළපුරුද්ද",
      "trust.2a": "පශ්චාත් උපාධි සුදුසුකම්", "trust.2b": "ව්‍යාපාර අධ්‍යයනපති උපාධිය, කොළඹ විශ්වවිද්‍යාලය",
      "trust.3a": "වසර 10කට වැඩි ක්ෂේත්‍ර පළපුරුද්ද", "trust.3b": "ඉංජිනේරු හා ව්‍යාපාර ක්ෂේත්‍රයන්හි ජ්‍යෙෂ්ඨ තනතුරු",
      "trust.4a": "දත්ත හා සාධක මත පදනම් වූ", "trust.4b": "සෑම නිර්දේශයක්ම නිවැරදි දත්ත මගින් තහවුරු කෙරේ",

      "problem.title": "ඔබ කවර ව්‍යාපාරයක නිරත වුවද, මින් කරුණු කිහිපයක් හෝ ඔබට සමීප වනු ඇත",
      "problem.1": "අලුයම සිට රාත්‍රිය වන තුරු ඔබ වෙහෙස වී වැඩ කළද — සැබෑ ලෙසම ලාභ උපයා දෙන්නේ කවර භාණ්ඩද, කවර අලෙවිසැල්ද, නැතහොත් කවර ගනුදෙනුකරුවන්ද යන්න නිශ්චිතව පැවසීමට ඔබට අපහසුය.",
      "problem.2": "ගිණුම් පොත්වල හෝ පරිගණක පද්ධතියක දත්ත රැස්ව තිබුණද, ව්‍යාපාරයේ සැබෑ තත්ත්වය පැහැදිලි වන්නේ මාසය අවසන් වී බොහෝ කලක් ගතවූ පසුවය.",
      "problem.3": "අයවිය යුතු ණය මුදල් දිනෙන් දින ඉහළ යන අතර, ඒවා අයකර ගැනීමට වෙහෙසීම නිසා අලෙවි සහ පාරිභෝගික සේවා කටයුතුවලට යොමුවිය යුතු ඔබේ කාර්ය මණ්ඩලයේ වටිනා කාලය අපතේ යයි.",
      "problem.4": "නව ප්‍රදේශයකට පිවිසීම, නව භාණ්ඩයක් හඳුන්වා දීම හෝ අන්තර්ජාල අලෙවිය වැනි ව්‍යාපාරය පුළුල් කිරීමේ අවස්ථා පෙනෙන්නට තිබුණද — පළමුව ගත යුතු වඩාත්ම ප්‍රතිඵලදායක පියවර කුමක්දැයි තීරණය කිරීම අපහසුය.",
      "problem.5": "ව්‍යාපාරයේ සියලු තීරණ ඔබේ මතකය සහ දුරකථන ඇමතුම් කිහිපයක් මත පමණක් රැඳී පවතින අතර, ඔබ මඳකට ඉවත් වුවහොත් ව්‍යාපාරයට කුමක් සිදුවේද යන ගැටලුව ඔබේ සිත තුළ නිරන්තරයෙන් පවතී.",
      "problem.close": "දියුණු වන ඕනෑම ව්‍යාපාරයක් මෙවැනි අභියෝගයන්ට මුහුණ දෙයි. සාර්ථකත්වය කරා ඉදිරියට යන්නේ, එම ගැටලු ව්‍යාපාරයට පාඩුවක් වීමට පෙර නිසි පිළියම් යොදන ව්‍යවසායකයින් පමණි.",

      "services.eyebrow": "මා සපයන සේවාවන්",
      "services.title": "සේවාවන්",
      "services.sub": "ඔබේ ව්‍යාපාරය වඩාත් ශක්තිමත් හා ලාභදායී මට්ටමකට ගෙන ඒම සඳහා මා දායක වන ප්‍රධාන අංශ හතරකි. සෑම ව්‍යාපෘතියක්ම අවසන් වන්නේ ඔබට ප්‍රායෝගිකව ක්‍රියාවට නැංවිය හැකි නිශ්චිත විසඳුමක් සමඟිනි.",
      "svc.deliver": "ඔබට හිමිවන ප්‍රතිඵල:",
      "svc.1.title": "ව්‍යාපාර විශ්ලේෂණය සහ ක්‍රියාවලි ස්වයංක්‍රීයකරණය",
      "svc.1.body": "ඔබේ ව්‍යාපාරයේ සැබෑ ක්‍රියාකාරීත්වය විමර්ශනය කර, කාලය හා මුදල් අපතේ යවන අවහිරතා හඳුනා ගනිමි. ඉන්පසු ඇණවුම් කළමනාකරණය, තොග පාලනය, ණය පාලනය සහ අභ්‍යන්තර සම්බන්ධීකරණය විධිමත් ලෙස ප්‍රතිසංවිධානය කර, එදිනෙදා කාර්යයන් ස්වයංක්‍රීය කරනු ලැබේ.",
      "svc.1.deliver": "ක්‍රියාවලි සැලැස්මක්, මෙහෙයුම් අවහිරතා වාර්තාවක් සහ පියවරෙන් පියවර ක්‍රියාත්මක කළ හැකි ස්වයංක්‍රීයකරණ මාර්ගෝපදේශයක්.",
      "svc.2.title": "වෙළෙඳපොළ ව්‍යාප්තිය සහ බෙදාහැරීමේ ජාල කළමනාකරණය",
      "svc.2.body": "නව වෙළෙඳ කලාප වෙත පිවිසීම සැලසුම් කිරීම, අලෙවි නියෝජිත සහ බෙදාහැරීමේ ජාලය ශක්තිමත් කිරීම සහ ඉහළම ප්‍රතිලාභ ලැබෙන අංශ වෙත සම්පත් යොමු කිරීම — හුදු අනුමාන මත නොව, පිරිවැය හා ප්‍රතිලාභ ගණනය කළ විධිමත් සැලැස්මක් මගින් සිදු කෙරේ.",
      "svc.2.deliver": "ප්‍රමුඛතා සහ අලෙවි ඉලක්ක ඇතුළත් වෙළෙඳපොළ ප්‍රවේශ හා බෙදාහැරීමේ කලාප සැලැස්මක්.",
      "svc.3.title": "අලෙවි සහ දත්ත විශ්ලේෂණය",
      "svc.3.body": "ඔබේ බිල්පත්, ERP පද්ධති සහ අලෙවි දත්ත ඇසුරින් පැහැදිලි කළමනාකරණ දත්ත පුවරු (Dashboards) සකස් කර දෙමි. ඔබේ වටිනාම ගනුදෙනුකරුවන් කවුරුන්ද, වැඩියෙන්ම අලෙවි වන භාණ්ඩ මොනවාද, ලාභ ආන්තිකය ගිලිහී යන්නේ කොතැනින්ද සහ ඊට ගත යුතු පියවර මින් පැහැදිලි කෙරේ.",
      "svc.3.deliver": "අලෙවි හා තොග පාලන දත්ත පුවරුවක් (Dashboard) සහ සරල බසින් සැකසූ විශ්ලේෂණ වාර්තාවක්.",
      "svc.4.title": "ශක්‍යතා අධ්‍යයන සහ ව්‍යාපාර සැලසුම් සම්පාදනය",
      "svc.4.body": "නව ව්‍යාපෘතියකට හෝ ආයෝජනයකට මුදල් යෙදවීමට පෙර එහි සැබෑ ප්‍රතිලාභදායක බව තහවුරු කරගන්න. බැංකුවකට, ආයෝජකයෙකුට හෝ ව්‍යාපාරික හවුල්කරුවෙකුට පූර්ණ විශ්වාසයෙන් යුතුව ඉදිරිපත් කළ හැකි පිරිවැය ගණනය කිරීම් සහ ශක්‍යතා වාර්තා සකස් කර දෙනු ලැබේ.",
      "svc.4.deliver": "පූර්ණ ශක්‍යතා අධ්‍යයන වාර්තාවක් සහ බැංකු හෝ මූල්‍ය ආයතන පිළිගන්නා මට්ටමේ ව්‍යාපාර සැලැස්මක්.",

      "strengths.eyebrow": "මාගේ සුවිශේෂීත්වය",
      "strengths.title": "මා සතු ප්‍රධාන ශක්තීන්",
      "str.1.t": "ප්‍රබල පර්යේෂණ පසුබිම",
      "str.1.b": "විශ්වවිද්‍යාල පර්යේෂකයෙකු සතු විද්‍යාත්මක විමර්ශනශීලීත්වය — හුදු උපකල්පන මත නොරැඳී, සැබෑ සාධක සොයා ඒවා තහවුරු කර ගැනීමේ හැකියාව.",
      "str.2.t": "ගැඹුරු දත්ත විශ්ලේෂණය",
      "str.2.b": "අලෙවි, තොග සහ මූල්‍ය දත්ත ගැඹුරින් විශ්ලේෂණය කර, බැලූ බැල්මට නොපෙනෙන ව්‍යාපාරික රටා සහ ගත යුතු නිවැරදි තීරණ මතු කර ගැනීම.",
      "str.3.t": "තහවුරු කළ ප්‍රායෝගික පළපුරුද්ද",
      "str.3.b": "කර්මාන්ත හා ශාස්ත්‍රීය ක්ෂේත්‍රයන්හි දශකයකට වැඩි අත්දැකීම් සමඟින්, සක්‍රීය ව්‍යාපාර උදෙසා දත්ත විශ්ලේෂණ හා ස්වයංක්‍රීයකරණ පද්ධති ගොඩනැගීමේ ප්‍රායෝගික පළපුරුද්ද.",
      "str.4.t": "ව්‍යාපාර ව්‍යාප්තිය පිළිබඳ විශේෂඥතාව",
      "str.4.b": "නව වෙළෙඳපොළ වෙත පිවිසීම, බෙදාහැරීමේ ජාල පුළුල් කිරීම සහ පවතින ව්‍යාපාරික කටයුතු වඩාත් ඉහළ මට්ටමකට වර්ධනය කිරීම සඳහා වන ප්‍රායෝගික උපායමාර්ග.",

      "approach.eyebrow": "සරල සහ ප්‍රායෝගික ක්‍රමවේදය",
      "approach.title": "මා ඔබ සමඟ කටයුතු කරන ආකාරය",
      "step.1.title": "හඳුනා ගැනීම",
      "step.1.body": "ඔබේ ව්‍යාපාරය, අරමුණු සහ ඔබ මුහුණ දෙන ගැටලු පිළිබඳව අවබෝධ කර ගැනීම සඳහා පැවැත්වෙන නොමිලේ මූලික සාකච්ඡාව. මේ සඳහා කිසිදු ගාස්තුවක් හෝ බැඳීමක් නොමැත.",
      "step.2.title": "ගැටලු විශ්ලේෂණය",
      "step.2.body": "ඔබේ දත්ත සහ මෙහෙයුම් ක්‍රියාවලිය ගැඹුරින් අධ්‍යයනය කර, මතුපිටින් පෙනෙන ලක්ෂණ වෙනුවට සැබෑ මූලික ගැටලු හඳුනා ගනිමි. පෞද්ගලික මතවාද වෙනුවට තහවුරු කළ සාධක ඔබ වෙත ඉදිරිපත් කෙරේ.",
      "step.3.title": "නිර්දේශ ඉදිරිපත් කිරීම",
      "step.3.body": "වෙනස් කළ යුතු අංශ, ඒවා ක්‍රියාත්මක කළ යුතු අනුපිළිවෙළ සහ ඉන් ඔබේ ව්‍යාපාරයට ලැබෙන ප්‍රතිලාභ පැහැදිලිව හා සරල බසින් දැක්වෙන ප්‍රායෝගික සැලැස්මක් ලබා දීම.",
      "step.4.title": "ක්‍රියාත්මක කිරීම සහ ප්‍රතිඵල මැන බැලීම",
      "step.4.body": "නිර්දේශිත වෙනස්කම් ප්‍රායෝගිකව ක්‍රියාවට නැංවීමට මා ඔබට සහාය වන අතර, එහි ප්‍රගතිය හා ලැබුණු සැබෑ ප්‍රතිඵල දත්ත මගින් තහවුරු කර ගැනීමට කටයුතු කරමු.",

      "proof.eyebrow": "මාගේ සේවාව පිළිබඳව ඔබට තැබිය හැකි විශ්වාසය",
      "proof.title": "හුදු පොරොන්දු නොව — ප්‍රායෝගික සාධක",
      "proof.case.title": "මෑතකාලීන ව්‍යාපෘතියක් — දිවයින පුරා ක්‍රියාත්මක බෙදාහැරීමේ ජාලයක්",
      "proof.case.body": "සිල්ලර වෙළෙඳසැල් සිය ගණනක් ආවරණය වන පරිදි දිවයිනේ දිස්ත්‍රික්ක රැසක අලෙවි සහ මුදල් අයකර ගැනීමේ ජාලයක් පවත්වාගෙන යන ප්‍රමුඛ බෙදාහැරීමේ සමාගමක් සමඟ මම මෑතකදී කටයුතු කළෙමි. එහිදී ඔවුන්ගේ අලෙවි සහ ණය දත්ත රැස් කිරීමේ හා තහවුරු කිරීමේ ක්‍රමවේදය මුල සිටම ප්‍රතිසංවිධානය කළෙමි. එමෙන්ම ප්‍රවාහන මාර්ග සැලසුම් කිරීම, ඇණවුම් කළමනාකරණය, ණය පාලනය සහ මුදල් අයකර ගැනීම සඳහා ස්වයංක්‍රීය ක්‍රියාවලි සැලැස්මක් හඳුන්වා දුන් අතර, මාසය අවසන් වී දින ගණනක් ගතවන තුරු බලා නොසිට එදිනෙදා ක්ෂණික තීරණ ගත හැකි කළමනාකරණ දත්ත පුවරු (Dashboards) පද්ධතියක්ද නිර්මාණය කළෙමි.",
      "proof.point.1": "තහවුරු කළ හැකි, විශ්වසනීය අලෙවි සහ ණය දත්ත පද්ධතියක්",
      "proof.point.2": "මුල සිට අග දක්වා විහිදුණු පූර්ණ ක්‍රියාවලි ස්වයංක්‍රීයකරණ සැලැස්මක්",
      "proof.point.3": "එදිනෙදා ක්ෂණික තීරණ ගැනීම සඳහා කළමනාකරණ දත්ත පුවරු (Management Dashboards)",
      "proof.confidential": "සේවාදායකයින්ගේ තොරතුරු පූර්ණ රහස්‍යභාවයකින් යුතුව ආරක්ෂා කෙරේ. ඔබේ ව්‍යාපාරික තොරතුරු සම්බන්ධයෙන්ද එම උපරිම රහස්‍යභාවය එලෙසම සහතික කරමි.",
      "proof.cred.title": "ශාස්ත්‍රීය සහ වෘත්තීය පසුබිම",
      "proof.cred.1": "<strong>විශ්වවිද්‍යාල කථිකාචාර්ය</strong> — SLIIT ආයතනය (වසර 10කට වැඩි අධ්‍යයන පළපුරුද්ද)",
      "proof.cred.2": "<strong>ව්‍යාපාර අධ්‍යයනපති උපාධිය (MBS)</strong> — කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.3": "<strong>ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාව</strong> — කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.4": "<strong>පශ්චාත් උපාධි පර්යේෂක</strong> — ජාතික හා ජාත්‍යන්තර පර්යේෂණ සම්මන්ත්‍රණ සහ ප්‍රකාශන රැසක දායකත්වය",
      "proof.cred.5": "<strong>ජ්‍යෙෂ්ඨ ක්ෂේත්‍ර පළපුරුද්ද</strong> — මෙහෙයුම්, පිරිවැය සහ ව්‍යාපෘති කළමනාකරණ අංශයන්හි වසර ගණනාවක අත්දැකීම්",
      "proof.cred.6": "<strong>දත්ත විශ්ලේෂණ වෘත්තිකයෙකු ලෙස</strong> — සක්‍රීය ව්‍යාපාර සඳහා ප්‍රායෝගික දත්ත විශ්ලේෂණ හා ස්වයංක්‍රීයකරණ පද්ධති නිර්මාණය",

      "proof.pubs.title": "තෝරාගත් පර්යේෂණ සහ ප්‍රකාශන",
      "pub.1": "<em>Applicability of Green Certification Systems for Domestic Construction Projects in Sri Lanka</em> — FARU පර්යේෂණ සම්මන්ත්‍රණ ප්‍රකාශනය, 2022",
      "pub.2": "<em>Adoption of 3D Printing Technology in Sri Lanka's Construction Industry</em> — FARU පර්යේෂණ සම්මන්ත්‍රණ ප්‍රකාශනය, 2022",
      "pub.3": "<em>Minimizing Concrete Wastage Using Lean Construction Techniques</em> — ලෝක ඉදිකිරීම් සම්මන්ත්‍රණය (World Construction Symposium), 2018",
      "pub.4": "IQSSL තාක්ෂණික සැසිවාර (2018, 2020), TVET පිළිබඳ ජාත්‍යන්තර පර්යේෂණ සම්මන්ත්‍රණය (2019) මෙන්ම SICET, SLAAS සහ ICSBE යන විද්වත් සම්මන්ත්‍රණයන්හිදී (2022–2025) තවත් පර්යේෂණ පත්‍රිකා රැසක් ඉදිරිපත් කර ඇත.",
      "proof.mem": "<strong>වෘත්තීය සාමාජිකත්වයන්:</strong> ශ්‍රී ලංකා ප්‍රමාණ සමීක්ෂකයින්ගේ ආයතනයේ (IQSSL) තාක්ෂණික සාමාජික · ශ්‍රී ලංකා විද්‍යාභිවර්ධන සංගමයේ (SLAAS) සාමාජික",

      "work.eyebrow": "ප්‍රායෝගික නිදසුන්",
      "work.title": "මා විසින් නිර්මාණය කළ දත්ත විශ්ලේෂණ ආකෘති",
      "work.sub": "සැබෑ ව්‍යාපාරික ව්‍යාපෘති සඳහා සකස් කළ විශ්ලේෂණ මෙවලම් — ඉල්ලුම පුරෝකථනය, තොග අවසන් වීම් කල්තියා හඳුනා ගැනීම, ණය පාලනය සහ පාරිභෝගික රටා විශ්ලේෂණය. සේවාදායකයින්ගේ අනන්‍යතාව සහ සංවේදී දත්ත සැමවිටම රහසිගතව සුරැකේ.",
      "work.cap1": "සමුච්චිත ආදායම සහ පුරෝකථන පරාසය — අලෙවි වර්ධන වේගය සහ අනපේක්ෂිත වෙනස්වීම් කල්තියා හඳුනා ගැනීම.",
      "work.cap2": "තොග අවසන් වීමේ වක්‍රය — තොග අවසන් වන දිනය සහ නැවත ඇණවුම් කළ යුතු කාලසීමාව පුරෝකථනය කිරීම.",
      "work.cap3": "මොන්ටි-කාලෝ (Monte-Carlo) ඉල්ලුම් ආකෘතිය — නැවත ඇණවුම් කාලසීමාවන් තීරණය කිරීම සඳහා සම්භාවිතා අවස්ථා 2,000ක විශ්ලේෂණයක්.",
      "work.cap4": "දෛනික ඉල්ලුම් විශ්ලේෂණය — සාමාන්‍ය දෛනික අලෙවිය සහ තොග ඇණවුම් වෙන්කර හඳුනා ගැනීම.",
      "work.cap5": "නැවත ඇණවුම් ප්‍රමාණයන් තීරණය කිරීම සඳහා එක් එක් භාණ්ඩය අනුව සැකසූ ඉල්ලුම් පුරෝකථන පරාසයන්.",
      "work.cap6": "නව ගනුදෙනුකරුවන් සහ නැවත පැමිණෙන ගනුදෙනුකරුවන්ගේ දෛනික ඉල්ලුම් විශ්ලේෂණය.",
      "work.cap7": "අලෙවි නියෝජිත පැමිණීම් වාර ගණන, බිල්පත් ආදායම සහ සාමාන්‍ය අගයන් අතර සංසන්දනය.",
      "work.cap8": "ලබා දුන් ණය මුදල් සහ නැවත අයකර ගැනීම් පිළිබඳ මාසික ප්‍රගති විශ්ලේෂණය.",

      "why.title": "ඔබ මාගේ සේවාව තෝරාගත යුත්තේ ඇයි?",
      "why.1.t": "දේශීය වෙළෙඳපොළ පිළිබඳ මනා අවබෝධය",
      "why.1.b": "සිංහල හෝ ඉංග්‍රීසි භාෂාවෙන් කටයුතු කරමින්, මෙරට ව්‍යාපාරික පරිසරයේ සැබෑ ස්වභාවය මම හොඳින් හඳුනමි. අලෙවි නියෝජිත ජාල, ණය ගනුදෙනු සහ ක්ෂේත්‍ර අලෙවි කටයුතු ප්‍රායෝගිකව සිදුවන ආකාරය පිළිබඳව මට පැහැදිලි අවබෝධයක් ඇත.",
      "why.2.t": "ප්‍රායෝගික සහ අවංක නිර්දේශ",
      "why.2.b": "යම් අදහසක් දත්ත මගින් තහවුරු නොවන්නේ නම්, ඒ බව මම ඔබට සෘජුවම පෙන්වා දෙමි. ඔබට ලැබෙන්නේ පූර්ණ විශ්වාසයෙන් යුතුව ක්‍රියාවට නැංවිය හැකි, සත්‍ය දත්ත මත පදනම් වූ නිර්දේශ පමණි.",
      "why.3.t": "න්‍යායාත්මක නොවන, ප්‍රායෝගික විසඳුම්",
      "why.3.b": "ලිපිගොනුවකට පමණක් සීමා වන වාර්තාවක් වෙනුවට, ඔබේ කාර්ය මණ්ඩලයට පහසුවෙන් තේරුම් ගෙන එදිනෙදා ක්‍රියාත්මක කළ හැකි සරල හා ප්‍රායෝගික සැලසුම් මම සකස් කර දෙමි.",
      "why.4.t": "සුළු හා මධ්‍ය පරිමාණ ව්‍යාපාර සඳහාම ගැළපෙන සේවාව",
      "why.4.b": "මහා පරිමාණ උපදේශන ආයතනවල අධික ගාස්තු නොමැතිව, නැගී එන ව්‍යාපාරයකට දැරිය හැකි පිරිවැයක් යටතේ ඉහළම ව්‍යාපාරික වටිනාකමක් අත්කර දීමට මාගේ සේවාවන් සැලසුම් කර ඇත.",

      "about.eyebrow": "මා පිළිබඳව",
      "about.title": "ප්‍රමුදිත කූමසාරු (Pramuditha Coomasaru)",
      "about.p1": "වසර දහයකට වැඩි කාලයක් SLIIT ආයතනයේ විශ්වවිද්‍යාල කථිකාචාර්යවරයෙකු ලෙස කටයුතු කරන මම, මෙහෙයුම්, පිරිවැය සහ ව්‍යාපෘති කළමනාකරණ ක්ෂේත්‍රයන්හි ජ්‍යෙෂ්ඨ තනතුරු හොබවා ඇත්තෙමි. එම ශාස්ත්‍රීය දැනුමත්, ප්‍රායෝගික ව්‍යාපාරික අත්දැකීමුත්, දත්ත මූලික කරගත් විශ්ලේෂණ ක්‍රමවේදයත් මනාව සංයෝජනය කරමින් මම ව්‍යාපාර උපදේශනයේ නිරත වෙමි.",
      "about.p2": "කොළඹ විශ්වවිද්‍යාලයෙන් ලබාගත් ව්‍යාපාර අධ්‍යයනපති උපාධිය (MBS) සහ ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාවට අමතරව, දැනට ක්‍රියාත්මක ව්‍යාපාර රැසක් සඳහා ප්‍රායෝගික දත්ත විශ්ලේෂණ සහ ක්‍රියාවලි ස්වයංක්‍රීයකරණ පද්ධති මා විසින් නිර්මාණය කර ඇත. ශාස්ත්‍රීය දැනුම, ක්ෂේත්‍ර පළපුරුද්ද සහ නවීන තාක්ෂණය යන අංශ ත්‍රිත්වයේම සුසංයෝගය මාගේ සෑම සේවාදායකයෙකුටම හිමි වේ.",
      "about.p3": "මාගේ ප්‍රතිපත්තිය ඉතා සරලය: ව්‍යාපාරය ගැඹුරින් අවබෝධ කර ගැනීම, දත්ත හා සාධක මත පමණක් පදනම් වීම සහ කාලය ඉතිරි කරන හෝ ආදායම ඉහළ නංවන ප්‍රායෝගික විසඳුමක් ඔබ අතට පත් කිරීමයි. එනම්, තීරණ ගැනීමට පෙර නිවැරදි අවබෝධයත්, මැන බැලිය හැකි සැබෑ වර්ධනයත් තහවුරු කිරීමයි.",
      "about.cta": "සාකච්ඡාවක් අරඹමු",

      "contact.eyebrow": "අවශ්‍යතාව මතු වූ විට",
      "contact.title": "මා සම්බන්ධ කරගත හැකි ආකාරය",
      "contact.sub": "අදම තීරණයක් ගැනීමට ඉක්මන් විය යුතු නැත. එහෙත් ඔබේ ව්‍යාපාරයේ යම් ගැටලුවක් පිළිබඳව ගැඹුරින් සිතන්නට වූ දිනෙක, රහස්‍ය හා සුහද සාකච්ඡාවකින් නිවැරදි මාවත විවර කරගත හැකිය — මූලික සාකච්ඡාව සඳහා කිසිදු ගාස්තුවක් හෝ බැඳීමක් නොමැත.",
      "contact.wa": "මාගේ WhatsApp අංකය සුරකින්න — +94 77 772 8081",
      "contact.or": "— නැතහොත්, ඔබට පහසු අවස්ථාවක පහත තොරතුරු සටහන් කර WhatsApp හරහා පණිවිඩයක් යොමු කරන්න —",
      "contact.email": "විද්‍යුත් තැපෑල (Email) මගින් සම්බන්ධ වීමට:",
      "form.name": "ඔබේ නම",
      "form.biz": "ඔබේ ව්‍යාපාරයේ නම / ස්වභාවය",
      "form.msg": "සාකච්ඡා කිරීමට අපේක්ෂා කරන කරුණ",
      "form.submit": "පණිවිඩය යොමු කරන්න",

      "footer.role": "ව්‍යාපාර විශ්ලේෂණ සහ වෙළෙඳපොළ ව්‍යාප්ති උපදේශක · ශ්‍රී ලංකාව",
      "footer.wa": "WhatsApp: +94 77 772 8081",
      "footer.copy": "© {year} Pramuditha Coomasaru. සියලුම හිමිකම් ඇවිරිණි.",

      "_waDefault": "ආයුබෝවන් ප්‍රමුදිත, මාගේ ව්‍යාපාරික කටයුත්තක් සම්බන්ධයෙන් ඔබ සමඟ සාකච්ඡා කිරීමට කැමැත්තෙමි."
    }
  };

  var currentLang = "en";
  var year = new Date().getFullYear();

  function waLink(text) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = dict[key];
      if (val == null) return;
      val = val.replace("{year}", year);
      el.innerHTML = val;
    });

    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = lang === "en" ? "සිංහල" : "English";

    var def = waLink(dict._waDefault);
    ["whatsappDirect", "footerWhatsapp"].forEach(function (id) {
      var a = document.getElementById(id);
      if (a) a.setAttribute("href", def);
    });

    try { localStorage.setItem("pc_lang", lang); } catch (e) {}
  }

  function init() {
    var saved = "en";
    try { saved = localStorage.getItem("pc_lang") || "en"; } catch (e) {}
    applyLang(saved === "si" ? "si" : "en");

    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.addEventListener("click", function () {
      applyLang(currentLang === "en" ? "si" : "en");
    });

    var burger = document.getElementById("navBurger");
    var nav = document.getElementById("mainNav");
    if (burger && nav) {
      burger.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Header shadow on scroll
    var header = document.querySelector(".site-header");
    if (header) {
      var onScroll = function () {
        if (window.scrollY > 8) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // Scroll-reveal animations (progressive, respects reduced motion)
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var revealSel = ".eyebrow.center, .section-title, .section-sub.center, .problem-list li, " +
      ".problem-close, .card, .step, .strength, .why-item, .proof-case, .proof-credibility, " +
      ".proof-pubs, .shot, .about-photo, .about-copy, .contact-form, .contact-email";
    var revealEls = Array.prototype.slice.call(document.querySelectorAll(revealSel));

    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("in"); });
    } else {
      // stagger items that share a grid parent
      revealEls.forEach(function (el) {
        var sibs = Array.prototype.filter.call(el.parentNode.children, function (c) {
          return c.className === el.className || (c.classList && c.classList.contains(el.classList[0]));
        });
        var idx = sibs.indexOf(el);
        if (idx > 0 && idx < 8) el.style.transitionDelay = (idx * 80) + "ms";
      });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      revealEls.forEach(function (el) { io.observe(el); });
    }

    // Lightbox for work-gallery charts
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");
    var lightboxClose = document.getElementById("lightboxClose");
    if (lightbox && lightboxImg) {
      var closeLightbox = function () {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImg.src = "";
      };
      document.querySelectorAll(".shot img").forEach(function (img) {
        img.addEventListener("click", function () {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || "";
          lightbox.classList.add("open");
          lightbox.setAttribute("aria-hidden", "false");
        });
      });
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
      });
      if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
      });
    }

    var form = document.getElementById("waForm");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (document.getElementById("cName").value || "").trim();
      var biz = (document.getElementById("cBiz").value || "").trim();
      var msg = (document.getElementById("cMsg").value || "").trim();

      var lines;
      if (currentLang === "si") {
        lines = ["ආයුබෝවන් ප්‍රමුදිත,"];
        if (name) lines.push("මගේ නම: " + name);
        if (biz) lines.push("ව්‍යාපාරය: " + biz);
        lines.push(msg || "මාගේ ව්‍යාපාරික කටයුත්තක් සම්බන්ධයෙන් ඔබ සමඟ සාකච්ඡා කිරීමට කැමැත්තෙමි.");
      } else {
        lines = ["Hello Pramuditha,"];
        if (name) lines.push("My name is " + name + ".");
        if (biz) lines.push("Business: " + biz);
        lines.push(msg || "I would like to talk about my business.");
      }
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
