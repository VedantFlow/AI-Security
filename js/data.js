const roadmapData = {
    modules: [
        {
            id: 'week-1',
            title: 'WEEK 1: FOUNDATION BLITZ',
            status: 'pending',
            days: [
                {
                    id: 'd1',
                    title: 'Day 1: AI/ML Fundamentals - Part 1',
                    status: 'current',
                    sessions: [
                        {
                            title: 'Morning Session (4 hours): Machine Learning Basics',
                            tasks: [
                                { id: 'd1-t1', text: "Watch Andrew Ng's ML introduction (Coursera - first 3 videos)", completed: false },
                                { id: 'd1-t2', text: "Study: Supervised vs Unsupervised vs Reinforcement Learning", completed: false },
                                { id: 'd1-t3', text: "Understand: Training, validation, test sets", completed: false },
                                { id: 'd1-t4', text: "Learn: Overfitting, underfitting, bias-variance tradeoff", completed: false },
                                { id: 'd1-t5', text: "Read: 'A Few Useful Things to Know About Machine Learning' by Pedro Domingos", completed: false },
                                { id: 'd1-t6', text: "Study perceptrons and activation functions (ReLU, Sigmoid, Tanh)", completed: false },
                                { id: 'd1-t7', text: "Understand backpropagation conceptually", completed: false },
                                { id: 'd1-t8', text: "Learn about loss functions (MSE, Cross-Entropy)", completed: false },
                                { id: 'd1-t9', text: "Watch 3Blue1Brown neural network series (Chapter 1-2)", completed: false },
                                { id: 'd1-t10', text: "Take notes on gradient descent optimization", completed: false }
                            ]
                        },
                        {
                            title: 'Afternoon Session (5 hours): Hands-on Python & ML Libraries',
                            tasks: [
                                { id: 'd1-t11', text: "Install Anaconda or Python 3.10+", completed: false },
                                { id: 'd1-t12', text: "Set up virtual environment: python -m venv ai-security-env", completed: false },
                                { id: 'd1-t13', text: "Install core libraries: pip install numpy pandas scikit-learn matplotlib jupyter", completed: false },
                                { id: 'd1-t14', text: "Install deep learning: pip install torch torchvision tensorflow", completed: false },
                                { id: 'd1-t15', text: "Create first Jupyter notebook", completed: false },
                                { id: 'd1-t16', text: "Load MNIST dataset using keras/pytorch", completed: false },
                                { id: 'd1-t17', text: "Explore data: shape, distribution, visualization", completed: false },
                                { id: 'd1-t18', text: "Build simple neural network (2-3 layers)", completed: false },
                                { id: 'd1-t19', text: "Train model for digit classification", completed: false },
                                { id: 'd1-t20', text: "Evaluate accuracy, plot loss curves", completed: false },
                                { id: 'd1-t21', text: "Save model and document results [Goal: >95% accuracy]", completed: false }
                            ]
                        },
                        {
                            title: 'Evening Session (3 hours): Introduction to AI Security',
                            tasks: [
                                { id: 'd1-t22', text: "Read: 'Threat Modeling AI/ML Systems and Dependencies' (Microsoft)", completed: false },
                                { id: 'd1-t23', text: "Study: AI attack surface diagram", completed: false },
                                { id: 'd1-t24', text: "Understand: Traditional security vs AI security differences", completed: false },
                                { id: 'd1-t25', text: "Watch: 'Adversarial Machine Learning' talk by Ian Goodfellow", completed: false },
                                { id: 'd1-t26', text: "List 10 unique AI security threats", completed: false },
                                { id: 'd1-t27', text: "Read: 'Intriguing properties of neural networks' (Szegedy et al.)", completed: false },
                                { id: 'd1-t28', text: "Take detailed notes on adversarial examples", completed: false }
                            ]
                        }
                    ]
                },
                {
                    id: 'd2',
                    title: 'Day 2: AI/ML Fundamentals - Part 2',
                    status: 'pending',
                    sessions: [
                        {
                            title: 'Morning Session (4 hours): Deep Learning Architectures',
                            tasks: [
                                { id: 'd2-t1', text: "Study convolution operations, pooling, filters", completed: false },
                                { id: 'd2-t2', text: "Understand architecture: Conv layers → Pooling → FC layers", completed: false },
                                { id: 'd2-t3', text: "Learn about famous architectures: LeNet, AlexNet, VGG, ResNet", completed: false },
                                { id: 'd2-t4', text: "Watch Stanford CS231n Lecture 5 (CNNs)", completed: false },
                                { id: 'd2-t5', text: "Draw CNN architecture diagram", completed: false },
                                { id: 'd2-t6', text: "Study Recurrent Neural Networks and LSTM", completed: false },
                                { id: 'd2-t7', text: "Understand sequence-to-sequence models", completed: false },
                                { id: 'd2-t8', text: "Learn Transformer architecture basics", completed: false }
                            ]
                        },
                        {
                            title: 'Afternoon Session (5 hours): Advanced Model Building',
                            tasks: [
                                { id: 'd2-t9', text: "Build CNN Image Classifier (CIFAR-10)", completed: false },
                                { id: 'd2-t10', text: "Apply Transfer Learning (ResNet50/VGG16)", completed: false },
                                { id: 'd2-t11', text: "Compare training time and accuracy [Goal: >75% accuracy]", completed: false }
                            ]
                        },
                        {
                            title: 'Evening Session (3 hours): AI Security Research',
                            tasks: [
                                { id: 'd2-t12', text: "Read: 'Adversarial Examples Are Not Bugs, They Are Features'", completed: false },
                                { id: 'd2-t13', text: "Organize Zotero/Notion database for papers", completed: false }
                            ]
                        }
                    ]
                },
                {
                    id: 'd3',
                    title: 'Day 3: AI/ML Fundamentals - Part 3',
                    status: 'pending',
                    sessions: [
                        {
                            title: 'Morning Session (4 hours): LLMs and Generative AI',
                            tasks: [
                                { id: 'd3-t1', text: "Study tokenization (BPE, WordPiece)", completed: false },
                                { id: 'd3-t2', text: "Learn autoregressive generation and attention mechanism", completed: false },
                                { id: 'd3-t3', text: "Read OpenAI GPT-3 paper (sections 1-3)", completed: false }
                            ]
                        },
                        {
                            title: 'Afternoon Session (5 hours): Build Text Classifier',
                            tasks: [
                                { id: 'd3-t4', text: "Fine-tune BERT-base or DistilBERT on IMDB/AG News", completed: false },
                                { id: 'd3-t5', text: "Evaluate performance [Goal: >90% accuracy]", completed: false }
                            ]
                        }
                    ]
                },
                {
                    id: 'd4',
                    title: 'Day 4: Security Fundamentals & Threat Modeling',
                    status: 'pending',
                    sessions: [
                        { title: 'Morning', tasks: [{ id: 'd4-t1', text: "Study OWASP Top 10 for LLMs (LLM01-LLM10)", completed: false }] },
                        { title: 'Afternoon', tasks: [{ id: 'd4-t2', text: "Deep dive into MITRE ATLAS Framework Tactics & Techniques", completed: false }] }
                    ]
                }
            ]
        },
        {
            id: 'week-2',
            title: 'WEEK 2: PROMPT INJECTION & LLM SECURITY',
            status: 'pending',
            days: [
                {
                    id: 'd8',
                    title: 'Day 8: Prompt Injection Fundamentals',
                    status: 'pending',
                    sessions: [
                        {
                            title: 'Morning Session (4 hours): Theory and Taxonomy',
                            tasks: [
                                { id: 'd8-t1', text: "Study Direct Prompt Injection: Role-playing, Context ignoring, DAN prompts", completed: false },
                                { id: 'd8-t2', text: "Study Indirect Prompt Injection: Web-based, Email, PDF injection", completed: false },
                                { id: 'd8-t3', text: "Read: 'Not what you've signed up for' paper", completed: false },
                                { id: 'd8-t4', text: "Analyze Bing Chat 'Sydney' incident", completed: false }
                            ]
                        },
                        {
                            title: 'Afternoon Session (5 hours): Hands-On Challenges',
                            tasks: [
                                { id: 'd8-t5', text: "Complete Gandalf AI (Lakera) Levels 1-7", completed: false },
                                { id: 'd8-t6', text: "Participate in HackAPrompt challenges 1-5", completed: false },
                                { id: 'd8-t7', text: "Document successful prompts and categorize techniques", completed: false }
                            ]
                        }
                    ]
                },
                {
                    id: 'd9',
                    title: 'Day 9: Advanced Prompt Attacks',
                    status: 'pending',
                    sessions: [
                        {
                            title: 'Morning Session (4 hours): Sophisticated Techniques',
                            tasks: [
                                { id: 'd9-t1', text: "Study Encoding/Obfuscation: Base64, ROT13, Unicode, Token splitting", completed: false },
                                { id: 'd9-t2', text: "Learn Multi-Step Attacks: Setup, Trust building, Boundary pushing", completed: false }
                            ]
                        },
                        {
                            title: 'Afternoon Session (5 hours): Lab Platforms',
                            tasks: [
                                { id: 'd9-t3', text: "Complete PortSwigger LLM Labs (LLM-01 to LLM-04)", completed: false },
                                { id: 'd9-t4', text: "Register and complete Crucible AI prompt injection levels", completed: false }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'week-3',
            title: 'WEEK 3: ADVERSARIAL MACHINE LEARNING',
            status: 'pending',
            days: [
                {
                    id: 'd15',
                    title: 'Day 15: Attack Theory and Mathematics',
                    status: 'pending',
                    sessions: [
                        {
                            title: 'Morning Session (4 hours): Adversarial Example Fundamentals',
                            tasks: [
                                { id: 'd15-t1', text: "Study Perturbation Mathematics: Lp norms (L0, L2, L∞), Epsilon budgets", completed: false },
                                { id: 'd15-t2', text: "Learn categories: White-box vs Black-box, Targeted vs Untargeted", completed: false },
                                { id: 'd15-t3', text: "Read: 'Explaining and Harnessing Adversarial Examples' (Goodfellow)", completed: false }
                            ]
                        },
                        {
                            title: 'Afternoon Session (5 hours): FGSM Implementation',
                            tasks: [
                                { id: 'd15-t4', text: "Implement FGSM in PyTorch from scratch", completed: false },
                                { id: 'd15-t5', text: "Test different Epsilon values and plot success rate", completed: false },
                                { id: 'd15-t6', text: "Visualize adversarial examples and perturbations", completed: false }
                            ]
                        }
                    ]
                },
                {
                    id: 'd16',
                    title: 'Day 16: Iterative Attacks',
                    status: 'pending',
                    sessions: [
                        {
                            title: 'Morning Session (4 hours): BIM and PGD',
                            tasks: [
                                { id: 'd16-t1', text: "Study Basic Iterative Method (BIM)", completed: false },
                                { id: 'd16-t2', text: "Study Projected Gradient Descent (PGD)", completed: false },
                                { id: 'd16-t3', text: "Read: 'Towards Deep Learning Models Resistant to Adversarial Attacks' (Madry et al.)", completed: false }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'week-5',
            title: 'WEEK 5: PRODUCTION AI SECURITY',
            status: 'pending',
            days: [
                { id: 'd29', title: 'Day 29: MLOps Security Fundamentals', status: 'pending' },
                { id: 'd31', title: 'Day 31: Monitoring and Anomaly Detection', status: 'pending' },
                { id: 'd32', title: 'Day 32: Incident Response & recovery', status: 'pending' }
            ]
        },
        {
            id: 'week-6',
            title: 'WEEK 6: ADVANCED GENAI SECURITY',
            status: 'pending',
            days: [
                { id: 'd36', title: 'Day 36: RAG Security Deep Dive', status: 'pending' },
                { id: 'd37', title: 'Day 37: Agent Security', status: 'pending' },
                { id: 'd40', title: 'Day 40: Guardrails & Safety Systems', status: 'pending' }
            ]
        },
        {
            id: 'week-7',
            title: 'WEEK 7: RED TEAMING & ASSESSMENT',
            status: 'pending',
            days: [
                { id: 'd43', title: 'Day 43: Red Team Methodology', status: 'pending' },
                { id: 'd45', title: 'Day 45: Exploitation - Prompt Attacks', status: 'pending' },
                { id: 'd48', title: 'Day 48: Reporting & Communication', status: 'pending' }
            ]
        },
        {
            id: 'week-8',
            title: 'WEEK 8: SPECIALIZATION & PORTFOLIO',
            status: 'pending',
            days: [
                { id: 'd51', title: 'Day 51: Deep Specialization', status: 'pending' },
                { id: 'd55', title: 'Day 55: Portfolio Development', status: 'pending' },
                { id: 'd60', title: 'Day 60: Final Review', status: 'pending' }
            ]
        }
    ]
};

const resourcesData = [
    {
        category: 'Foundations',
        items: [
            { title: 'Andrew Ng ML Intro', type: 'video', link: 'https://www.coursera.org/specializations/machine-learning-introduction' },
            { title: '3Blue1Brown Neural Networks', type: 'video', link: 'https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi' },
            { title: 'Stanford CS231n', type: 'video', link: 'http://cs231n.stanford.edu/' }
        ]
    },
    {
        category: 'Security Frameworks',
        items: [
            { title: 'OWASP Top 10 for LLMs', type: 'link', link: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
            { title: 'MITRE ATLAS', type: 'link', link: 'https://atlas.mitre.org/' },
            { title: 'NIST AI RMF', type: 'link', link: 'https://www.nist.gov/itl/ai-risk-management-framework' }
        ]
    },
    {
        category: 'Labs & Challenges',
        items: [
            { title: 'Gandalf AI', type: 'game', link: 'https://gandalf.lakera.ai/' },
            { title: 'HackAPrompt', type: 'challenge', link: 'https://www.hackaprompt.com/' },
            { title: 'Crucible AI', type: 'challenge', link: 'https://crucible.dreadnode.io/' }
        ]
    }
];

const scheduleData = [
    { time: '06:00-07:00', task: 'Review & Planning', status: 'completed' },
    { time: '07:00-11:00', task: 'Morning Session: Deep Work', status: 'active' },
    { time: '11:00-12:00', task: 'Lunch & Break', status: 'pending' },
    { time: '12:00-17:00', task: 'Afternoon Session: Hands-on / Lab', status: 'pending' },
    { time: '17:00-18:00', task: 'Evening Break', status: 'pending' },
    { time: '18:00-21:00', task: 'Evening Session: Research / Theory', status: 'pending' },
    { time: '21:00-22:00', task: 'Documentation', status: 'pending' }
];

const milestonesData = [
    { title: 'Week 1', desc: 'ML & Security Foundation', progress: 0 },
    { title: 'Week 2', desc: 'LLM Security Mastery', progress: 0 },
    { title: 'Week 4', desc: 'Privacy & Data Protection', progress: 0 },
    { title: 'Week 8', desc: 'Complete AI Sec Portfolio', progress: 0 }
];
