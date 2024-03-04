// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What are the basic components of a computer?",
    answer: "CPU, memory, hard drive",
    options: [
      "Screen, keyboard, mouse",
      "Processor, CPU, memory",
      "Monitor, keyboard, CPU",
      "CPU, memory, hard drive",
    ],
  },
  {
    numb: 2,
    question: "What is an operating system?",
    answer:
      "A program that manages computer resources and allows applications to run",
    options: [
      "A program that allows users to interact with the computer",
      "A program that allows users to create digital content",
      "A program that allows users to connect to the internet",
      "A program that manages computer resources and allows applications to run",
    ],
  },
  {
    numb: 3,
    question: "What are the common types of operating systems?",
    answer: "Windows, Linux, macOS",
    options: [
      "Android, iOS, ChromeOS",
      "Ubuntu, Fedora, Debian",
      "All of the above",
      "Windows, Linux, macOS",
    ],
  },
  {
    numb: 4,
    question: "What is a processor?",
    answer: "The central processing unit (CPU)",
    options: [
      "The memory unit",
      "The storage unit",
      "The input/output (I/O) unit",
      "The central processing unit (CPU)",
    ],
  },
  {
    numb: 5,
    question: "What are the main types of memory?",
    answer: "Primary memory, secondary memory",
    options: [
      "Permanent memory, temporary memory",
      "Read-only memory (ROM), read-write memory (RAM)",
      "All of the above",
      "Primary memory, secondary memory",
    ],
  },
  {
    numb: 6,
    question: "What are the main types of storage units?",
    answer: "Hard disk drive (HDD), solid-state drive (SSD)",
    options: [
      "Floppy disk, hard disk drive (HDD), solid-state drive (SSD)",
      "Optical disc drive, compact disc (CD), digital versatile disc (DVD)",
      "Magnetic tape drive",
      "Hard disk drive (HDD), solid-state drive (SSD)",
    ],
  },
  {
    numb: 7,
    question: "What is the purpose of an IP address?",
    answer: "To identify and locate devices on a network",
    options: [
      "To control the flow of information on the internet",
      "To provide security for online transactions",
      "To store data for individual users",
      "To identify and locate devices on a network",
    ],
  },
  {
    numb: 8,
    question: "What are the three main types of networks?",
    answer:
      "Local Area Network (LAN), Wide Area Network (WAN), Personal Area Network (PAN)",
    options: [
      "Intranet, extranet, internet",
      "All of the above",
      "Client-server network, peer-to-peer network, mesh network",
      "Local Area Network (LAN), Wide Area Network (WAN), Personal Area Network (PAN)",
    ],
  },
  {
    numb: 9,
    question:
      "What is the difference between a web browser and a search engine?",
    answer:
      "A web browser displays web pages, while a search engine helps you find information on the internet.",
    options: [
      "There is no difference between a web browser and a search engine.",
      "A web browser stores your browsing history, while a search engine does not.",
      "A web browser is used to create web pages, while a search engine is used to access them.",
      "A web browser displays web pages, while a search engine helps you find information on the internet.",
    ],
  },
  {
    numb: 10,
    question: "What is the purpose of a firewall?",
    answer: "To control access to data and resources on a network",
    options: [
      "To protect a computer from viruses and malware",
      "To speed up the internet connection",
      "To provide encryption for online communication",
      "To control access to data and resources on a network",
    ],
  },
  {
    numb: 11,
    question:
      "Software and Applications: What are the different types of software applications?",
    answer: "System software, application software, utility software",
    options: [
      "Word processing software, spreadsheet software, presentation software",
      "Operating systems, web browsers, email clients",
      "All of the above",
      "System software, application software, utility software",
    ],
  },
  {
    numb: 12,
    question:
      "What is the difference between open-source software and proprietary software?",
    answer:
      "Open-source software is free to use and modify, while proprietary software is not.",
    options: [
      "Open-source software is written by volunteers, while proprietary software is written by professional developers.",
      "Open-source software is typically less secure than proprietary software.",
      "There is no difference in quality between open-source and proprietary software.",
      "Open-source software is free to use and modify, while proprietary software is not.",
    ],
  },
  {
    numb: 13,
    question: "What are the benefits of using cloud-based applications?",
    answer: "All of the above",
    options: [
      "Cloud-based applications are accessible from any device with an internet connection.",
      "Cloud-based applications require less storage space on your computer.",
      "Cloud-based applications are automatically updated with the latest features and security patches.",
      "All of the above",
    ],
  },
  {
    numb: 14,
    question: "What is the purpose of a file compression tool?",
    answer: "To reduce the size of files",
    options: [
      "To organize files and folders on your computer",
      "To back up your data to a secure location",
      "To protect your computer from viruses and malware",
      "To reduce the size of files",
    ],
  },
  {
    numb: 15,
    question:
      "Security and Privacy: What are some important steps to take to protect your online privacy?",
    answer: "All of the above",
    options: [
      "Use strong passwords and don't share them with anyone.",
      "Be careful about the information you share online.",
      "Install anti-virus and anti-malware software.",
      "All of the above",
    ],
  },
  {
    numb: 16,
    question: "What is phishing?",
    answer:
      "A fraudulent email or website designed to trick you into revealing personal information.",
    options: [
      "A type of malware that can steal your personal information.",
      "A computer program that can damage your files and disrupt your computer's operation.",
      "There is no difference between a web browser and a search engine.",
      "A fraudulent email or website designed to trick you into revealing personal information.",
    ],
  },
  {
    numb: 17,
    question: "What are the different types of data?",
    answer: "All of the above",
    options: [
      "Quantitative, qualitative, structured, unstructured",
      "Text, audio, video, image",
      "Numerical, categorical, descriptive, prescriptive",
      "All of the above",
    ],
  },
  {
    numb: 18,
    question:
      "Programming Fundamentals: What are the different types of programming languages?",
    answer: "All of the above",
    options: [
      "High-level, low-level, object-oriented, functional",
      "Scripting languages, compiled languages, interpreted languages",
      "Procedural languages, declarative languages, event-driven languages",
      "All of the above",
    ],
  },
  {
    numb: 19,
    question: "What are the basic building blocks of a programming language?",
    answer: "All of the above",
    options: [
      "Variables, data types, operators, expressions",
      "Keywords, functions, loops, conditional statements",
      "Comments, documentation, libraries, APIs",
      "All of the above",
    ],
  },
  {
    numb: 20,
    question: "What is the difference between a compiler and an interpreter?",
    answer:
      "A compiler converts the entire program into machine code before execution, while an interpreter executes the program line by line.",
    options: [
      "A compiler is faster than an interpreter, but an interpreter is more flexible.",
      "A compiler is used for high-level languages, while an interpreter is used for low-level languages.",
      "There is no difference in functionality between a compiler and an interpreter.",
      "A compiler converts the entire program into machine code before execution, while an interpreter executes the program line by line.",
    ],
  },
  {
    numb: 21,
    question:
      "Troubleshooting and Problem Solving: What are some common troubleshooting steps for computer problems?",
    answer: "All of the above",
    options: [
      "Restart the computer, check for software updates, scan for malware, reinstall the program",
      "Contact technical support, search online forums for solutions, consult user manuals",
      "Identify the problem, gather information, isolate the issue, test potential solutions",
      "All of the above",
    ],
  },
  {
    "numb": 22,
    "question": "كم جيجابايت من ذاكرة الوصول العشوائي DDR4 SDRAM يحتوي الخيار الأول؟",
    "answer": "8 غيغابايت",
    "options": [
    "4 غيغابايت",
    "8 غيغابايت",
    "16 غيغابايت",
    "32 غيغابايت"
    ]
    },
    {
    "numb": 23,
    "question": "أي من المكونات التالية هي نفسها في كلا الخيارين؟",
    "answer": "وحدة المعالجة المركزية (CPU)، وحدة معالجة الرسومات (GPU)",
    "options": [
    "وحدة المعالجة المركزية (CPU)",
    "وحدة معالجة الرسومات (GPU)",
    "وحدة المعالجة المركزية (CPU)، وحدة معالجة الرسومات (GPU)",
    "لا شيء، جميع المكونات مختلفة"
    ]
    },
    {
    "numb": 24,
    "question": "أي كمبيوتر تفضل استنادًا إلى المعلومات المتاحة؟",
    "answer": "الخيار الثاني",
    "options": [
    "الخيار الأول",
    "الخيار الثاني",
    "لا يمكنني اتخاذ قرار في الوقت الحالي"
    ]
    },
    {
      "numb": 25,
      "question": "What is the purpose of RAM in a computer? ما هو الغرض من ذاكرة الوصول العشوائي (RAM) في الكمبيوتر؟",
      "answer": "To provide temporary storage for running programs and data. توفير تخزين مؤقت لتشغيل البرامج والبيانات.",
      "options": [
        "To provide temporary storage for running programs and data. توفير تخزين مؤقت لتشغيل البرامج والبيانات.",
        "To store permanent data. لتخزين البيانات الدائمة.",
        "To control the flow of information on the internet. للتحكم في تدفق المعلومات على الإنترنت.",
        "To manage computer resources and allow applications to run. إدارة موارد الكمبيوتر والسماح للتطبيقات بالتشغيل."
      ]
    },
    {
      "numb": 26,
      "question": "How many gigabytes of DDR4 SDRAM does the first option contain? كم جيجابايت من ذاكرة الوصول العشوائي DDR4 SDRAM يحتوي الخيار الأول؟",
      "answer": "8 غيغابايت",
      "options": [
        "8 غيغابايت",
        "4 غيغابايت",
        "16 غيغابايت",
        "32 غيغابايت"
      ]
    },
    {
      "numb": 27,
      "question": "Which of the following components is the same in both options? أي من المكونات التالية هي نفسها في كلا الخيارين؟",
      "answer": "وحدة تزويد الطاقة، الأجهزة الطرفية، الصندوق",
      "options": [
        "وحدة تزويد الطاقة، الأجهزة الطرفية، الصندوق",
        "وحدة المعالجة المركزية (CPU)",
        "وحدة معالجة الرسومات (GPU)",
        "لا شيء، جميع المكونات مختلفة"
      ]
    },
    {
      "numb": 28,
      "question": "What is another name for the Central Processing Unit (CPU)? اختر الإجابة الصحيحة.",
      "options": [
        "Memory ذاكرة",
        "Brain الدماغ",
        "Graphics Card بطاقة الرسومات",
        "Power Supply وحدة تزويد الطاقة"
      ],
      "answer": "Brain الدماغ"
    },
    {
      "numb": 29,
      "question": "How are Central Processing Units (CPUs) measured in terms of frequency? اختر الإجابة الصحيحة.",
      "options": [
        "Bits بت",
        "Bytes بايت",
        "Hertz هرتز",
        "Gigabytes جيجابايت"
      ],
      "answer": "Hertz هرتز"
    },
    {
      "numb": 30,
      "question": "What is the modern standard for measuring the size of processors in terms of word size? اختر الإجابة الصحيحة.",
      "options": [
        "8-bit 8 بت",
        "16-bit 16 بت",
        "32-bit 32 بت",
        "64-bit 64 بت"
      ],
      "answer": "64-bit 64 بت"
    },
    {
      "numb": 31,
      "question": "What is the advantage of having multiple cores in a CPU? اختر الإجابة الصحيحة.",
      "options": [
        "Reduces word size يقلل من حجم الكلمات",
        "Increases clock speed يزيد من سرعة الساعة",
        "Allows for parallel processing يسمح بالمعالجة المتوازية",
        "Enhances graphics performance يعزز أداء الرسومات"
      ],
      "answer": "Allows for parallel processing يسمح بالمعالجة المتوازية"
    },
    {
      "numb": 32,
      "question": "What are the two most common manufacturers of Central Processing Units (CPUs)? اختر الإجابة الصحيحة.",
      "options": [
        "Intel and AMD إنتل و إيه إم دي",
        "Nvidia and Radeon نفيديا و راديون",
        "Samsung and Apple سامسونج و آبل",
        "Dell and HP ديل و إتش بي"
      ],
      "answer": "Intel and AMD إنتل و إيه إم دي"
    },
    {
      "numb": 33,
      "question": "How is the speed of a Central Processing Unit (CPU) measured? اختر الإجابة الصحيحة.",
      "options": [
        "MegaBytes per second ميغابايت في الثانية",
        "Gigahertz جيجاهرتز",
        "Terabytes per hour تيرابايت في الساعة",
        "Kilohertz كيلوهرتز"
      ],
      "answer": "Gigahertz جيجاهرتز"
    },
    {
      "numb": 34,
      "question": "What does the term 'word size' refer to in the context of Central Processing Units (CPUs)? اختر الإجابة الصحيحة.",
      "options": [
        "Physical dimensions الأبعاد الفعلية",
        "Size of the instruction set حجم مجموعة التعليمات",
        "Storage capacity سعة التخزين",
        "Number of cores عدد الأنوية"
      ],
      "answer": "Size of the instruction set حجم مجموعة التعليمات"
    },
    {
      "numb": 35,
      "question": "What is the significance of the term 'Multiple Cores' in a CPU? اختر الإجابة الصحيحة.",
      "options": [
        "Increases clock speed يزيد من سرعة الساعة",
        "Enhances graphics performance يعزز أداء الرسومات",
        "Allows for parallel processing يسمح بالمعالجة المتوازية",
        "Reduces power consumption يقلل من استهلاك الطاقة"
      ],
      "answer": "Allows for parallel processing يسمح بالمعالجة المتوازية"
    }
    
];

// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

//   {
//   numb: No.,
//   question: "Your Question is Here",
//   answer: "Correct answer of the question is here",
//   options: [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
// },
