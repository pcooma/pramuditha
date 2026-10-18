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
      "hero.card.cred1": "Lecturer, SLIIT (Faculty of Engineering)",
      "hero.card.cred2": "Master's in Business Studies — University of Colombo",
      "hero.card.cred3": "PG Diploma in Business Administration",
      "hero.card.cred4": "Technical Member, IQSSL · 10+ years in industry",

      "trust.1a": "University Lecturer", "trust.1b": "SLIIT, Faculty of Engineering",
      "trust.2a": "Postgraduate Qualified", "trust.2b": "Master's in Business Studies, Univ. of Colombo",
      "trust.3a": "10+ Years in Industry", "trust.3b": "Senior roles in engineering &amp; construction",
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
      "proof.cred.1": "<strong>Lecturer</strong> — Department of Quantity Surveying, Faculty of Engineering, SLIIT",
      "proof.cred.2": "<strong>Master's in Business Studies</strong> — University of Colombo",
      "proof.cred.3": "<strong>Postgraduate Diploma in Business Administration</strong> — University of Colombo",
      "proof.cred.4": "<strong>Technical Member</strong> — Institute of Quantity Surveyors Sri Lanka (IQSSL)",
      "proof.cred.5": "<strong>10+ years</strong> in engineering, construction and cost management, including senior roles",
      "proof.cred.6": "<strong>Published researcher</strong> — peer-reviewed work on lean practices, waste reduction and productivity",

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
      "about.p1": "I combine a decade of hands-on industry experience with academic grounding in business and a practical, data-first way of working. My career spans senior cost and project roles in engineering and construction, and I currently lecture at SLIIT's Faculty of Engineering.",
      "about.p2": "Alongside my Master's in Business Studies and Postgraduate Diploma in Business Administration from the University of Colombo, I have built real analytics and process-automation systems for operating businesses. That mix — industry, academia and technology — is what I bring to every client.",
      "about.p3": "My approach is simple: understand the business deeply, let the evidence lead, and deliver something practical that makes you money or saves you time.",
      "about.cta": "Start a conversation",

      "contact.eyebrow": "Let's talk",
      "contact.title": "Tell me about your business",
      "contact.sub": "Send me a short message on WhatsApp. The first conversation is free and completely confidential.",
      "contact.wa": "Message me on WhatsApp — +94 77 772 8081",
      "contact.or": "— or fill this in and it will open WhatsApp with your message ready —",
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
      "nav.services": "සේවාවන්",
      "nav.approach": "මා වැඩ කරන ආකාරය",
      "nav.proof": "සාක්ෂි",
      "nav.about": "මා ගැන",
      "nav.contact": "සම්බන්ධ වන්න",

      "hero.eyebrow": "ශ්‍රී ලංකාවේ ව්‍යවසායකයින්, කුඩා හා මධ්‍යම ව්‍යාපාර හිමියන් සහ වර්ධනය වන ව්‍යාපාර සඳහා",
      "hero.title": "ඔබේ ව්‍යාපාරික දත්ත සහ දෛනික කටයුතු, පැහැදිලි තීරණ හා නව වර්ධනයක් බවට පත් කරගන්න.",
      "hero.lead": "ඔබේ ව්‍යාපාරය පෙරට යාම වළක්වන්නේ කුමක්දැයි හඳුනාගෙන, ක්‍රියාවලිය නිවැරදි කර ස්වයංක්‍රීය කර, නව වෙළඳපොළවලට ව්‍යාප්ත වීමට — අනුමාන නොව සාක්ෂි මත පදනම්ව — මම ශ්‍රී ලාංකික ව්‍යාපාර හිමියන්ට උදව් කරමි.",
      "hero.cta1": "WhatsApp ඔස්සේ මා සමඟ කතා කරන්න",
      "hero.cta2": "මට උදව් කළ හැකි ආකාරය බලන්න",
      "hero.note": "පළමු සාකච්ඡාව නොමිලේ සහ රහසිගතයි.",
      "hero.card.role": "ව්‍යාපාර හා වෙළඳපොළ ව්‍යාප්ති උපදේශක",
      "hero.card.cred1": "කථිකාචාර්ය, SLIIT (ඉංජිනේරු පීඨය)",
      "hero.card.cred2": "ව්‍යාපාර අධ්‍යයන ශාස්ත්‍රපති — කොළඹ විශ්වවිද්‍යාලය",
      "hero.card.cred3": "ව්‍යාපාර පරිපාලනය පිළිබඳ පශ්චාත් උපාධි ඩිප්ලෝමාව",
      "hero.card.cred4": "තාක්ෂණික සාමාජික, IQSSL · වසර 10+ ක කර්මාන්ත පළපුරුද්ද",

      "trust.1a": "විශ්වවිද්‍යාල කථිකාචාර්ය", "trust.1b": "SLIIT, ඉංජිනේරු පීඨය",
      "trust.2a": "පශ්චාත් උපාධිධාරී", "trust.2b": "ව්‍යාපාර අධ්‍යයන ශාස්ත්‍රපති, කොළඹ විශ්වවිද්‍යාලය",
      "trust.3a": "වසර 10+ ක කර්මාන්ත පළපුරුද්ද", "trust.3b": "ඉංජිනේරු හා ඉදිකිරීම් ක්ෂේත්‍රයේ ජ්‍යෙෂ්ඨ තනතුරු",
      "trust.4a": "සාක්ෂි පදනම් කරගත්", "trust.4b": "සෑම නිර්දේශයක්ම දත්ත මගින් සනාථ කෙරේ",

      "problem.title": "මෙය ඔබේ ව්‍යාපාරය වගේද?",
      "problem.1": "ඔබ දිනපතා කාර්යබහුලයි, නමුත් සැබවින්ම ලාභ ලබා දෙන්නේ කුමන නිෂ්පාදන, පාරිභෝගිකයන් හෝ මාර්ග (routes)දැයි විශ්වාස නැත.",
      "problem.2": "ඔබේ විකුණුම් හා තොග දත්ත පද්ධතියක තිබුණද, සම්පූර්ණ චිත්‍රය ඔබට පෙනෙන්නේ මාසය අවසන් වී දින කිහිපයකට පසුවයි.",
      "problem.3": "ණය හා නොගෙවූ බිල්පත් (overdue credit) වැඩි වෙමින් පවතින අතර ඒවා අයකර ගැනීම ඔබේ කණ්ඩායමේ කාලය නාස්ති කරයි.",
      "problem.4": "නව ප්‍රදේශවලට හෝ වෙළඳපොළවලට ව්‍යාප්ත වීමට ඔබ කැමතියි, නමුත් ආරම්භ කළ යුත්තේ කොහෙන්ද, එය ලාභදායීද යන්න විශ්වාස නැත.",
      "problem.5": "බොහෝ දේ අතින් කරන සම්බන්ධීකරණය, දුරකථන ඇමතුම් හා මතකය මත රඳා පවතින අතර වැරදි සිදු වේ.",
      "problem.close": "මම විසඳන්නේ හරියටම මේ ගැටලුයි — පැහැදිලි විශ්ලේෂණය, ප්‍රායෝගික විසඳුම් සහ ඔබට විශ්වාස කළ හැකි තීරණ සමඟින්.",

      "services.eyebrow": "මා කරන දේ",
      "services.title": "සේවාවන්",
      "services.sub": "වඩාත් ශක්තිමත්, වඩාත් ලාභදායී ව්‍යාපාරයක් කරගෙන යාමට මා උදව් කරන ක්‍රම හතරක්. සෑම සේවාවක්ම අවසන් වන්නේ ඔබට භාවිත කළ හැකි ප්‍රායෝගික දෙයකිනි.",
      "svc.deliver": "ඔබට ලැබෙන්නේ:",
      "svc.1.title": "ව්‍යාපාර විශ්ලේෂණ හා ක්‍රියාවලි ස්වයංක්‍රීයකරණය",
      "svc.1.body": "ඔබේ ව්‍යාපාරය සැබවින්ම ක්‍රියාත්මක වන ආකාරය සිතියම්ගත කර, කාලය හා මුදල් නාස්ති කරන බාධක හඳුනාගෙන, ක්‍රියාවලිය — ඇණවුම්, තොග, ණය පාලනය, සම්බන්ධීකරණය — නැවත සැලසුම් කර දිනපතා කොටස් ස්වයංක්‍රීය කරමි.",
      "svc.1.deliver": "ක්‍රියාවලි සිතියමක්, බාධක පිළිබඳ වාර්තාවක් සහ පියවරෙන් පියවර ස්වයංක්‍රීයකරණ සැලැස්මක්.",
      "svc.2.title": "වෙළඳපොළ ව්‍යාප්තිය හා බෙදාහැරීම",
      "svc.2.body": "නව ප්‍රදේශවලට ඇතුළු වීම සැලසුම් කර, ඔබේ නියෝජිත හා බෙදාහැරීම් ජාලය ගොඩනගා හෝ ශක්තිමත් කර, හොඳම ප්‍රතිලාභය සඳහා අවධානය යොමු කළ යුත්තේ කොහේදැයි තීරණය කරන්න — අනුමාන නොව, පිරිවැය සහිත සැලැස්මක්.",
      "svc.2.deliver": "ප්‍රමුඛතා හා ඉලක්ක සහිත වෙළඳපොළ-ප්‍රවේශ සහ මාර්ග/ප්‍රදේශ සැලැස්මක්.",
      "svc.3.title": "විකුණුම් හා දත්ත විශ්ලේෂණ",
      "svc.3.body": "ඔබේ බිල්පත්, ERP හා විකුණුම් දත්ත පැහැදිලි ඩෑෂ්බෝඩ් හා පිළිතුරු බවට පත් කරන්න: ඔබේ හොඳම පාරිභෝගිකයන් කවුද, සැබවින්ම විකෙන්නේ කුමක්ද, ලාභය නැති වන්නේ කොහේද, ඒ ගැන කළ යුත්තේ කුමක්ද.",
      "svc.3.deliver": "විකුණුම් හා තොග ඩෑෂ්බෝඩ් එකක් සහ සරල භාෂාවෙන් ලියූ තීක්ෂණ වාර්තාවක්.",
      "svc.4.title": "ශක්‍යතා අධ්‍යයන හා ව්‍යාපාර සැලසුම්",
      "svc.4.body": "කැපවීමට පෙර ව්‍යාපෘතියක් හෝ ආයෝජනයක් වටිනවාද යන්න දැනගන්න. පිරිවැය, ශක්‍යතාව සහ බැංකුවකට, ආයෝජකයෙකුට හෝ හවුල්කරුවෙකුට ඉදිරිපත් කළ හැකි ශක්තිමත් ව්‍යාපාර සැලැස්මක්.",
      "svc.4.deliver": "ශක්‍යතා අධ්‍යයනයක් සහ බැංකු-ස්වීකාර්ය ව්‍යාපාර සැලැස්මක්.",

      "approach.eyebrow": "සරල හා ප්‍රායෝගික",
      "approach.title": "මම ඔබ සමඟ වැඩ කරන ආකාරය",
      "step.1.title": "අවබෝධ කරගැනීම",
      "step.1.body": "ඔබේ ව්‍යාපාරය, ඔබේ ඉලක්ක සහ ඔබව කලකිරවන දේ අවබෝධ කරගැනීමට නොමිලේ පළමු සාකච්ඡාවක්. පිරිවැයක් හෝ බැඳීමක් නැත.",
      "step.2.title": "රෝග විනිශ්චය",
      "step.2.body": "මම ඔබේ දත්ත හා ක්‍රියාවලිය අධ්‍යයනය කර රෝග ලක්ෂණ නොව සැබෑ ගැටලු හඳුනාගනිමි. ඔබට පෙනෙන්නේ අදහස් නොව සාක්ෂි.",
      "step.3.title": "නිර්දේශ",
      "step.3.body": "සරල භාෂාවෙන් පැහැදිලි, ප්‍රායෝගික සැලැස්මක් — වෙනස් කළ යුත්තේ කුමක්ද, කුමන අනුපිළිවෙලින්ද, එහි වටිනාකම කුමක්ද.",
      "step.4.title": "ක්‍රියාත්මක කිරීම හා මැනීම",
      "step.4.body": "වෙනස්කම් හරහා මම ඔබට සහාය වන අතර ප්‍රතිඵල මනිමු, එවිට වැඩ සැබවින්ම ඵල දුන් බව ඔබ දැනගනී.",

      "proof.eyebrow": "ඔබට මෙම කාර්යය විශ්වාස කළ හැක්කේ ඇයි",
      "proof.title": "පොරොන්දු නොව, සාක්ෂි",
      "proof.case.title": "මෑත ව්‍යාපෘතිය — දිවයින පුරා බෙදාහැරීම් ව්‍යාපාරයක්",
      "proof.case.body": "සිය ගණනක් සිල්ලර වෙළඳසැල් සහිත විශාල ක්ෂේත්‍ර විකුණුම් හා මුදල් එකතු කිරීමේ ජාලයක් හරහා ශ්‍රී ලංකාවේ දිස්ත්‍රික්ක පුරා ක්‍රියාත්මක වන බෙදාහැරීම් සමාගමක් සමඟ මම මෑතකදී කටයුතු කළෙමි. ඔවුන්ගේ විකුණුම් හා ණය දත්ත එකතු කර සත්‍යාපනය කරන ආකාරය මම නැවත ගොඩනැගූ අතර, මාර්ග සැලසුම්, ඇණවුම්, ණය පාලනය හා මුදල් එකතු කිරීම සඳහා ක්‍රියාවලි-ස්වයංක්‍රීයකරණ සැලැස්මක් නිර්මාණය කර, මාසය අවසානයෙන් දින ගණනක් බලා සිටීම වෙනුවට එදිනම දැක්ම ලබා දෙන කළමනාකරණ ඩෑෂ්බෝඩ් ගොඩනැගුවෙමි.",
      "proof.point.1": "සත්‍යාපිත, සොයාගත හැකි විකුණුම් හා ණය දත්ත ප්‍රවාහයක්",
      "proof.point.2": "ආරම්භයේ සිට අවසානය දක්වා ක්‍රියාවලි-ස්වයංක්‍රීයකරණ සැලැස්මක්",
      "proof.point.3": "තත්‍ය කාලීන තීරණ සඳහා කළමනාකරණ ඩෑෂ්බෝඩ්",
      "proof.confidential": "පාරිභෝගික තොරතුරු දැඩි රහස්‍යභාවයෙන් තබා ගනී. ඔබේ ව්‍යාපාරික තොරතුරු ද සැමවිටම එලෙසම සලකනු ලැබේ.",
      "proof.cred.title": "අධ්‍යයන හා වෘත්තීය පදනම",
      "proof.cred.1": "<strong>කථිකාචාර්ය</strong> — ප්‍රමාණ සමීක්ෂණ අධ්‍යයනාංශය, ඉංජිනේරු පීඨය, SLIIT",
      "proof.cred.2": "<strong>ව්‍යාපාර අධ්‍යයන ශාස්ත්‍රපති</strong> — කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.3": "<strong>ව්‍යාපාර පරිපාලනය පිළිබඳ පශ්චාත් උපාධි ඩිප්ලෝමාව</strong> — කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.4": "<strong>තාක්ෂණික සාමාජික</strong> — ශ්‍රී ලංකා ප්‍රමාණ සමීක්ෂකයින්ගේ ආයතනය (IQSSL)",
      "proof.cred.5": "ජ්‍යෙෂ්ඨ තනතුරු ඇතුළුව ඉංජිනේරු, ඉදිකිරීම් හා පිරිවැය කළමනාකරණයේ <strong>වසර 10+ ක්</strong>",
      "proof.cred.6": "<strong>ප්‍රකාශිත පර්යේෂක</strong> — lean භාවිතයන්, නාස්තිය අවම කිරීම හා ඵලදායිතාව පිළිබඳ සම-සමාලෝචිත කෘති",

      "why.title": "මා සමඟ වැඩ කළ යුත්තේ ඇයි",
      "why.1.t": "මම දේශීය වෙළඳපොළ දනිමි",
      "why.1.b": "සිංහලෙන් හෝ ඉංග්‍රීසියෙන්, ශ්‍රී ලාංකික ව්‍යාපාරික යථාර්ථයන්. නියෝජිත ජාල, ණය හා ක්ෂේත්‍ර විකුණුම් මෙහි ක්‍රියාත්මක වන ආකාරය මම තේරුම් ගනිමි.",
      "why.2.t": "මම අධික පොරොන්දු නොදෙමි",
      "why.2.b": "දත්ත මගින් යම් කරුණක් සනාථ නොවන්නේ නම්, මම ඔබට එය කියමි. ඔබට ලැබෙන්නේ විශ්වාසයෙන් ක්‍රියා කළ හැකි අවංක පිළිතුරු.",
      "why.3.t": "ප්‍රායෝගික, න්‍යායාත්මක නොවේ",
      "why.3.b": "සරල භාෂාවෙන් පැහැදිලි සැලසුම් — රාක්කයක තබන වාර්තාවක් නොව, ඔබේ කණ්ඩායමට සැබවින්ම ක්‍රියාත්මක කළ හැකි දෙයක්.",
      "why.4.t": "කුඩා හා මධ්‍යම ව්‍යාපාරවලට සුදුසු",
      "why.4.b": "කුඩා හෝ වර්ධනය වන ව්‍යාපාරයකට ගැළපෙන අවධානය යොමු කළ සේවා — විශාල සමාගම්වල මිල නොමැතිව සැබෑ වටිනාකමක්.",

      "about.eyebrow": "මා ගැන",
      "about.title": "Pramuditha Coomasaru",
      "about.p1": "දත්ත මුල් කරගත් ප්‍රායෝගික ක්‍රියා විලාසයක් සහ ව්‍යාපාර පිළිබඳ අධ්‍යයන පදනමක් සමඟ දශකයක පුරුදු කර්මාන්ත පළපුරුද්ද මම ඒකාබද්ධ කරමි. මගේ වෘත්තීය ජීවිතය ඉංජිනේරු හා ඉදිකිරීම් ක්ෂේත්‍රයේ ජ්‍යෙෂ්ඨ පිරිවැය හා ව්‍යාපෘති තනතුරු ආවරණය කරන අතර, දැනට මම SLIIT ඉංජිනේරු පීඨයේ කථිකාචාර්යවරයෙකු ලෙස කටයුතු කරමි.",
      "about.p2": "කොළඹ විශ්වවිද්‍යාලයෙන් ලත් ව්‍යාපාර අධ්‍යයන ශාස්ත්‍රපති උපාධිය හා ව්‍යාපාර පරිපාලන පශ්චාත් උපාධි ඩිප්ලෝමාව සමඟම, ක්‍රියාත්මක ව්‍යාපාර සඳහා සැබෑ විශ්ලේෂණ හා ක්‍රියාවලි-ස්වයංක්‍රීයකරණ පද්ධති මම ගොඩනගා ඇත. කර්මාන්තය, අධ්‍යයනය හා තාක්ෂණය යන මිශ්‍රණය මම සෑම සේවාදායකයෙකුටම ගෙන එමි.",
      "about.p3": "මගේ ප්‍රවේශය සරලයි: ව්‍යාපාරය ගැඹුරින් අවබෝධ කරගැනීම, සාක්ෂියට ප්‍රමුඛත්වය දීම, සහ ඔබට මුදල් ඉපයීමට හෝ කාලය ඉතිරි කිරීමට උපකාරී වන ප්‍රායෝගික දෙයක් ලබා දීම.",
      "about.cta": "සාකච්ඡාවක් ආරම්භ කරන්න",

      "contact.eyebrow": "අපි කතා කරමු",
      "contact.title": "ඔබේ ව්‍යාපාරය ගැන මට කියන්න",
      "contact.sub": "WhatsApp ඔස්සේ කෙටි පණිවිඩයක් මට එවන්න. පළමු සාකච්ඡාව නොමිලේ සහ සම්පූර්ණයෙන්ම රහසිගතයි.",
      "contact.wa": "WhatsApp ඔස්සේ මට පණිවිඩයක් එවන්න — +94 77 772 8081",
      "contact.or": "— නැතහොත් මෙය පුරවන්න, ඔබේ පණිවිඩය සූදානම්ව WhatsApp විවෘත වේ —",
      "form.name": "ඔබේ නම",
      "form.biz": "ඔබේ ව්‍යාපාරය / ව්‍යාපාර වර්ගය",
      "form.msg": "ඔබට උදව් අවශ්‍ය කුමක් සඳහාද?",
      "form.submit": "මගේ පණිවිඩය සමඟ WhatsApp විවෘත කරන්න",

      "footer.role": "ව්‍යාපාර විශ්ලේෂණ හා වෙළඳපොළ ව්‍යාප්ති උපදේශක · ශ්‍රී ලංකාව",
      "footer.wa": "WhatsApp: +94 77 772 8081",
      "footer.copy": "© {year} Pramuditha Coomasaru. සියලු හිමිකම් ඇවිරිණි.",

      "_waDefault": "ආයුබෝවන් Pramuditha, මගේ ව්‍යාපාරය ගැන කතා කිරීමට කැමතියි."
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

    // toggle button shows the OTHER language
    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = lang === "en" ? "සිංහල" : "English";

    // default WhatsApp links follow the active language
    var def = waLink(dict._waDefault);
    ["whatsappDirect", "footerWhatsapp"].forEach(function (id) {
      var a = document.getElementById(id);
      if (a) a.setAttribute("href", def);
    });

    try { localStorage.setItem("pc_lang", lang); } catch (e) {}
  }

  function init() {
    // restore saved language, default English
    var saved = "en";
    try { saved = localStorage.getItem("pc_lang") || "en"; } catch (e) {}
    applyLang(saved === "si" ? "si" : "en");

    // language toggle
    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.addEventListener("click", function () {
      applyLang(currentLang === "en" ? "si" : "en");
    });

    // mobile nav
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

    // WhatsApp message-composing form
    var form = document.getElementById("waForm");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (document.getElementById("cName").value || "").trim();
      var biz = (document.getElementById("cBiz").value || "").trim();
      var msg = (document.getElementById("cMsg").value || "").trim();
      var dict = I18N[currentLang] || I18N.en;

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
