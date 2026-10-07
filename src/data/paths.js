export const PATHS = {
  "cse-ds": {
    degree: "btech",
    branch: "cse",
    title_en: "Data Scientist",
    title_te: "డేటా సైంటిస్ట్",
    tagline_en: "Turn raw data into decisions.",
    tagline_te: "ముడి డేటాను నిర్ణయాలుగా మార్చండి.",
    desc_en: "You'll learn to clean messy data, find patterns, and build models that predict outcomes — from crop yields to customer behaviour. A strong fit if you enjoy maths and asking 'why' about numbers.",
    desc_te: "గజిబిజి డేటాను శుభ్రం చేయడం, ప్యాటర్న్‌లు కనుగొనడం, పంట దిగుబడి నుండి కస్టమర్ ప్రవర్తన వరకు ఫలితాలను అంచనా వేసే మోడళ్లను నిర్మించడం నేర్చుకుంటారు. మీకు గణితం ఇష్టమైతే, సంఖ్యల గురించి 'ఎందుకు' అని అడగడం ఇష్టమైతే ఇది సరైన దారి.",
    timeline_en: "6–9 months of focused study",
    timeline_te: "6–9 నెలల ఫోకస్డ్ స్టడీ",
    salary_en: "₹4.5–9 LPA to start",
    salary_te: "₹4.5–9 LPA ప్రారంభంలో",
    roles: ["Data Analyst", "Junior Data Scientist", "ML Engineer (entry)"],
    recruiters: ["TCS Digital", "Infosys", "Deloitte Analytics", "product startups"],
    skills: ["Python", "Statistics", "Pandas/NumPy", "SQL", "ML basics"],
    nodes: [
      {
        id: "ds1",
        title_en: "Python Foundations",
        title_te: "పైథాన్ పునాదులు",
        type: "external",
        link: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
        desc_en: "Variables, loops, functions — the building blocks of every data script you'll ever write.",
        desc_te: "వేరియబుల్స్, లూప్‌లు, ఫంక్షన్లు — మీరు రాసే ప్రతి డేటా స్క్రిప్ట్‌కు ఇవే పునాదులు."
      },
      {
        id: "ds2",
        title_en: "Statistics & Probability",
        title_te: "గణాంకాలు & సంభావ్యత",
        type: "external",
        link: "https://www.khanacademy.org/math/statistics-probability",
        desc_en: "Mean, variance, distributions — how data scientists reason about uncertainty.",
        desc_te: "సగటు, వేరియన్స్, డిస్ట్రిబ్యూషన్‌లు — డేటా సైంటిస్టులు అనిశ్చితిని ఎలా అర్థం చేసుకుంటారో."
      },
      {
        id: "ds3",
        title_en: "Pandas & NumPy",
        title_te: "పాండాస్ & నంపై",
        type: "internal",
        desc_en: "Load, clean and slice real datasets in Python — the daily tool of every DS role.",
        desc_te: "పైథాన్‌లో నిజమైన డేటాసెట్‌లను లోడ్ చేయడం, శుభ్రం చేయడం, స్లైస్ చేయడం — ప్రతి DS పాత్రలో రోజువారీ సాధనం."
      },
      {
        id: "ds4",
        title_en: "SQL for Data",
        title_te: "డేటా కోసం SQL",
        type: "external",
        link: "https://www.hackerrank.com/domains/sql",
        desc_en: "Query databases with confidence — SELECT, JOIN, GROUP BY and beyond.",
        desc_te: "డేటాబేస్‌లను నమ్మకంగా క్వరీ చేయండి — SELECT, JOIN, GROUP BY మరియు ఇంకా ఎన్నో."
      },
      {
        id: "ds5",
        title_en: "Machine Learning Foundations",
        title_te: "మెషిన్ లెర్నింగ్ పునాదులు",
        type: "internal",
        desc_en: "Regression, classification, and how a model actually 'learns' from data.",
        desc_te: "రిగ్రెషన్, క్లాసిఫికేషన్, మరియు ఒక మోడల్ డేటా నుండి ఎలా 'నేర్చుకుంటుంది'."
      },
      {
        id: "ds6",
        title_en: "EDA Mini Project",
        title_te: "EDA మినీ ప్రాజెక్ట్",
        type: "internal",
        desc_en: "Analyse a real West Godavari agriculture dataset end-to-end for your portfolio.",
        desc_te: "మీ పోర్ట్‌ఫోలియో కోసం నిజమైన పశ్చిమ గోదావరి వ్యవసాయ డేటాసెట్‌ను పూర్తిగా విశ్లేషించండి."
      },
      {
        id: "ds7",
        title_en: "Deep Learning Intro",
        title_te: "డీప్ లెర్నింగ్ పరిచయం",
        type: "external",
        link: "https://www.deeplearning.ai/short-courses/",
        desc_en: "Neural networks explained simply — no heavy maths required to start.",
        desc_te: "న్యూరల్ నెట్‌వర్క్‌లు సరళంగా వివరించబడ్డాయి — మొదలుపెట్టడానికి భారీ గణితం అవసరం లేదు."
      },
      {
        id: "ds8",
        title_en: "Resume & Portfolio",
        title_te: "రెజ్యూమ్ & పోర్ట్‌ఫోలియో",
        type: "internal",
        desc_en: "Turn your projects into a resume placement teams actually notice.",
        desc_te: "మీ ప్రాజెక్టులను ప్లేస్‌మెంట్ టీమ్‌లు గమనించే రెజ్యూమ్‌గా మార్చండి."
      }
    ]
  },

  "cse-fs": {
    degree: "btech",
    branch: "cse",
    title_en: "Full-Stack Developer",
    title_te: "ఫుల్-స్టాక్ డెవలపర్",
    tagline_en: "Build the websites and apps people use every day.",
    tagline_te: "ప్రజలు ప్రతిరోజూ వాడే వెబ్‌సైట్లు, యాప్‌లను నిర్మించండి.",
    desc_en: "You'll learn both sides of an application — the part users see (frontend) and the part that powers it behind the scenes (backend). Great if you like building things you can show off immediately.",
    desc_te: "ఒక అప్లికేషన్‌లో రెండు వైపులా — యూజర్లు చూసేది (ఫ్రంటెండ్) మరియు దాన్ని వెనుక నుండి నడిపేది (బ్యాకెండ్) — నేర్చుకుంటారు. వెంటనే చూపించగలిగే వాటిని నిర్మించడం ఇష్టమైతే ఇది సరైన దారి.",
    timeline_en: "6–10 months of focused study",
    timeline_te: "6–10 నెలల ఫోకస్డ్ స్టడీ",
    salary_en: "₹4–8 LPA to start",
    salary_te: "₹4–8 LPA ప్రారంభంలో",
    roles: ["Frontend Developer", "Backend Developer", "Full-Stack Engineer (entry)"],
    recruiters: ["service companies", "product startups", "freelance clients"],
    skills: ["HTML/CSS/JS", "React", "Node.js", "Databases", "Git"],
    nodes: [
      {
        id: "fs1",
        title_en: "HTML, CSS & JS Basics",
        title_te: "HTML, CSS & JS బేసిక్స్",
        type: "external",
        link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
        desc_en: "The three languages every website is built from.",
        desc_te: "ప్రతి వెబ్‌సైట్ నిర్మించబడే మూడు భాషలు."
      },
      {
        id: "fs2",
        title_en: "Git & GitHub",
        title_te: "Git & GitHub",
        type: "external",
        link: "https://docs.github.com/en/get-started/quickstart/hello-world",
        desc_en: "Save your work, undo mistakes, and collaborate like a real engineer.",
        desc_te: "మీ పనిని సేవ్ చేయండి, తప్పులను వెనక్కి తీసుకోండి, నిజమైన ఇంజనీర్‌లా సహకరించండి."
      },
      {
        id: "fs3",
        title_en: "Arrays & Strings (DSA)",
        title_te: "అర్రేలు & స్ట్రింగ్‌లు (DSA)",
        type: "external",
        link: "https://leetcode.com/tag/array/",
        desc_en: "The most-asked interview topic — build pattern recognition here.",
        desc_te: "ఇంటర్వ్యూలో ఎక్కువగా అడిగే టాపిక్ — ఇక్కడ ప్యాటర్న్ గుర్తింపును పెంచుకోండి."
      },
      {
        id: "fs4",
        title_en: "React Basics",
        title_te: "React బేసిక్స్",
        type: "internal",
        desc_en: "Components, props and state — how modern websites are actually built.",
        desc_te: "కాంపొనెంట్‌లు, ప్రాప్‌లు, స్టేట్ — ఆధునిక వెబ్‌సైట్‌లు ఎలా నిర్మించబడతాయో."
      },
      {
        id: "fs5",
        title_en: "Node & Express",
        title_te: "Node & Express",
        type: "internal",
        desc_en: "Build the server that powers your app behind the scenes.",
        desc_te: "మీ యాప్‌ను వెనుక నుండి నడిపే సర్వర్‌ను నిర్మించండి."
      },
      {
        id: "fs6",
        title_en: "Databases (SQL & NoSQL)",
        title_te: "డేటాబేస్‌లు (SQL & NoSQL)",
        type: "external",
        link: "https://www.mongodb.com/docs/manual/tutorial/getting-started/",
        desc_en: "Store and retrieve data reliably — the backbone of any real app.",
        desc_te: "డేటాను నమ్మకంగా నిల్వ చేయడం, తిరిగి పొందడం — ఏ నిజమైన యాప్‌కైనా వెన్నెముక."
      },
      {
        id: "fs7",
        title_en: "Capstone Project",
        title_te: "క్యాప్‌స్టోన్ ప్రాజెక్ట్",
        type: "internal",
        desc_en: "Build one full project end-to-end — this is what recruiters ask about.",
        desc_te: "ఒక పూర్తి ప్రాజెక్ట్‌ను మొదటి నుండి చివరి వరకు నిర్మించండి — దీని గురించే రిక్రూటర్‌లు అడుగుతారు."
      },
      {
        id: "fs8",
        title_en: "Deploy & Share",
        title_te: "డిప్లాయ్ & షేర్",
        type: "external",
        link: "https://vercel.com/docs",
        desc_en: "Put your project live on the internet with a real link.",
        desc_te: "మీ ప్రాజెక్ట్‌ను నిజమైన లింక్‌తో ఇంటర్నెట్‌లో లైవ్ చేయండి."
      }
    ]
  },

  "cse-cp": {
    degree: "btech",
    branch: "cse",
    title_en: "Competitive Programmer / SDE",
    title_te: "కాంపిటీటివ్ ప్రోగ్రామర్ / SDE",
    tagline_en: "Crack coding interviews at top product companies.",
    tagline_te: "టాప్ ప్రొడక్ట్ కంపెనీల కోడింగ్ ఇంటర్వ్యూలను ఛేదించండి.",
    desc_en: "Deep, focused practice on data structures and algorithms — the exact skill tested by Amazon, Google, Flipkart and every serious tech interview.",
    desc_te: "డేటా స్ట్రక్చర్లు, అల్గారిథమ్‌లపై లోతైన, ఫోకస్డ్ ప్రాక్టీస్ — Amazon, Google, Flipkart మరియు ప్రతి సీరియస్ టెక్ ఇంటర్వ్యూలో పరీక్షించే నైపుణ్యం సరిగ్గా ఇదే.",
    timeline_en: "8–12 months of daily practice",
    timeline_te: "8–12 నెలల రోజువారీ ప్రాక్టీస్",
    salary_en: "₹6–18 LPA to start",
    salary_te: "₹6–18 LPA ప్రారంభంలో",
    roles: ["SDE-1", "Software Engineer", "Backend Engineer"],
    recruiters: ["Amazon", "Flipkart", "Product startups", "service companies"],
    skills: ["DSA", "Problem solving", "System design basics", "CS fundamentals"],
    nodes: [
      {
        id: "cp1",
        title_en: "Arrays & Strings",
        title_te: "అర్రేలు & స్ట్రింగ్‌లు",
        type: "external",
        link: "https://leetcode.com/tag/array/",
        desc_en: "Warm up with the most common problem type in every contest.",
        desc_te: "ప్రతి కంటెస్ట్‌లో అత్యంత సాధారణ సమస్య రకంతో వేడెక్కండి."
      },
      {
        id: "cp2",
        title_en: "Sorting & Searching",
        title_te: "సార్టింగ్ & సెర్చింగ్",
        type: "external",
        link: "https://www.geeksforgeeks.org/searching-algorithms/",
        desc_en: "The two ideas that quietly power half of all algorithms.",
        desc_te: "అన్ని అల్గారిథమ్‌లలో సగం భాగాన్ని నడిపించే రెండు ఆలోచనలు."
      },
      {
        id: "cp3",
        title_en: "Recursion & Backtracking",
        title_te: "రికర్షన్ & బ్యాక్‌ట్రాకింగ్",
        type: "internal",
        desc_en: "Teach yourself to break big problems into smaller identical ones.",
        desc_te: "పెద్ద సమస్యలను చిన్న, ఒకేలా ఉండే సమస్యలుగా విభజించడం నేర్చుకోండి."
      },
      {
        id: "cp4",
        title_en: "Trees & Graphs",
        title_te: "ట్రీలు & గ్రాఫ్‌లు",
        type: "external",
        link: "https://leetcode.com/tag/tree/",
        desc_en: "Model relationships and networks — asked in almost every interview.",
        desc_te: "సంబంధాలు మరియు నెట్‌వర్క్‌లను మోడల్ చేయండి — దాదాపు ప్రతి ఇంటర్వ్యూలో అడుగుతారు."
      },
      {
        id: "cp5",
        title_en: "Dynamic Programming",
        title_te: "డైనమిక్ ప్రోగ్రామింగ్",
        type: "internal",
        desc_en: "The topic that scares everyone at first — we'll make it click.",
        desc_te: "మొదట్లో అందరినీ భయపెట్టే టాపిక్ — దాన్ని అర్థమయ్యేలా చేద్దాం."
      },
      {
        id: "cp6",
        title_en: "Contest Practice",
        title_te: "కంటెస్ట్ ప్రాక్టీస్",
        type: "external",
        link: "https://codeforces.com/",
        desc_en: "Weekly contests to build real speed under pressure.",
        desc_te: "ఒత్తిడిలో నిజమైన వేగాన్ని పెంచుకోవడానికి వారపు కంటెస్ట్‌లు."
      },
      {
        id: "cp7",
        title_en: "Mock Interviews",
        title_te: "మాక్ ఇంటర్వ్యూలు",
        type: "internal",
        desc_en: "Practice explaining your solution out loud, the way interviewers expect.",
        desc_te: "ఇంటర్వ్యూయర్‌లు ఆశించే విధంగా మీ పరిష్కారాన్ని బిగ్గరగా వివరించడం ప్రాక్టీస్ చేయండి."
      }
    ]
  },

  "core-gate": {
    degree: "btech",
    branch: "core",
    title_en: "GATE / Core Engineering",
    title_te: "GATE / కోర్ ఇంజనీరింగ్",
    tagline_en: "Open the door to PSUs, MTech and government jobs.",
    tagline_te: "PSU, MTech, ప్రభుత్వ ఉద్యోగాలకు తలుపు తెరవండి.",
    desc_en: "Works for any branch — CSE, ECE, EEE, Mechanical or Civil. A structured revision of your core subjects aimed straight at the GATE exam, which unlocks PSU jobs, MTech admission, and fellowships.",
    desc_te: "ఏ బ్రాంచ్‌కైనా పనిచేస్తుంది — CSE, ECE, EEE, మెకానికల్ లేదా సివిల్. PSU ఉద్యోగాలు, MTech అడ్మిషన్, ఫెలోషిప్‌లను తెరిచే GATE పరీక్షను లక్ష్యంగా చేసుకుని మీ కోర్ సబ్జెక్టుల నిర్మాణాత్మక రివిజన్.",
    timeline_en: "10–14 months of steady prep",
    timeline_te: "10–14 నెలల స్థిరమైన ప్రిపరేషన్",
    salary_en: "₹7–15 LPA in PSUs after GATE",
    salary_te: "GATE తర్వాత PSU లలో ₹7–15 LPA",
    roles: ["PSU Engineer Trainee", "MTech Scholar", "Research Fellow"],
    recruiters: ["BHEL", "ONGC", "NTPC", "ISRO", "IITs/NITs for MTech"],
    skills: ["Core subject depth", "Engineering maths", "Time management", "Mock testing"],
    nodes: [
      {
        id: "c1",
        title_en: "Engineering Mathematics",
        title_te: "ఇంజనీరింగ్ గణితం",
        type: "external",
        link: "https://nptel.ac.in/",
        desc_en: "Linear algebra, calculus and transforms — the base of every core paper.",
        desc_te: "లీనియర్ ఆల్జీబ్రా, కాలిక్యులస్, ట్రాన్స్‌ఫార్మ్‌లు — ప్రతి కోర్ పేపర్‌కు ఆధారం."
      },
      {
        id: "c2",
        title_en: "Core Subject Deep Dive",
        title_te: "కోర్ సబ్జెక్ట్ లోతైన అధ్యయనం",
        type: "internal",
        desc_en: "Focused revision of your branch's top-weightage GATE subjects.",
        desc_te: "మీ బ్రాంచ్ యొక్క అత్యధిక వెయిటేజ్ GATE సబ్జెక్టుల ఫోకస్డ్ రివిజన్."
      },
      {
        id: "c3",
        title_en: "Previous Year Papers",
        title_te: "మునుపటి సంవత్సరాల పేపర్లు",
        type: "external",
        link: "https://gate.iitk.ac.in/",
        desc_en: "Practice with real GATE papers to learn the question patterns.",
        desc_te: "ప్రశ్న పద్ధతులను నేర్చుకోవడానికి నిజమైన GATE పేపర్లతో ప్రాక్టీస్ చేయండి."
      },
      {
        id: "c4",
        title_en: "Weekly Mock Test",
        title_te: "వారపు మాక్ టెస్ట్",
        type: "internal",
        desc_en: "Timed practice under real exam conditions.",
        desc_te: "నిజమైన పరీక్ష పరిస్థితుల్లో టైమ్డ్ ప్రాక్టీస్."
      },
      {
        id: "c5",
        title_en: "Weak-Area Sprint",
        title_te: "బలహీన ప్రాంత స్ప్రింట్",
        type: "internal",
        desc_en: "A focused sprint on whatever your mock tests reveal you're missing.",
        desc_te: "మీ మాక్ టెస్ట్‌లు మీకు లోపం ఉన్నట్లు చూపించే దానిపై ఫోకస్డ్ స్ప్రింట్."
      },
      {
        id: "c6",
        title_en: "Interview & PSU Prep",
        title_te: "ఇంటర్వ్యూ & PSU ప్రిపరేషన్",
        type: "internal",
        desc_en: "Practice explaining core concepts out loud, clearly and confidently.",
        desc_te: "కోర్ కాన్సెప్టులను స్పష్టంగా, నమ్మకంగా బిగ్గరగా వివరించడం ప్రాక్టీస్ చేయండి."
      }
    ]
  },

  "ece-vlsi": {
    degree: "btech",
    branch: "ece",
    title_en: "VLSI & Chip Design",
    title_te: "VLSI & చిప్ డిజైన్",
    tagline_en: "Design the silicon inside every phone and laptop.",
    tagline_te: "ప్రతి ఫోన్, ల్యాప్‌టాప్ లోపల ఉండే సిలికాన్‌ను డిజైన్ చేయండి.",
    desc_en: "You'll go from logic gates to real chip-design tools, learning how a circuit becomes silicon. A high-value niche with strong pay once you clear the entry bar.",
    desc_te: "లాజిక్ గేట్ల నుండి నిజమైన చిప్-డిజైన్ టూల్స్ వరకు, ఒక సర్క్యూట్ సిలికాన్‌గా ఎలా మారుతుందో నేర్చుకుంటారు. ఎంట్రీ బార్ దాటాక మంచి జీతం ఉండే విలువైన నిష్‌.",
    timeline_en: "9–14 months of focused study",
    timeline_te: "9–14 నెలల ఫోకస్డ్ స్టడీ",
    salary_en: "₹5–10 LPA to start",
    salary_te: "₹5–10 LPA ప్రారంభంలో",
    roles: ["Digital Design Engineer", "Verification Engineer (entry)", "Physical Design Trainee"],
    recruiters: ["Qualcomm", "AMD", "Intel", "Texas Instruments", "semiconductor startups"],
    skills: ["Digital logic", "Verilog/VHDL", "Computer architecture", "EDA tools"],
    nodes: [
      {
        id: "ev1",
        title_en: "Digital Logic & Design",
        title_te: "డిజిటల్ లాజిక్ & డిజైన్",
        type: "external",
        link: "https://nptel.ac.in/courses/108105113",
        desc_en: "Gates, flip-flops and boolean logic — the alphabet of chip design.",
        desc_te: "గేట్లు, ఫ్లిప్-ఫ్లాప్‌లు, బూలియన్ లాజిక్ — చిప్ డిజైన్‌కు అక్షరమాల."
      },
      {
        id: "ev2",
        title_en: "Verilog / VHDL Basics",
        title_te: "Verilog / VHDL బేసిక్స్",
        type: "internal",
        desc_en: "The hardware description languages used to design real chips.",
        desc_te: "నిజమైన చిప్‌లను డిజైన్ చేయడానికి ఉపయోగించే హార్డ్‌వేర్ డిస్క్రిప్షన్ భాషలు."
      },
      {
        id: "ev3",
        title_en: "Digital IC Design Lab",
        title_te: "డిజిటల్ IC డిజైన్ ల్యాబ్",
        type: "internal",
        desc_en: "Hands-on practice simulating and testing small digital circuits.",
        desc_te: "చిన్న డిజిటల్ సర్క్యూట్లను సిమ్యులేట్ చేసి, పరీక్షించే హ్యాండ్స్-ఆన్ ప్రాక్టీస్."
      },
      {
        id: "ev4",
        title_en: "Physical Design & EDA Tools",
        title_te: "ఫిజికల్ డిజైన్ & EDA టూల్స్",
        type: "external",
        link: "https://nptel.ac.in/courses/117106133",
        desc_en: "How a logic design turns into an actual physical chip layout.",
        desc_te: "ఒక లాజిక్ డిజైన్ నిజమైన ఫిజికల్ చిప్ లేఅవుట్‌గా ఎలా మారుతుందో."
      },
      {
        id: "ev5",
        title_en: "Mini Project & Portfolio",
        title_te: "మినీ ప్రాజెక్ట్ & పోర్ట్‌ఫోలియో",
        type: "internal",
        desc_en: "Design and document one small chip-design project for interviews.",
        desc_te: "ఇంటర్వ్యూల కోసం ఒక చిన్న చిప్-డిజైన్ ప్రాజెక్ట్‌ను డిజైన్ చేసి డాక్యుమెంట్ చేయండి."
      }
    ]
  },

  "ece-embedded": {
    degree: "btech",
    branch: "ece",
    title_en: "Embedded Systems & IoT",
    title_te: "ఎంబెడెడ్ సిస్టమ్స్ & IoT",
    tagline_en: "Build the brains inside smart devices.",
    tagline_te: "స్మార్ట్ డివైజ్‌ల లోపల మెదడును నిర్మించండి.",
    desc_en: "From smart irrigation to wearable health devices, embedded engineers write the code that runs directly on hardware. Practical, hands-on, and full of build-it-yourself moments.",
    desc_te: "స్మార్ట్ ఇరిగేషన్ నుండి వేరబుల్ హెల్త్ డివైజ్‌ల వరకు, ఎంబెడెడ్ ఇంజనీర్లు హార్డ్‌వేర్‌పై నేరుగా నడిచే కోడ్‌ను రాస్తారు. ప్రాక్టికల్, హ్యాండ్స్-ఆన్, మీరే నిర్మించుకునే క్షణాలతో నిండి ఉంటుంది.",
    timeline_en: "6–10 months of focused study",
    timeline_te: "6–10 నెలల ఫోకస్డ్ స్టడీ",
    salary_en: "₹4–8 LPA to start",
    salary_te: "₹4–8 LPA ప్రారంభంలో",
    roles: ["Embedded Software Engineer", "IoT Developer", "Firmware Engineer (entry)"],
    recruiters: ["Bosch", "automotive suppliers", "IoT startups", "electronics manufacturers"],
    skills: ["Embedded C", "Microcontrollers", "Sensors", "RTOS basics", "Cloud connectivity"],
    nodes: [
      {
        id: "ee1",
        title_en: "Embedded C & Microcontrollers",
        title_te: "ఎంబెడెడ్ C & మైక్రోకంట్రోలర్లు",
        type: "external",
        link: "https://nptel.ac.in/courses/108105193",
        desc_en: "How to write code that talks directly to hardware.",
        desc_te: "హార్డ్‌వేర్‌తో నేరుగా మాట్లాడే కోడ్‌ను ఎలా రాయాలో."
      },
      {
        id: "ee2",
        title_en: "Arduino / ESP32 Hands-on",
        title_te: "Arduino / ESP32 హ్యాండ్స్-ఆన్",
        type: "internal",
        desc_en: "Build your first working circuit and blink your first LED — literally.",
        desc_te: "మీ మొదటి పని చేసే సర్క్యూట్‌ను నిర్మించి, మొదటి LED ను వెలిగించండి."
      },
      {
        id: "ee3",
        title_en: "Sensors & RTOS Basics",
        title_te: "సెన్సర్లు & RTOS బేసిక్స్",
        type: "internal",
        desc_en: "Read real-world signals and manage multiple tasks on tiny hardware.",
        desc_te: "నిజ-ప్రపంచ సిగ్నల్స్‌ను చదవడం, చిన్న హార్డ్‌వేర్‌పై అనేక టాస్క్‌లను నిర్వహించడం."
      },
      {
        id: "ee4",
        title_en: "IoT Cloud Connectivity",
        title_te: "IoT క్లౌడ్ కనెక్టివిటీ",
        type: "external",
        link: "https://www.freertos.org/",
        desc_en: "Send sensor data from your device to the cloud for monitoring.",
        desc_te: "మానిటరింగ్ కోసం మీ డివైజ్ నుండి సెన్సర్ డేటాను క్లౌడ్‌కు పంపండి."
      },
      {
        id: "ee5",
        title_en: "Capstone IoT Project",
        title_te: "క్యాప్‌స్టోన్ IoT ప్రాజెక్ట్",
        type: "internal",
        desc_en: "Build a smart-agriculture or smart-home device end-to-end.",
        desc_te: "ఒక స్మార్ట్-అగ్రికల్చర్ లేదా స్మార్ట్-హోమ్ డివైజ్‌ను మొదటి నుండి చివరి వరకు నిర్మించండి."
      }
    ]
  },

  "eee-power": {
    degree: "btech",
    branch: "eee",
    title_en: "Power Systems Engineer",
    title_te: "పవర్ సిస్టమ్స్ ఇంజనీర్",
    tagline_en: "Keep the lights on — for the whole grid.",
    tagline_te: "మొత్తం గ్రిడ్‌కు కరెంటు అందేలా చూడండి.",
    desc_en: "Learn how electricity travels from power plants to your home, and how engineers design substations, transmission lines and renewable-energy systems that keep it reliable.",
    desc_te: "విద్యుత్ ప్లాంట్ల నుండి మీ ఇంటికి కరెంటు ఎలా చేరుతుందో, ఇంజనీర్లు సబ్‌స్టేషన్లు, ట్రాన్స్‌మిషన్ లైన్లు, రెన్యూవబుల్-ఎనర్జీ సిస్టమ్‌లను ఎలా విశ్వసనీయంగా డిజైన్ చేస్తారో నేర్చుకోండి.",
    timeline_en: "8–12 months of focused study",
    timeline_te: "8–12 నెలల ఫోకస్డ్ స్టడీ",
    salary_en: "₹4–8 LPA to start",
    salary_te: "₹4–8 LPA ప్రారంభంలో",
    roles: ["Substation Engineer (entry)", "Power Systems Trainee", "Renewable Energy Engineer"],
    recruiters: ["State electricity boards", "NTPC", "Adani Power", "solar/wind EPC companies"],
    skills: ["Circuit theory", "Electrical machines", "Power systems analysis", "Smart grid basics"],
    nodes: [
      {
        id: "ep1",
        title_en: "Circuit Theory & Power Basics",
        title_te: "సర్క్యూట్ థియరీ & పవర్ బేసిక్స్",
        type: "external",
        link: "https://nptel.ac.in/courses/108101088",
        desc_en: "The foundation every power engineer builds on.",
        desc_te: "ప్రతి పవర్ ఇంజనీర్ నిర్మించుకునే పునాది."
      },
      {
        id: "ep2",
        title_en: "Electrical Machines",
        title_te: "ఎలక్ట్రికల్ మెషిన్లు",
        type: "internal",
        desc_en: "Motors, generators and transformers — how energy changes form.",
        desc_te: "మోటార్లు, జనరేటర్లు, ట్రాన్స్‌ఫార్మర్లు — शक्ति రూపం ఎలా మారుతుందో."
      },
      {
        id: "ep3",
        title_en: "Power Systems Analysis",
        title_te: "పవర్ సిస్టమ్స్ అనాలిసిస్",
        type: "external",
        link: "https://nptel.ac.in/courses/108104052",
        desc_en: "How large grids are modelled, balanced and protected.",
        desc_te: "పెద్ద గ్రిడ్‌లు ఎలా మోడల్ చేయబడతాయో, బ్యాలెన్స్ చేయబడతాయో, రక్షించబడతాయో."
      },
      {
        id: "ep4",
        title_en: "Renewable Energy & Smart Grid",
        title_te: "రెన్యూవబుల్ ఎనర్జీ & స్మార్ట్ గ్రిడ్",
        type: "internal",
        desc_en: "Solar, wind and the smart systems that are reshaping this field.",
        desc_te: "సోలార్, విండ్, ఈ రంగాన్ని మారుస్తున్న స్మార్ట్ సిస్టమ్‌లు."
      },
      {
        id: "ep5",
        title_en: "Internship & Site Readiness",
        title_te: "ఇంటర్న్‌షిప్ & సైట్ సంసిద్ధత",
        type: "internal",
        desc_en: "Safety basics and what to expect on your first substation visit.",
        desc_te: "భద్రతా బేసిక్స్ మరియు మీ మొదటి సబ్‌స్టేషన్ సందర్శనలో ఏమి ఆశించాలో."
      }
    ]
  },

  "mech-design": {
    degree: "btech",
    branch: "mech",
    title_en: "Design & CAD Engineer",
    title_te: "డిజైన్ & CAD ఇంజనీర్",
    tagline_en: "Turn ideas into parts that can actually be built.",
    tagline_te: "ఆలోచనలను నిజంగా నిర్మించగల భాగాలుగా మార్చండి.",
    desc_en: "Learn to design mechanical parts and assemblies in CAD software, check they'll survive real-world stress, and prepare them for manufacturing.",
    desc_te: "CAD సాఫ్ట్‌వేర్‌లో మెకానికల్ భాగాలు, అసెంబ్లీలను డిజైన్ చేయడం, అవి నిజ-ప్రపంచ ఒత్తిడిని తట్టుకుంటాయో లేదో చెక్ చేయడం, తయారీ కోసం సిద్ధం చేయడం నేర్చుకోండి.",
    timeline_en: "7–11 months of focused study",
    timeline_te: "7–11 నెలల ఫోకస్డ్ స్టడీ",
    salary_en: "₹3.5–7 LPA to start",
    salary_te: "₹3.5–7 LPA ప్రారంభంలో",
    roles: ["Design Engineer (entry)", "CAD Engineer", "Product Development Trainee"],
    recruiters: ["automotive OEMs", "manufacturing companies", "design consultancies"],
    skills: ["Engineering drawing", "SolidWorks/AutoCAD", "DFM principles", "FEA basics"],
    nodes: [
      {
        id: "md1",
        title_en: "Engineering Drawing & CAD Basics",
        title_te: "ఇంజనీరింగ్ డ్రాయింగ్ & CAD బేసిక్స్",
        type: "external",
        link: "https://nptel.ac.in/courses/112103019",
        desc_en: "The universal visual language every mechanical engineer reads.",
        desc_te: "ప్రతి మెకానికల్ ఇంజనీర్ చదివే విశ్వవ్యాప్త దృశ్య భాష."
      },
      {
        id: "md2",
        title_en: "SolidWorks / AutoCAD Practice",
        title_te: "SolidWorks / AutoCAD ప్రాక్టీస్",
        type: "internal",
        desc_en: "Model real 3D parts, not just textbook shapes.",
        desc_te: "పాఠ్యపుస్తక ఆకారాలు మాత్రమే కాదు, నిజమైన 3D భాగాలను మోడల్ చేయండి."
      },
      {
        id: "md3",
        title_en: "Design for Manufacturing",
        title_te: "తయారీ కోసం డిజైన్",
        type: "internal",
        desc_en: "Design parts that a factory can actually produce affordably.",
        desc_te: "ఒక ఫ్యాక్టరీ నిజంగా చౌకగా ఉత్పత్తి చేయగల భాగాలను డిజైన్ చేయండి."
      },
      {
        id: "md4",
        title_en: "FEA & Simulation Basics",
        title_te: "FEA & సిమ్యులేషన్ బేసిక్స్",
        type: "external",
        link: "https://nptel.ac.in/courses/112104193",
        desc_en: "Test whether a part will break — inside the computer, before it's built.",
        desc_te: "ఒక భాగం విరుగుతుందో లేదో — అది నిర్మించేముందే కంప్యూటర్‌లో పరీక్షించండి."
      },
      {
        id: "md5",
        title_en: "Design Portfolio Project",
        title_te: "డిజైన్ పోర్ట్‌ఫోలియో ప్రాజెక్ట్",
        type: "internal",
        desc_en: "One complete design project, from sketch to simulation, for interviews.",
        desc_te: "ఇంటర్వ్యూల కోసం స్కెచ్ నుండి సిమ్యులేషన్ వరకు ఒక పూర్తి డిజైన్ ప్రాజెక్ట్."
      }
    ]
  },

  "mech-manufacturing": {
    degree: "btech",
    branch: "mech",
    title_en: "Manufacturing & Robotics",
    title_te: "మ్యానుఫ్యాక్చరింగ్ & రోబోటిక్స్",
    tagline_en: "Run the factories that build everything else.",
    tagline_te: "మిగతా అన్నిటినీ నిర్మించే ఫ్యాక్టరీలను నడపండి.",
    desc_en: "From CNC machines to factory robots, learn how modern manufacturing actually works — and how automation is changing it.",
    desc_te: "CNC మెషీన్ల నుండి ఫ్యాక్టరీ రోబోట్ల వరకు, ఆధునిక తయారీ ఎలా పనిచేస్తుందో, ఆటోమేషన్ దాన్ని ఎలా మారుస్తుందో నేర్చుకోండి.",
    timeline_en: "7–11 months of focused study",
    timeline_te: "7–11 నెలల ఫోకస్డ్ స్టడీ",
    salary_en: "₹3.5–7.5 LPA to start",
    salary_te: "₹3.5–7.5 LPA ప్రారంభంలో",
    roles: ["Production Engineer (entry)", "Automation Engineer", "Manufacturing Trainee"],
    recruiters: ["automotive plants", "heavy engineering firms", "robotics startups"],
    skills: ["Manufacturing processes", "CNC & automation", "Robotics fundamentals", "PLC basics"],
    nodes: [
      {
        id: "mm1",
        title_en: "Manufacturing Processes",
        title_te: "మ్యానుఫ్యాక్చరింగ్ ప్రాసెస్‌లు",
        type: "external",
        link: "https://nptel.ac.in/courses/112105126",
        desc_en: "Casting, welding, machining — how raw material becomes a product.",
        desc_te: "కాస్టింగ్, వెల్డింగ్, మెషినింగ్ — ముడి పదార్థం ఒక ఉత్పత్తిగా ఎలా మారుతుందో."
      },
      {
        id: "mm2",
        title_en: "CNC & Automation Basics",
        title_te: "CNC & ఆటోమేషన్ బేసిక్స్",
        type: "internal",
        desc_en: "How computer-controlled machines cut parts with precision.",
        desc_te: "కంప్యూటర్-నియంత్రిత మెషీన్లు ఖచ్చితత్వంతో భాగాలను ఎలా కోస్తాయో."
      },
      {
        id: "mm3",
        title_en: "Robotics Fundamentals",
        title_te: "రోబోటిక్స్ ఫండమెంటల్స్",
        type: "external",
        link: "https://www.coursera.org/learn/robotics-fundamentals",
        desc_en: "Kinematics and control — the basics behind every industrial robot arm.",
        desc_te: "కైనమాటిక్స్ మరియు కంట్రోల్ — ప్రతి ఇండస్ట్రియల్ రోబోట్ ఆర్మ్ వెనుక ఉన్న బేసిక్స్."
      },
      {
        id: "mm4",
        title_en: "PLC & Industrial Automation",
        title_te: "PLC & ఇండస్ట్రియల్ ఆటోమేషన్",
        type: "internal",
        desc_en: "The control systems that run entire factory production lines.",
        desc_te: "మొత్తం ఫ్యాక్టరీ ప్రొడక్షన్ లైన్లను నడిపే కంట్రోల్ సిస్టమ్‌లు."
      },
      {
        id: "mm5",
        title_en: "Robotics Capstone Project",
        title_te: "రోబోటిక్స్ క్యాప్‌స్టోన్ ప్రాజెక్ట్",
        type: "internal",
        desc_en: "Build and document a small automated system for your portfolio.",
        desc_te: "మీ పోర్ట్‌ఫోలియో కోసం ఒక చిన్న ఆటోమేటెడ్ సిస్టమ్‌ను నిర్మించి డాక్యుమెంట్ చేయండి."
      }
    ]
  },

  "civil-structural": {
    degree: "btech",
    branch: "civil",
    title_en: "Structural & Site Engineer",
    title_te: "స్ట్రక్చరల్ & సైట్ ఇంజనీర్",
    tagline_en: "Design and build the structures people trust with their lives.",
    tagline_te: "ప్రజలు తమ జీవితాలను నమ్మే నిర్మాణాలను డిజైన్ చేసి కట్టండి.",
    desc_en: "Learn structural analysis, concrete design, and what it actually takes to run a construction site safely and on schedule.",
    desc_te: "స్ట్రక్చరల్ అనాలిసిస్, కాంక్రీట్ డిజైన్, ఒక నిర్మాణ స్థలాన్ని సురక్షితంగా, సమయానికి నడపడానికి నిజంగా ఏమి కావాలో నేర్చుకోండి.",
    timeline_en: "7–11 months of focused study",
    timeline_te: "7–11 నెలల ఫోకస్డ్ స్టడీ",
    salary_en: "₹3.5–7 LPA to start",
    salary_te: "₹3.5–7 LPA ప్రారంభంలో",
    roles: ["Site Engineer (entry)", "Structural Design Trainee", "Quantity Surveyor"],
    recruiters: ["L&T Construction", "real-estate developers", "government PWD"],
    skills: ["Structural analysis", "AutoCAD/Revit", "Concrete technology", "Site safety & execution"],
    nodes: [
      {
        id: "cs1",
        title_en: "Structural Analysis Basics",
        title_te: "స్ట్రక్చరల్ అనాలిసిస్ బేసిక్స్",
        type: "external",
        link: "https://nptel.ac.in/courses/105101085",
        desc_en: "How loads travel through a building, from roof to foundation.",
        desc_te: "ఒక భవనంలో పైకప్పు నుండి పునాది వరకు లోడ్‌లు ఎలా ప్రయాణిస్తాయో."
      },
      {
        id: "cs2",
        title_en: "AutoCAD / Revit for Civil",
        title_te: "సివిల్ కోసం AutoCAD / Revit",
        type: "internal",
        desc_en: "Draw the plans that contractors and workers build from.",
        desc_te: "కాంట్రాక్టర్లు, కార్మికులు నిర్మించే ప్లాన్‌లను గీయండి."
      },
      {
        id: "cs3",
        title_en: "Concrete Technology & Design",
        title_te: "కాంక్రీట్ టెక్నాలజీ & డిజైన్",
        type: "internal",
        desc_en: "How concrete is mixed, tested and designed to bear real loads.",
        desc_te: "కాంక్రీట్‌ను ఎలా కలుపుతారు, పరీక్షిస్తారు, నిజమైన లోడ్లను మోయడానికి డిజైన్ చేస్తారో."
      },
      {
        id: "cs4",
        title_en: "Site Execution & Safety",
        title_te: "సైట్ ఎగ్జిక్యూషన్ & సేఫ్టీ",
        type: "internal",
        desc_en: "What actually happens day-to-day on a live construction site.",
        desc_te: "ఒక లైవ్ నిర్మాణ స్థలంలో రోజువారీగా ఏమి జరుగుతుందో."
      },
      {
        id: "cs5",
        title_en: "Structural Design Mini Project",
        title_te: "స్ట్రక్చరల్ డిజైన్ మినీ ప్రాజెక్ట్",
        type: "internal",
        desc_en: "Design one small structure end-to-end for your portfolio.",
        desc_te: "మీ పోర్ట్‌ఫోలియో కోసం ఒక చిన్న నిర్మాణాన్ని మొదటి నుండి చివరి వరకు డిజైన్ చేయండి."
      }
    ]
  },

  "mtech-research": {
    degree: "mtech",
    branch: "mtech",
    title_en: "Research & MS Abroad Track",
    title_te: "రీసెర్చ్ & MS Abroad దారి",
    tagline_en: "Turn your MTech into a launchpad for research or study abroad.",
    tagline_te: "మీ MTech ను రీసెర్చ్ లేదా విదేశీ చదువుకు లాంచ్‌ప్యాడ్‌గా మార్చండి.",
    desc_en: "Build a genuine research profile — papers, projects, and test scores — aimed at a strong MS/PhD application or research role.",
    desc_te: "బలమైన MS/PhD అప్లికేషన్ లేదా రీసెర్చ్ పాత్ర కోసం — పేపర్లు, ప్రాజెక్టులు, టెస్ట్ స్కోర్లతో నిజమైన రీసెర్చ్ ప్రొఫైల్‌ను నిర్మించండి.",
    timeline_en: "12–18 months, alongside your MTech",
    timeline_te: "12–18 నెలలు, మీ MTech తో పాటు",
    salary_en: "Funded MS/PhD positions abroad; ₹6–12 LPA in research roles in India",
    salary_te: "విదేశాల్లో ఫండెడ్ MS/PhD స్థానాలు; భారత్‌లో రీసెర్చ్ పాత్రలలో ₹6–12 LPA",
    roles: ["Research Assistant", "MS/PhD Scholar", "Research Associate"],
    recruiters: ["universities abroad", "CSIR labs", "IIT/IISc research groups"],
    skills: ["Literature review", "Academic writing", "Advanced maths", "GRE/IELTS prep"],
    nodes: [
      {
        id: "mr1",
        title_en: "Research Fundamentals & Literature Review",
        title_te: "రీసెర్చ్ ఫండమెంటల్స్ & లిటరేచర్ రివ్యూ",
        type: "internal",
        desc_en: "How to read papers critically and find a real research gap.",
        desc_te: "పేపర్లను విమర్శనాత్మకంగా చదవడం, నిజమైన రీసెర్చ్ గ్యాప్‌ను కనుగొనడం ఎలా."
      },
      {
        id: "mr2",
        title_en: "Advanced Mathematics for Research",
        title_te: "రీసెర్చ్ కోసం అడ్వాన్స్‌డ్ మ్యాథమెటిక్స్",
        type: "external",
        link: "https://nptel.ac.in/",
        desc_en: "The mathematical tools most research papers in your field assume you know.",
        desc_te: "మీ రంగంలో చాలా రీసెర్చ్ పేపర్లు మీకు తెలుసు అని భావించే గణిత సాధనాలు."
      },
      {
        id: "mr3",
        title_en: "Paper Writing & LaTeX",
        title_te: "పేపర్ రైటింగ్ & LaTeX",
        type: "external",
        link: "https://www.overleaf.com/learn",
        desc_en: "Format and write your work the way journals and conferences expect.",
        desc_te: "జర్నల్స్, కాన్ఫరెన్స్‌లు ఆశించే విధంగా మీ పనిని ఫార్మాట్ చేసి రాయండి."
      },
      {
        id: "mr4",
        title_en: "GRE/IELTS Prep & SOP",
        title_te: "GRE/IELTS ప్రిపరేషన్ & SOP",
        type: "internal",
        desc_en: "Standardised tests and a statement of purpose that tells your real story.",
        desc_te: "స్టాండర్డైజ్డ్ టెస్టులు మరియు మీ నిజమైన కథను చెప్పే స్టేట్‌మెంట్ ఆఫ్ పర్పస్."
      },
      {
        id: "mr5",
        title_en: "Publish a Paper or Poster",
        title_te: "పేపర్ లేదా పోస్టర్ ప్రచురించండి",
        type: "internal",
        desc_en: "Turn your MTech project into a real, citable piece of research.",
        desc_te: "మీ MTech ప్రాజెక్ట్‌ను నిజమైన, సైట్ చేయదగిన రీసెర్చ్‌గా మార్చండి."
      }
    ]
  },

  "mtech-psu": {
    degree: "mtech",
    branch: "mtech",
    title_en: "PSU / Government R&D Track",
    title_te: "PSU / ప్రభుత్వ R&D దారి",
    tagline_en: "Aim for stable, high-respect government engineering roles.",
    tagline_te: "స్థిరమైన, గౌరవప్రదమైన ప్రభుత్వ ఇంజనీరింగ్ పాత్రలను లక్ష్యంగా చేసుకోండి.",
    desc_en: "MTech graduates get a direct edge in PSU recruitment through GATE score and specialised interviews. This path sharpens both.",
    desc_te: "MTech గ్రాడ్యుయేట్లు GATE స్కోర్, స్పెషలైజ్డ్ ఇంటర్వ్యూల ద్వారా PSU రిక్రూట్‌మెంట్‌లో నేరుగా ప్రయోజనం పొందుతారు. ఈ దారి రెండింటినీ మెరుగుపరుస్తుంది.",
    timeline_en: "6–10 months of focused prep",
    timeline_te: "6–10 నెలల ఫోకస్డ్ ప్రిపరేషన్",
    salary_en: "₹8–16 LPA at PSUs post-MTech",
    salary_te: "MTech తర్వాత PSU లలో ₹8–16 LPA",
    roles: ["Senior Engineer (PSU)", "R&D Officer", "Scientist/Engineer (govt labs)"],
    recruiters: ["ISRO", "DRDO", "BARC", "BHEL", "ONGC"],
    skills: ["Advanced GATE-level depth", "Interview communication", "Domain specialisation", "Current affairs"],
    nodes: [
      {
        id: "mp1",
        title_en: "GATE Advanced Revision",
        title_te: "GATE అడ్వాన్స్‌డ్ రివిజన్",
        type: "external",
        link: "https://gate.iitk.ac.in/",
        desc_en: "Push your GATE score higher — MTech-level PSU cutoffs are competitive.",
        desc_te: "మీ GATE స్కోర్‌ను మరింత పెంచుకోండి — MTech-స్థాయి PSU కటాఫ్‌లు పోటీగా ఉంటాయి."
      },
      {
        id: "mp2",
        title_en: "PSU Exam Pattern & Papers",
        title_te: "PSU పరీక్షా విధానం & పేపర్లు",
        type: "internal",
        desc_en: "Each PSU has its own pattern — learn the ones relevant to you.",
        desc_te: "ప్రతి PSU కు దాని స్వంత విధానం ఉంటుంది — మీకు సంబంధించినవి నేర్చుకోండి."
      },
      {
        id: "mp3",
        title_en: "Technical + General Awareness",
        title_te: "టెక్నికల్ + జనరల్ అవేర్‌నెస్",
        type: "internal",
        desc_en: "Round out your prep beyond pure technical depth.",
        desc_te: "కేవలం సాంకేతిక లోతు దాటి మీ ప్రిపరేషన్‌ను పూర్తి చేయండి."
      },
      {
        id: "mp4",
        title_en: "Group Discussion & Interview Prep",
        title_te: "గ్రూప్ డిస్కషన్ & ఇంటర్వ్యూ ప్రిపరేషన్",
        type: "internal",
        desc_en: "Practice thinking and speaking clearly under panel pressure.",
        desc_te: "ప్యానెల్ ఒత్తిడిలో స్పష్టంగా ఆలోచించడం, మాట్లాడటం ప్రాక్టీస్ చేయండి."
      },
      {
        id: "mp5",
        title_en: "Mock PSU Interview",
        title_te: "మాక్ PSU ఇంటర్వ్యూ",
        type: "internal",
        desc_en: "A full simulated interview so the real one holds no surprises.",
        desc_te: "నిజమైనది ఎలాంటి ఆశ్చర్యాలు లేకుండా ఉండేలా పూర్తి సిమ్యులేటెడ్ ఇంటర్వ్యూ."
      }
    ]
  },

  "mtech-industry": {
    degree: "mtech",
    branch: "mtech",
    title_en: "Industry R&D / Specialist Engineer",
    title_te: "ఇండస్ట్రీ R&D / స్పెషలిస్ట్ ఇంజనీర్",
    tagline_en: "Become the deep specialist companies build teams around.",
    tagline_te: "కంపెనీలు టీమ్‌లను నిర్మించే లోతైన స్పెషలిస్ట్‌గా మారండి.",
    desc_en: "Go beyond your MTech coursework into industry-recognised tools, a mentored R&D project, and a specialist's portfolio that stands out from generic resumes.",
    desc_te: "మీ MTech కోర్స్‌వర్క్ దాటి ఇండస్ట్రీ-గుర్తింపు పొందిన టూల్స్, మెంటార్డ్ R&D ప్రాజెక్ట్, సాధారణ రెజ్యూమ్‌ల నుండి ప్రత్యేకంగా నిలిచే స్పెషలిస్ట్ పోర్ట్‌ఫోలియోలోకి వెళ్లండి.",
    timeline_en: "8–12 months alongside your MTech",
    timeline_te: "8–12 నెలలు మీ MTech తో పాటు",
    salary_en: "₹9–20 LPA depending on domain",
    salary_te: "డొమైన్ ఆధారంగా ₹9–20 LPA",
    roles: ["R&D Engineer", "Specialist Engineer", "Technical Lead (entry)"],
    recruiters: ["core-tech MNCs", "R&D centres", "deep-tech startups"],
    skills: ["Domain specialisation", "Industry tools/certifications", "Technical writing", "Patent basics"],
    nodes: [
      {
        id: "mi1",
        title_en: "Advanced Domain Specialisation",
        title_te: "అడ్వాన్స్‌డ్ డొమైన్ స్పెషలైజేషన్",
        type: "internal",
        desc_en: "Go one level deeper than your MTech syllabus into your chosen niche.",
        desc_te: "మీ MTech సిలబస్ కంటే ఒక స్థాయి లోతుగా మీ ఎంచుకున్న నిష్‌లోకి వెళ్ళండి."
      },
      {
        id: "mi2",
        title_en: "Industry Tools & Certifications",
        title_te: "ఇండస్ట్రీ టూల్స్ & సర్టిఫికేషన్‌లు",
        type: "external",
        link: "https://nptel.ac.in/",
        desc_en: "The specific software or standards your target companies actually use.",
        desc_te: "మీ లక్ష్య కంపెనీలు నిజంగా ఉపయోగించే నిర్దిష్ట సాఫ్ట్‌వేర్ లేదా స్టాండర్డ్‌లు."
      },
      {
        id: "mi3",
        title_en: "Mentored R&D Project",
        title_te: "మెంటార్డ్ R&D ప్రాజెక్ట్",
        type: "internal",
        desc_en: "A faculty- or industry-guided project that becomes your thesis and your pitch.",
        desc_te: "మీ థీసిస్‌గా, మీ పిచ్‌గా మారే ఫ్యాకల్టీ లేదా ఇండస్ట్రీ-గైడెడ్ ప్రాజెక్ట్."
      },
      {
        id: "mi4",
        title_en: "Technical Paper / Patent Drafting",
        title_te: "టెక్నికల్ పేపర్ / పేటెంట్ డ్రాఫ్టింగ్",
        type: "internal",
        desc_en: "Document your work the way serious R&D teams expect.",
        desc_te: "సీరియస్ R&D టీమ్‌లు ఆశించే విధంగా మీ పనిని డాక్యుమెంట్ చేయండి."
      },
      {
        id: "mi5",
        title_en: "Specialist Resume & LinkedIn",
        title_te: "స్పెషలిస్ట్ రెజ్యూమ్ & LinkedIn",
        type: "internal",
        desc_en: "Position yourself as a specialist, not a generic fresher.",
        desc_te: "మిమ్మల్ని ఒక సాధారణ ఫ్రెషర్‌గా కాదు, స్పెషలిస్ట్‌గా చూపించుకోండి."
      }
    ]
  }
};

export const PATH_KEYS = Object.keys(PATHS);
