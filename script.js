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
      "brand.role": "Business Analysis and Market Expansion Consultant",
      "nav.services": "Services",
      "nav.approach": "How I Work",
      "nav.proof": "Evidence",
      "nav.about": "About",
      "nav.contact": "Contact",

      "hero.eyebrow": "For entrepreneurs and SME owners and growing businesses across Sri Lanka",
      "hero.title": "Turn your business data and your daily work into clear decisions and steady growth you can measure.",
      "hero.lead": "I help Sri Lankan business owners understand what is slowing their business and I fix the process and open the way into new markets using real evidence.",
      "hero.cta1": "For when you need me",
      "hero.cta2": "See how I work",
      "hero.card.role": "Business and Market Expansion Consultant",
      "hero.card.cred1": "University Lecturer at SLIIT for more than ten years",
      "hero.card.cred2": "Master's in Business Studies from the University of Colombo",
      "hero.card.cred3": "Postgraduate Diploma in Business Management",
      "hero.card.cred4": "Technical Member of the IQSSL and a published researcher",

      "trust.1a": "University Lecturer", "trust.1b": "Teaching at SLIIT for more than ten years",
      "trust.2a": "Postgraduate Qualified", "trust.2b": "Master's in Business Studies from the University of Colombo",
      "trust.3a": "More Than Ten Years in Industry", "trust.3b": "Senior roles across engineering and business",
      "trust.4a": "Evidence Based", "trust.4b": "Every recommendation is backed by data",

      "problem.title": "Whatever you run some of this will sound familiar",
      "problem.1": "You stay busy from morning until night and still you cannot say for certain which products or outlets or customers are truly earning the money.",
      "problem.2": "Your numbers live inside a system or a pile of books and the real picture only becomes clear long after the month has already closed.",
      "problem.3": "The money owed to you keeps climbing and chasing it wears out the very people you need outside selling to dealers and serving your customers.",
      "problem.4": "You can feel there is room to grow into a new town or a new product or an online push and yet you cannot tell which move comes first.",
      "problem.5": "Too much of the business lives inside your own head and a few phone calls and you quietly wonder what would happen the day you step back.",
      "problem.close": "Every growing business meets these quietly and the owners who move ahead are simply the ones who settle them before they begin to cost real money.",

      "services.eyebrow": "What I do",
      "services.title": "Services",
      "services.sub": "There are four clear ways I help you run a stronger and more profitable business and each one ends with something practical that you can put to use.",
      "svc.deliver": "What you receive",
      "svc.1.title": "Business Analysis and Process Automation",
      "svc.1.body": "I map how your business truly runs and I find the bottlenecks that quietly cost you time and money and then I redesign the flow and automate the routine work.",
      "svc.1.deliver": "is a clear process map together with a bottleneck report and a practical automation plan that you can follow one step at a time.",
      "svc.2.title": "Market Expansion and Distribution",
      "svc.2.body": "I help you plan your entry into new areas and build or strengthen your dealer network and decide where your effort will earn the best return through a costed plan.",
      "svc.2.deliver": "is a market entry plan and a route and territory plan that sets out clear priorities and targets you can act on.",
      "svc.3.title": "Sales and Data Analytics",
      "svc.3.body": "I turn your billing and sales data into clear dashboards and plain answers about who your best customers are and what truly sells and where your margin is leaking.",
      "svc.3.deliver": "is a sales and inventory dashboard together with an insight report written in plain language that anyone on your team can understand.",
      "svc.4.title": "Feasibility and Business Planning",
      "svc.4.body": "I help you know whether a project or an investment is truly worth it before you commit and I prepare a solid case that you can take to a bank or a partner.",
      "svc.4.deliver": "is a full feasibility study and a business plan that a bank or an investor can take seriously.",

      "strengths.eyebrow": "What sets me apart",
      "strengths.title": "My core strengths",
      "str.1.t": "Strong research background",
      "str.1.b": "I bring the discipline of a university researcher and I dig for the real evidence and I test it carefully and I never settle for easy assumptions.",
      "str.2.t": "Deep data analysis",
      "str.2.b": "I turn raw sales and stock and financial data into clear patterns and practical decisions that most business owners simply cannot see on their own.",
      "str.3.t": "Proven hands on experience",
      "str.3.b": "I bring years across both industry and academia along with real analytics and automation systems that I have built for businesses that trade every day.",
      "str.4.t": "Business expansion expertise",
      "str.4.b": "I bring practical strategy for entering new markets and growing your distribution and scaling the parts of your business that already work well today.",

      "approach.eyebrow": "Simple and practical",
      "approach.title": "How I work with you",
      "step.1.title": "Understand",
      "step.1.body": "We begin with a free first conversation so that I can understand your business and your goals and the things that frustrate you with no cost and no obligation.",
      "step.2.title": "Diagnose",
      "step.2.body": "I study your data and your process and I find the real problems rather than the symptoms so that you see clear evidence rather than opinions.",
      "step.3.title": "Recommend",
      "step.3.body": "I give you a clear and practical plan in plain language that sets out what to change and in what order and what it is worth to you.",
      "step.4.title": "Implement and Measure",
      "step.4.body": "I support you through the changes and we track the results together so that you can see clearly that the work has truly paid off.",

      "proof.eyebrow": "Why you can trust this work",
      "proof.title": "Evidence not promises",
      "proof.case.title": "A recent project with an island wide distribution business",
      "proof.case.body": "I recently worked with a distribution company that operates across the districts of Sri Lanka through a large field sales and cash collection network of hundreds of retail shops. I rebuilt the way their sales and credit data was gathered and verified and I designed an automation plan for route planning and order flow and credit control and cash collection. I also built management dashboards that gave them visibility on the same day instead of waiting many days after the month had closed.",
      "proof.point.1": "A verified and traceable sales and credit data pipeline",
      "proof.point.2": "An automation plan that runs from the order to the settlement",
      "proof.point.3": "Management dashboards built for decisions in real time",
      "proof.confidential": "Every client detail is kept strictly confidential and your own business information would always be treated in exactly the same careful way.",
      "proof.cred.title": "Academic and professional grounding",
      "proof.cred.1": "<strong>University Lecturer</strong> at SLIIT with more than ten years of teaching experience",
      "proof.cred.2": "<strong>Master's in Business Studies</strong> from the University of Colombo",
      "proof.cred.3": "<strong>Postgraduate Diploma in Business Management</strong> from the University of Colombo",
      "proof.cred.4": "<strong>Postgraduate researcher</strong> active in peer reviewed research and academic symposia",
      "proof.cred.5": "<strong>Senior industry experience</strong> across operations and cost and project management",
      "proof.cred.6": "<strong>Data driven practitioner</strong> who builds real analytics and automation for working businesses",

      "proof.pubs.title": "Selected research and publications",
      "pub.1": "<em>Applicability of Green Certification Systems for Domestic Construction Projects in Sri Lanka</em> published in the FARU Proceedings in 2022",
      "pub.2": "<em>Adoption of 3D Printing Technology in Sri Lanka's Construction Industry</em> published in the FARU Proceedings in 2022",
      "pub.3": "<em>Minimizing Concrete Wastage Using Lean Construction Techniques</em> presented at the World Construction Symposium in 2018",
      "pub.4": "Further research papers presented at IQSSL technical sessions and at the International Research Symposium on TVET and at the SICET and SLASS and ICSBE symposia between 2018 and 2025.",
      "proof.mem": "<strong>Professional memberships</strong> as a Technical Member of the Institute of Quantity Surveyors Sri Lanka and as a Member of the Sri Lanka Association for the Advancement of Science.",

      "work.eyebrow": "See the work",
      "work.title": "A look at the analytics I build",
      "work.sub": "These are real tools from real engagements that cover demand forecasting and stock out prevention and credit control and customer insight while every client identity stays fully confidential.",
      "work.cap1": "Cumulative revenue followed against a forecast band so that pace and surprises show up early",
      "work.cap2": "A stock depletion curve showing the predicted stock out date together with the reorder lead time",
      "work.cap3": "A demand simulation running two thousand possible futures with the reorder timing marked clearly",
      "work.cap4": "A daily demand simulation that keeps ordinary sales separate from large bulk orders",
      "work.cap5": "Demand forecast ranges for each product that guide sensible reorder quantities",
      "work.cap6": "New customer demand set beside repeat customer demand split across each day",
      "work.cap7": "Billing visit frequency compared against invoiced revenue and a rolling benchmark",
      "work.cap8": "Credit extended set against repayments and tracked across each month",

      "band1.tag": "In practice",
      "band1.title": "Plan with open eyes",
      "band1.text": "I model thousands of possible futures for your demand so that you can enter a new market or place a large order with open eyes rather than a hunch.",
      "band.note": "These are real outputs from live work and every client detail is kept strictly confidential.",
      "band2.tag": "In practice",
      "band2.title": "See the pace early",
      "band2.text": "I follow your revenue against a live forecast band so that the real pace of the business and any surprise appear early while you still have time to act.",
      "band3.tag": "In practice",
      "band3.title": "Keep credit in hand",
      "band3.text": "I set the credit you extend against the repayments you collect each month so that the money owed to you never quietly grows beyond your reach.",
      "band4.tag": "In practice",
      "band4.title": "Order the right amount",
      "band4.text": "I build a demand forecast range for every product so that you order the right quantity and tie up far less cash in stock that moves slowly.",

      "why.title": "Why work with me",
      "why.1.t": "I know the local market",
      "why.1.b": "I understand Sri Lankan business as it really is in both Sinhala and English and I know how dealer networks and credit and field sales truly work here.",
      "why.2.t": "I will not overpromise",
      "why.2.b": "When the data does not support a claim I will tell you plainly so that you always receive honest answers that you can act on with real confidence.",
      "why.3.t": "Practical not academic",
      "why.3.b": "I give you clear plans in plain language that your own team can truly put to work rather than a heavy report that only sits on a shelf.",
      "why.4.t": "Right sized for SMEs",
      "why.4.b": "I offer focused engagements that suit a small or growing business so that you gain real value without ever paying a large firm price.",

      "about.eyebrow": "About",
      "about.title": "Pramuditha Coomasaru",
      "about.p1": "I have taught at SLIIT as a university lecturer for more than ten years and I have held senior roles in industry across operations and cost and project management over the same career.",
      "about.p2": "I also hold a Master's in Business Studies and a Postgraduate Diploma in Business Management from the University of Colombo and I have built real analytics and automation systems for working businesses.",
      "about.p3": "My way of working is simple because I understand the business deeply and I let the evidence lead and I hand you something practical that earns money or saves you time.",
      "about.cta": "Start a conversation",

      "contact.eyebrow": "When the time comes",
      "contact.title": "You will know where to find me",
      "contact.sub": "There is nothing for you to decide today and whenever a real question begins to weigh on you a quiet and confidential conversation is where the clarity begins.",
      "contact.wa": "WhatsApp +94 77 772 8081",
      "contact.or": "Or whenever you feel ready you may leave a short note below and it will simply open WhatsApp with your message already prepared",
      "contact.email": "Email",
      "form.name": "Your name",
      "form.biz": "Your business or type of business",
      "form.area": "Where you are based",
      "form.msg": "What is on your mind",
      "form.submit": "Send it whenever you are ready",
      "goal.label": "What you would like to improve",
      "goal.opt0": "Choose one if you like",
      "goal.opt1": "Sales and revenue",
      "goal.opt2": "Processes and automation",
      "goal.opt3": "New markets and distribution",
      "goal.opt4": "Data and reports",
      "goal.opt5": "Something else",
      "float.status": "Replies on WhatsApp",
      "float.sub": "Share a few details and WhatsApp will open with your note already prepared",
      "float.send": "Open WhatsApp",

      "footer.role": "Business Analysis and Market Expansion Consultant in Sri Lanka",
      "footer.wa": "WhatsApp +94 77 772 8081",
      "footer.copy": "© {year} Pramuditha Coomasaru. All rights reserved.",

      "_waDefault": "Hello Pramuditha I would like to talk about my business."
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
      "hero.card.role": "ව්‍යාපාර සහ වෙළෙඳපොළ ව්‍යාප්ති උපදේශක",
      "hero.card.cred1": "SLIIT ආයතනයේ වසර දහයකට වැඩි විශ්වවිද්‍යාල දේශන පළපුරුද්ද",
      "hero.card.cred2": "කොළඹ විශ්වවිද්‍යාලයේ ව්‍යාපාර අධ්‍යයනපති උපාධිය",
      "hero.card.cred3": "ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාව",
      "hero.card.cred4": "IQSSL තාක්ෂණික සාමාජික සහ පර්යේෂක",

      "trust.1a": "විශ්වවිද්‍යාල කථිකාචාර්ය", "trust.1b": "SLIIT ආයතනයේ වසර දහයකට වැඩි ඉගැන්වීම් පළපුරුද්ද",
      "trust.2a": "පශ්චාත් උපාධි සුදුසුකම්", "trust.2b": "කොළඹ විශ්වවිද්‍යාලයේ ව්‍යාපාර අධ්‍යයනපති උපාධිය",
      "trust.3a": "වසර දහයකට වැඩි ක්ෂේත්‍ර පළපුරුද්ද", "trust.3b": "ඉංජිනේරු හා ව්‍යාපාර ක්ෂේත්‍රයන්හි ජ්‍යෙෂ්ඨ තනතුරු",
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
      "svc.deliver": "ලැබෙන ප්‍රතිඵලය වන්නේ",
      "svc.1.title": "ව්‍යාපාර විශ්ලේෂණය සහ ක්‍රියාවලි ස්වයංක්‍රීයකරණය",
      "svc.1.body": "ව්‍යාපාරයේ සැබෑ ක්‍රියාකාරීත්වය පරීක්ෂා කර කාලය සහ මුදල් අපතේ යන තැන් හඳුනා ගැනේ. ඉන්පසු ඇණවුම් සහ තොග පාලනය මෙන්ම ණය පාලනය විධිමත් කර එදිනෙදා කටයුතු ස්වයංක්‍රීය කෙරේ.",
      "svc.1.deliver": "ක්‍රියාවලි සැලැස්මක් සහ පියවරෙන් පියවර ක්‍රියාත්මක කළ හැකි ස්වයංක්‍රීයකරණ මාර්ගෝපදේශයකි.",
      "svc.2.title": "වෙළෙඳපොළ ව්‍යාප්තිය සහ බෙදාහැරීමේ ජාලය",
      "svc.2.body": "නව ප්‍රදේශ වෙත පිවිසීම සැලසුම් කිරීම සහ අලෙවි නියෝජිත ජාලය ශක්තිමත් කිරීම සඳහා පිරිවැය හා ප්‍රතිලාභ ගණනය කළ විධිමත් සැලැස්මක් සකස් කෙරේ.",
      "svc.2.deliver": "අලෙවි ඉලක්ක ඇතුළත් වෙළෙඳපොළ ප්‍රවේශ සහ බෙදාහැරීමේ කලාප සැලැස්මකි.",
      "svc.3.title": "අලෙවි සහ දත්ත විශ්ලේෂණය",
      "svc.3.body": "බිල්පත් සහ අලෙවි දත්ත ඇසුරින් වටිනාම ගනුදෙනුකරුවන් කවුරුන්ද සහ වැඩියෙන්ම අලෙවි වන භාණ්ඩ මොනවාද යන්නත් ලාභය අඩුවන තැන් සහ ඊට ගත යුතු පියවරත් පැහැදිලිව හඳුනා ගැනේ.",
      "svc.3.deliver": "අලෙවි හා තොග පාලන දත්ත පුවරුවක් සහ සරල බසින් සැකසූ විශ්ලේෂණ වාර්තාවකි.",
      "svc.4.title": "ශක්‍යතා අධ්‍යයන සහ ව්‍යාපාර සැලසුම්",
      "svc.4.body": "නව ව්‍යාපෘතියකට හෝ ආයෝජනයකට මුදල් යෙදවීමට පෙර එහි ප්‍රතිලාභදායක බව තහවුරු කර ගැනීම සඳහා බැංකුවකට හෝ ආයෝජකයෙකුට ඉදිරිපත් කළ හැකි ව්‍යාපාර සැලසුම් සකස් කෙරේ.",
      "svc.4.deliver": "පූර්ණ ශක්‍යතා අධ්‍යයන වාර්තාවක් සහ විධිමත් ව්‍යාපාර සැලැස්මකි.",

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
      "proof.case.title": "දිවයින පුරා ක්‍රියාත්මක බෙදාහැරීමේ ජාලයක් සඳහා සිදු කළ ව්‍යාපෘතියක්",
      "proof.case.body": "සිල්ලර වෙළෙඳසැල් සිය ගණනක් ආවරණය වන පරිදි දිවයිනේ දිස්ත්‍රික්ක රැසක ක්‍රියාත්මක වන බෙදාහැරීමේ සමාගමක අලෙවි සහ ණය දත්ත පද්ධතිය මෑතකදී ප්‍රතිසංවිධානය කරන ලදී. ප්‍රවාහන මාර්ග සැලසුම් කිරීම සහ ණය පාලනය සඳහා ස්වයංක්‍රීය ක්‍රමවේදයක් හඳුන්වා දී එදිනෙදා ක්ෂණික තීරණ ගත හැකි දත්ත පුවරු පද්ධතියක් එහිදී ගොඩනගන ලදී.",
      "proof.point.1": "තහවුරු කළ හැකි විශ්වසනීය අලෙවි සහ ණය දත්ත පද්ධතියක්",
      "proof.point.2": "පූර්ණ ක්‍රියාවලි ස්වයංක්‍රීයකරණ සැලැස්මක්",
      "proof.point.3": "එදිනෙදා තීරණ ගැනීම සඳහා කළමනාකරණ දත්ත පුවරු",
      "proof.confidential": "සේවාදායකයින්ගේ සහ ව්‍යාපාරවල සියලු තොරතුරු පූර්ණ රහස්‍යභාවයකින් යුතුව ආරක්ෂා කෙරේ.",
      "proof.cred.title": "ශාස්ත්‍රීය සහ වෘත්තීය පසුබිම",
      "proof.cred.1": "<strong>විශ්වවිද්‍යාල කථිකාචාර්ය</strong> SLIIT ආයතනයේ වසර දහයකට වැඩි ඉගැන්වීම් පළපුරුද්ද",
      "proof.cred.2": "<strong>ව්‍යාපාර අධ්‍යයනපති උපාධිය</strong> කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.3": "<strong>ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාව</strong> කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.4": "<strong>පශ්චාත් උපාධි පර්යේෂක</strong> ජාතික හා ජාත්‍යන්තර පර්යේෂණ ප්‍රකාශන රැසක දායකත්වය",
      "proof.cred.5": "<strong>ජ්‍යෙෂ්ඨ ක්ෂේත්‍ර පළපුරුද්ද</strong> මෙහෙයුම් හා පිරිවැය කළමනාකරණ අංශයන්හි අත්දැකීම්",
      "proof.cred.6": "<strong>දත්ත විශ්ලේෂණ වෘත්තිකයෙකු ලෙස</strong> ව්‍යාපාර සඳහා ප්‍රායෝගික පද්ධති නිර්මාණය",

      "proof.pubs.title": "තෝරාගත් පර්යේෂණ සහ ප්‍රකාශන",
      "pub.1": "<em>Applicability of Green Certification Systems for Domestic Construction Projects in Sri Lanka</em> FARU පර්යේෂණ සම්මන්ත්‍රණ ප්‍රකාශනය 2022",
      "pub.2": "<em>Adoption of 3D Printing Technology in Sri Lanka's Construction Industry</em> FARU පර්යේෂණ සම්මන්ත්‍රණ ප්‍රකාශනය 2022",
      "pub.3": "<em>Minimizing Concrete Wastage Using Lean Construction Techniques</em> ලෝක ඉදිකිරීම් සම්මන්ත්‍රණය 2018",
      "pub.4": "2018 සිට 2025 දක්වා කාලය තුළ IQSSL තාක්ෂණික සැසිවාර සහ TVET ජාත්‍යන්තර සම්මන්ත්‍රණය මෙන්ම SICET SLAAS සහ ICSBE යන සම්මන්ත්‍රණයන්හිදී තවත් පර්යේෂණ පත්‍රිකා රැසක් ඉදිරිපත් කර ඇත.",
      "proof.mem": "<strong>වෘත්තීය සාමාජිකත්වයන්</strong> ශ්‍රී ලංකා ප්‍රමාණ සමීක්ෂකයින්ගේ ආයතනයේ තාක්ෂණික සාමාජික සහ ශ්‍රී ලංකා විද්‍යාභිවර්ධන සංගමයේ සාමාජික",

      "band1.tag": "ප්‍රායෝගික නිදසුන්",
      "band1.title": "නිවැරදි පෙරදැක්මකින් සැලසුම් කිරීම",
      "band1.text": "අනාගත ඉල්ලුම වෙනස් විය හැකි ආකාර දහස් ගණනක් දත්ත ආකෘති මගින් පරීක්ෂා කෙරෙන බැවින් අනුමාන මත නොරැඳී නිවැරදි අවබෝධයකින් යුතුව නව වෙළෙඳපොළකට පිවිසීමට හෝ තොග ඇණවුම් කිරීමට අවස්ථාව ලැබේ.",
      "band.note": "මේවා සැබෑ ව්‍යාපෘති සඳහා සකස් කළ විශ්ලේෂණ වන අතර සේවාදායකයින්ගේ සියලු තොරතුරු පූර්ණ රහස්‍යභාවයකින් යුතුව ආරක්ෂා කෙරේ.",
      "band2.tag": "ප්‍රායෝගික නිදසුන්",
      "band2.title": "ආදායම් රටාව කල්තියා හඳුනා ගැනීම",
      "band2.text": "පුරෝකථනය කළ ආදායම් පරාසයට සාපේක්ෂව සැබෑ ආදායම දිනපතා පරීක්ෂා කෙරෙන බැවින් ව්‍යාපාරයේ ගමන්මඟ සහ අනපේක්ෂිත වෙනස්කම් කල්තියා හඳුනාගෙන නිසි පියවර ගැනීමට හැකි වේ.",
      "band3.tag": "ප්‍රායෝගික නිදසුන්",
      "band3.title": "විධිමත් ණය පාලනය",
      "band3.text": "ලබා දෙන ණය මුදල් සහ මාසිකව නැවත අයකර ගන්නා මුදල් අතර පරතරය නිරන්තරයෙන් පරීක්ෂා කෙරෙන බැවින් අයවිය යුතු ණය ප්‍රමාණය පාලනයෙන් ගිලිහී යාම වළක්වා ගත හැකිය.",
      "band4.tag": "ප්‍රායෝගික නිදසුන්",
      "band4.title": "නිවැරදි තොග ප්‍රමාණයන් ඇණවුම් කිරීම",
      "band4.text": "එක් එක් භාණ්ඩය සඳහා ඉල්ලුම පුරෝකථනය කරන බැවින් අලෙවිය අඩු භාණ්ඩ වෙනුවෙන් අනවශ්‍ය ලෙස මුදල් සිරවීම වළක්වා අවශ්‍ය ප්‍රමාණය පමණක් නිවැරදිව ඇණවුම් කළ හැකිය.",

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
      "about.title": "ප්‍රමුදිත කූමසාරු",
      "about.p1": "වසර දහයකට වැඩි කාලයක් SLIIT ආයතනයේ විශ්වවිද්‍යාල කථිකාචාර්යවරයෙකු ලෙස කටයුතු කරන අතර මෙහෙයුම් හා පිරිවැය කළමනාකරණ ක්ෂේත්‍රයන්හි ජ්‍යෙෂ්ඨ තනතුරු හොබවා ඇත. එම ශාස්ත්‍රීය දැනුම සහ ප්‍රායෝගික ව්‍යාපාරික අත්දැකීම් එක් කරමින් ව්‍යාපාර උපදේශන කටයුතු සිදු කෙරේ.",
      "about.p2": "කොළඹ විශ්වවිද්‍යාලයෙන් ලබාගත් ව්‍යාපාර අධ්‍යයනපති උපාධිය සහ ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාවට අමතරව ව්‍යාපාර රැසක් සඳහා ප්‍රායෝගික දත්ත විශ්ලේෂණ සහ ස්වයංක්‍රීයකරණ පද්ධති නිර්මාණය කර ඇත.",
      "about.p3": "ව්‍යාපාරය හොඳින් අවබෝධ කර ගැනීමත් දත්ත මත පමණක් පදනම් වීමත් කාලය හා මුදල් ඉතිරි කරන ප්‍රායෝගික විසඳුමක් ලබා දීමත් මෙහි මූලික ප්‍රතිපත්තියයි.",
      "about.cta": "සම්බන්ධ කරගත හැකි තොරතුරු",

      "contact.eyebrow": "අවශ්‍ය වූ විටෙක",
      "contact.title": "සම්බන්ධ කරගත හැකි තොරතුරු",
      "contact.sub": "ඔබේ ව්‍යාපාරික කටයුත්තක් සඳහා මෙවැනි උපදේශන සේවාවක අවශ්‍යතාව මතු වූ ඕනෑම අවස්ථාවක පහත මාධ්‍යයන් ඔස්සේ සම්බන්ධ විය හැකිය.",
      "contact.wa": "WhatsApp +94 77 772 8081",
      "contact.or": "අවශ්‍ය විටෙක පහත තොරතුරු සටහන් කර WhatsApp හරහා පණිවිඩයක් යොමු කළ හැකිය",
      "contact.email": "විද්‍යුත් තැපෑල",
      "form.name": "නම",
      "form.biz": "ව්‍යාපාරයේ නම හෝ ස්වභාවය",
      "form.area": "ඔබ සිටින ප්‍රදේශය",
      "form.msg": "කෙටි සටහනක්",
      "form.submit": "පණිවිඩය යොමු කරන්න",
      "goal.label": "වැඩිදියුණු කිරීමට කැමති අංශය",
      "goal.opt0": "කැමති නම් එකක් තෝරන්න",
      "goal.opt1": "විකුණුම් සහ ආදායම",
      "goal.opt2": "ක්‍රියාවලි සහ ස්වයංක්‍රීයකරණය",
      "goal.opt3": "නව වෙළෙඳපොළ සහ බෙදාහැරීම",
      "goal.opt4": "දත්ත සහ වාර්තා",
      "goal.opt5": "වෙනත් කරුණක්",
      "float.status": "WhatsApp හරහා පිළිතුරු දෙයි",
      "float.sub": "කරුණු කිහිපයක් සටහන් කළ විට ඔබේ පණිවිඩය සමඟ WhatsApp විවෘත වේ",
      "float.send": "WhatsApp විවෘත කරන්න",

      "footer.role": "ශ්‍රී ලංකාවේ ව්‍යාපාර විශ්ලේෂණ සහ වෙළෙඳපොළ ව්‍යාප්ති උපදේශක",
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

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var val = dict[el.getAttribute("data-i18n-ph")];
      if (val != null) el.setAttribute("placeholder", val);
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
      ".proof-pubs, .band-eyebrow, .band-title, .band-text, .band-figure, .about-photo, .about-copy, .contact-form, .contact-email";
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
      document.querySelectorAll(".band-figure img").forEach(function (img) {
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

    function val(id) {
      var el = document.getElementById(id);
      return el ? (el.value || "").trim() : "";
    }
    function goalText(id) {
      var el = document.getElementById(id);
      if (!el || !el.value) return "";
      return (el.options[el.selectedIndex].text || "").trim();
    }

    function buildMessage(f) {
      var lines;
      if (currentLang === "si") {
        lines = ["ආයුබෝවන් ප්‍රමුදිත."];
        if (f.name) lines.push("නම " + f.name);
        if (f.biz) lines.push("ව්‍යාපාරය " + f.biz);
        if (f.area) lines.push("ප්‍රදේශය " + f.area);
        if (f.goal) lines.push("අවශ්‍යතාව " + f.goal);
        lines.push(f.msg || "ව්‍යාපාරික කටයුත්තක් සම්බන්ධයෙන් තොරතුරු දැනගැනීමට කැමැත්තෙමි.");
      } else {
        lines = ["Hello Pramuditha"];
        if (f.name) lines.push("My name is " + f.name + ".");
        if (f.biz) lines.push("My business is " + f.biz + ".");
        if (f.area) lines.push("I am based in " + f.area + ".");
        if (f.goal) lines.push("I would like help with " + f.goal + ".");
        lines.push(f.msg || "I would like to talk about my business.");
      }
      return lines.join("\n");
    }

    function openWa(msg) {
      var win = window.open(waLink(msg), "_blank");
      if (win) { try { win.opener = null; } catch (e) {} }
    }

    var form = document.getElementById("waForm");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      openWa(buildMessage({
        name: val("cName"), biz: val("cBiz"), area: val("cArea"),
        goal: goalText("cGoal"), msg: val("cMsg")
      }));
    });

    // Floating WhatsApp panel
    var waFloat = document.getElementById("waFloat");
    var waFab = document.getElementById("waFab");
    var waClose = document.getElementById("waPanelClose");
    var waPanel = document.getElementById("waPanel");
    if (waFloat && waFab) {
      var setPanel = function (open) {
        waFloat.classList.toggle("open", open);
        waFab.setAttribute("aria-expanded", open ? "true" : "false");
        if (waPanel) waPanel.setAttribute("aria-hidden", open ? "false" : "true");
        if (open) { var fn = document.getElementById("fName"); if (fn) fn.focus(); }
      };
      waFab.addEventListener("click", function () { setPanel(!waFloat.classList.contains("open")); });
      if (waClose) waClose.addEventListener("click", function () { setPanel(false); });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && waFloat.classList.contains("open")) setPanel(false);
      });
      var floatForm = document.getElementById("waFloatForm");
      if (floatForm) floatForm.addEventListener("submit", function (e) {
        e.preventDefault();
        openWa(buildMessage({
          name: val("fName"), biz: val("fBiz"), area: "",
          goal: goalText("fGoal"), msg: val("fMsg")
        }));
        setPanel(false);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
