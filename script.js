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
      "hero.cta1": "Talk to me on WhatsApp",
      "hero.cta2": "See how I can help",
      "hero.note": "The first conversation is free and confidential.",
      "hero.card.role": "Business &amp; Market Expansion Consultant",
      "hero.card.cred1": "University Lecturer at SLIIT — 10+ years teaching",
      "hero.card.cred2": "Master's in Business Studies — University of Colombo",
      "hero.card.cred3": "PG Diploma in Business Management",
      "hero.card.cred4": "Technical Member, IQSSL · Published researcher",

      "trust.1a": "University Lecturer", "trust.1b": "Teaching at SLIIT for 10+ years",
      "trust.2a": "Postgraduate Qualified", "trust.2b": "Master's in Business Studies, Univ. of Colombo",
      "trust.3a": "10+ Years in Industry", "trust.3b": "Senior roles across engineering &amp; business",
      "trust.4a": "Evidence-Based", "trust.4b": "Every recommendation backed by data",

      "problem.title": "Does this sound like your business?",
      "problem.1": "You are busy every day, but you are not sure which products, customers or routes are actually making you money.",
      "problem.2": "Your sales and stock data sits in a system, but you only see the full picture days after the month ends.",
      "problem.3": "Overdue credit and unpaid invoices keep growing and chasing them eats up your team's time.",
      "problem.4": "You want to grow into new areas or markets, but you are not sure where to start or whether it will pay off.",
      "problem.5": "Too much depends on manual coordination, phone calls and memory — and mistakes slip through.",
      "problem.close": "These are the exact problems I solve — with clear analysis, practical fixes, and decisions you can trust.",

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
      "about.p3": "My approach is simple: understand the business deeply, let the evidence lead, and deliver something practical that makes you money or saves you time.",
      "about.cta": "Start a conversation",

      "contact.eyebrow": "Let's talk",
      "contact.title": "Tell me about your business",
      "contact.sub": "Send me a short message on WhatsApp. The first conversation is free and completely confidential.",
      "contact.wa": "Message me on WhatsApp — +94 77 772 8081",
      "contact.or": "— or fill this in and it will open WhatsApp with your message ready —",
      "contact.email": "Prefer email? Write to me at",
      "form.name": "Your name",
      "form.biz": "Your business / type of business",
      "form.msg": "What would you like help with?",
      "form.submit": "Open WhatsApp with my message",

      "footer.role": "Business Analysis &amp; Market Expansion Consultant · Sri Lanka",
      "footer.wa": "WhatsApp: +94 77 772 8081",
      "footer.copy": "© {year} Pramuditha Coomasaru. All rights reserved.",

      "_waDefault": "Hello Pramuditha, I would like to talk about my business."
    },

    si: {
      "brand.role": "ව්‍යාපාර විශ්ලේෂණ හා වෙළඳපොළ ව්‍යාප්ති උපදේශක",
      "nav.services": "සේවා",
      "nav.approach": "මා සේවය සපයන ආකාරය",
      "nav.proof": "සාක්ෂි",
      "nav.about": "මා ගැන",
      "nav.contact": "සම්බන්ධ වන්න",

      "hero.eyebrow": "ශ්‍රී ලංකාවේ ව්‍යවසායකයින්, කුඩා හා මධ්‍යම පරිමාණ ව්‍යාපාර හිමියන් සහ වර්ධනය වන ව්‍යාපාර සඳහා",
      "hero.title": "ඔබගේ ව්‍යාපාරයේ දත්ත සහ එදිනෙදා කටයුතු, පැහැදිලි තීරණ හා නව වර්ධනයක් බවට පත් කරගන්න.",
      "hero.lead": "ඔබගේ ව්‍යාපාරයේ ප්‍රගතියට බාධා වන්නේ කුමක්දැයි හඳුනාගෙන, ක්‍රියාවලීන් වඩාත් කාර්යක්ෂම කර, නව වෙළඳපොළවලට ව්‍යාප්ත වීමට — අනුමාන මත නොව නිවැරදි දත්ත මත පදනම්ව — මම ශ්‍රී ලාංකික ව්‍යාපාරිකයන්ට අත දෙමි.",
      "hero.cta1": "WhatsApp හරහා මා අමතන්න",
      "hero.cta2": "මා උපකාර වන ආකාරය බලන්න",
      "hero.note": "පළමු සාකච්ඡාව නොමිලේ සහ සම්පූර්ණයෙන්ම රහසිගතයි.",
      "hero.card.role": "ව්‍යාපාර හා වෙළඳපොළ ව්‍යාප්ති උපදේශක",
      "hero.card.cred1": "SLIIT හි විශ්වවිද්‍යාල කථිකාචාර්ය — වසර 10+ ක ඉගැන්වීම්",
      "hero.card.cred2": "ව්‍යාපාර අධ්‍යයනය පිළිබඳ ශාස්ත්‍රපති උපාධිය — කොළඹ විශ්වවිද්‍යාලය",
      "hero.card.cred3": "ව්‍යාපාර කළමනාකරණය පිළිබඳ පශ්චාත් උපාධි ඩිප්ලෝමාව",
      "hero.card.cred4": "තාක්ෂණික සාමාජික, IQSSL · ප්‍රකාශිත පර්යේෂක",

      "trust.1a": "විශ්වවිද්‍යාල කථිකාචාර්ය", "trust.1b": "SLIIT හි වසර 10+ ක ඉගැන්වීම්",
      "trust.2a": "පශ්චාත් උපාධිධාරී", "trust.2b": "ව්‍යාපාර අධ්‍යයනය පිළිබඳ ශාස්ත්‍රපති, කොළඹ විශ්වවිද්‍යාලය",
      "trust.3a": "වසර 10+ ක කර්මාන්ත පළපුරුද්ද", "trust.3b": "ඉංජිනේරු හා ව්‍යාපාරික ක්ෂේත්‍රවල ජ්‍යෙෂ්ඨ තනතුරු",
      "trust.4a": "සාක්ෂි පදනම් කරගත්", "trust.4b": "සෑම නිර්දේශයක්ම දත්ත මගින් සනාථ කෙරේ",

      "problem.title": "මේ තත්ත්වය ඔබගේ ව්‍යාපාරයටත් හුරුද?",
      "problem.1": "ඔබ දිනපතා කාර්යබහුල වුවත්, සැබෑ ලාභය ලබා දෙන්නේ කුමන නිෂ්පාදන, පාරිභෝගිකයන් හෝ බෙදාහැරීම් මාර්ග ද යන්න පැහැදිලි නැත.",
      "problem.2": "ඔබගේ විකුණුම් හා තොග දත්ත පද්ධතියක ඇතත්, සම්පූර්ණ චිත්‍රය ඔබට දැකගත හැක්කේ මාසය අවසන් වී දින කිහිපයකට පසුවය.",
      "problem.3": "ගෙවීමට ඇති ණය හා හිඟ බිල්පත් දිනෙන් දින වැඩි වෙමින්, ඒවා අයකර ගැනීම ඔබගේ කණ්ඩායමේ වටිනා කාලය නාස්ති කරයි.",
      "problem.4": "නව ප්‍රදේශ හෝ වෙළඳපොළවලට ව්‍යාප්ත වීමට ඔබ කැමති වුවත්, ආරම්භ කළ යුත්තේ කොහෙන්ද, එය ප්‍රතිඵලදායක වේද යන්න විශ්වාස නැත.",
      "problem.5": "බොහෝ දේ අතින් කරන සම්බන්ධීකරණය, දුරකථන ඇමතුම් හා මතකය මත රඳා පවතින නිසා වැරදි සිදු වේ.",
      "problem.close": "මා විසඳන්නේ හරියටම මේ ගැටලුය — පැහැදිලි විශ්ලේෂණයක්, ප්‍රායෝගික විසඳුම් සහ ඔබට විශ්වාසයෙන් පිළිගත හැකි තීරණ සමඟිනි.",

      "services.eyebrow": "මා සපයන සේවා",
      "services.title": "සේවා",
      "services.sub": "වඩාත් ශක්තිමත්, වඩාත් ලාභදායී ව්‍යාපාරයක් ගොඩනැගීමට මා ඔබට සහාය වන ආකාර හතරක්. සෑම සේවාවක්ම නිම වන්නේ ඔබට භාවිත කළ හැකි ප්‍රායෝගික ප්‍රතිඵලයකිනි.",
      "svc.deliver": "ඔබට ලැබෙන්නේ:",
      "svc.1.title": "ව්‍යාපාර විශ්ලේෂණය හා ක්‍රියාවලි ස්වයංක්‍රීයකරණය",
      "svc.1.body": "ඔබගේ ව්‍යාපාරය යථාර්ථයේ ක්‍රියාත්මක වන ආකාරය සිතියම්ගත කර, කාලය හා මුදල් නාස්ති කරන බාධක හඳුනාගෙන — ඇණවුම්, තොග, ණය පාලනය හා සම්බන්ධීකරණය ඇතුළු ක්‍රියාවලිය — නැවත සැලසුම් කර, පුනරාවර්තන කාර්යයන් ස්වයංක්‍රීය කරමි.",
      "svc.1.deliver": "ක්‍රියාවලි සිතියමක්, බාධක පිළිබඳ වාර්තාවක් සහ පියවරෙන් පියවර ස්වයංක්‍රීයකරණ සැලැස්මක්.",
      "svc.2.title": "වෙළඳපොළ ව්‍යාප්තිය හා බෙදාහැරීම",
      "svc.2.body": "නව ප්‍රදේශවලට පිවිසීම සැලසුම් කර, ඔබගේ නියෝජිත හා බෙදාහැරීම් ජාලය ශක්තිමත් කර, උපරිම ප්‍රතිලාභය සඳහා අවධානය යොමු කළ යුත්තේ කොහේදැයි තීරණය කරමු — අනුමාන නොව, පිරිවැය සහිත පැහැදිලි සැලැස්මක්.",
      "svc.2.deliver": "ප්‍රමුඛතා හා ඉලක්ක සහිත වෙළඳපොළ-ප්‍රවේශ සහ මාර්ග/ප්‍රදේශ සැලැස්මක්.",
      "svc.3.title": "විකුණුම් හා දත්ත විශ්ලේෂණය",
      "svc.3.body": "ඔබගේ බිල්පත්, ERP හා විකුණුම් දත්ත පැහැදිලි උපකරණ පුවරු (dashboards) හා පිළිතුරු බවට පත් කරමි: හොඳම පාරිභෝගිකයන් කවුද, සැබවින්ම අලෙවි වන්නේ කුමක්ද, ලාභය හීන වන්නේ කොහේද යන්න.",
      "svc.3.deliver": "විකුණුම් හා තොග උපකරණ පුවරුවක් සහ සරල බසින් ලියූ විශ්ලේෂණ වාර්තාවක්.",
      "svc.4.title": "ශක්‍යතා අධ්‍යයන හා ව්‍යාපාර සැලසුම්",
      "svc.4.body": "කැපවීමට පෙර ව්‍යාපෘතියක් හෝ ආයෝජනයක් වටිනවාද යන්න දැනගන්න. පිරිවැය, ශක්‍යතාව සහ බැංකුවකට, ආයෝජකයෙකුට හෝ හවුල්කරුවෙකුට විශ්වාසයෙන් ඉදිරිපත් කළ හැකි ශක්තිමත් ව්‍යාපාර සැලැස්මක්.",
      "svc.4.deliver": "ශක්‍යතා අධ්‍යයනයක් සහ බැංකුවකට ඉදිරිපත් කළ හැකි ව්‍යාපාර සැලැස්මක්.",

      "strengths.eyebrow": "මාව වෙනස් කරන දේ",
      "strengths.title": "මගේ ප්‍රධාන ශක්තීන්",
      "str.1.t": "ශක්තිමත් පර්යේෂණ පසුබිම",
      "str.1.b": "විශ්වවිද්‍යාල පර්යේෂකයෙකුගේ නිරවද්‍යතාව — මම සැබෑ සාක්ෂි සොයා, ඒවා පරීක්ෂා කර, අනුමානවලින් කිසිවිටෙක නොනැවතෙමි.",
      "str.2.t": "ගැඹුරු දත්ත විශ්ලේෂණය",
      "str.2.b": "බොහෝ ව්‍යාපාර හිමියන්ට නොපෙනෙන රටා හා තීරණ, විකුණුම්, තොග හා මූල්‍ය දත්තවලින් මම පැහැදිලි කරමි.",
      "str.3.t": "සනාථ වූ ප්‍රායෝගික පළපුරුද්ද",
      "str.3.b": "කර්මාන්තයේ හා අධ්‍යයනයේ වසර ගණනාවක්, සමඟම ක්‍රියාත්මක ව්‍යාපාර සඳහා ගොඩනැගූ සැබෑ දත්ත විශ්ලේෂණ හා ස්වයංක්‍රීයකරණ පද්ධති.",
      "str.4.t": "වෙළඳපොළ ව්‍යාප්ති විශේෂඥතාව",
      "str.4.b": "නව වෙළඳපොළවලට පිවිසීම, බෙදාහැරීම වර්ධනය කිරීම හා දැනටමත් ක්‍රියාත්මක දේ පුළුල් කිරීම සඳහා ප්‍රායෝගික උපාය.",

      "approach.eyebrow": "සරල හා ප්‍රායෝගික",
      "approach.title": "මම ඔබ සමඟ වැඩ කරන ආකාරය",
      "step.1.title": "අවබෝධ කරගැනීම",
      "step.1.body": "ඔබගේ ව්‍යාපාරය, ඉලක්ක සහ ඔබ මුහුණ දෙන අභියෝග අවබෝධ කරගැනීමට නොමිලේ පළමු සාකච්ඡාවක්. කිසිදු පිරිවැයක් හෝ බැඳීමක් නැත.",
      "step.2.title": "රෝග විනිශ්චය",
      "step.2.body": "ඔබගේ දත්ත හා ක්‍රියාවලිය අධ්‍යයනය කර, රෝග ලක්ෂණ නොව සැබෑ මූල ගැටලු හඳුනාගනිමි. ඔබට ලැබෙන්නේ අදහස් නොව සාක්ෂිය.",
      "step.3.title": "නිර්දේශ",
      "step.3.body": "සරල බසින් පැහැදිලි, ප්‍රායෝගික සැලැස්මක් — වෙනස් කළ යුත්තේ කුමක්ද, කුමන අනුපිළිවෙළින්ද, එහි ප්‍රතිලාභය කුමක්ද යන්න.",
      "step.4.title": "ක්‍රියාත්මක කිරීම හා මැනීම",
      "step.4.body": "එම වෙනස්කම් ක්‍රියාත්මක කිරීමට මම ඔබට සහාය වන අතර, ප්‍රතිඵල මැන බලමු — එවිට කළ වැඩෙහි සැබෑ ඵලය ඔබට පෙනේ.",

      "proof.eyebrow": "ඔබට මෙම සේවාව විශ්වාස කළ හැක්කේ ඇයි",
      "proof.title": "පොරොන්දු නොව — සාක්ෂි",
      "proof.case.title": "මෑත ව්‍යාපෘතියක් — දිවයින පුරා විහිදුණු බෙදාහැරීම් ව්‍යාපාරයක්",
      "proof.case.body": "සිය ගණනක් සිල්ලර වෙළඳසැල් ආවරණය වන විශාල ක්ෂේත්‍ර විකුණුම් හා මුදල් එකතු කිරීමේ ජාලයක් ඔස්සේ ශ්‍රී ලංකාවේ දිස්ත්‍රික්ක කිහිපයක් පුරා ක්‍රියාත්මක වන බෙදාහැරීම් සමාගමක් සමඟ මම මෑතකදී කටයුතු කළෙමි. ඔවුන්ගේ විකුණුම් හා ණය දත්ත එකතු කර සත්‍යාපනය කරන ආකාරය නැවත සකස් කර, මාර්ග සැලසුම්, ඇණවුම්, ණය පාලනය හා මුදල් එකතු කිරීම සඳහා ක්‍රියාවලි ස්වයංක්‍රීයකරණ සැලැස්මක් නිර්මාණය කර, මාසය අවසානයෙන් දින ගණනක් බලා සිටීම වෙනුවට එදිනම තීරණ ගත හැකි කළමනාකරණ උපකරණ පුවරු ගොඩනැගුවෙමි.",
      "proof.point.1": "සත්‍යාපිත, සොයාගත හැකි විකුණුම් හා ණය දත්ත ප්‍රවාහයක්",
      "proof.point.2": "මුල සිට අග දක්වා ක්‍රියාවලි ස්වයංක්‍රීයකරණ සැලැස්මක්",
      "proof.point.3": "තත්‍ය කාලීන තීරණ සඳහා කළමනාකරණ උපකරණ පුවරු",
      "proof.confidential": "පාරිභෝගික තොරතුරු දැඩි රහස්‍යභාවයෙන් සුරැකේ. ඔබගේ ව්‍යාපාරික තොරතුරුද සැමවිට එලෙසම සලකනු ලැබේ.",
      "proof.cred.title": "අධ්‍යයන හා වෘත්තීය පසුබිම",
      "proof.cred.1": "<strong>විශ්වවිද්‍යාල කථිකාචාර්ය</strong> — SLIIT, වසර 10+ ක ඉගැන්වීම් පළපුරුද්දක් සහිතව",
      "proof.cred.2": "<strong>ව්‍යාපාර අධ්‍යයනය පිළිබඳ ශාස්ත්‍රපති උපාධිය</strong> — කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.3": "<strong>ව්‍යාපාර කළමනාකරණය පිළිබඳ පශ්චාත් උපාධි ඩිප්ලෝමාව</strong> — කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.4": "<strong>පශ්චාත් උපාධි පර්යේෂක</strong> — සම-සමාලෝචිත පර්යේෂණ හා සම්මන්ත්‍රණවල ක්‍රියාශීලී",
      "proof.cred.5": "<strong>මෙහෙයුම්, පිරිවැය හා ව්‍යාපෘති කළමනාකරණයේ ජ්‍යෙෂ්ඨ කර්මාන්ත පළපුරුද්ද</strong>",
      "proof.cred.6": "<strong>දත්ත මත පදනම් වෘත්තිකයෙක්</strong> — ක්‍රියාත්මක ව්‍යාපාර සඳහා සැබෑ විශ්ලේෂණ හා ස්වයංක්‍රීයකරණ ගොඩනගයි",

      "proof.pubs.title": "තෝරාගත් පර්යේෂණ හා ප්‍රකාශන",
      "pub.1": "<em>ශ්‍රී ලංකාවේ නේවාසික ඉදිකිරීම් ව්‍යාපෘති සඳහා හරිත සහතික පද්ධතිවල යෝග්‍යතාව</em> — FARU සම්මන්ත්‍රණ වාර්තා, 2022",
      "pub.2": "<em>ශ්‍රී ලංකාවේ ඉදිකිරීම් කර්මාන්තයේ 3D මුද්‍රණ තාක්ෂණය භාවිතය</em> — FARU සම්මන්ත්‍රණ වාර්තා, 2022",
      "pub.3": "<em>ලීන් ඉදිකිරීම් ක්‍රම ඔස්සේ කොන්ක්‍රීට් නාස්තිය අවම කිරීම</em> — ලෝක ඉදිකිරීම් සම්මන්ත්‍රණය, 2018",
      "pub.4": "IQSSL තාක්ෂණික සැසි (2018, 2020), TVET පිළිබඳ ජාත්‍යන්තර පර්යේෂණ සම්මන්ත්‍රණය (2019), සහ SICET, SLASS හා ICSBE සම්මන්ත්‍රණ (2022–2025) ඇතුළුව තවත් පර්යේෂණ පත්‍රිකා ඉදිරිපත් කර ඇත.",
      "proof.mem": "<strong>වෘත්තීය සාමාජිකත්වය:</strong> තාක්ෂණික සාමාජික, ශ්‍රී ලංකා ප්‍රමාණ සමීක්ෂකයින්ගේ ආයතනය (IQSSL) · සාමාජික, ශ්‍රී ලංකා විද්‍යා ප්‍රගති සංගමය (SLAAS)",

      "why.title": "මා සමඟ වැඩ කළ යුත්තේ ඇයි",
      "why.1.t": "මම දේශීය වෙළඳපොළ දනිමි",
      "why.1.b": "සිංහලෙන් හෝ ඉංග්‍රීසියෙන්, ශ්‍රී ලාංකික ව්‍යාපාරික යථාර්ථය මම දනිමි. නියෝජිත ජාල, ණය පහසුකම් හා ක්ෂේත්‍ර විකුණුම් මෙහි ක්‍රියාත්මක වන සැබෑ ආකාරය මම තේරුම් ගනිමි.",
      "why.2.t": "මම අධික පොරොන්දු නොදෙමි",
      "why.2.b": "දත්ත මගින් සනාථ නොවන කරුණක් නම්, මම ඔබට එය අවංකවම කියමි. ඔබට ලැබෙන්නේ විශ්වාසයෙන් ක්‍රියාත්මක කළ හැකි සත්‍ය පිළිතුරුය.",
      "why.3.t": "ප්‍රායෝගික, න්‍යායාත්මක නොවේ",
      "why.3.b": "සරල බසින් පැහැදිලි සැලසුම් — රාක්කයක තැබෙන වාර්තාවක් නොව, ඔබගේ කණ්ඩායමට සැබවින්ම ක්‍රියාත්මක කළ හැකි දෙයක්.",
      "why.4.t": "කුඩා හා මධ්‍යම ව්‍යාපාරවලට සුදුසු",
      "why.4.b": "කුඩා හා වර්ධනය වන ව්‍යාපාරයකට ගැළපෙන, අවධානය යොමු කළ සේවා — විශාල සමාගම්වල අධික ගාස්තු නොමැතිව සැබෑ වටිනාකමක්.",

      "about.eyebrow": "මා ගැන",
      "about.title": "Pramuditha Coomasaru",
      "about.p1": "SLIIT හි විශ්වවිද්‍යාල කථිකාචාර්යවරයෙකු ලෙස වසර දහයකට අධික ඉගැන්වීම් පළපුරුද්දක් මට ඇති අතර, ඒ සමඟම මෙහෙයුම්, පිරිවැය හා ව්‍යාපෘති කළමනාකරණයේ ජ්‍යෙෂ්ඨ තනතුරු දැරූවෙමි. එම අධ්‍යයන ගැඹුර, ප්‍රායෝගික ව්‍යාපාරික පළපුරුද්ද හා දත්ත මත පදනම් වූ ක්‍රියා විලාසයක් සමඟ මම ඒකාබද්ධ කරමි.",
      "about.p2": "කොළඹ විශ්වවිද්‍යාලයෙන් හිමි කරගත් ව්‍යාපාර අධ්‍යයන ශාස්ත්‍රපති උපාධිය හා ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාව සමඟම, ක්‍රියාත්මක ව්‍යාපාර සඳහා සැබෑ දත්ත විශ්ලේෂණ හා ක්‍රියාවලි ස්වයංක්‍රීයකරණ පද්ධති මම ගොඩනගා ඇත්තෙමි. අධ්‍යයනය, පළපුරුද්ද හා තාක්ෂණය යන සුසංයෝගය මම සෑම සේවාදායකයෙකුටම ගෙන එමි.",
      "about.p3": "මගේ ප්‍රවේශය සරලය: ව්‍යාපාරය ගැඹුරින් අවබෝධ කරගැනීම, සාක්ෂියට මුල් තැන දීම, සහ ඔබට ලාභ ලැබෙන හෝ කාලය ඉතිරි කරන ප්‍රායෝගික ප්‍රතිඵලයක් ලබා දීම.",
      "about.cta": "සාකච්ඡාවක් ආරම්භ කරමු",

      "contact.eyebrow": "අපි කතා කරමු",
      "contact.title": "ඔබගේ ව්‍යාපාරය ගැන මට කියන්න",
      "contact.sub": "WhatsApp හරහා කෙටි පණිවිඩයක් මට එවන්න. පළමු සාකච්ඡාව නොමිලේ සහ සම්පූර්ණයෙන්ම රහසිගතයි.",
      "contact.wa": "WhatsApp හරහා මට පණිවිඩයක් එවන්න — +94 77 772 8081",
      "contact.or": "— නැතහොත් මෙය පුරවන්න; ඔබගේ පණිවිඩය සූදානම්ව WhatsApp විවෘත වනු ඇත —",
      "contact.email": "විද්‍යුත් තැපෑලට කැමතිද? මට ලියන්න",
      "form.name": "ඔබගේ නම",
      "form.biz": "ඔබගේ ව්‍යාපාරය / ව්‍යාපාර වර්ගය",
      "form.msg": "ඔබට අවශ්‍ය උපකාරය කුමක්ද?",
      "form.submit": "මගේ පණිවිඩය සමඟ WhatsApp විවෘත කරන්න",

      "footer.role": "ව්‍යාපාර විශ්ලේෂණ හා වෙළඳපොළ ව්‍යාප්ති උපදේශක · ශ්‍රී ලංකාව",
      "footer.wa": "WhatsApp: +94 77 772 8081",
      "footer.copy": "© {year} Pramuditha Coomasaru. සියලු හිමිකම් ඇවිරිණි.",

      "_waDefault": "ආයුබෝවන් Pramuditha, මගේ ව්‍යාපාරය සම්බන්ධයෙන් ඔබ සමඟ කතා කිරීමට කැමතියි."
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

    var form = document.getElementById("waForm");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (document.getElementById("cName").value || "").trim();
      var biz = (document.getElementById("cBiz").value || "").trim();
      var msg = (document.getElementById("cMsg").value || "").trim();

      var lines;
      if (currentLang === "si") {
        lines = ["ආයුබෝවන් Pramuditha,"];
        if (name) lines.push("මගේ නම: " + name);
        if (biz) lines.push("ව්‍යාපාරය: " + biz);
        lines.push(msg || "මගේ ව්‍යාපාරය ගැන කතා කිරීමට කැමතියි.");
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
