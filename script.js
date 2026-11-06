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

      "bridge.label": "A separate learning programme for children aged 3–6",
      "bridge.copy": "Sinhala mathematics games designed for children and parents to use together.",
      "bridge.cta": "Visit the programme <span aria-hidden=\"true\">→</span>",

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
      "hero.card.cred5": "Currently reading for a PhD",

      "trust.1a": "Strictly Confidential", "trust.1b": "Every detail you share stays private and is never passed on",
      "trust.2a": "Free First Conversation", "trust.2b": "The first conversation carries no cost and no obligation",
      "trust.3a": "English and Sinhala", "trust.3b": "Comfortable working in whichever language suits you best",
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
      "proof.cred.4": "<strong>Reading for a PhD</strong> and active in peer reviewed research and academic symposia",
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
      "about.p1": "I have spent more than ten years teaching at university and holding senior roles in industry and I bring both of those worlds to the way I work with you.",
      "about.p2": "That background matters less than what it lets me do which is to look past the noise and show you clearly what your own numbers are telling you about your business.",
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
      "form.rev": "Monthly revenue (optional)",
      "form.msg": "What is on your mind",
      "form.submit": "Send it whenever you are ready",
      "goal.label": "What you would like to improve",
      "goal.opt0": "Choose one if you like",
      "goal.opt1": "Sales and revenue",
      "goal.opt2": "Processes and automation",
      "goal.opt3": "New markets and distribution",
      "goal.opt4": "Data and reports",
      "goal.opt5": "Something else",
      "rev.label": "Monthly revenue if you wish",
      "rev.opt0": "Prefer not to say",
      "rev.opt1": "Below Rs 250,000",
      "rev.opt2": "Rs 250,000 to 1 million",
      "rev.opt3": "Rs 1 million to 5 million",
      "rev.opt4": "Above Rs 5 million",
      "float.status": "Replies on WhatsApp",
      "float.sub": "Share a few details and WhatsApp will open with your note already prepared",
      "float.hint": "Share only what you are comfortable with and every detail you send stays private",
      "float.send": "Open WhatsApp",

      "footer.role": "Business Analysis and Market Expansion Consultant in Sri Lanka",
      "footer.wa": "WhatsApp +94 77 772 8081",
      "footer.insights": "Insights",
      "footer.copy": "© {year} Pramuditha Coomasaru. All rights reserved.",

      "_waDefault": "Hello Pramuditha I would like to talk about my business."
    },

    si: {
      "brand.role": "ව්‍යාපාර විශ්ලේෂණ සහ වෙළෙඳපොළ ව්‍යාප්ති උපදේශක",
      "nav.services": "සේවාවන්",
      "nav.approach": "ක්‍රියාපිළිවෙත",
      "nav.proof": "සාක්ෂි හා ප්‍රතිඵල",
      "nav.about": "මා පිළිබඳව",
      "nav.contact": "සම්බන්ධ වන්න",

      "bridge.label": "වයස අවුරුදු 3–6 දරුවන් සඳහා වෙනම ඉගෙනුම් වැඩසටහනක්",
      "bridge.copy": "දෙමාපියන් සමඟ එක්ව භාවිත කිරීමට සැකසූ සිංහල ගණිත ක්‍රීඩා මාලාවකි.",
      "bridge.cta": "වැඩසටහන වෙත පිවිසෙන්න <span aria-hidden=\"true\">→</span>",

      "hero.eyebrow": "ශ්‍රී ලංකාවේ ව්‍යවසායකයින් සහ සුළු හා මධ්‍ය පරිමාණ (SME) ව්‍යාපාර හිමියන් වෙනුවෙන්",
      "hero.title": "ඔබේ ව්‍යාපාරික දත්ත සහ එදිනෙදා මෙහෙයුම්, නිවැරදි තීරණ සහ මැනිය හැකි ස්ථාවර වර්ධනයක් බවට පත් කරගන්න.",
      "hero.lead": "ව්‍යාපාරයේ දියුණුවට බාධා වන ගැටලු හඳුනා ගැනීමටත්, ක්‍රියාවලීන් විධිමත් කර නව වෙළෙඳපොළ අවස්ථා විවර කර ගැනීමටත්, සැබෑ සාක්ෂි සහ දත්ත මත පදනම්ව මඟපෙන්වන වෘත්තීය උපදේශන සේවාවකි.",
      "hero.cta1": "සම්බන්ධ වන්න",
      "hero.cta2": "සේවාවන් පිළිබඳ විස්තර",
      "hero.card.role": "ව්‍යාපාර සහ වෙළෙඳපොළ ව්‍යාප්ති උපදේශක",
      "hero.card.cred1": "SLIIT විශ්වවිද්‍යාලයේ වසර 10කට වැඩි කථිකාචාර්ය පළපුරුද්ද",
      "hero.card.cred2": "කොළඹ විශ්වවිද්‍යාලයෙන් ව්‍යාපාර අධ්‍යයනපති (MBS) උපාධිය",
      "hero.card.cred3": "ව්‍යාපාර කළමනාකරණය පිළිබඳ පශ්චාත් උපාධි ඩිප්ලෝමාව",
      "hero.card.cred4": "ශ්‍රී ලංකා ප්‍රමාණ සමීක්ෂක ආයතනයේ (IQSSL) තාක්ෂණික සාමාජික සහ පර්යේෂක",
      "hero.card.cred5": "ආචාර්ය උපාධි (PhD) අපේක්ෂක",

      "trust.1a": "පූර්ණ රහස්‍යභාවය", "trust.1b": "ඔබ සාකච්ඡා කරන සියලු තොරතුරු උපරිම රහස්‍යභාවයකින් යුතුව ආරක්ෂා කෙරේ",
      "trust.2a": "නොමිලේ මූලික සාකච්ඡාව", "trust.2b": "මූලික සාකච්ඡාව සඳහා කිසිදු ගාස්තුවක් හෝ බැඳීමක් අය නොකෙරේ",
      "trust.3a": "සිංහල සහ ඉංග්‍රීසි භාෂා", "trust.3b": "ඔබට පහසු ඕනෑම භාෂාවකින් සුහදව කටයුතු කිරීමේ හැකියාව",
      "trust.4a": "දත්ත මත පදනම් වූ", "trust.4b": "සෑම නිර්දේශයක්ම නිවැරදි සංඛ්‍යාලේඛන හා සාක්ෂි මඟින් තහවුරු කෙරේ",

      "problem.title": "ඔබේ ව්‍යාපාරයේදීත් මෙවැනි ගැටලු අත්විඳ තිබේද?",
      "problem.1": "උදෑසන සිට රාත්‍රිය වනතුරු වෙහෙස මහන්සි වී වැඩ කළත්, සැබෑ ලෙසම ලාභ උපදවන්නේ කුමන භාණ්ඩ, අලෙවිසල් හෝ පාරිභෝගිකයන්ගෙන්ද යන්න නිශ්චිතව කිව නොහැකි වීම.",
      "problem.2": "දත්ත පද්ධතිවල හෝ ගිණුම් පොත්වල සටහන් තිබුණද, ව්‍යාපාරයේ සැබෑ මූල්‍ය තත්ත්වය පැහැදිලි වන විට මාසය අවසන් වී කල් ගත වී තිබීම.",
      "problem.3": "පාරිභෝගිකයන්ගෙන් අයවිය යුතු ණය මුදල් දිනෙන් දින ඉහළ යාම සහ ඒවා අයකර ගැනීමට වෙහෙසීම නිසා, අලෙවිකරණයට සහ ව්‍යාපාර ප්‍රවර්ධනයට යෙදවිය යුතු වටිනා කාලය වැය වීම.",
      "problem.4": "නව ප්‍රදේශයකට ව්‍යාපාරය ව්‍යාප්ත කිරීමට හෝ නව නිෂ්පාදනයක් හඳුන්වා දීමට අවස්ථා තිබුණද, ආරම්භ කළ යුතු නිවැරදි පියවර කුමක්දැයි තීරණය කරගත නොහැකි වීම.",
      "problem.5": "ව්‍යාපාරයේ සියලු තීන්දු තීරණ ඔබ මතම පමණක් රඳා පැවතීම නිසා, ඔබ නොමැති අවස්ථාවකදී දෛනික මෙහෙයුම් අඩාල වේ යැයි නිතර සිතට බියක් දැනීම.",
      "problem.close": "වර්ධනය වන ඕනෑම ව්‍යාපාරයකට මෙවැනි අභියෝග සාමාන්‍ය දෙයකි. සාර්ථක ව්‍යාපාරිකයන් කරන්නේ මේවා බරපතළ පාඩුවක් බවට පත්වීමට පෙර, නිවැරදි දත්ත සහ ක්‍රමවේද මඟින් නිරාකරණය කර ගැනීමයි.",

      "services.eyebrow": "සැපයෙන සේවාවන්",
      "services.title": "සේවාවන්",
      "services.sub": "ව්‍යාපාරය වඩාත් ශක්තිමත් සහ ලාභදායී මට්ටමකට ගෙන ඒම සඳහා ප්‍රධාන අංශ හතරක් යටතේ ප්‍රායෝගික විසඳුම් සම්පාදනය කෙරෙන අතර, ඒ සෑම අංශයකින්ම ඔබට භාවිතයට ගත හැකි පැහැදිලි ප්‍රතිඵලයක් හිමි වේ.",
      "svc.deliver": "ඔබට ලැබෙන අවසන් ප්‍රතිඵලය:",
      "svc.1.title": "ව්‍යාපාර විශ්ලේෂණය සහ ක්‍රියාවලි ස්වයංක්‍රීයකරණය",
      "svc.1.body": "ඔබේ ව්‍යාපාරයේ සැබෑ ක්‍රියාකාරීත්වය අධ්‍යයනය කර, නොදැනුවත්වම කාලය හා මුදල් අපතේ යන අවහිරතා (bottlenecks) හඳුනා ගනිමි. අනතුරුව කාර්ය ප්‍රවාහයන් ප්‍රතිසංවිධානය කර, ඇණවුම්, තොග හා ණය පාලනය ඇතුළු එදිනෙදා පුනරාවර්තී රාජකාරි ස්වයංක්‍රීය කිරීමට මඟපෙන්වමි.",
      "svc.1.deliver": "පැහැදිලි ක්‍රියාවලි සැලැස්මක් (process map), මෙහෙයුම් අවහිරතා වාර්තාවක් සහ පියවරෙන් පියවර ක්‍රියාත්මක කළ හැකි ප්‍රායෝගික ස්වයංක්‍රීයකරණ සැලැස්මකි.",
      "svc.2.title": "වෙළෙඳපොළ ව්‍යාප්තිය සහ බෙදාහැරීමේ ජාලය",
      "svc.2.body": "නව වෙළෙඳපොළ සහ ප්‍රදේශ වෙත පිවිසීම, අලෙවි නියෝජිත ජාලය ගොඩනැගීම හෝ ශක්තිමත් කිරීම මෙන්ම, ඉහළම ප්‍රතිලාභයක් අත්කරගත හැකි ක්ෂේත්‍ර තෝරාගැනීම සඳහා පිරිවැය සහ ප්‍රතිලාභ ගණනය කළ විධිමත් උපායමාර්ගික සැලැස්මක් සකස් කර දෙනු ලැබේ.",
      "svc.2.deliver": "පැහැදිලි අලෙවි ඉලක්ක සහ ප්‍රමුඛතා ඇතුළත්, ක්‍රියාවට නැංවිය හැකි වෙළෙඳපොළ ප්‍රවේශ හා බෙදාහැරීමේ කලාප සැලැස්මකි.",
      "svc.3.title": "අලෙවි සහ දත්ත විශ්ලේෂණය",
      "svc.3.body": "ඔබේ බිල්පත් සහ අලෙවි දත්ත විශ්ලේෂණය කර, ඉහළම ලාභයක් ගෙනෙන පාරිභෝගිකයන් කවුරුන්ද, සැබැවින්ම අලෙවි වන නිෂ්පාදන මොනවාද සහ ලාභය අඩුවන (margin leakage) තැන් මොනවාද යන්න පැහැදිලි දත්ත පුවරු (dashboards) හරහා නිරවුල්ව පෙන්වා දෙමි.",
      "svc.3.deliver": "අලෙවි සහ තොග පාලන තොරතුරු පුවරුවක් (dashboard) සමඟින්, ඕනෑම කෙනෙකුට පහසුවෙන් තේරුම්ගත හැකි සරල බසින් සකස් කළ විශ්ලේෂණ වාර්තාවකි.",
      "svc.4.title": "ශක්‍යතා අධ්‍යයන සහ ව්‍යාපාර සැලසුම්",
      "svc.4.body": "නව ව්‍යාපෘතියක් හෝ ආයෝජනයක් ආරම්භ කිරීමට පෙර එහි සැබෑ ලාභදායීත්වය තහවුරු කර දෙන අතර, බැංකුවකට, ආයෝජකයෙකුට හෝ ව්‍යාපාරික හවුල්කරුවෙකුට ඉදිරිපත් කළ හැකි ශක්තිමත් ව්‍යාපාරික යෝජනාවලියක් සකස් කර දෙමි.",
      "svc.4.deliver": "මූල්‍ය ආයතන හෝ ආයෝජකයන් පිළිගන්නා මට්ටමේ පූර්ණ ශක්‍යතා අධ්‍යයන වාර්තාවක් සහ විධිමත් ව්‍යාපාර සැලැස්මකි (Business Plan).",

      "strengths.eyebrow": "සුවිශේෂීත්වය",
      "strengths.title": "ප්‍රධාන ශක්තීන්",
      "str.1.t": "පර්යේෂණාත්මක ප්‍රවේශය",
      "str.1.b": "විශ්වවිද්‍යාල පර්යේෂකයෙකු ලෙස, හුදු අනුමාන මත නොරැඳී සැබෑ දත්ත සහ සාධක මඟින් ඕනෑම කරුණක් තහවුරු කර ගැනීමේ ක්‍රමවේදය.",
      "str.2.t": "ගැඹුරු දත්ත විශ්ලේෂණය",
      "str.2.b": "අලෙවි හා මූල්‍ය දත්ත පරීක්ෂා කර, බැලූ බැල්මට නොපෙනෙන ව්‍යාපාරික රටා හා ප්‍රවණතා හඳුනාගෙන නිවැරදි තීරණ මතු කර ගැනීමේ හැකියාව.",
      "str.3.t": "ප්‍රායෝගික පළපුරුද්ද",
      "str.3.b": "වසර දහයකට අධික ක්ෂේත්‍ර හා ශාස්ත්‍රීය අත්දැකීම් තුළින්, ව්‍යාපාරයකට සැබවින්ම ප්‍රයෝජනවත් වන ප්‍රායෝගික දත්ත පද්ධති ගොඩනැගීමේ පළපුරුද්ද.",
      "str.4.t": "ව්‍යාපාර ව්‍යාප්තිය පිළිබඳ දැනුම",
      "str.4.b": "නව වෙළෙඳපොළ ප්‍රවේශය, බෙදාහැරීමේ ජාල පුළුල් කිරීම සහ දැනටමත් සාර්ථක අංශ තවදුරටත් වර්ධනය කිරීම සඳහා වන ප්‍රායෝගික උපායමාර්ග.",

      "approach.eyebrow": "සරල සහ ප්‍රායෝගික ක්‍රමවේදය",
      "approach.title": "මා ක්‍රියාත්මක වන ආකාරය",
      "step.1.title": "හඳුනා ගැනීම",
      "step.1.body": "කිසිදු ගාස්තුවක් හෝ බැඳීමකින් තොරව, ඔබේ ව්‍යාපාරයේ ස්වභාවය, අරමුණු සහ පවතින ගැටලු පිළිබඳව මූලිකව සාකච්ඡා කර අවබෝධ කර ගැනීම.",
      "step.2.title": "ගැටලු විශ්ලේෂණය",
      "step.2.body": "ව්‍යාපාරික දත්ත සහ ක්‍රියාවලීන් ගැඹුරින් අධ්‍යයනය කර, හුදු මතයන් වෙනුවට පැහැදිලි සාක්ෂි සහිතව සැබෑ මූලික ගැටලු (root causes) හඳුනා ගැනීම.",
      "step.3.title": "නිර්දේශ ලබා දීම",
      "step.3.body": "වෙනස් කළ යුතු අංශ, ඒවා කළ යුතු අනුපිළිවෙළ සහ ඉන් අත්වන මූල්‍ය ප්‍රතිලාභ පැහැදිලිව දැක්වෙන ප්‍රායෝගික සැලැස්මක් සරල බසින් ඉදිරිපත් කිරීම.",
      "step.4.title": "ක්‍රියාත්මක කිරීම සහ ප්‍රතිඵල මැනීම",
      "step.4.body": "නිර්දේශිත වෙනස්කම් සාර්ථකව ක්‍රියාවට නැංවීමට සහාය වෙමින්, යෙදවූ පිරිවැයට සරිලන ඉහළ ප්‍රතිඵල ලැබී ඇති බව දත්ත මඟින් එකට මැන බැලීම.",

      "proof.eyebrow": "වෘත්තීය විශ්වසනීයත්වය",
      "proof.title": "ප්‍රායෝගික අත්දැකීම් සහ සාක්ෂි",
      "proof.case.title": "දිවයින පුරා ක්‍රියාත්මක බෙදාහැරීමේ ජාලයක් සඳහා සිදු කළ ව්‍යාපෘතියක්",
      "proof.case.body": "සිල්ලර වෙළෙඳසැල් සිය ගණනක් ආවරණය කරමින් දිවයිනේ දිස්ත්‍රික්ක රැසක ක්‍රියාත්මක වන ප්‍රමුඛ පෙළේ බෙදාහැරීමේ සමාගමක අලෙවි සහ ණය දත්ත රැස්කිරීමේ ක්‍රියාවලිය මෑතකදී මා විසින් ප්‍රතිසංවිධානය කරන ලදී. එහිදී ප්‍රවාහන මාර්ග සැලසුම් කිරීම, ඇණවුම් ක්‍රියාවලිය, ණය පාලනය සහ මුදල් එකතු කිරීම සඳහා ස්වයංක්‍රීය සැලැස්මක් හඳුන්වා දුන් අතර, මාසය අවසන් වනතුරු නොසිට එදිනෙදාම කළමනාකාරීත්ව තීරණ ගත හැකි සජීවී තොරතුරු පුවරු (dashboards) පද්ධතියක් නිර්මාණය කරන ලදී.",
      "proof.point.1": "විශ්වසනීය අලෙවි සහ ණය දත්ත පද්ධතියක්",
      "proof.point.2": "පූර්ණ ක්‍රියාවලි ස්වයංක්‍රීයකරණ සැලැස්මක්",
      "proof.point.3": "එදිනෙදා ක්ෂණික තීරණ ගැනීම සඳහා කළමනාකරණ තොරතුරු පුවරු",
      "proof.confidential": "සේවාලාභීන්ගේ සහ ව්‍යාපාරයන්ගේ සියලු තොරතුරු උපරිම රහස්‍යභාවයකින් යුතුව සුරක්ෂිතව තබා ගැනේ.",
      "proof.cred.title": "ශාස්ත්‍රීය සහ වෘත්තීය පසුබිම",
      "proof.cred.1": "<strong>විශ්වවිද්‍යාල කථිකාචාර්ය</strong> SLIIT ආයතනයේ වසර දහයකට වැඩි ඉගැන්වීම් පළපුරුද්ද",
      "proof.cred.2": "<strong>ව්‍යාපාර අධ්‍යයනපති (MBS) උපාධිය</strong> කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.3": "<strong>ව්‍යාපාර කළමනාකරණ පශ්චාත් උපාධි ඩිප්ලෝමාව</strong> කොළඹ විශ්වවිද්‍යාලය",
      "proof.cred.4": "<strong>ආචාර්ය උපාධි (PhD) අපේක්ෂක</strong> ජාතික හා ජාත්‍යන්තර පර්යේෂණ ප්‍රකාශන රැසක කතුවරයෙකි",
      "proof.cred.5": "<strong>ක්ෂේත්‍රයේ ජ්‍යෙෂ්ඨ පළපුරුද්ද</strong> මෙහෙයුම් හා පිරිවැය කළමනාකරණ අංශයන්හි අත්දැකීම්",
      "proof.cred.6": "<strong>දත්ත විශ්ලේෂණ විශේෂඥ දැනුම</strong> ව්‍යාපාර සඳහා ප්‍රායෝගික දත්ත පද්ධති නිර්මාණය",

      "proof.pubs.title": "තෝරාගත් පර්යේෂණ සහ ප්‍රකාශන",
      "pub.1": "<em>Applicability of Green Certification Systems for Domestic Construction Projects in Sri Lanka</em> FARU පර්යේෂණ සම්මන්ත්‍රණ ප්‍රකාශනය (2022)",
      "pub.2": "<em>Adoption of 3D Printing Technology in Sri Lanka's Construction Industry</em> FARU පර්යේෂණ සම්මන්ත්‍රණ ප්‍රකාශනය (2022)",
      "pub.3": "<em>Minimizing Concrete Wastage Using Lean Construction Techniques</em> ලෝක ඉදිකිරීම් සම්මන්ත්‍රණය (2018)",
      "pub.4": "2018 සිට 2025 දක්වා කාලය තුළ IQSSL තාක්ෂණික සැසිවාර, TVET ජාත්‍යන්තර සම්මන්ත්‍රණය මෙන්ම SICET, SLAAS සහ ICSBE යන සම්මන්ත්‍රණයන්හිදී ඉදිරිපත් කරන ලද තවත් පර්යේෂණ පත්‍රිකා රැසකි.",
      "proof.mem": "<strong>වෘත්තීය සාමාජිකත්වයන්:</strong> ශ්‍රී ලංකා ප්‍රමාණ සමීක්ෂකයින්ගේ ආයතනයේ (IQSSL) තාක්ෂණික සාමාජික සහ ශ්‍රී ලංකා විද්‍යාභිවර්ධන සංගමයේ (SLAAS) සාමාජික",

      "work.eyebrow": "විශ්ලේෂණ නිර්මාණ",
      "work.title": "මා විසින් ගොඩනගන දත්ත පද්ධති පිළිබඳ පෙරදසුනක්",
      "work.sub": "සේවාලාභීන්ගේ රහස්‍යභාවය පූර්ණ ලෙස සුරකිමින්, ඉල්ලුම පුරෝකථනය, තොග හිඟවීම වැළැක්වීම, ණය පාලනය සහ පාරිභෝගික හැසිරීම් විශ්ලේෂණය සඳහා සැබෑ ව්‍යාපෘති වෙනුවෙන් නිර්මාණය කළ මෙවලම් කිහිපයක් මෙන්න.",
      "work.cap1": "අනපේක්ෂිත වෙනස්කම් කල්තියා හඳුනාගැනීම සඳහා පුරෝකථන පරාසයක් සමඟ ආදායම් වර්ධනය නිරීක්ෂණය කිරීම",
      "work.cap2": "නැවත ඇණවුම් කිරීමට ගතවන කාලය හා තොග අවසන් විය හැකි දිනය පුරෝකථනය කරන වක්‍රය",
      "work.cap3": "අනාගත ඉල්ලුම් රටා 2000ක් ආශ්‍රයෙන් නැවත ඇණවුම් කළ යුතු නිවැරදි කාලය දැක්වෙන ආදර්ශනය",
      "work.cap4": "සාමාන්‍ය දෛනික අලෙවිය සහ විශාල තොග ඇණවුම් වෙන් වෙන්ව හඳුනාගැනීමේ ඉල්ලුම් ආදර්ශනය",
      "work.cap5": "සුදුසුම නැවත ඇණවුම් ප්‍රමාණය තීරණය කිරීමට සෑම භාණ්ඩයක් සඳහාම සකස් කළ ඉල්ලුම් පුරෝකථන පරාසය",
      "work.cap6": "නව පාරිභෝගිකයින් සහ නැවත පැමිණි පාරිභෝගිකයින්ගේ දෛනික ඉල්ලුම සංසන්දනය",
      "work.cap7": "බිල්පත් නිකුත් කිරීමේ වාර ගණන සහ ඉන් ලැබුණු ආදායම සාමාන්‍ය මිණුම්දණ්ඩ සමඟ සංසන්දනය කිරීම",
      "work.cap8": "පාරිභෝගිකයන්ට ලබාදුන් ණය මුදල් සහ මාසිකව නැවත අයකරගත් මුදල් නිරීක්ෂණය කිරීම",

      "band1.tag": "ප්‍රායෝගික නිදසුන්",
      "band1.title": "නිවැරදි පෙරදැක්මකින් සැලසුම් කිරීම",
      "band1.text": "අනාගත ඉල්ලුම වෙනස් විය හැකි විවිධ අවස්ථා දහස් ගණනක් දත්ත ආකෘති (demand modeling) මඟින් පරීක්ෂා කර බැලිය හැකි බැවින්, හුදු අනුමාන මත නොරැඳී, නිවැරදි අවබෝධයකින් යුතුව නව වෙළෙඳපොළකට පිවිසීමට හෝ විශාල තොග ඇණවුම් කිරීමට ඔබට හැකියාව ලැබේ.",
      "band.note": "මේවා සැබෑ ව්‍යාපෘති ආශ්‍රයෙන් සකස් කරන ලද විශ්ලේෂණ වන අතර, සේවාලාභීන්ගේ සියලු තොරතුරු පූර්ණ රහස්‍යභාවයකින් යුතුව සුරක්ෂිතව තබා ඇත.",
      "band2.tag": "ප්‍රායෝගික නිදසුන්",
      "band2.title": "ආදායම් රටාව කල්තියා හඳුනා ගැනීම",
      "band2.text": "පුරෝකථනය කළ ආදායම් ඉලක්කයන්ට සාපේක්ෂව සැබෑ ආදායම් රටාව නිරන්තරයෙන් නිරීක්ෂණය කෙරෙන බැවින්, ව්‍යාපාරයේ සැබෑ වේගය හා අනපේක්ෂිත පසුබෑමක් කල්තියා හඳුනාගෙන නිසි පියවර ගැනීමට ඔබට අවස්ථාව ලැබේ.",
      "band3.tag": "ප්‍රායෝගික නිදසුන්",
      "band3.title": "විධිමත් ණය පාලනය",
      "band3.text": "පාරිභෝගිකයන්ට ලබාදෙන ණය මුදල් සහ මාසිකව අයකර ගන්නා මුදල් අතර පරතරය නිරන්තරයෙන් විගණනය කෙරෙන බැවින්, අයවිය යුතු ණය ප්‍රමාණය ඔබේ පාලනයෙන් ගිලිහී යාම වළක්වා ගත හැකිය.",
      "band4.tag": "ප්‍රායෝගික නිදසුන්",
      "band4.title": "නිවැරදි තොග ප්‍රමාණයන් ඇණවුම් කිරීම",
      "band4.text": "සෑම නිෂ්පාදනයක් සඳහාම අනාගත ඉල්ලුම් පරාසයන් ගණනය කර දෙන බැවින්, නිවැරදි ප්‍රමාණය පමණක් ඇණවුම් කිරීමටත්, සෙමින් අලෙවි වන තොග වෙනුවෙන් අනවශ්‍ය ලෙස මුදල් හිරවීම වළක්වා ගැනීමටත් ඔබට හැකි වේ.",

      "why.title": "මා සමඟ වැඩ කළ යුත්තේ ඇයි?",
      "why.1.t": "දේශීය වෙළෙඳපොළ පිළිබඳ මනා අවබෝධය",
      "why.1.b": "ශ්‍රී ලංකාවේ ව්‍යාපාරික පරිසරය සැබැවින්ම ක්‍රියාත්මක වන ආකාරය, අලෙවි නියෝජිත ජාල, ණය ගනුදෙනු සහ ක්ෂේත්‍ර අලෙවිකරණයේ ප්‍රායෝගික අභියෝග පිළිබඳව සිංහල මෙන්ම ඉංග්‍රීසි මාධ්‍යයෙන්ද මට ගැඹුරු අවබෝධයක් ඇත.",
      "why.2.t": "නොමඟ නොයවන අවංක උපදෙස්",
      "why.2.b": "දත්ත මඟින් තහවුරු කළ නොහැකි දේ අතිශයෝක්තියෙන් නොපවසන අතර, ඔබට විශ්වාසයෙන් යුතුව තීරණ ගත හැකි සත්‍ය සහ අවංක නිගමන පමණක් විවෘතව ඉදිරිපත් කරමි.",
      "why.3.t": "පොතට පමණක් සීමා නොවූ ප්‍රායෝගික විසඳුම්",
      "why.3.b": "රාක්කයක දූවිලි වදින ඝන වාර්තා වෙනුවට, ඔබේ කාර්ය මණ්ඩලයට එදිනෙදා වැඩකටයුතුවලදී පහසුවෙන් ක්‍රියාත්මක කළ හැකි පැහැදිලි හා ප්‍රායෝගික ක්‍රියාකාරී සැලසුම් ලබාදෙමි.",
      "why.4.t": "සුළු හා මධ්‍ය පරිමාණ ව්‍යාපාරවලට (SME) සරිලන සේවාවක්",
      "why.4.b": "විශාල උපදේශන සමාගම්වල අධික වියදම් බරින් තොරව, වර්ධනය වන ඔබේ ව්‍යාපාරයට සැබෑ වටිනාකමක් සහ ප්‍රත්‍යක්ෂ ප්‍රතිඵල අත්කරදෙන නම්‍යශීලී උපදේශන සේවාවකි.",

      "about.eyebrow": "මා පිළිබඳව",
      "about.title": "ප්‍රමුදිත කූමසාරු",
      "about.p1": "වසර දහයකට වැඩි විශ්වවිද්‍යාල කථිකාචාර්ය පළපුරුද්ද සහ ඉංජිනේරු මෙන්ම වාණිජ ක්ෂේත්‍රයන්හි ජ්‍යෙෂ්ඨ තනතුරු හොබවමින් ලැබූ ප්‍රායෝගික අත්දැකීම් එක්තැන් කරමින්, ව්‍යාපාරිකයන්ට විශ්වාසයෙන් යුතුව නිවැරදි තීන්දු තීරණ ගැනීමට මම සහාය වෙමි.",
      "about.p2": "එම සුවිශේෂී පසුබිම නිසා, ව්‍යාපාරයක එදිනෙදා කාර්යබහුලත්වය සහ අවුල් සහගත බවෙන් ඔබ්බට ගොස්, ව්‍යාපාරයේ දියුණුවට සැබවින්ම බලපාන ප්‍රධාන සාධක සහ දත්ත නිරවුල්ව හඳුනාගැනීමට මට හැකියාව ඇත.",
      "about.p3": "පළමුව සේවාලාභියාට හොඳින් සවන්දීම, හුදු අදහස් මත නොව සැබෑ දත්ත මත පමණක් පදනම් වීම සහ උපදේශන සේවාව අවසන් වූ පසුවත් දිගුකාලීනව භාවිත කළ හැකි මෙවලම් හා පැහැදිලි මඟපෙන්වීමක් ලබාදීම මගේ මූලික ප්‍රතිපත්තියයි.",
      "about.cta": "සම්බන්ධ වන්න",

      "contact.eyebrow": "විමසීම්",
      "contact.title": "සම්බන්ධ වන්න",
      "contact.sub": "ඔබේ ව්‍යාපාරය සම්බන්ධයෙන් සාකච්ඡා කිරීමට හෝ වැඩිදුර විස්තර දැනගැනීමට පහත සන්නිවේදන මාර්ග ඔස්සේ ඕනෑම වේලාවක මාව සම්බන්ධ කරගත හැක.",
      "contact.wa": "WhatsApp +94 77 772 8081",
      "contact.or": "නැතහොත් පහත පෝරමය පුරවා WhatsApp ඔස්සේ පණිවිඩයක් එවන්න",
      "contact.email": "විද්‍යුත් තැපෑල (Email)",
      "form.name": "ඔබගේ නම",
      "form.biz": "ව්‍යාපාරයේ නම හෝ ක්ෂේත්‍රය",
      "form.area": "ඔබ සිටින ප්‍රදේශය",
      "form.rev": "මාසික ආදායම (අනිවාර්ය නොවේ)",
      "form.msg": "ඔබගේ අවශ්‍යතාව හෝ විමසීම",
      "form.submit": "WhatsApp පණිවිඩය යොමු කරන්න",
      "goal.label": "වැඩිදියුණු කිරීමට බලාපොරොත්තු වන අංශය",
      "goal.opt0": "අවශ්‍ය නම් තෝරන්න",
      "goal.opt1": "අලෙවිය සහ ආදායම",
      "goal.opt2": "ක්‍රියාවලි සහ ස්වයංක්‍රීයකරණය",
      "goal.opt3": "නව වෙළෙඳපොළ සහ බෙදාහැරීම",
      "goal.opt4": "දත්ත විශ්ලේෂණය සහ වාර්තා",
      "goal.opt5": "වෙනත් කරුණක්",
      "rev.label": "දළ මාසික ආදායම (අවශ්‍ය නම් පමණි)",
      "rev.opt0": "සඳහන් කිරීමට අදහස් නොකරමි",
      "rev.opt1": "රුපියල් 250,000ට අඩු",
      "rev.opt2": "රුපියල් 250,000 සිට මිලියනය දක්වා",
      "rev.opt3": "රුපියල් මිලියන 1 සිට 5 දක්වා",
      "rev.opt4": "රුපියල් මිලියන 5ට වැඩි",
      "float.status": "WhatsApp ඔස්සේ විමසන්න",
      "float.sub": "මූලික තොරතුරු සටහන් කර සෘජුවම WhatsApp හරහා සම්බන්ධ විය හැක",
      "float.hint": "ඔබ ලබාදෙන සියලුම තොරතුරු පූර්ණ රහස්‍යභාවයකින් යුතුව ආරක්ෂා කෙරේ",
      "float.send": "WhatsApp විවෘත කරන්න",

      "footer.role": "ශ්‍රී ලංකාවේ ව්‍යාපාර විශ්ලේෂණ සහ වෙළෙඳපොළ ව්‍යාප්ති උපදේශක",
      "footer.wa": "WhatsApp +94 77 772 8081",
      "footer.insights": "දැනුම සහ ලිපි",
      "footer.copy": "© {year} Pramuditha Coomasaru. සියලුම හිමිකම් ඇවිරිණි.",

      "_waDefault": "ආයුබෝවන් ප්‍රමුදිත, මගේ ව්‍යාපාරික කටයුත්තක් සම්බන්ධයෙන් උපදෙස් ලබාගැනීමට කැමැත්තෙමි."
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
        if (f.rev) lines.push("මාසික ආදායම " + f.rev);
        if (f.goal) lines.push("අවශ්‍යතාව " + f.goal);
        lines.push(f.msg || "ව්‍යාපාරික කටයුත්තක් සම්බන්ධයෙන් තොරතුරු දැනගැනීමට කැමැත්තෙමි.");
      } else {
        lines = ["Hello Pramuditha"];
        if (f.name) lines.push("My name is " + f.name + ".");
        if (f.biz) lines.push("My business is " + f.biz + ".");
        if (f.area) lines.push("I am based in " + f.area + ".");
        if (f.rev) lines.push("My monthly revenue is in the range " + f.rev + ".");
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
        rev: goalText("cRev"), goal: goalText("cGoal"), msg: val("cMsg")
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
          rev: goalText("fRev"), goal: goalText("fGoal"), msg: val("fMsg")
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
