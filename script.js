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
      "nav.proof": "අත්දැකීම්",
      "nav.about": "මා පිළිබඳව",
      "nav.contact": "තොරතුරු",

      "hero.eyebrow": "ශ්‍රී ලංකාවේ ව්‍යවසායකයින් සහ සුළු හා මධ්‍ය පරිමාණ ව්‍යාපාර හිමියන් වෙනුවෙන්",
      "hero.title": "ව්‍යාපාරික දත්ත සහ එදිනෙදා කටයුතු නිවැරදි තීරණ හා නව වර්ධනයක් කරා මෙහෙයවීම.",
      "hero.lead": "ව්‍යාපාරයක දියුණුවට බාධා වන කරුණු හඳුනා ගැනීමටත් ක්‍රියාවලීන් විධිමත් කර නව වෙළෙඳපොළ අවස්ථා වෙත පිවිසීමටත් නිවැරදි දත්ත මත පදනම් වූ වෘත්තීය උපදේශන සේවාවකි.",
      "hero.cta1": "සම්බන්ධ කරගත හැකි තොරතුරු",
      "hero.cta2": "සේවාවන් පිළිබඳ විස්තර",
      "hero.note": "",
      "hero.card.role": "ව්‍යාපාර සහ වෙළෙඳපොළ ව්‍යාප්ති උපදේශක",
      "hero.card.cred1": "විශ්වවිද්‍යාල කථිකාචාර්ය (SLIIT) වසර 10කට වැඩි පළපුරුද්ද",
      "hero.card.cred2": "ව්‍යාපාර අධ්‍යයනපති උපාධිය (කොළඹ විශ්වවිද්‍යාලය)",
      "hero.card.cred3": "ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාව",
      "hero.card.cred4": "තාක්ෂණික සාමාජික (IQSSL) සහ පර්යේෂක",

      "trust.1a": "විශ්වවිද්‍යාල කථිකාචාර්ය", "trust.1b": "SLIIT ආයතනයේ වසර 10කට වැඩි ඉගැන්වීම් පළපුරුද්ද",
      "trust.2a": "පශ්චාත් උපාධි සුදුසුකම්", "trust.2b": "ව්‍යාපාර අධ්‍යයනපති උපාධිය කොළඹ විශ්වවිද්‍යාලය",
      "trust.3a": "වසර 10කට වැඩි ක්ෂේත්‍ර පළපුරුද්ද", "trust.3b": "ඉංජිනේරු හා ව්‍යාපාර ක්ෂේත්‍රයන්හි ජ්‍යෙෂ්ඨ තනතුරු",
      "trust.4a": "දත්ත මත පදනම් වූ", "trust.4b": "සෑම නිර්දේශයක්ම නිවැරදි දත්ත මගින් තහවුරු කෙරේ",

      "problem.title": "ව්‍යාපාරික කටයුතුවලදී බහුලව දැකිය හැකි අභියෝග කිහිපයක්",
      "problem.1": "දවස පුරා කාර්යබහුලව කටයුතු කළද සැබෑ ලෙසම ලාභ උපයා දෙන්නේ කවර භාණ්ඩ හෝ ගනුදෙනුකරුවන්ද යන්න නිශ්චිතව හඳුනා ගැනීමට අපහසු වීම.",
      "problem.2": "ගිණුම් පොත්වල හෝ පරිගණක පද්ධතියේ දත්ත තිබුණද ව්‍යාපාරයේ සැබෑ තත්ත්වය පැහැදිලි වන විට මාසය අවසන් වී කල් ගතවී තිබීම.",
      "problem.3": "ලැබිය යුතු ණය මුදල් දිනෙන් දින ඉහළ යාම සහ ඒවා අයකර ගැනීමට වෙහෙසීම නිසා අලෙවි කටයුතුවලට යොමුවිය යුතු කාලය අපතේ යාම.",
      "problem.4": "නව ප්‍රදේශයකට පිවිසීම හෝ නව භාණ්ඩයක් හඳුන්වා දීම වැනි අවස්ථා පෙනෙන්නට තිබුණද පළමුව ගත යුතු නිවැරදි පියවර කුමක්දැයි තීරණය කිරීමට අපහසු වීම.",
      "problem.5": "ව්‍යාපාරයේ සියලු කටයුතු හිමිකරු මත පමණක් රැඳී පැවතීම නිසා ඔහු නොමැති අවස්ථාවකදී කටයුතු නිසි ලෙස පවත්වාගෙන යාම ගැටලුවක් වීම.",
      "problem.close": "දියුණු වන ඕනෑම ව්‍යාපාරයක් මෙවැනි තත්ත්වයන්ට මුහුණ දෙයි. එම ගැටලු පාඩුවක් බවට පත්වීමට පෙර නිසි පිළියම් යෙදීම සාර්ථක ව්‍යාපාරයක ලක්ෂණයයි.",

      "services.eyebrow": "සැපයෙන සේවාවන්",
      "services.title": "සේවාවන්",
      "services.sub": "ව්‍යාපාරයක් වඩාත් ශක්තිමත් සහ ලාභදායී මට්ටමකට ගෙන ඒම සඳහා ප්‍රධාන අංශ හතරක් යටතේ ප්‍රායෝගික විසඳුම් සම්පාදනය කෙරේ.",
      "svc.deliver": "ලැබෙන ප්‍රතිඵල",
      "svc.1.title": "ව්‍යාපාර විශ්ලේෂණය සහ ක්‍රියාවලි ස්වයංක්‍රීයකරණය",
      "svc.1.body": "ව්‍යාපාරයේ සැබෑ ක්‍රියාකාරීත්වය පරීක්ෂා කර කාලය සහ මුදල් අපතේ යන තැන් හඳුනා ගැනේ. ඉන්පසු ඇණවුම් සහ තොග පාලනය මෙන්ම ණය පාලනය විධිමත් කර එදිනෙදා කටයුතු ස්වයංක්‍රීය කෙරේ.",
      "svc.1.deliver": "ක්‍රියාවලි සැලැස්මක් සහ පියවරෙන් පියවර ක්‍රියාත්මක කළ හැකි ස්වයංක්‍රීයකරණ මාර්ගෝපදේශයක්.",
      "svc.2.title": "වෙළෙඳපොළ ව්‍යාප්තිය සහ බෙදාහැරීමේ ජාලය",
      "svc.2.body": "නව ප්‍රදේශ වෙත පිවිසීම සැලසුම් කිරීම සහ අලෙවි නියෝජිත ජාලය ශක්තිමත් කිරීම සඳහා පිරිවැය හා ප්‍රතිලාභ ගණනය කළ විධිමත් සැලැස්මක් සකස් කෙරේ.",
      "svc.2.deliver": "අලෙවි ඉලක්ක ඇතුළත් වෙළෙඳපොළ ප්‍රවේශ සහ බෙදාහැරීමේ කලාප සැලැස්මක්.",
      "svc.3.title": "අලෙවි සහ දත්ත විශ්ලේෂණය",
      "svc.3.body": "බිල්පත් සහ අලෙවි දත්ත ඇසුරින් වටිනාම ගනුදෙනුකරුවන් කවුරුන්ද සහ වැඩියෙන්ම අලෙවි වන භාණ්ඩ මොනවාද යන්නත් ලාභය අඩුවන තැන් සහ ඊට ගත යුතු පියවරත් පැහැදිලිව හඳුනා ගැනේ.",
      "svc.3.deliver": "අලෙවි හා තොග පාලන දත්ත පුවරුවක් සහ සරල බසින් සැකසූ විශ්ලේෂණ වාර්තාවක්.",
      "svc.4.title": "ශක්‍යතා අධ්‍යයන සහ ව්‍යාපාර සැලසුම්",
      "svc.4.body": "නව ව්‍යාපෘතියකට හෝ ආයෝජනයකට මුදල් යෙදවීමට පෙර එහි ප්‍රතිලාභදායක බව තහවුරු කර ගැනීම සඳහා බැංකුවකට හෝ ආයෝජකයෙකුට ඉදිරිපත් කළ හැකි ව්‍යාපාර සැලසුම් සකස් කෙරේ.",
      "svc.4.deliver": "පූර්ණ ශක්‍යතා අධ්‍යයන වාර්තාවක් සහ විධිමත් ව්‍යාපාර සැලැස්මක්.",

      "strengths.eyebrow": "සුවිශේෂීත්වය",
      "strengths.title": "ප්‍රධාන ශක්තීන්",
      "str.1.t": "පර්යේෂණාත්මක පසුබිම",
      "str.1.b": "විශ්වවිද්‍යාල පර්යේෂකයෙකු ලෙස අනුමාන මත නොරැඳී සැබෑ දත්ත සහ සාධක සොයා තහවුරු කර ගැනීමේ හැකියාව.",
      "str.2.t": "ගැඹුරු දත්ත විශ්ලේෂණය",
      "str.2.b": "අලෙවි සහ මූල්‍ය දත්ත පරීක්ෂා කර බැලූ බැල්මට නොපෙනෙන ව්‍යාපාරික රටා සහ ගත යුතු නිවැරදි තීරණ මතු කර ගැනීම.",
      "str.3.t": "ප්‍රායෝගික පළපුරුද්ද",
      "str.3.b": "වසර දහයකට වැඩි ක්ෂේත්‍ර හා ශාස්ත්‍රීය අත්දැකීම් සමඟ ව්‍යාපාර සඳහා ප්‍රායෝගික දත්ත පද්ධති ගොඩනැගීමේ පළපුරුද්ද.",
      "str.4.t": "ව්‍යාපාර ව්‍යාප්තිය පිළිබඳ දැනුම",
      "str.4.b": "නව වෙළෙඳපොළ වෙත පිවිසීමට සහ බෙදාහැරීමේ ජාල පුළුල් කිරීමට අවශ්‍ය ප්‍රායෝගික උපායමාර්ග සම්පාදනය.",

      "approach.eyebrow": "සරල සහ ප්‍රායෝගික ක්‍රමවේදය",
      "approach.title": "කටයුතු සිදු කෙරෙන ආකාරය",
      "step.1.title": "හඳුනා ගැනීම",
      "step.1.body": "ව්‍යාපාරයේ ස්වභාවය සහ පවතින ගැටලු පිළිබඳව මූලික අවබෝධයක් ලබා ගැනීම.",
      "step.2.title": "ගැටලු විශ්ලේෂණය",
      "step.2.body": "දත්ත සහ මෙහෙයුම් ක්‍රියාවලිය අධ්‍යයනය කර සැබෑ මූලික ගැටලු සාධක සහිතව හඳුනා ගැනීම.",
      "step.3.title": "නිර්දේශ ලබා දීම",
      "step.3.body": "වෙනස් කළ යුතු අංශ සහ ඉන් ලැබෙන ප්‍රතිලාභ පැහැදිලිව දැක්වෙන ප්‍රායෝගික සැලැස්මක් ඉදිරිපත් කිරීම.",
      "step.4.title": "ක්‍රියාත්මක කිරීම සහ ප්‍රතිඵල මැනීම",
      "step.4.body": "නිර්දේශ ක්‍රියාවට නැංවීමට සහාය වීම සහ ඉන් ලැබුණු ප්‍රතිඵල දත්ත මගින් තහවුරු කර ගැනීම.",

      "proof.eyebrow": "වෘත්තීය විශ්වසනීයත්වය",
      "proof.title": "ප්‍රායෝගික අත්දැකීම් සහ සුදුසුකම්",
      "proof.case.title": "මෑතකාලීන ව්‍යාපෘතියක් (දිවයින පුරා ක්‍රියාත්මක බෙදාහැරීමේ ජාලයක්)",
      "proof.case.body": "සිල්ලර වෙළෙඳසැල් සිය ගණනක් ආවරණය වන පරිදි දිවයිනේ දිස්ත්‍රික්ක රැසක ක්‍රියාත්මක වන බෙදාහැරීමේ සමාගමක අලෙවි සහ ණය දත්ත පද්ධතිය මෑතකදී ප්‍රතිසංවිධානය කරන ලදී. ප්‍රවාහන මාර්ග සැලසුම් කිරීම සහ ණය පාලනය සඳහා ස්වයංක්‍රීය ක්‍රමවේදයක් හඳුන්වා දී එදිනෙදා ක්ෂණික තීරණ ගත හැකි දත්ත පුවරු පද්ධතියක් එහිදී ගොඩනගන ලදී.",
      "proof.point.1": "තහවුරු කළ හැකි විශ්වසනීය අලෙවි සහ ණය දත්ත පද්ධතියක්",
      "proof.point.2": "පූර්ණ ක්‍රියාවලි ස්වයංක්‍රීයකරණ සැලැස්මක්",
      "proof.point.3": "එදිනෙදා තීරණ ගැනීම සඳහා කළමනාකරණ දත්ත පුවරු",
      "proof.confidential": "සේවාදායකයින්ගේ සහ ව්‍යාපාරවල සියලු තොරතුරු පූර්ණ රහස්‍යභාවයකින් යුතුව ආරක්ෂා කෙරේ.",
      "proof.cred.title": "ශාස්ත්‍රීය සහ වෘත්තීය පසුබිම",
      "proof.cred.1": "<strong>විශ්වවිද්‍යාල කථිකාචාර්ය</strong> SLIIT ආයතනය (වසර 10කට වැඩි පළපුරුද්ද)",
      "proof.cred.2": "<strong>ව්‍යාපාර අධ්‍යයනපති උපාධිය (MBS)</strong> කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.3": "<strong>ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාව</strong> කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.4": "<strong>පශ්චාත් උපාධි පර්යේෂක</strong> ජාතික හා ජාත්‍යන්තර පර්යේෂණ ප්‍රකාශන රැසක දායකත්වය",
      "proof.cred.5": "<strong>ජ්‍යෙෂ්ඨ ක්ෂේත්‍ර පළපුරුද්ද</strong> මෙහෙයුම් හා පිරිවැය කළමනාකරණ අංශයන්හි අත්දැකීම්",
      "proof.cred.6": "<strong>දත්ත විශ්ලේෂණ වෘත්තිකයෙකු ලෙස</strong> ව්‍යාපාර සඳහා ප්‍රායෝගික පද්ධති නිර්මාණය",

      "proof.pubs.title": "තෝරාගත් පර්යේෂණ සහ ප්‍රකාශන",
      "pub.1": "<em>Applicability of Green Certification Systems for Domestic Construction Projects in Sri Lanka</em> (FARU 2022)",
      "pub.2": "<em>Adoption of 3D Printing Technology in Sri Lanka's Construction Industry</em> (FARU 2022)",
      "pub.3": "<em>Minimizing Concrete Wastage Using Lean Construction Techniques</em> (World Construction Symposium 2018)",
      "pub.4": "IQSSL තාක්ෂණික සැසිවාර (2018 සහ 2020) හා TVET ජාත්‍යන්තර සම්මන්ත්‍රණය (2019) මෙන්ම SICET SLAAS සහ ICSBE සම්මන්ත්‍රණයන්හිදී (2022 සිට 2025) තවත් පර්යේෂණ පත්‍රිකා රැසක් ඉදිරිපත් කර ඇත.",
      "proof.mem": "<strong>වෘත්තීය සාමාජිකත්වයන්</strong> ශ්‍රී ලංකා ප්‍රමාණ සමීක්ෂකයින්ගේ ආයතනයේ (IQSSL) තාක්ෂණික සාමාජික සහ ශ්‍රී ලංකා විද්‍යාභිවර්ධන සංගමයේ (SLAAS) සාමාජික",

      "work.eyebrow": "ප්‍රායෝගික නිදසුන්",
      "work.title": "නිර්මාණය කළ දත්ත විශ්ලේෂණ ආකෘති",
      "work.sub": "ව්‍යාපාරික කටයුතු සඳහා සකස් කළ ඉල්ලුම පුරෝකථනය තොග පාලනය සහ ණය පාලන මෙවලම් කිහිපයක් පහත දැක්වේ. සියලුම සේවාදායක තොරතුරු රහසිගතව සුරැකේ.",
      "work.cap1": "සමුච්චිත ආදායම සහ පුරෝකථන පරාසය මගින් අලෙවි වෙනස්වීම් කල්තියා හඳුනා ගැනීම.",
      "work.cap2": "තොග අවසන් වන දිනය සහ නැවත ඇණවුම් කළ යුතු කාලසීමාව පුරෝකථනය කිරීම.",
      "work.cap3": "නැවත ඇණවුම් කාලසීමාවන් තීරණය කිරීම සඳහා සම්භාවිතා අවස්ථා 2000ක විශ්ලේෂණයක්.",
      "work.cap4": "සාමාන්‍ය දෛනික අලෙවිය සහ තොග ඇණවුම් වෙන්කර හඳුනා ගැනීම.",
      "work.cap5": "නැවත ඇණවුම් ප්‍රමාණයන් තීරණය කිරීම සඳහා එක් එක් භාණ්ඩය අනුව සැකසූ පුරෝකථනයන්.",
      "work.cap6": "නව ගනුදෙනුකරුවන් සහ නැවත පැමිණෙන ගනුදෙනුකරුවන්ගේ දෛනික ඉල්ලුම.",
      "work.cap7": "අලෙවි නියෝජිත පැමිණීම් වාර ගණන සහ බිල්පත් ආදායම අතර සංසන්දනය.",
      "work.cap8": "ලබා දුන් ණය මුදල් සහ නැවත අයකර ගැනීම් පිළිබඳ මාසික ප්‍රගතිය.",

      "why.title": "මෙම සේවාවේ සුවිශේෂී ලක්ෂණ",
      "why.1.t": "දේශීය වෙළෙඳපොළ පිළිබඳ අවබෝධය",
      "why.1.b": "සිංහල හෝ ඉංග්‍රීසි භාෂාවෙන් කටයුතු කළ හැකි අතර මෙරට අලෙවි නියෝජිත ජාල සහ ණය ගනුදෙනු ක්‍රියාත්මක වන ආකාරය පිළිබඳ මනා අවබෝධයක් පවතී.",
      "why.2.t": "අවංක සහ ප්‍රායෝගික නිර්දේශ",
      "why.2.b": "දත්ත මගින් තහවුරු නොවන කරුණු සෘජුවම පෙන්වා දෙන අතර විශ්වාසයෙන් ක්‍රියාත්මක කළ හැකි නිවැරදි නිර්දේශ පමණක් ලබා දේ.",
      "why.3.t": "සරල සහ ප්‍රායෝගික විසඳුම්",
      "why.3.b": "පොතකට පමණක් සීමා වන වාර්තාවක් වෙනුවට ආයතනයේ කාර්ය මණ්ඩලයට පහසුවෙන් ක්‍රියාත්මක කළ හැකි සරල සැලසුම් සකස් කර දේ.",
      "why.4.t": "සුළු හා මධ්‍ය පරිමාණ ව්‍යාපාරවලට ගැළපීම",
      "why.4.b": "විශාල උපදේශන ආයතනවල අධික ගාස්තු නොමැතිව දැරිය හැකි පිරිවැයක් යටතේ ඉහළ වටිනාකමක් ලබා දීමට සැලසුම් කර ඇත.",

      "about.eyebrow": "මා පිළිබඳව",
      "about.title": "ප්‍රමුදිත කූමසාරු (Pramuditha Coomasaru)",
      "about.p1": "වසර දහයකට වැඩි කාලයක් SLIIT ආයතනයේ විශ්වවිද්‍යාල කථිකාචාර්යවරයෙකු ලෙස කටයුතු කරන අතර මෙහෙයුම් හා පිරිවැය කළමනාකරණ ක්ෂේත්‍රයන්හි ජ්‍යෙෂ්ඨ තනතුරු හොබවා ඇත. එම ශාස්ත්‍රීය දැනුම සහ ප්‍රායෝගික ව්‍යාපාරික අත්දැකීම් එක් කරමින් ව්‍යාපාර උපදේශන කටයුතු සිදු කෙරේ.",
      "about.p2": "කොළඹ විශ්වවිද්‍යාලයෙන් ලබාගත් ව්‍යාපාර අධ්‍යයනපති උපාධිය (MBS) සහ ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාවට අමතරව ව්‍යාපාර රැසක් සඳහා ප්‍රායෝගික දත්ත විශ්ලේෂණ සහ ස්වයංක්‍රීයකරණ පද්ධති නිර්මාණය කර ඇත.",
      "about.p3": "ව්‍යාපාරය හොඳින් අවබෝධ කර ගැනීමත් දත්ත මත පමණක් පදනම් වීමත් කාලය හා මුදල් ඉතිරි කරන ප්‍රායෝගික විසඳුමක් ලබා දීමත් මෙහි මූලික ප්‍රතිපත්තියයි.",
      "about.cta": "සම්බන්ධ කරගත හැකි තොරතුරු",

      "contact.eyebrow": "අවශ්‍ය වූ විටෙක",
      "contact.title": "සම්බන්ධ කරගත හැකි තොරතුරු",
      "contact.sub": "ඔබේ ව්‍යාපාරික කටයුත්තක් සඳහා මෙවැනි උපදේශන සේවාවක අවශ්‍යතාව මතු වූ ඕනෑම අවස්ථාවක පහත මාධ්‍යයන් ඔස්සේ සම්බන්ධ විය හැකිය.",
      "contact.wa": "WhatsApp අංකය +94 77 772 8081",
      "contact.or": "අවශ්‍ය විටෙක පහත තොරතුරු සටහන් කර WhatsApp හරහා පණිවිඩයක් යොමු කළ හැකිය",
      "contact.email": "විද්‍යුත් තැපෑල (Email)",
      "form.name": "නම",
      "form.biz": "ව්‍යාපාරයේ නම හෝ ස්වභාවය",
      "form.msg": "කෙටි සටහනක්",
      "form.submit": "පණිවිඩය යොමු කරන්න",

      "footer.role": "ව්‍යාපාර විශ්ලේෂණ සහ වෙළෙඳපොළ ව්‍යාප්ති උපදේශක (ශ්‍රී ලංකාව)",
      "footer.wa": "WhatsApp +94 77 772 8081",
      "footer.copy": "© {year} Pramuditha Coomasaru. සියලුම හිමිකම් ඇවිරිණි.",

      "_waDefault": "ආයුබෝවන් ප්‍රමුදිත. ව්‍යාපාරික කටයුත්තක් සම්බන්ධයෙන් තොරතුරු දැනගැනීමට කැමැත්තෙමි."
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
        lines = ["ආයුබෝවන් ප්‍රමුදිත."];
        if (name) lines.push("නම " + name);
        if (biz) lines.push("ව්‍යාපාරය " + biz);
        lines.push(msg || "ව්‍යාපාරික කටයුත්තක් සම්බන්ධයෙන් තොරතුරු දැනගැනීමට කැමැත්තෙමි.");
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
