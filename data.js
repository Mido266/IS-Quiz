const quizData = [
    {
        "title": "IS 60 Questions Sheet",
        "questions": [
            {
                "question": "\"DSS\" stands for \"Data Support System\".",
                "options": ["False", "True"],
                "answer": "False"
            },
            {
                "question": "\"MIS\" stands for \"Monitoring Information System\".",
                "options": ["False", "True"],
                "answer": "False"
            },
            {
                "question": "(ESS) Specialized, user friendly tool for top level management to monitor organizational operational performance, and support decision making.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "(KWS) Specialized, high performance computer systems designed to help knowledge workers such as engineers, designers, and scientists create, organize, and integrate new knowledge into an organization.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "(OAS) Integrated, network based HW / SW technologies, designed to streamline, store, and processes data to enhance the organizational productivity.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "A collection of organized data, electronically stored within a computer \"Server\".",
                "options": [
                    "NONE OF THEM",
                    "EXCEPTION REPORT",
                    "DATABASE",
                    "HARDWARE"
                ],
                "answer": "DATABASE"
            },
            {
                "question": "A set of interacting elements, with defined boundary, working together to process data and produce information.",
                "options": [
                    "DATABASE",
                    "INFORMATION SYSTEM",
                    "RESOURCE PLANNING",
                    "RELATIONSHIP"
                ],
                "answer": "INFORMATION SYSTEM"
            },
            {
                "question": "A structural design for the database, which describes the relationship of entities.",
                "options": [
                    "DRB",
                    "ERP",
                    "RDE",
                    "ERD"
                ],
                "answer": "ERD"
            },
            {
                "question": "A system collects, stores, processes, and retrieves, high volume, daily operational transactions.",
                "options": [
                    "NONE OF THEM",
                    "TPS",
                    "ERP",
                    "DSS"
                ],
                "answer": "TPS"
            },
            {
                "question": "An attribute that can be divided into smaller parts.",
                "options": [
                    "MULTIVALUED ATTRIBUTE",
                    "WEAK ATTRIBUTE",
                    "DERIVED ATTRIBUTE",
                    "COMPOSITE ATTRIBUTE"
                ],
                "answer": "COMPOSITE ATTRIBUTE"
            },
            {
                "question": "An entity represents only living elements.",
                "options": ["True", "False"],
                "answer": "False"
            },
            {
                "question": "An Interactive, and flexible system collects, processes, analyzes data to provide decision makers with information.",
                "options": [
                    "OFFICE AUTOMATION SYSTEMS (OAS)",
                    "ENTERPRISE RESOURCE PLANNING (ERP)",
                    "TRANSACTION PROCESSING SYSTEM (TPS)",
                    "DECISION SUPPORT SYSTEM (DSS)"
                ],
                "answer": "DECISION SUPPORT SYSTEM (DSS)"
            },
            {
                "question": "Any business-related exchange.",
                "options": [
                    "TRANSACTION",
                    "OPERATION",
                    "PROCESS",
                    "RELATIONSHIP"
                ],
                "answer": "TRANSACTION"
            },
            {
                "question": "Batch systems involve a direct connection between operator and TPS program, they provide immediate result.",
                "options": ["True", "False"],
                "answer": "False"
            },
            {
                "question": "Core Elements of (IS) includes:",
                "options": [
                    "PLANNING, RESOURCES, RELATIONSHIPS",
                    "B AND C",
                    "ALL OF THEM",
                    "SOFTWARE, DATABASE, HARDWARE"
                ],
                "answer": "ALL OF THEM"
            },
            {
                "question": "Diamond in an ER diagram, is used for:",
                "options": [
                    "ENTITY",
                    "PRIMARY KEY",
                    "ATTRIBUTE",
                    "RELATIONSHIP"
                ],
                "answer": "RELATIONSHIP"
            },
            {
                "question": "Each entity in the ER model becomes a table in the relational model.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "Employees must be trained, understand the need for the new system, and what their role is in using or operating it.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "Employees must understand and accept the new roles, responsibilities, when new system starts operating.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "Employees must understand and be motivated to work together to achieve the system's benefits.",
                "options": ["False", "True"],
                "answer": "True"
            },
            {
                "question": "ERD is created based on two main components; entities, and relationships.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "Experienced users who can guide others to use the system effectively, and solve start-up problems.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "Group Information Systems improve team members communications and collaboration.",
                "options": ["False", "True"],
                "answer": "True"
            },
            {
                "question": "In a batch system, transactions are grouped together and processed as a unit.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "It involves a direct connection between operator and TPS program, they provide immediate result.",
                "options": [
                    "BATCH SYSTEM",
                    "ENTERPRISE IS",
                    "ONLINE SYSTEM",
                    "ERP"
                ],
                "answer": "ONLINE SYSTEM"
            },
            {
                "question": "Knowledge helps to make decisions or judgments based on wisdom and experience.",
                "options": ["False", "True"],
                "answer": "True"
            },
            {
                "question": "MIS designed to streamline, store, and processes data.",
                "options": ["True", "False"],
                "answer": "False"
            },
            {
                "question": "New systems require major changes to current the processes and the automation of new processes.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "Only valid transactions are stored in databases or files.",
                "options": ["False", "True"],
                "answer": "True"
            },
            {
                "question": "Oval in an ER diagram, is used for:",
                "options": [
                    "RELATIONSHIP",
                    "ATTRIBUTE",
                    "ENTITY",
                    "PRIMARY KEY"
                ],
                "answer": "ATTRIBUTE"
            },
            {
                "question": "Payroll transaction processing is a sample of online mode transactions.",
                "options": ["True", "False"],
                "answer": "False"
            },
            {
                "question": "Personal Information Systems improve the productivity of individual users.",
                "options": ["False", "True"],
                "answer": "True"
            },
            {
                "question": "Rectangle in an ER diagram, is used for:",
                "options": [
                    "PRIMARY KEY",
                    "RELATIONSHIP",
                    "ATTRIBUTE",
                    "ENTITY"
                ],
                "answer": "ENTITY"
            },
            {
                "question": "Relationships represented by foreign keys in the relational model.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "Structured data includes qualitative content e.g., multimedia, conversations, requires advanced analytics.",
                "options": ["True", "False"],
                "answer": "False"
            },
            {
                "question": "The attributes of the entity become the columns of the table.",
                "options": ["False", "True"],
                "answer": "True"
            },
            {
                "question": "The mix of information with experience is:",
                "options": [
                    "DATA",
                    "SKILLS",
                    "WISDOM",
                    "KNOWLEDGE"
                ],
                "answer": "KNOWLEDGE"
            },
            {
                "question": "The raw material from which information is extracted:",
                "options": [
                    "SYSTEMS",
                    "PROCESSES",
                    "TRANSACTIONS",
                    "DATA"
                ],
                "answer": "DATA"
            },
            {
                "question": "TPS captures everyday transactions data, to track and manage operations, and produce reports.",
                "options": ["False", "True"],
                "answer": "True"
            },
            {
                "question": "TPS is an organized collection of people, procedures, software, databases, and devices.",
                "options": ["False", "True"],
                "answer": "True"
            },
            {
                "question": "TPS only processes transactions in real-time.",
                "options": ["True", "False"],
                "answer": "False"
            },
            {
                "question": "TPS stands for Transaction Processing System.",
                "options": ["False", "True"],
                "answer": "True"
            },
            {
                "question": "Transactions are grouped together and processed as a unit.",
                "options": [
                    "DEMAND REPORT",
                    "NONE OF THEM",
                    "SCHEDULED REPORT",
                    "BATCH SYSTEM"
                ],
                "answer": "BATCH SYSTEM"
            },
            {
                "question": "Underline in an ER diagram, is used for:",
                "options": [
                    "PRIMARY KEY",
                    "ATTRIBUTE",
                    "RELATIONSHIP",
                    "ENTITY"
                ],
                "answer": "PRIMARY KEY"
            },
            {
                "question": "Unstructured Data can be arranged in a fixed format, usually tables with rows and columns.",
                "options": ["False", "True"],
                "answer": "False"
            },
            {
                "question": "What is the primary difference between data and information?",
                "options": [
                    "ALL OF THEM",
                    "Data Is Raw Facts, While Information Is Processed And Meaningful",
                    "DATA IS ALWAYS USEFUL, WHILE INFORMATION IS NOT",
                    "DATA EXTRACTED FROM INFORMATION"
                ],
                "answer": "Data Is Raw Facts, While Information Is Processed And Meaningful"
            },
            {
                "question": "What type of database relationship requires a third table to connect two entities?",
                "options": [
                    "ONE-TO-MANY",
                    "MANY-TO-MANY",
                    "ONE-TO-ONE",
                    "NONE OF THEM"
                ],
                "answer": "MANY-TO-MANY"
            },
            {
                "question": "Which characteristic of valuable information ensures it is free from errors?",
                "options": [
                    "ACCURATE",
                    "TIMELY",
                    "COMPLETE",
                    "SECURE"
                ],
                "answer": "ACCURATE"
            },
            {
                "question": "Which of the following is NOT a component of a Computer-Based Information System (CBIS)?",
                "options": [
                    "PEOPLE",
                    "HARDWARE",
                    "SOFTWARE",
                    "MANAGEMENT"
                ],
                "answer": "MANAGEMENT"
            },
            {
                "question": "Which of the following is NOT a key function of an Information System (IS)?",
                "options": [
                    "OUTPUT",
                    "INPUT",
                    "PROCESSING",
                    "INTERNET"
                ],
                "answer": "INTERNET"
            },
            {
                "question": "In the results of each transaction are not immediately available.",
                "options": [
                    "All of them",
                    "Batch processing",
                    "Transaction processing",
                    "Real-time processing"
                ],
                "answer": "Batch processing"
            },
            {
                "question": "_______ represents raw facts, where-as _______ is data made meaningful.",
                "options": [
                    "Data, reporting",
                    "Information, Records",
                    "Data, information",
                    "Information, reporting"
                ],
                "answer": "Data, information"
            },
            {
                "question": "Which component is essential for converting an ER Model to a relational model?",
                "options": [
                    "Marketing Data",
                    "Maps and GPS",
                    "Foreign Keys"
                ],
                "answer": "Foreign Keys"
            },
            {
                "question": "The conversion of an ER Model to a Relational Model involves creating tables from entities and establishing relationships using foreign keys.",
                "options": ["True", "False"],
                "answer": "True"
            },
            {
                "question": "What is the primary purpose of an Information System (IS)?",
                "options": [
                    "To create websites",
                    "To store large amounts of data",
                    "To process information and support decision-making",
                    "To replace human workers"
                ],
                "answer": "To process information and support decision-making"
            },
            {
                "question": "Why is it important for information to be accessible?",
                "options": [
                    "To ensure only executives can use it",
                    "To prevent data duplication",
                    "To reduce system costs",
                    "So authorized users can retrieve it in the correct format when needed"
                ],
                "answer": "So authorized users can retrieve it in the correct format when needed"
            },
            {
                "question": "Complete information means that:",
                "options": [
                    "It contains all the necessary facts",
                    "It is stored in a database",
                    "It is available at all times",
                    "None of them"
                ],
                "answer": "It contains all the necessary facts"
            },
            {
                "question": "Information should be economical, which means:",
                "options": [
                    "It should never be shared",
                    "The cost of producing it should be balanced with its value",
                    "It should be free for all users",
                    "None of them"
                ],
                "answer": "The cost of producing it should be balanced with its value"
            },
            {
                "question": "Which characteristic ensures that information can be used for multiple purposes by different users?",
                "options": [
                    "Secure",
                    "Relevant",
                    "Flexible",
                    "Verifiable"
                ],
                "answer": "Flexible"
            },
            {
                "question": "Information should be secure, meaning:",
                "options": [
                    "It should be deleted after use",
                    "It must be available to everyone",
                    "It should be protected from unauthorized access",
                    "None of them"
                ],
                "answer": "It should be protected from unauthorized access"
            }
        ]
    },
    {
        "title": "IS Questions from Chapters",
        "questions": [
            {
                "question": "What type of information system relies on physical tools, paper records, and human calculation without electronic support?",
                "options": [
                    "Computer-based Information Systems (CBIS)",
                    "Manual-based Information Systems (MBIS)",
                    "Geographic Information Systems (GIS)",
                    "Transaction Processing Systems (TPS)"
                ],
                "answer": "Manual-based Information Systems (MBIS)"
            },
            {
                "question": "Which of the following is considered the most important element in most management information systems?",
                "options": [
                    "Hardware",
                    "Software",
                    "People",
                    "Databases"
                ],
                "answer": "People"
            },
            {
                "question": "What defines the steps to follow to achieve a specific end result, such as entering a customer order or paying a supplier invoice?",
                "options": [
                    "A database",
                    "A network",
                    "A process/procedure",
                    "A hardware component"
                ],
                "answer": "A process/procedure"
            },
            {
                "question": "Which concept is described as a collection of facts, figures, symbols, words, or unprocessed computer code that lacks meaning on its own?",
                "options": [
                    "Information",
                    "Knowledge",
                    "Wisdom",
                    "Data"
                ],
                "answer": "Data"
            },
            {
                "question": "What type of data can be arranged in a fixed format, usually tables with rows and columns, and works easily with SQL databases?",
                "options": [
                    "Unstructured Data",
                    "Structured Data",
                    "Qualitative Data",
                    "Derived Data"
                ],
                "answer": "Structured Data"
            },
            {
                "question": "Emails, social media posts, audio, and video files are examples of what?",
                "options": [
                    "Structured Data",
                    "Unstructured Data",
                    "Database schemas",
                    "Extranets"
                ],
                "answer": "Unstructured Data"
            },
            {
                "question": "In the DIKW pyramid, what is formed when information is analyzed and combined with experience?",
                "options": [
                    "Data",
                    "Information",
                    "Knowledge",
                    "Wisdom"
                ],
                "answer": "Wisdom"
            },
            {
                "question": "Which category of Information Systems improves team member communications and collaboration?",
                "options": [
                    "Personal IS",
                    "Group IS",
                    "Enterprise IS",
                    "Hardware IS"
                ],
                "answer": "Group IS"
            },
            {
                "question": "Which system is used by workers at the operational level of an organization to perform and record everyday business exchanges?",
                "options": [
                    "Management Information System (MIS)",
                    "Geographic Information System (GIS)",
                    "Transaction Processing System (TPS)",
                    "Executive Information System (EIS)"
                ],
                "answer": "Transaction Processing System (TPS)"
            },
            {
                "question": "In which processing mode are transactions grouped together and files updated periodically all at once (e.g., monthly payroll)?",
                "options": [
                    "Online Mode",
                    "Batch Mode",
                    "Real-time Processing",
                    "Demand Processing"
                ],
                "answer": "Batch Mode"
            },
            {
                "question": "What is a collection of organized data, normally stored electronically within a computer server?",
                "options": [
                    "Network",
                    "Extranet",
                    "Database",
                    "Operating System"
                ],
                "answer": "Database"
            },
            {
                "question": "In an Entity-Relationship Diagram (ERD), how is an \"Entity\" represented?",
                "options": [
                    "Oval",
                    "Diamond",
                    "Rectangle",
                    "Dotted Oval"
                ],
                "answer": "Rectangle"
            },
            {
                "question": "In an ERD, what is used to uniquely identify an entity among other entities, typically marked with an underline?",
                "options": [
                    "Derived Attribute",
                    "Key Attribute",
                    "Weak Entity",
                    "Multivalued Attribute"
                ],
                "answer": "Key Attribute"
            },
            {
                "question": "What type of relationship exists when a customer can place many orders, but a specific order cannot be placed by many customers?",
                "options": [
                    "One-to-one (1:1)",
                    "One-to-many (1:N)",
                    "Many-to-many (M:N)",
                    "Recursive"
                ],
                "answer": "One-to-many (1:N)"
            },
            {
                "question": "Which type of MIS report is automatically produced in unusual situations that require management action?",
                "options": [
                    "Scheduled report",
                    "Demand report",
                    "Key-indicator report",
                    "Exception report"
                ],
                "answer": "Exception report"
            },
            {
                "question": "Which system links data to physical locations and helps organizations answer \"Where\" questions (e.g., best routes, where to locate police stations)?",
                "options": [
                    "Management Information System (MIS)",
                    "Transaction Processing System (TPS)",
                    "Geographic Information Systems (GIS)",
                    "Customer Relationship Management (CRM)"
                ],
                "answer": "Geographic Information Systems (GIS)"
            },
            {
                "question": "What type of network allows selected outsiders, such as business partners and customers, to access authorized resources of a company's internal network?",
                "options": [
                    "Intranet",
                    "Extranet",
                    "Local Area Network (LAN)",
                    "Public Cloud"
                ],
                "answer": "Extranet"
            },
            {
                "question": "A person buying a used book from another person on platforms like OLX or eBay is an example of what type of e-commerce?",
                "options": [
                    "Business to Consumer (B2C)",
                    "Business to Business (B2B)",
                    "Consumer to Consumer (C2C)",
                    "Mobile Commerce (M-Commerce)"
                ],
                "answer": "Consumer to Consumer (C2C)"
            },
            {
                "question": "Which type of data analytics uses statistical models and forecasting techniques to understand \"What will happen\"?",
                "options": [
                    "Descriptive Analytics",
                    "Predictive Analytics",
                    "Prescriptive Analytics",
                    "Retrospective Analytics"
                ],
                "answer": "Predictive Analytics"
            },
            {
                "question": "Which cloud deployment model is owned by one party, is not available to the public, and ensures high security and data privacy for a single organization?",
                "options": [
                    "Public Cloud",
                    "Private Cloud",
                    "Community Cloud",
                    "Hybrid Cloud"
                ],
                "answer": "Private Cloud"
            },
            {
                "question": "Which cloud service model allows end-users to use and rent applications from a Cloud Service Provider via a web browser without installing the software locally?",
                "options": [
                    "Infrastructure as a Service (IaaS)",
                    "Platform as a Service (PaaS)",
                    "Software as a Service (SaaS)",
                    "Storage as a Service (STaaS)"
                ],
                "answer": "Software as a Service (SaaS)"
            },
            {
                "question": "Which cloud service model provides virtualized hardware computing resources (servers, storage, networking) and is typically used by network architects?",
                "options": [
                    "Software as a Service (SaaS)",
                    "Platform as a Service (PaaS)",
                    "Infrastructure as a Service (IaaS)",
                    "Data as a Service (DaaS)"
                ],
                "answer": "Infrastructure as a Service (IaaS)"
            },
            {
                "question": "Which type of information system helps in improving collaboration among members of a workgroup?",
                "options": [
                    "Personal IS",
                    "Group IS",
                    "Enterprise IS",
                    "Executive Support System"
                ],
                "answer": "Group IS"
            },
            {
                "question": "What is the key characteristic of a Transaction Processing System (TPS)?",
                "options": [
                    "Supports strategic decision making",
                    "Processes routine transactions",
                    "Enhances individual productivity",
                    "Provides top-level summaries"
                ],
                "answer": "Processes routine transactions"
            },
            {
                "question": "Which system is designed for long-term, strategic decision-making and provides a comprehensive view of organizational performance?",
                "options": [
                    "Management Information System (MIS)",
                    "Decision Support System (DSS)",
                    "Executive Support System (ESS)",
                    "Transaction Processing System (TPS)"
                ],
                "answer": "Executive Support System (ESS)"
            },
            {
                "question": "Which information system type is characterized by extensive data analysis and modeling to assist decision-makers?",
                "options": [
                    "Transaction Processing System",
                    "Management Information System",
                    "Decision Support System",
                    "Executive Support System"
                ],
                "answer": "Decision Support System (DSS)"
            },
            {
                "question": "What is the primary function of an Enterprise Information System (EIS)?",
                "options": [
                    "Improve individual productivity",
                    "Support collaboration in workgroups",
                    "Define structured interactions among employees and external entities",
                    "Provide routine information reports"
                ],
                "answer": "Define structured interactions among employees and external entities"
            },
            {
                "question": "Which type of information system integrates all facets of a business, including planning, manufacturing, sales, and marketing?",
                "options": [
                    "Personal IS",
                    "Group IS",
                    "Enterprise Resource Planning (ERP) System",
                    "Decision Support System"
                ],
                "answer": "Enterprise Resource Planning (ERP) System"
            },
            {
                "question": "What was the main issue with the Manual (Document file system) approach to data management?",
                "options": [
                    "Data redundancy",
                    "Inefficient, time-consuming, and cumbersome",
                    "Lack of security features",
                    "Difficulty in data modeling"
                ],
                "answer": "Inefficient, time-consuming, and cumbersome"
            },
            {
                "question": "How was data stored in the Computer file system (CFS) initially?",
                "options": [
                    "As physical paper records",
                    "In a centralized cloud system",
                    "Digitally similar to manual files",
                    "In relational database tables"
                ],
                "answer": "Digitally similar to manual files"
            },
            {
                "question": "What encouraged each functional area in a corporation to develop specialized applications and files in the CFS approach?",
                "options": [
                    "Data redundancy",
                    "Data inconsistency",
                    "Processing inflexibility",
                    "Inadequate storage resources"
                ],
                "answer": "Inadequate storage resources"
            },
            {
                "question": "What does DBMS stand for?",
                "options": [
                    "Database Manual System",
                    "Database Management System",
                    "Digital Backup System",
                    "Data Block Management System"
                ],
                "answer": "Database Management System"
            },
            {
                "question": "What is a major advantage of a Database Management System (DBMS)?",
                "options": [
                    "Increased cost",
                    "Data redundancy",
                    "Simplicity in data retrieval",
                    "Complexity in data handling"
                ],
                "answer": "Simplicity in data retrieval"
            },
            {
                "question": "What role is responsible for authorizing access to the database in a DBMS?",
                "options": [
                    "System Analyst",
                    "Database Designer",
                    "Database Administrator (DBA)",
                    "App. Programmer (S/W Eng.)"
                ],
                "answer": "Database Administrator (DBA)"
            },
            {
                "question": "Which type of DBMS model provides relations considered as \"tables\" with all data visible?",
                "options": [
                    "Hierarchical DBMS model",
                    "Network DBMS model",
                    "Relational DBMS (RDBMS)",
                    "NoSQL DBMS model"
                ],
                "answer": "Relational DBMS (RDBMS)"
            },
            {
                "question": "What is the purpose of a data dictionary in a DBMS?",
                "options": [
                    "Performing backups",
                    "Defining data elements and relationships",
                    "Creating data redundancy",
                    "Managing security protocols"
                ],
                "answer": "Defining data elements and relationships"
            },
            {
                "question": "Which aspect of a DBMS function enforces user security and data privacy within a database?",
                "options": [
                    "Data transformation & presentation",
                    "Data integrity management",
                    "Security management",
                    "Data storage management"
                ],
                "answer": "Security management"
            },
            {
                "question": "What is a major disadvantage of a Database Management System (DBMS)?",
                "options": [
                    "Simplicity in data access",
                    "Low maintenance cost",
                    "Increased vulnerability to data leakage",
                    "Improved data integrity"
                ],
                "answer": "Increased vulnerability to data leakage"
            },
            {
                "question": "Why is data redundancy considered a disadvantage in a DBMS?",
                "options": [
                    "To improve data consistency",
                    "To enhance data security",
                    "To minimize data inconsistency",
                    "To prevent duplication of data"
                ],
                "answer": "To prevent duplication of data"
            },
            {
                "question": "Which factor contributes to the complexity of a DBMS?",
                "options": [
                    "Cost-effectiveness",
                    "Minimum data access",
                    "Requirement for skilled staff",
                    "Lack of data backups"
                ],
                "answer": "Requirement for skilled staff"
            },
            {
                "question": "How does a DBMS handle data access control?",
                "options": [
                    "By restricting data access to specific users",
                    "By providing easy access to all users",
                    "By limiting the number of queries",
                    "By duplicating data for each user"
                ],
                "answer": "By restricting data access to specific users"
            },
            {
                "question": "What is the primary function of a DBMS in terms of data storage management?",
                "options": [
                    "Raw data acquisition",
                    "Data transformation",
                    "Index-based data retrieval",
                    "Storage of data and related information"
                ],
                "answer": "Storage of data and related information"
            },
            {
                "question": "What is the key difference between a File System and a DBMS in terms of data redundancy?",
                "options": [
                    "File System has no redundancy",
                    "File System has more redundancy",
                    "DBMS leads to data inconsistency",
                    "DBMS results in data isolation"
                ],
                "answer": "File System has more redundancy"
            },
            {
                "question": "Which aspect of a DBMS poses a challenge in terms of performance compared to traditional file systems?",
                "options": [
                    "Increased size of data",
                    "Complexity of operations",
                    "Requirement for skilled staff",
                    "Difficulty in data transformation"
                ],
                "answer": "Complexity of operations"
            },
            {
                "question": "Why is data integrity management important in a DBMS?",
                "options": [
                    "To promote redundancy",
                    "To restrict database access",
                    "To maintain stability during data operations",
                    "To increase data inconsistency"
                ],
                "answer": "To maintain stability during data operations"
            },
            {
                "question": "How does a DBMS affect data privacy and confidentiality?",
                "options": [
                    "Increases data vulnerability",
                    "Centralizes data access",
                    "Ensures compliance with data security",
                    "Inhibits authorized data sharing"
                ],
                "answer": "Ensures compliance with data security"
            },
            {
                "question": "What major benefit does a DBMS offer in terms of data access?",
                "options": [
                    "Slow retrieval speed",
                    "Limited data sharing opportunities",
                    "Improved data migration",
                    "Faster and easier data access"
                ],
                "answer": "Faster and easier data access"
            },
            {
                "question": "What is a key limitation of a DBMS concerning efficiency?",
                "options": [
                    "Simplified data modeling",
                    "Inability to update data in real-time",
                    "Low maintenance cost",
                    "Decreased performance for small organizations"
                ],
                "answer": "Decreased performance for small organizations"
            },
            {
                "question": "What describes the program functions and helps users operate the computer system?",
                "options": [
                    "Computer programs",
                    "Documentation",
                    "Computer system platform",
                    "System software"
                ],
                "answer": "Documentation"
            },
            {
                "question": "Which type of software consists of programs designed to coordinate the activities and functions of hardware and various programs throughout the computer system?",
                "options": [
                    "Computer programs",
                    "Application software",
                    "System software",
                    "Utility Programs"
                ],
                "answer": "System software"
            },
            {
                "question": "What category of software includes word processing, electronic mail, spreadsheet, and database applications?",
                "options": [
                    "Workgroup Software",
                    "Enterprise Software",
                    "Application software",
                    "Utility Programs"
                ],
                "answer": "Application software"
            },
            {
                "question": "Which software category allows two or more people to work together effectively using word processing, databases, and spreadsheets?",
                "options": [
                    "Personal Application Software",
                    "Enterprise Software",
                    "Utility Programs",
                    "Workgroup Software"
                ],
                "answer": "Workgroup Software"
            },
            {
                "question": "Utility programs are used to perform which of the following tasks?",
                "options": [
                    "Merge and sort sets of data",
                    "Keep track of computer jobs being run",
                    "Interpret programming languages",
                    "Develop graphic design projects"
                ],
                "answer": "Merge and sort sets of data"
            },
            {
                "question": "Which kind of user interface uses pictures and menus displayed on the screen to send commands to the computer system?",
                "options": [
                    "Command-based user interface",
                    "Graphic user interface (GUI)",
                    "Natural language interface",
                    "Virtual reality interface"
                ],
                "answer": "Graphic user interface (GUI)"
            },
            {
                "question": "The advantages of using a GUI include all of the following EXCEPT:",
                "options": [
                    "Intuitive environment",
                    "Flexible applications",
                    "Cut and paste between applications",
                    "Faster processing speed"
                ],
                "answer": "Faster processing speed"
            },
            {
                "question": "Which generation of programming language uses English-like statements and commands?",
                "options": [
                    "Natural and Intelligent Languages (5GLs)",
                    "Query and Database Languages (4GLs)",
                    "Assembly Language (2GLs)",
                    "High-Level Languages (3GLs)"
                ],
                "answer": "High-Level Languages (3GLs)"
            },
            {
                "question": "What is the set of rules that describe how programming statements should be written?",
                "options": [
                    "Syntax",
                    "Program Language Standards",
                    "Source Code",
                    "Object Code"
                ],
                "answer": "Program Language Standards"
            },
            {
                "question": "The second generation programming language is also known as:",
                "options": [
                    "Low-Level Languages",
                    "Symbolic Languages",
                    "High-Level Languages",
                    "Machine Language"
                ],
                "answer": "Symbolic Languages"
            },
            {
                "question": "Which systems software converts source code into its equivalent machine language?",
                "options": [
                    "Interpreter",
                    "Debugger",
                    "Compiler",
                    "Linker"
                ],
                "answer": "Compiler"
            },
            {
                "question": "What role does a compiler play in program execution?",
                "options": [
                    "Converts a complete program into machine language",
                    "Translates one program statement at a time",
                    "Executes programs directly without translation",
                    "Provides real-time suggestions for coding"
                ],
                "answer": "Converts a complete program into machine language"
            },
            {
                "question": "Based on your career goals, which programming language is recommended for mobile app development?",
                "options": [
                    "JavaScript",
                    "Kotlin",
                    "Rust",
                    "C++"
                ],
                "answer": "Kotlin"
            },
            {
                "question": "According to the text, which programming language is mostly used for data analytics programs?",
                "options": [
                    "MATLAB",
                    "C#",
                    "TypeScript",
                    "Go"
                ],
                "answer": "MATLAB"
            },
            {
                "question": "In the context of programming languages and their uses, what is Python commonly utilized for?",
                "options": [
                    "iOS App Development",
                    "Web Servers",
                    "Machine Learning",
                    "Games"
                ],
                "answer": "Machine Learning"
            },
            {
                "question": "What is the most popular programming language in 2021 according to the text?",
                "options": [
                    "JavaScript",
                    "Python",
                    "Java",
                    "C++"
                ],
                "answer": "Python"
            },
            {
                "question": "Which programming language is listed among the most demanded in 2022 for US Job Posts?",
                "options": [
                    "Java",
                    "PHP",
                    "TypeScript",
                    "Perl"
                ],
                "answer": "Java"
            },
            {
                "question": "Which programming language is associated with developing games like PUBG and AMONG US?",
                "options": [
                    "C++",
                    "Python",
                    "Java",
                    "Unity"
                ],
                "answer": "Unity"
            },
            {
                "question": "What generation of programming language uses natural languages and allows end users to interact with the computer using ordinary words?",
                "options": [
                    "Third-generation languages",
                    "Fourth-generation languages",
                    "Fifth-generation languages",
                    "First-generation languages"
                ],
                "answer": "Fifth-generation languages"
            },
            {
                "question": "Which of the following is NOT a feature of fourth-generation languages (4GLs)?",
                "options": [
                    "Query and database abilities",
                    "Graphics abilities",
                    "Code-generation abilities",
                    "Procedural and instruction-based"
                ],
                "answer": "Procedural and instruction-based"
            },
            {
                "question": "What are the phases of the system development cycle?",
                "options": [
                    "Plan, Build, Test, Deploy",
                    "Planning, Analysis, Design, Implementation, Support",
                    "Investigation, Develop, Monitor, Evaluate",
                    "Review, Analyze, Acquire, Convert"
                ],
                "answer": "Planning, Analysis, Design, Implementation, Support"
            },
            {
                "question": "What are guidelines for system development?",
                "options": [
                    "Involve teachers only",
                    "Include stakeholders, follow standards, maintain documentation",
                    "Skip planning phase for quicker results",
                    "Design based on personal preference"
                ],
                "answer": "Include stakeholders, follow standards, maintain documentation"
            },
            {
                "question": "Who participates in the system development life cycle?",
                "options": [
                    "Students",
                    "Project managers, developers, analysts, users",
                    "IT professionals only",
                    "External consultants"
                ],
                "answer": "Project managers, developers, analysts, users"
            },
            {
                "question": "What is a systems analyst?",
                "options": [
                    "Software developer",
                    "IT manager",
                    "User representative",
                    "Liaison between users and IT professionals"
                ],
                "answer": "Liaison between users and IT professionals"
            },
            {
                "question": "What is feasibility Study?",
                "options": [
                    "Operational feasibility",
                    "Realistic feasibility",
                    "Practical feasibility",
                    "Economical feasibility"
                ],
                "answer": "Economical feasibility"
            },
            {
                "question": "What is documentation?",
                "options": [
                    "Collection and summarization of data and information",
                    "Coding and programming",
                    "User training materials",
                    "System testing procedures"
                ],
                "answer": "Collection and summarization of data and information"
            },
            {
                "question": "What are some reasons to create or modify an IS?",
                "options": [
                    "Change for the sake of change",
                    "External group suggestion",
                    "Correct problems, improve existing system",
                    "Avoid competition"
                ],
                "answer": "Correct problems, improve existing system"
            },
            {
                "question": "What is the planning phase?",
                "options": [
                    "Time to relax",
                    "Begins when steering committee receives project request",
                    "End of the project",
                    "Last-minute preparation"
                ],
                "answer": "Begins when steering committee receives project request"
            },
            {
                "question": "What is the analysis phase?",
                "options": [
                    "Initial idea generation",
                    "Detailed investigation into project requirements",
                    "Testing phase",
                    "Project celebration"
                ],
                "answer": "Detailed investigation into project requirements"
            },
            {
                "question": "What is the preliminary investigation?",
                "options": [
                    "Final project report",
                    "Detailed analysis",
                    "Determine exact nature of problem or improvement",
                    "Project approval stage"
                ],
                "answer": "Determine exact nature of problem or improvement"
            },
            {
                "question": "What is detailed analysis?",
                "options": [
                    "High-level overview",
                    "User interviews",
                    "Recommend solution",
                    "Study of current system"
                ],
                "answer": "Study of current system"
            },
            {
                "question": "What is the system proposal?",
                "options": [
                    "Initial project idea",
                    "Detailed analysis report",
                    "Feasibility assessment of alternative solutions",
                    "System handover document"
                ],
                "answer": "Feasibility assessment of alternative solutions"
            },
            {
                "question": "What are possible solutions?",
                "options": [
                    "In-house solution only",
                    "Buy packaged software, outsource, write custom software, vertical market software, horizontal market software",
                    "Use existing system",
                    "Hire more IT staff"
                ],
                "answer": "Buy packaged software, outsource, write custom software, vertical market software, horizontal market software"
            },
            {
                "question": "What is the design phase?",
                "options": [
                    "User training",
                    "Hardware and software acquisition",
                    "Development of system details",
                    "System roll-out"
                ],
                "answer": "Development of system details"
            },
            {
                "question": "What is needed to acquire new hardware and software?",
                "options": [
                    "Research analyst opinions only",
                    "Speak to competitors",
                    "Identify all requirements, read publications, talk to other professionals",
                    "Guess and check method"
                ],
                "answer": "Identify all requirements, read publications, talk to other professionals"
            },
            {
                "question": "What are three basic documents used to summarize technical specifications?",
                "options": [
                    "Informal conversations, mind maps, storyboards",
                    "User stories, flowcharts, diagrams",
                    "Request for information, request for proposal, request for quotation",
                    "Memorandums, emails, reports"
                ],
                "answer": "Request for information, request for proposal, request for quotation"
            },
            {
                "question": "How do systems analysts test software products?",
                "options": [
                    "Guess and check method",
                    "Conduct surveys",
                    "Talk to users only",
                    "References, user feedback, demonstrations, benchmarks"
                ],
                "answer": "References, user feedback, demonstrations, benchmarks"
            },
            {
                "question": "What is a detailed design?",
                "options": [
                    "High-level system overview",
                    "Detailed specifications for components in proposed solution",
                    "Initial draft of system",
                    "User interface design only"
                ],
                "answer": "Detailed specifications for components in proposed solution"
            },
            {
                "question": "What is a mockup?",
                "options": [
                    "Fully functional system",
                    "Actual production data",
                    "Sample of input or output containing actual data",
                    "Test environment"
                ],
                "answer": "Sample of input or output containing actual data"
            },
            {
                "question": "What is a prototype?",
                "options": [
                    "Final system",
                    "Test run of system",
                    "Working model of proposed system",
                    "System requirements list"
                ],
                "answer": "Working model of proposed system"
            },
            {
                "question": "What is one of an organization’s most valuable resources?",
                "options": [
                    "Data",
                    "Information",
                    "Knowledge",
                    "Experience"
                ],
                "answer": "Information"
            },
            {
                "question": "Which term is often confused with the term data?",
                "options": [
                    "Knowledge",
                    "Wisdom",
                    "Information",
                    "Intelligence"
                ],
                "answer": "Information"
            },
            {
                "question": "What can happen if an organization’s information is not accurate or complete?",
                "options": [
                    "People make better decisions",
                    "No impact on the organization",
                    "Poor decisions leading to financial losses",
                    "Improved efficiency"
                ],
                "answer": "Poor decisions leading to financial losses"
            },
            {
                "question": "What does flexible information allow?",
                "options": [
                    "Use for one specific purpose only",
                    "Use by a limited number of users",
                    "Use for a variety of purposes",
                    "Use for strategic planning only"
                ],
                "answer": "Use for a variety of purposes"
            },
            {
                "question": "What does accurate information ensure?",
                "options": [
                    "Plenty of errors",
                    "Real-time data",
                    "Error-free data",
                    "Unstructured data"
                ],
                "answer": "Error-free data"
            },
            {
                "question": "Which characteristic of information refers to its timeliness?",
                "options": [
                    "Secure",
                    "Complete",
                    "Timely",
                    "Relevant"
                ],
                "answer": "Timely"
            },
            {
                "question": "What does verifiable information mean?",
                "options": [
                    "Easy to manipulate",
                    "Can be cross-checked for accuracy",
                    "Highly complex",
                    "Subjective in nature"
                ],
                "answer": "Can be cross-checked for accuracy"
            },
            {
                "question": "In a system, what does an interface represent?",
                "options": [
                    "A boundary",
                    "Data communicated between subsystems",
                    "The entire system",
                    "Purpose and objectives"
                ],
                "answer": "Data communicated between subsystems"
            },
            {
                "question": "What is ICT an acronym for?",
                "options": [
                    "International Computer Technology",
                    "Internet Computing Technology",
                    "Information Communication Technology",
                    "Intelligent Computing Techniques"
                ],
                "answer": "Information Communication Technology"
            },
            {
                "question": "What is the purpose of a Transaction Processing System (TPS)?",
                "options": [
                    "Automate decision making",
                    "Record and process business transactions",
                    "Assess market trends",
                    "Streamline communication processes"
                ],
                "answer": "Record and process business transactions"
            },
            {
                "question": "What is the main reason for using a Decision Support System (DSS)?",
                "options": [
                    "Generate reports",
                    "Support problem-specific decision making",
                    "Manage financial data",
                    "Ensure data security"
                ],
                "answer": "Support problem-specific decision making"
            },
            {
                "question": "What is a Virtual Private Network (VPN) used for?",
                "options": [
                    "Share personal photos",
                    "Protect extranet communications over an IP network",
                    "Ensure network downtime",
                    "Enhance website performance"
                ],
                "answer": "Protect extranet communications over an IP network"
            },
            {
                "question": "What type of e-Commerce directly involves customers dealing with an organization?",
                "options": [
                    "B2B",
                    "B2C",
                    "C2C",
                    "B2G"
                ],
                "answer": "B2C"
            },
            {
                "question": "What is the purpose of an Intranet?",
                "options": [
                    "Share company information among employees",
                    "Focus on external communication",
                    "Sell products to customers",
                    "Advertise services to the public"
                ],
                "answer": "Share company information among employees"
            },
            {
                "question": "At what stage of e-Commerce maturity are customers able to make orders and payments online?",
                "options": [
                    "E-Information",
                    "E-Integration",
                    "E-Transaction",
                    "E-Commerce"
                ],
                "answer": "E-Transaction"
            },
            {
                "question": "What is the characteristic of knowledge based on?",
                "options": [
                    "Experience",
                    "Data",
                    "Information",
                    "Decisions"
                ],
                "answer": "Experience"
            },
            {
                "question": "What does a Wide Area Network (WAN) allow?",
                "options": [
                    "Communication between smaller networks geographically separated",
                    "Communication within a limited area",
                    "Direct connection to the Internet",
                    "Remote access only"
                ],
                "answer": "Communication between smaller networks geographically separated"
            },
            {
                "question": "What is the main benefit of using an Extranet?",
                "options": [
                    "Enhanced security",
                    "Faster internet connection",
                    "Public access",
                    "Limitations on communication"
                ],
                "answer": "Limitations on communication"
            },
            {
                "question": "What role does a Management Information System (MIS) play in an organization?",
                "options": [
                    "Support problem-specific decision making",
                    "Provide information essential to operations",
                    "Facilitate direct consumer transactions",
                    "Network enterprise communication"
                ],
                "answer": "Provide information essential to operations"
            },
            {
                "question": "What type of system consists of a set of interacting components fulfilling certain characteristics?",
                "options": [
                    "Information System",
                    "Decision Support System",
                    "Transaction Processing System",
                    "Executive Support System"
                ],
                "answer": "Information System"
            }
        ]
    }
];