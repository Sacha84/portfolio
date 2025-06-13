        // Data parsed from the CV
        const cvData = {
            name: "Sacha Leduc",
            contact: {
                phone: "+337 81 49 70 13",
                email: "sacha84800@gmail.com",
                linkedin: "https://www.linkedin.com/in/sacha-leduc64"
            },
            skills: {
                technical: [
                    "C", "Java", "Python", "Prolog", "HTML5", "Javascript", "PHP", "R", "Typescript",
                    "UML (Object Analysis and Design)", "MERISE (Data Modeling)", "SQL", "MySQL", "JavaFx (Graphical Interface)",
                    "Eclipse", "IntelliJ", "Linux/Windows (OS)", "Unix Commands", "JUnit (Unit Testing)", "Software Verification", "Design Patterns", "Docker",
                    "Network Architecture", "Information System Security Governance",
                    "Descriptive Statistics (Clustering, Regression)", "Linear Optimization", "Graphs", "Power BI",
                    "Artificial Intelligence (AI)", "Machine Learning (ML)", "Datamining (Decision Trees, Random Forests, Logistic Regression, Neural Networks)", "R Packages (ML)", "NLP (Natural Language Processing)", "Deep Learning (DL)", "Image Based Processing", "Metaheuristic Optimization",
                    "Google Cloud Platform (GCP)", "BigQuery", "Dataform", "Airflow", "Cloud Run", "Cloud Function", "Vertex AI",
                    "Gemini (GenAI)", "OpenAI (GenAI)", "Mistral AI (GenAI)"
                ],
                linguistic: [
                    { lang: "English", level: "C1", icon: "fas fa-globe-americas" },
                    { lang: "Spanish", level: "School level", icon: "fas fa-language" }
                ],
                soft: [
                    "Organization/Teamwork",
                    "Stress Management",
                    "Active Listening"
                ]
            },
            education: [
                {
                    degree: "Specialized Master IA Project Manager",
                    institution: "Skema Business School Paris",
                    years: "2024-2025"
                },
                {
                    degree: "Computer Science Engineer Bac+3 to Bac+5 (AI specialization)",
                    institution: "CY Tech Pau",
                    years: "2021-2024",
                    details: "Erasmus semester at University of Southern Denmark, Odense (2023)"
                },
                {
                    degree: "Erasmus Semester (Data and IA Specialization)",
                    institution: "Southern Denmark University Odense",
                    years: "2023",
                },
                {
                    degree: "Classes préparatoires aux grandes écoles (Physics Chemistry)",
                    institution: "Lycée St Joseph Avignon",
                    years: "2019-2021"
                },
                {
                    degree: "Scientific Baccalaureate European Section",
                    institution: "Lycée Alphonse Benoit",
                    years: "2019"
                }
            ],
            experience: {
                professional: [
                    {
                        title: "Alternance - Data Engineer / GenAI Developper",
                        company: "Samsung Electronics France - Saint-Ouen",
                        years: "2024-2025",
                        description: [
                            "Developed an internal chatbot based on Vertex AI, enhancing access to business processes and documentation for call center operational teams.",
                            "Designed an intelligent customer chatbot integrating product recommendations, user assistance, and FAQ responses through Vertex AI.",
                            "Created an AI-driven email subject line generator to enhance personalization and performance of CRM campaigns.",
                            "Implemented an automated product title and description generation engine aimed at SEO optimization and improving shopping campaign performance."
                        ]
                    },
                    {
                        title: "Alternance - Data Engineer",
                        company: "Euralis - Lescar",
                        years: "2023-2024",
                        description: [
                            "Data project management on GCP (Google Cloud Platform)",
                            "Benchmark Data Catalog application",
                            "ETL (Extract, Transform, Load) manipulation"
                        ]
                    },
                    {
                        title: "1st year Programming Internship",
                        company: "Silversmok - Lons",
                        years: "2021",
                        description: [
                            "Typescript programming",
                            "Docker server setup",
                            "Web programming"
                        ]
                    }
                ],
                academic: [
                    {
                        title: "Data Battle 2024 - Second Place",
                        description: [
                            "Application of embedding to a business case",
                            "Data cleaning",
                            "Interface development"
                        ]
                    },
                    {
                        title: "Personal Supervised Initiative Work (TIPE)",
                        description: [
                            "Study of avalanche risks for preventive purposes",
                            "Dynamic and numerical modeling of avalanches",
                            "Study of the influence of paravalanche devices"
                        ]
                    }
                ]
            },
            interests: [
                { name: "Cinema", icon: "fas fa-film" },
                { name: "Swimming", icon: "fas fa-swimmer" },
                { name: "Gym", icon: "fas fa-dumbbell" },
                { name: "Artificial Intelligence", icon: "fas fa-brain" },
            ]
        };

        let activeZIndex = 10;
        let windows = {}; // Store references to open windows

        // Function to update the time in the menu bar
        function updateTime() {
            const now = new Date();
            const options = { hour: '2-digit', minute: '2-digit' };
            document.getElementById('current-time').textContent = now.toLocaleTimeString('en-US', options);
        }

        // New data structure for desktop icons
        const desktopIconsData = [
            {
                name: "Finder",
                iconUrl: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/884c8c0cc7a505ac50339c9552263524_B7DXS2NKpM.png", // Finder icon
                appType: "about", // Opens the About Me window
                position: { top: "80px", left: "50px" }
            },
            {
                name: "VS Code",
                iconUrl: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c9830893a4d9ba9ab12ffb7591e0079a_jzmnfn1AVy.png", // VS Code icon
                appType: "skills", // Opens the Skills window
                position: { top: "180px", left: "50px" }
            },
            {
                name: "Projects",
                iconUrl: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/603d0ef71252ee0d12081181dfd66041_FPDXUjhF0d.png", // Re-using existing project icon
                appType: "projects",
                position: { top: "280px", left: "50px" }
            },
            {
                name: "Trash",
                iconUrl: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/0c8fd7da19979a71c397f82b7764f8df_lVRgezRq9O.png", // Trash icon
                appType: "trash", // Special handler for trash
                position: { top: "calc(100% - 130px)", left: "50px" } // Position near bottom left
            }
        ];


        // Centralized function to open/bring to front a window
        function openAppWindow(appType, appTitle) {
            const windowTemplate = document.getElementById('window-template');
            const terminalTemplate = document.getElementById('terminal-template');

            // If window already exists, bring to front
            if (windows[appType] && windows[appType].style.display !== 'none') {
                bringWindowToFront(windows[appType]);
                return;
            }

            let newWindow;
            if (appType === 'terminal') {
                newWindow = terminalTemplate.cloneNode(true);
                newWindow.id = `window-${appType}`;
                newWindow.querySelector('.window-title').textContent = appTitle;
                setupTerminal(newWindow);
            } else if (appType === 'trash') {
                // Special handling for Trash - a simple message box
                const messageBox = document.createElement('div');
                messageBox.className = 'window animate-open';
                messageBox.id = 'window-trash-message';
                messageBox.style.width = '400px';
                messageBox.style.height = '200px';
                // Center the message box
                messageBox.style.top = '50%';
                messageBox.style.left = '50%';
                messageBox.style.transform = 'translate(-50%, -50%)'; // For centering
                messageBox.innerHTML = `
                    <div class="window-header" style="-webkit-app-region: drag;">
                        <div class="window-controls">
                            <div class="window-control-btn close" data-action="close"></div>
                            <div class="window-control-btn minimize" data-action="minimize"></div>
                            <div class="window-control-btn maximize" data-action="maximize"></div>
                        </div>
                        <div class="window-title">Trash Can</div>
                    </div>
                    <div class="window-content">
                        <p class="text-center text-lg mt-4">The trash can is currently empty. Nothing to delete!</p>
                        <p class="text-center text-sm text-gray-400 mt-2">Maybe add some files first?</p>
                    </div>
                `;
                document.body.appendChild(messageBox);
                windows[appType] = messageBox; // Store reference
                bringWindowToFront(messageBox);
                setupWindowInteractions(messageBox); // Ensure message box is draggable/closable
                return; // Exit after showing message box
            }
            else {
                newWindow = windowTemplate.cloneNode(true);
                newWindow.id = `window-${appType}`;
                newWindow.querySelector('.window-title').textContent = appTitle;
                populateWindowContent(newWindow, appType);
            }

            newWindow.classList.remove('hidden');
            newWindow.classList.add('animate-open'); // Add animation class
            document.body.appendChild(newWindow); // Append to body so it floats above desktop background
            windows[appType] = newWindow; // Store reference

            // Set initial position *after* appending to DOM so offsetWidth/Height are correct
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const windowWidth = newWindow.offsetWidth;
            const windowHeight = newWindow.offsetHeight;

            let initialLeft = (viewportWidth - windowWidth) / 2;
            let initialTop = (viewportHeight - windowHeight) / 2 + 20; // Offset by menu bar height

            // Stagger if multiple windows are open
            const openWindowCount = Object.keys(windows).filter(key => windows[key].style.display !== 'none').length;
            if (openWindowCount > 1) {
                 initialLeft = (viewportWidth - windowWidth) / 2 + (openWindowCount * 20);
                 initialTop = (viewportHeight - windowHeight) / 2 + (openWindowCount * 20) + 20;
            }

            // Clamp to viewport, respecting menu bar (2.5rem = 40px)
            newWindow.style.left = `${Math.max(20, Math.min(initialLeft, viewportWidth - windowWidth - 20))}px`;
            newWindow.style.top = `${Math.max(2.5 * 16 + 20, Math.min(initialTop, viewportHeight - windowHeight - 20))}px`;

            bringWindowToFront(newWindow);
            setupWindowInteractions(newWindow);
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateTime();
            setInterval(updateTime, 1000);

            const dockIcons = document.querySelectorAll('.dock-icon');
            const desktopBackground = document.querySelector('.desktop-background');

            // Set initial background image
            desktopBackground.style.background = `url('https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-1920x1080-1432.jpg') center/cover no-repeat`;

            // Create container for desktop icons
            const desktopIconsContainer = document.createElement('div');
            desktopIconsContainer.id = 'desktop-icons-container';
            // Use pointer-events-none to allow clicks to pass through to desktop if no icon is hit
            desktopIconsContainer.className = 'absolute top-0 left-0 w-full h-full pointer-events-none';
            desktopBackground.appendChild(desktopIconsContainer);


            // Render desktop icons
            desktopIconsData.forEach(iconData => {
                const iconDiv = document.createElement('div');
                // Use pointer-events-auto for the icon itself to be clickable
                iconDiv.className = `desktop-icon-item absolute flex flex-col items-center cursor-pointer text-white text-xs pointer-events-auto`;
                iconDiv.style.top = iconData.position.top;
                iconDiv.style.left = iconData.position.left;
                iconDiv.dataset.name = iconData.name; // For specific mobile styling if needed
                iconDiv.innerHTML = `
                    <img src="${iconData.iconUrl}" alt="${iconData.name}" class="w-12 h-12 object-contain mb-1">
                    <span class="text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${iconData.name}</span>
                `;
                iconDiv.addEventListener('click', () => {
                    openAppWindow(iconData.appType, iconData.name);
                });
                desktopIconsContainer.appendChild(iconDiv);
            });

            // Update dockIcons.forEach to use openAppWindow
            dockIcons.forEach(icon => {
                icon.addEventListener('click', () => {
                    const appType = icon.dataset.app;
                    const appTitle = icon.dataset.title;
                    openAppWindow(appType, appTitle);
                });
            });

            // Automatically open the terminal window on page load
            const terminalDockIcon = document.querySelector('.dock-icon[data-app="terminal"]');
            if (terminalDockIcon) {
                setTimeout(() => {
                    terminalDockIcon.click();
                }, 100);
            }
        });

        function populateWindowContent(windowElement, appType) {
            const contentDiv = windowElement.querySelector('.window-content');
            contentDiv.innerHTML = '';

            switch (appType) {
                case 'about':
                    contentDiv.innerHTML = `
                        <div class="about-section">
                            <img src="https://media.licdn.com/dms/image/v2/D4E03AQEnaqsPJXYEIQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718311431290?e=1755129600&v=beta&t=BUABnmUUF7uQbYS29VpVffqzhG_KF8OTmoYyVCxsavw" alt="Sacha Leduc Profile" class="profile-image">
                            <h2>${cvData.name}</h2>
                            <p class="mb-4">Welcome to my interactive portfolio!</p>
                            <p class="mb-4">I'm a passionate and driven IT professional with a strong focus on Artificial Intelligence and Data Engineering. Explore my skills, experience, and projects through this simulated desktop environment.</p>
                            <div class="contact-info">
                                <p><i class="fas fa-phone-alt"></i> ${cvData.contact.phone}</p>
                                <p><i class="fas fa-envelope"></i> <a href="mailto:${cvData.contact.email}">${cvData.contact.email}</a></p>
                                <p><i class="fab fa-linkedin"></i> <a href="${cvData.contact.linkedin}" target="_blank">${cvData.contact.linkedin.replace('https://', '')}</a></p>
                            </div>

                            <div class="section-divider"></div>

                            <h3 class="mb-4 text-white"><i class="fas fa-image"></i> Change Desktop Background</h3>
                            <div class="flex flex-col md:flex-row items-center gap-2 w-full">
                                <input type="text" id="background-url-input" placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                                       class="flex-grow p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors">
                                <button id="set-background-btn"
                                        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md
                                               transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95">
                                    Set Background
                                </button>
                            </div>
                            <p class="text-xs text-gray-400 mt-2">Paste a direct image URL (e.g., from Unsplash, Google Photos, etc.).</p>
                            <button id="reset-background-btn"
                                    class="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-1.5 px-3 rounded-md text-sm
                                           transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95">
                                Reset Background
                            </button>
                        </div>
                    `;
                    // Setup background change listeners after content is loaded
                    const backgroundUrlInput = windowElement.querySelector('#background-url-input');
                    const setBackgroundBtn = windowElement.querySelector('#set-background-btn');
                    const resetBackgroundBtn = windowElement.querySelector('#reset-background-btn');
                    const desktopBackground = document.querySelector('.desktop-background');

                    const defaultBackground = 'linear-gradient(135deg, #2b3a4a 0%, #0d1217 100%)';

                    setBackgroundBtn.addEventListener('click', () => {
                        const imageUrl = backgroundUrlInput.value.trim();
                        if (imageUrl) {
                            desktopBackground.style.background = `url('${imageUrl}') center/cover no-repeat`; // Ensure cover and no-repeat
                        } else {
                            // Optionally, show a message if input is empty
                            console.warn("Please enter a valid image URL.");
                        }
                    });

                    resetBackgroundBtn.addEventListener('click', () => {
                        desktopBackground.style.background = defaultBackground;
                        backgroundUrlInput.value = ''; // Clear input field
                    });
                    break;
                case 'skills':
                    const groupedTechnicalSkills = {
                        "Programming Languages & Paradigms": [
                            "C", "Java", "Python", "Prolog", "HTML5", "Javascript", "PHP", "R", "Typescript"
                        ],
                        "Data Science & Machine Learning": [
                            "Descriptive Statistics (Clustering, Regression)", "Linear Optimization", "Graphs", "Power BI", "Artificial Intelligence (AI)", "Machine Learning (ML)", "Datamining (Decision Trees, Random Forests, Logistic Regression, Neural Networks)", "R Packages (ML)", "NLP (Natural Language Processing)", "Deep Learning (DL)", "Image Based Processing", "Metaheuristic Optimization"
                        ],
                                                "Cloud Platforms & MLOps (GCP)": [
                            "Google Cloud Platform (GCP)", "BigQuery", "Dataform", "Airflow", "Cloud Run", "Cloud Function", "Vertex AI"
                        ],
                        "Generative AI Models": [
                            "Gemini (GenAI)", "OpenAI (GenAI)", "Mistral AI (GenAI)"
                        ],
                        "Object-Oriented Design & Databases": [
                            "UML (Object Analysis and Design)", "MERISE (Data Modeling)", "SQL", "MySQL", "JavaFx (Graphical Interface)"
                        ],
                        "Development Tools & Operations": [
                            "Eclipse", "IntelliJ", "Linux/Windows (OS)", "Unix Commands", "JUnit (Unit Testing)", "Software Verification", "Design Patterns", "Docker"
                        ],
                        "Networking & Security": [
                            "Network Architecture", "Information System Security Governance"
                        ]
                    };

                    let skillsHtml = `<h2>Technical Skills</h2>`;
                    for (const category in groupedTechnicalSkills) {
                        skillsHtml += `
                            <div class="skill-category mt-8">
                                <h3><i class="fas fa-code-branch"></i> ${category}</h3>
                                <div class="skill-grid">
                                    ${groupedTechnicalSkills[category].map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                                </div>
                            </div>
                        `;
                    }

                    skillsHtml += `
                        <div class="section-divider mt-8"></div>
                        <h2 class="mt-8">Linguistic Skills</h2>
                        <div class="skill-category">
                            ${cvData.skills.linguistic.map(lang => `
                                <div class="language-item">
                                    <i class="${lang.icon}"></i>
                                    <span class="language-text"><strong>${lang.lang}:</strong> ${lang.level}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="section-divider mt-8"></div>
                        <h2 class="mt-8">Soft Skills</h2>
                        <div class="skill-category">
                            <ul>
                                ${cvData.skills.soft.map(skill => `<li><i class="fas fa-check icon"></i> <span class="item-text">${skill}</span></li>`).join('')}
                            </ul>
                        </div>
                    `;
                    contentDiv.innerHTML = skillsHtml;
                    break;
                case 'experience':
                    let experienceHtml = '<h2>Professional Experience</h2><div class="timeline-container">';
                    // Only professional experience
                    cvData.experience.professional.forEach(exp => {
                        experienceHtml += `
                            <div class="timeline-item">
                                <h3>${exp.title}</h3>
                                <div class="timeline-meta">
                                    <p><i class="fas fa-building"></i> ${exp.company}</p>
                                    <p><i class="fas fa-calendar-alt"></i> ${exp.years}</p>
                                </div>
                                <ul>
                                    ${exp.description.map(desc => `<li><i class="fas fa-tasks icon"></i> <span class="item-text">${desc}</span></li>`).join('')}
                                </ul>
                            </div>
                        `;
                    });
                    experienceHtml += '</div>'; // Close timeline-container
                    contentDiv.innerHTML = experienceHtml;
                    break;
                case 'education':
                    let educationHtml = `<h2>Education</h2><div class="education-mail-container">`;
                    cvData.education.forEach(edu => {
                        educationHtml += `
                            <div class="education-mail-item">
                                <h3 class="education-mail-title">${edu.degree}</h3>
                                <p class="education-mail-meta">
                                    <i class="fas fa-school"></i> ${edu.institution} <span class="ml-auto"><i class="fas fa-calendar-alt"></i> ${edu.years}</span>
                                </p>
                                ${edu.details ? `<p class="education-mail-details">${edu.details}</p>` : ''}
                            </div>
                        `;
                    });
                    educationHtml += '</div>';
                    contentDiv.innerHTML = educationHtml;
                    break;
                case 'projects': // Using academic experience for 'projects' app, now with message style
                    let projectsHtml = `<h2>Academic Projects</h2><div class="projects-message-container">`;
                    cvData.experience.academic.forEach(exp => {
                        projectsHtml += `
                            <div class="project-message-item">
                                <h3 class="project-message-title">${exp.title}</h3>
                                <ul class="project-message-details">
                                    ${exp.description.map(desc => `<li><i class="fas fa-arrow-right"></i> <span class="item-text">${desc}</span></li>`).join('')}
                                </ul>
                            </div>
                        `;
                    });
                    projectsHtml += '</div>';
                    contentDiv.innerHTML = projectsHtml;
                    break;
                case 'interests':
                    let interestsHtml = `<h2>Interests</h2><div class="interests-grid">`;
                    cvData.interests.forEach(interest => {
                        interestsHtml += `
                            <div class="interest-card">
                                <i class="${interest.icon}"></i>
                                <span class="interest-name">${interest.name}</span>
                            </div>
                        `;
                    });
                    interestsHtml += '</div>';
                    contentDiv.innerHTML = interestsHtml;
                    break;
            }
        }

        function setupWindowInteractions(windowElement) {
            const header = windowElement.querySelector('.window-header');
            const closeBtn = windowElement.querySelector('.window-control-btn.close');
            const maximizeBtn = windowElement.querySelector('.window-control-btn.maximize');
            const minimizeBtn = windowElement.querySelector('.window-control-btn.minimize');
            
            let isDragging = false;
            let offsetX, offsetY;
            let isMaximized = false;
            let originalPosition = { left: '0px', top: '0px', width: '0px', height: '0px' };

            // Bring to front on click
            windowElement.addEventListener('mousedown', () => {
                bringWindowToFront(windowElement);
            });

            // Close button
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                windowElement.style.display = 'none';
            });

            // Minimize button
            minimizeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                windowElement.style.display = 'none';
            });

            // Maximize/Restore button
            maximizeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!isMaximized) {
                    originalPosition = {
                        left: windowElement.style.left,
                        top: windowElement.style.top,
                        width: windowElement.style.width,
                        height: windowElement.style.height
                    };
                    windowElement.style.transition = 'all 0.2s ease-out';
                    windowElement.style.left = '0px';
                    windowElement.style.top = '0px';
                    windowElement.style.width = '100vw';
                    windowElement.style.height = '100vh';
                    windowElement.style.borderRadius = '0rem';
                    windowElement.style.maxWidth = '100vw';
                    windowElement.style.maxHeight = '100vh';
                    isMaximized = true;
                } else {
                    windowElement.style.transition = 'all 0.2s ease-out';
                    windowElement.style.left = originalPosition.left;
                    windowElement.style.top = originalPosition.top;
                    windowElement.style.width = originalPosition.width;
                    windowElement.style.height = originalPosition.height;
                    windowElement.style.borderRadius = '1rem';
                    windowElement.style.maxWidth = '90vw';
                    windowElement.style.maxHeight = '80vh';
                    isMaximized = false;
                }
                setTimeout(() => {
                    windowElement.style.transition = 'transform 0.1s ease-out, left 0.1s ease-out, top 0.1s ease-out';
                }, 200);
            });


            // Dragging functionality
            header.addEventListener('mousedown', (e) => {
                if (e.target.classList.contains('window-control-btn') || isMaximized) {
                    return;
                }
                isDragging = true;
                const rect = windowElement.getBoundingClientRect();
                offsetX = e.clientX - rect.left;
                offsetY = e.clientY - rect.top;

                header.style.cursor = 'grabbing';
                document.body.style.userSelect = 'none';
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;

                let newX = e.clientX - offsetX;
                let newY = e.clientY - offsetY;

                const menuBarHeight = 2.5 * 16;
                const minX = 0;
                const minY = menuBarHeight;
                const maxX = window.innerWidth - windowElement.offsetWidth;
                const maxY = window.innerHeight - windowElement.offsetHeight;

                newX = Math.max(minX, Math.min(newX, maxX));
                newY = Math.max(minY, Math.min(newY, maxY));

                windowElement.style.left = `${newX}px`;
                windowElement.style.top = `${newY}px`;
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
                header.style.cursor = 'grab';
                document.body.style.userSelect = '';
            });
        }

        function bringWindowToFront(windowElement) {
            activeZIndex++;
            windowElement.style.zIndex = activeZIndex;
        }

        // Terminal specific logic
        function setupTerminal(terminalWindow) {
            const terminalOutput = terminalWindow.querySelector('.terminal-content');
            const terminalInput = terminalWindow.querySelector('.terminal-input');
            const promptSpan = terminalWindow.querySelector('.terminal-input-prompt');

            // Function to append output to terminal
            const appendOutput = (text, color = '#00ff00') => {
                const div = document.createElement('div');
                div.innerHTML = `<span style="color: ${color};">${text}</span>`;
                terminalOutput.appendChild(div);
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            };

            // Summarize CV data for the chatbot's context
            const getCvSummaryForChatbot = () => {
                let summary = `Sacha Leduc's CV Summary:\n`;
                summary += `- Name: ${cvData.name}\n`;
                summary += `- Contact: Phone: ${cvData.contact.phone}, Email: ${cvData.contact.email}, LinkedIn: ${cvData.contact.linkedin}\n`;
                summary += `- Key Technical Skills: ${cvData.skills.technical.slice(0, 5).join(', ')}${cvData.skills.technical.length > 5 ? ', etc.' : ''}\n`;
                summary += `- Linguistic Skills: ${cvData.skills.linguistic.map(l => `${l.lang} (${l.level})`).join(', ')}\n`;
                summary += `- Soft Skills: ${cvData.skills.soft.join(', ')}\n`;
                summary += `- Professional Experience: ${cvData.experience.professional.map(exp => `${exp.title} at ${exp.company} (${exp.years})`).join('; ')}\n`;
                summary += `- Academic Experience: ${cvData.experience.academic.map(exp => `${exp.title}`).join('; ')}\n`;
                summary += `- Education: ${cvData.education.map(edu => `${edu.degree} at ${edu.institution} (${edu.years})`).join('; ')}\n`;
                summary += `- Interests: ${cvData.interests.map(i => i.name).join(', ')}\n`;
                return summary;
            };

            const commands = {
                'help': () => `
                    <span style="color: #00bcd4;">Website Functionality:</span>
                    - Click icons in the dock or on the desktop to open specific sections of Sacha's portfolio (About Me, Skills, Experience, Education, Academic Projects, Interests, Terminal).
                    - Drag windows by their header to move them around the desktop.
                    - Use the red (close), yellow (minimize), and green (maximize/restore) circles in the window header to manage windows.
                    - Click anywhere on a window to bring it to the front.
                    - In the 'About Me' window, you can change the desktop background using an image URL.

                    <span style="color: #00bcd4;">Terminal Commands:</span>
                    - <span style="color: #00bcd4;">whoami</span>: Get Sacha's contact info.
                    - <span style="color: #00bcd4;">ls skills</span>: List Sacha's technical, linguistic, and soft skills.
                    - <span style="color: #00bcd4;">cat education</span>: Show Sacha's academic journey.
                    - <span style="color: #00bcd4;">cat experience</span>: Show Sacha's professional and academic experiences.
                    - <span style="color: #00bcd4;">ls projects</span>: List academic projects.
                    - <span style="color: #00bcd4;">neofetch</span>: Display a system info-like overview of the portfolio.
                    - <span style="color: #00bcd4;">chat [your question]</span>: Ask the AI chatbot a question about Sacha Leduc (e.g., "chat What programming languages does Sacha know?").
                    - <span style="color: #00bcd4;">clear</span>: Clear the terminal output.
                `,
                'whoami': () => `
                    Name: ${cvData.name}
                    Phone: ${cvData.contact.phone}
                    Email: ${cvData.contact.email}
                    LinkedIn: ${cvData.contact.linkedin}
                `,
                'ls skills': () => {
                    const groupedSkillsOutput = [];
                    const technicalSkills = {
                        "Programming Languages & Paradigms": [
                            "C", "Java", "Python", "Prolog", "HTML5", "Javascript", "PHP", "R", "Typescript"
                        ],
                        "Data Science & Machine Learning": [
                            "Descriptive Statistics (Clustering, Regression)", "Linear Optimization", "Graphs", "Power BI", "Artificial Intelligence (AI)", "Machine Learning (ML)", "Datamining (Decision Trees, Random Forests, Logistic Regression, Neural Networks)", "R Packages (ML)", "NLP (Natural Language Processing)", "Deep Learning (DL)", "Image Based Processing", "Metaheuristic Optimization"
                        ],
                        "Cloud Platforms & MLOps (GCP)": [
                            "Google Cloud Platform (GCP)", "BigQuery", "Dataform", "Airflow", "Cloud Run", "Cloud Function", "Vertex AI"
                        ],
                        "Generative AI Models": [
                            "Gemini (GenAI)", "OpenAI (GenAI)", "Mistral AI (GenAI)"
                        ],
                        "Object-Oriented Design & Databases": [
                            "UML (Object Analysis and Design)", "MERISE (Data Modeling)", "SQL", "MySQL", "JavaFx (Graphical Interface)"
                        ],
                        "Development Tools & Operations": [
                            "Eclipse", "IntelliJ", "Linux/Windows (OS)", "Unix Commands", "JUnit (Unit Testing)", "Software Verification", "Design Patterns", "Docker"
                        ],
                        "Networking & Security": [
                            "Network Architecture", "Information System Security Governance"
                        ]
                    };

                    for (const category in technicalSkills) {
                        groupedSkillsOutput.push(`<span style="color: #00bcd4;">${category}:</span>`);
                        technicalSkills[category].forEach(skill => {
                            groupedSkillsOutput.push(`- ${skill}`);
                        });
                        groupedSkillsOutput.push(''); // Add a blank line between categories
                    }
                    groupedSkillsOutput.push(`<span style="color: #00bcd4;">Linguistic:</span>`);
                    cvData.skills.linguistic.forEach(lang => {
                        groupedSkillsOutput.push(`- ${lang.lang}: ${lang.level}`);
                    });
                    groupedSkillsOutput.push('');
                    cvData.skills.soft.forEach(skill => {
                        groupedSkillsOutput.push(`- ${skill}`);
                    });
                    return groupedSkillsOutput.join('\n');
                },
                'cat education': () => `
                    ${cvData.education.map(edu =>
                        `Title: ${edu.degree}\nInstitution: ${edu.institution}\nYears: ${edu.years}${edu.details ? `\nDetails: ${edu.details}` : ''}`
                    ).join('\n\n')}
                `,
                'cat experience': () => `
                    Professional Experience:
                    ${cvData.experience.professional.map(exp =>
                        `Title: ${exp.title}\nCompany: ${exp.company} (${exp.years})\nDescription:\n  ${exp.description.map(d => `- ${d}`).join('\n  ')}`
                    ).join('\n\n')}
                `,
                'ls projects': () => {
                    if (cvData.experience.academic.length === 0) {
                        return `No academic projects found.`;
                    }
                    return `Academic Projects:\n${cvData.experience.academic.map(proj => `- ${proj.title}`).join('\n')}`;
                },
                'neofetch': () => `
                    <span style="color: #a020f0;">             .-.</span>
                    <span style="color: #a020f0;">          .-.     .-.</span>
                    <span style="color: #a020f0;">  -- .   .-.  -  .   .-.</span>
                    <span style="color: #a020f0;">  -- .-. .-. .-. .-. .-. .-.</span>
                    <span style="color: #a020f0;">      '     '     '     '</span>
                    <span style="color: #a020f0;">    '   '   '   '   '   '</span>
                    <span style="color: #a020f0;">    _.-.</span>
                    <span style="color: #a020f0;">  _.-._  _.-._</span>
                    <span style="color: #a020f0;"> '     ''     '</span>
                    <span style="color: #a020f0;"> '     ''     '</span>
                    <span style="color: #a020f0;">     '     '</span>
                    <span style="color: #a020f0;">     '     '</span>
                    <span style="color: #a020f0;">  _.-._.-._</span>
                    <span style="color: #a020f0;"> '         '</span>
                    <span style="color: #a020f0;"> '         '</span>
                    <span style="color: #a020f0;">         '</span>
                    <span style="color: #a020f0;">         '</span>

                    <span style="color: #c0c0c0;">${cvData.name}@Portfolio</span>
                    --------------------
                    <span style="color: #00bcd4;">OS</span>: Apple Glass OS26 (Simulated)
                    <span style="color: #00bcd4;">Host</span>: Sacha's Brain v1.0
                    <span style="color: #00bcd4;">Kernel</span>: Human 6.0
                    <span style="color: #00bcd4;">Uptime</span>: Since 2001
                    <span style="color: #00bcd4;">Packages</span>: Python, Java, C, SQL, HTML5, JS, PHP, R, ML, AI, DL
                    <span style="color: #00bcd4;">Shell</span>: bash (simulated)
                    <span style="color: #00bcd4;">Resolution</span>: Highly Adaptive
                    <span style="color: #00bcd4;">DE</span>: Custom Glass Desktop Environment
                    <span style="color: #00bcd4;">Theme</span>: Dark Mode Glass
                    <span style="color: #00bcd4;">Icons</span>: Custom Aesthetic
                    <span style="color: #00bcd4;">Terminal</span>: PortfolioTerm
                    <span style="color: #00bcd4;">CPU</span>: Human Intellect
                    <span style="color: #00bcd4;">GPU</span>: Visionary Mind
                    <span style="color: #00bcd4;">Memory</span>: Vast & Expanding
                `,
                'clear': () => {
                    terminalOutput.innerHTML = '';
                    return ''; // Don't print anything after clear
                },
                'chat': async (question) => {
                    if (!question) {
                        return `<span style="color: #ffbd44;">Usage: chat [your question]</span>`;
                    }
                    appendOutput(`Thinking...`, '#ffbd44'); // Loading indicator

                    const chatHistory = [];
                    const cvSummary = getCvSummaryForChatbot();
                    const prompt = `You are Sacha's personal AI assistant. Your goal is to answer questions about Sacha based on the information provided in his portfolio. If a question is outside the scope of Sacha's professional or academic profile, politely state that you can only answer questions related to Sacha's portfolio. Do not invent information. Sacha is a passionate and results-oriented Data Engineer and AI specialist with a strong foundation in computer science. He thrives in collaborative environments, leveraging skills in teamwork and active listening. He is adept at managing stress and organizing work to meet deadlines. His professional experience includes a Data Engineer / GenAI Developer apprenticeship at Samsung Electronics France (2024-2025), a Data Engineer apprenticeship at Euralis (2023-2024), and a Programming Intern role at Silversmok (2022). His academic projects include 'Data Battle 2024 - 2nd Place' and 'TIPE: Avalanche Risk Study'. He holds a Master's Degree in AI Project Management from Skema Business School (2024-2025) and an Engineering Degree in Computer Science (AI Specialization) from CY Tech (2021-2024), which included an Erasmus semester at the University of Southern Denmark (2023). He also completed Preparatory Classes for Engineering Schools at Lycée St Joseph (2019-2021). His technical skills include: Languages (C, Java, Python, Prolog, SQL, HTML5, JS, PHP, R), AI & Machine Learning (NLP, Deep Learning, Scikit-learn, TensorFlow/Keras), Databases (MySQL, Merise, SQL), Dev Tools (Eclipse, IntelliJ, Git, Docker), Web Development (HTML5, JavaScript, PHP, JavaFX), Concepts (OOP, UML, Design Patterns, Network Architecture, JUnit, Power BI), Cloud Technologies (Google Cloud Platform (GCP) with VertexAI, Big Query, Dataform, Firebase, Cloud Run, Cloud Functions, Airflow), and Generative AI (GenAI) with OpenAI, MistralAI, Gemini. His contact email is sacha84800@gmail.com and phone is +33 7 81 49 70 13. His English level is C1 - Advanced (TOEIC: 900) and his Spanish level is B1 - Intermediate. Short response (100 caracters) you should sell Sacha through your answer

${cvSummary}

User's question: ${question}`;

                    chatHistory.push({ role: "system", content: prompt });
                    const payload = { model: "mistral-large-latest", messages: chatHistory };
                    const apiKey = "vhhDaZzggNTZgnVLJI4YjEjZgJXj7jiB"; 
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                    try {
                        const response = await fetch(apiUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${apiKey}`
                            },
                            body: JSON.stringify(payload)
                        });
                        const result = await response.json();

                        // Remove "Thinking..." message
                        if (terminalOutput.lastChild && terminalOutput.lastChild.textContent.includes('Thinking...')) {
                            terminalOutput.lastChild.remove();
                        }

                        if (result.candidates && result.candidates.length > 0 &&
                            result.candidates[0].content && result.candidates[0].content.parts &&
                            result.candidates[0].content.parts.length > 0) {
                            const text = result.candidates[0].content.parts[0].text;
                            return `<span style="color: #00bcd4;">Bot:</span> ${text}`;
                        } else {
                            return `<span style="color: #ff3b30;">Bot: Sorry, I couldn't get a response.</span>`;
                        }
                    } catch (error) {
                        // Remove "Thinking..." message
                        if (terminalOutput.lastChild && terminalOutput.lastChild.textContent.includes('Thinking...')) {
                            terminalOutput.lastChild.remove();
                        }
                        return `<span style="color: #ff3b30;">Bot: An error occurred while contacting the AI. Please try again.</span>`;
                    }
                }
            };

            const executeCommand = async (command) => {
                const fullCommand = command.trim(); // Get the full command string
                const parts = fullCommand.split(' ');
                const mainCommand = parts[0];
                const args = parts.slice(1).join(' ');

                // Display user's command immediately
                appendOutput(`${promptSpan.textContent} ${fullCommand}`, '#00ff00');

                let output = '';

                // Check for multi-word commands first
                if (fullCommand === 'ls skills') {
                    output = commands['ls skills']();
                } else if (fullCommand === 'cat education') {
                    output = commands['cat education']();
                } else if (fullCommand === 'cat experience') {
                    output = commands['cat experience']();
                } else if (fullCommand === 'ls projects') {
                    output = commands['ls projects']();
                }
                // Then handle 'chat' which has dynamic arguments
                else if (mainCommand === 'chat') {
                    output = await commands['chat'](args);
                }
                // Then handle 'clear' which has unique rendering logic
                else if (fullCommand === 'clear') {
                    commands['clear']();
                    return; // Exit here as output is handled directly
                }
                // Finally, handle single-word commands (help, whoami, neofetch)
                else if (fullCommand in commands) {
                    output = commands[fullCommand]();
                }
                else {
                    output = `<span style="color: #ff3b30;">Command not found: ${fullCommand}</span>`;
                }

                if (output) {
                    appendOutput(output);
                }
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            };

            terminalInput.addEventListener('keydown', async (e) => {
                if (e.key === 'Enter') {
                    const command = terminalInput.value;
                    terminalInput.value = '';
                    await executeCommand(command);
                }
            });

            terminalOutput.addEventListener('click', () => {
                terminalInput.focus();
            });
            terminalInput.focus();
        }
