var lang = 'en';

function getExperienceYear() {
    const currentYear = new Date().getFullYear();
    const experienceYear = currentYear - 2023;

    if(experienceYear == 3) {
        return "two";
    }
    if(experienceYear == 4) {
        return "three";
    }
    if(experienceYear == 5) {
        return "four";
    }
    if(experienceYear == 6) {
        return "five";
    }
    if(experienceYear == 7) {
        return "six";
    }
    if(experienceYear == 8) {
        return "seven";
    }
}

const DATA = {
    "en": {
	    "infrastructure" : {
        "details": "<div class=\"profile pd-10\">" + 
            "<span class=\"hljs-special color-gr fs-20\">Turab Eybaliyev</span>" + 
            "<br><span class=\"hljs-special color-gr\">Java backend developer ☕ + 🌱</span>" + 
            "\n\n<img src=\"profile-picture.png\"/>"+
            "<span class=\"hljs-special\">I am an eager and detail-oriented Java Developer with over than " + getExperienceYear() +" years of experience in backend development. I focus on developing softwares, actively applying best practices to optimize code quality, and always excited to collaborate, share knowledge, and contribute to projects that make an impact ✨.</span>" +
            "\n\n<span class=\"hljs-special color-gr\">Curious learner 📚</span>"+
            "\n<span class=\"hljs-special color-gr\">Code lover 💻</span>"+
            "</br></br><div class=\"icons mg-b-20\">" +
            "<a href=\"https://github.com/tur4b\" target=\"_blank\"><span class=\"tooltip\" data-text=\"Github\"><i class=\"fa fa-github black-color t-300\" aria-hidden=\"true\"></i></span></a>" +
            "<a href=\"https://stackoverflow.com/users/8747039/turab\" target=\"_blank\"><span class=\"tooltip\" data-text=\"Stackoverflow\"><i class=\"fa fa-stack-overflow orange-color t-300\" aria-hidden=\"true\"></i></span></a>" +
            "<a href=\"https://www.linkedin.com/in/turab-eybaliyev\" target=\"_blank\"><span class=\"tooltip\" data-text=\"LinkedIn\"><i class=\"fa fa-linkedin blue-color t-300\" aria-hidden=\"true\"></i></span></a>" +
            "<a href=\"https://medium.com/@turabeybaliyev\" target=\"_blank\"><span class=\"tooltip\" data-text=\"Medium\"><i class=\"fa fa-medium black-color t-300\" aria-hidden=\"true\"></i></span></a>" +
            "</div></div>",
        "profile": "<div class=\"profile\">" + 
                "\n<span style=\"display:block; text-align:left; font-size: 20px; margin-left: 5px;\" class=\"hljs-special color-gr\">Turab Eybaliyev</span>"+
            "\n<div class=\"icons mg-b-10\" style=\"display:block; margin:auto 0;\">" +
            "<a href=\"https://github.com/tur4b\" target=\"_blank\"><span class=\"tooltip\" data-text=\"Github\"><i class=\"fa fa-github black-color t-300\" aria-hidden=\"true\"></i></span></a>" +
            "<a href=\"https://stackoverflow.com/users/8747039/turab\" target=\"_blank\"><span class=\"tooltip\" data-text=\"Stackoverflow\"><i class=\"fa fa-stack-overflow orange-color t-300\" aria-hidden=\"true\"></i></span></a>" +
            "<a href=\"https://www.linkedin.com/in/turab-eybaliyev\" target=\"_blank\"><span class=\"tooltip\" data-text=\"LinkedIn\"><i class=\"fa fa-linkedin blue-color t-300\" aria-hidden=\"true\"></i></span></a>" +
            "<a href=\"https://medium.com/@turabeybaliyev\" target=\"_blank\"><span class=\"tooltip\" data-text=\"Medium\"><i class=\"fa fa-medium black-color t-300\" aria-hidden=\"true\"></i></span></a>" +
            "</div></div>",
        "skills": `
<div class="skills mg-b-20">
    <span class="hljs-special color-gr">Core Programming 🧬</span>
    <span class="hljs-special">Java ☕</span>
    <span class="hljs-special">OOP</span>
    <span class="hljs-special">SOLID Principles 📐</span>
    <span class="hljs-special">Design Patterns 🧩</span>
    <span class="hljs-special">Data Structures and Algorithms 🧠</span>
    <span class="hljs-special">Microservices ⚙️</span>

    <span class="hljs-special color-gr">Spring ecosystem 🌱</span>
    <span class="hljs-special">Spring (Core, Boot, Data, AOP, Security, Cloud)</span>

    <span class="hljs-special color-gr">Web Services 🌐</span>
    <span class="hljs-special">Restful API</span>

    <span class="hljs-special color-gr">Message Brokers 📩</span>
    <span class="hljs-special">Apache Kafka 📩</span>
    <span class="hljs-special">RabbitMQ 🐇</span>

    <span class="hljs-special color-gr">Database and ORM 🗄️</span>
    <span class="hljs-special">RDBMS</span>
        <span class="hljs-special">PostgreSQL 🐘, Oracle 🏛️, MySQL 🐬</span>
        <span class="hljs-special">JPA, Hibernate 🔗</span>
        <span class="hljs-special">Liquibase 📝</span>
        <span class="hljs-special">Flyway 📝</span>
    <span class="hljs-special">NoSQL</span>
        <span class="hljs-special">Redis ⚡</span>
        <span class="hljs-special">Elasticsearch 🔍</span>

    <span class="hljs-special color-gr">Testing 🧪</span>
    <span class="hljs-special">JUnit</span>
    <span class="hljs-special">Mockito</span>

    <span class="hljs-special color-gr">DevOps and Tools 🛠️ + 📦 + ☁️</span>
    <span class="hljs-special">Docker 🐳</span>
    <span class="hljs-special">Kubernetes ☸️</span>
    <span class="hljs-special">Gradle/Maven 🔧</span>
    <span class="hljs-special">Git</span>

    <span class="hljs-special color-gr">Monitoring and Observability 📈</span>
    <span class="hljs-special">OpenTelemetry, Prometheus, Grafana, ELK</span>
    <span class="hljs-special">Zipkin/Jaeger 🕵️‍♂️</span>
</div>`
        },
        "console": {
            "header": "<span class=\"hljs-special\">Terminal<span>",
            "commands": "<span class=\"hljs-special\">Type @profile, @skills, @bounce</span>",
            "info": {
                "profile": "<span class=\"hljs-special\">Profile is displayed</span>",
                "skills": "<span class=\"hljs-special\">Skills are displayed</span>",
                "bounce": "<span class=\"hljs-special\">Bouncing</span>",
                "github": "<span class=\"hljs-special\">Forward to github account</span>",
                "linkedin": "<span class=\"hljs-special\">Forward to linkedin account</span>",
                "medium": "<span class=\"hljs-special\">Forward to medium account</span>"
            },
            "error": {
                "message": "Invalid command"
            }
        },
        "commands": {
            "header": "All commands",
            "headerAdditional": "Additional commands",
            "placeholder": "",
            "profile": {
                "cmd": "profile",
                "message": "<strong>@profile - </strong> show about me"
            },
            "skills": {
                "cmd": "skills",
                "message": "<strong>@skills - </strong> show my programming skills"
            },
            "clear": {
                "cmd": "clear",
                "message": "<strong>@clear - </strong> clear content"
            },
            "bounce": {
                "cmd": "bounce",
                "message": "<strong>@bounce - </strong> make it bounce"
            },
            "github": {
                "cmd": "github",
                "message": "<strong>@github - </strong> go to my github page"
            },
            "linkedin": {
                "cmd": "linkedin",
                "message": "<strong>@linkedin - </strong> go to my linkedin page"
            }
        }
    }
};

function profileContent() {
    return `<div class="profile mg-b-20">
        <pre class="code-block"><code class="language-java">${DATA[lang].infrastructure.profile}</code></pre>
    </div>`;
}

function detailsContent() {
    return `<div class="profile mg-b-20">
        <pre class="code-block"><code class="language-java">${DATA[lang].infrastructure.details}</code></pre>
    </div>`;
}

function skillsContent() {
     return `<div class="profile mg-b-20">
        <pre class="code-block"><code class="language-java">${DATA[lang].infrastructure.skills}</code></pre>
    </div>`;
}
    
window.onload=function(){

    initLeftPanel();

    init();

    const consoleShown = document.getElementById('console-shown');
    const commandError = document.getElementById("command-error");
    const commandInput = document.getElementsByClassName("command")[0];
    const contentData = document.getElementsByClassName("data")[0];
    const leftPanelData = document.getElementsByClassName("infrastructure")[0];

    contentData.innerHTML = profileContent();

    // set all commands as default    
    commandInput.addEventListener('keydown', (event) => {
        commandError.classList.add('hidden');
        if (event.key === 'Enter') {
            processCommand();
        }
    });

    function processCommand() {
        const cmd = commandInput.value;
        const leftPanelFooterData = document.getElementsByClassName("infra-footer")[0];

        if(cmd === DATA[lang].commands.profile.cmd) {
            leftPanelData.innerHTML = detailsContent();
            consoleShown.innerHTML = DATA[lang].console.info.profile;
            leftPanelFooterData.innerHTML = DATA[lang].console.info.profile;
            // restart auto-scroll for the new content
            initLeftPanel();
        }
        else if(cmd === DATA[lang].commands.skills.cmd) {
            leftPanelData.innerHTML = skillsContent();
            consoleShown.innerHTML = DATA[lang].console.info.skills;
            leftPanelFooterData.innerHTML = DATA[lang].console.info.skills;

            // restart auto-scroll for the new content
            initLeftPanel();
        }
        else if(cmd === DATA[lang].commands.bounce.cmd) {
            consoleShown.innerHTML = DATA[lang].console.info.bounce;
            bounceDataContent();
        }
        else if(cmd === DATA[lang].commands.github.cmd) {
            consoleShown.innerHTML = DATA[lang].console.info.github;
            setTimeout(() => {
                window.open('https://github.com/tur4b', '_blank');
            }, "500");
        }
        else if(cmd === DATA[lang].commands.linkedin.cmd) {
            consoleShown.innerHTML = DATA[lang].console.info.linkedin;
            setTimeout(() => {
                window.open('https://www.linkedin.com/in/turab-eybaliyev', '_blank');
            }, "500");
        }
        else if(cmd === DATA[lang].commands.medium.cmd) {
            consoleShown.innerHTML = DATA[lang].console.info.medium;
            setTimeout(() => {
                window.open('https://medium.com/@turabeybaliyev', '_blank');
            }, "500");
        }
        else {
            commandError.innerHTML = DATA[lang].console.error.message;
            commandError.classList.remove('hidden');
        }

        commandInput.value = '';
    }


    function init() {
        const console = document.getElementsByClassName('console')[0];
        const consoleHeader = document.getElementById('console-header');
        const consoleCommands = document.getElementById('console-commands');
        const consoleCommand = document.getElementById('command-id');

        consoleHeader.innerHTML = DATA[lang].console.header;
        consoleCommands.innerHTML = DATA[lang].console.commands;
        consoleCommand.placeholder = DATA[lang].commands.placeholder;

    	const infrastructure = document.getElementsByClassName("infrastructure")[0];
	    infrastructure.innerHTML = detailsContent();

        const contentData = document.getElementsByClassName("data")[0];
        const consoleShown = document.getElementById('console-shown');

        contentData.innerHTML = profileContent();
        consoleShown.innerHTML = DATA[lang].console.info.profile;

        const leftPanelFooterData = document.getElementsByClassName("infra-footer")[0];
        leftPanelFooterData.innerHTML = 'Type your command on the terminal that located at right side';

        bounceDataContent();

        // check if input is focused or not
        setInterval(() => {
            if(document.activeElement === consoleCommand) {
                console.classList.remove('bounce');
            }
            else {
                console.classList.add('bounce');
            }
        }, 2000);
    }

    function bounceDataContent() {
        const dataDiv = document.getElementsByClassName('infrastructure')[0];
        dataDiv.classList.add('bounce');

        setTimeout(() => {
            dataDiv.classList.remove('bounce');
        }, 2000);
    }

    function initLeftPanel() {
        const leftPanel = document.querySelector('.left-panel');
        if (!leftPanel) return;

        // Clean up any existing auto-scroll track/animation
        if (leftPanel.__autoScrollTrack) {
            const track = leftPanel.__autoScrollTrack;
            const infra = track.querySelector('.infrastructure');
            if (infra) {
                // Move infrastructure back to the left panel (original location)
                leftPanel.appendChild(infra);
                infra.style.position = '';
                infra.style.top = '';
                infra.style.transition = '';
                infra.style.zIndex = '';
                infra.style.clipPath = '';
                infra.style.margin = '';
                infra.style.padding = '';
                infra.style.maxHeight = '';
                infra.style.overflow = '';
            }
            // cancel RAF if running
            if (leftPanel.__animationFrameId) {
                cancelAnimationFrame(leftPanel.__animationFrameId);
                leftPanel.__animationFrameId = null;
            }
            track.remove();
            delete leftPanel.__autoScrollTrack;
            delete leftPanel.__animateScroll;
            delete leftPanel.__animationPaused;
        }

        // Ensure no scrollbars on the panel
        leftPanel.style.overflow = 'hidden';
        leftPanel.style.overflowX = 'hidden';
        leftPanel.style.overflowY = 'hidden';
        leftPanel.style.msOverflowStyle = 'none';
        leftPanel.style.scrollbarWidth = 'none';
        leftPanel.style.webkitScrollbar = 'none';

        // Normalize styles on current infrastructure element (if it exists)
        const infra = leftPanel.querySelector('.infrastructure');
        if (infra) {
            infra.style.margin = '0';
            infra.style.padding = '0';
            infra.style.maxHeight = '100%';
            infra.style.overflow = 'hidden';
        }

        // Start auto-scroll (if needed)
        startAutoScroll(leftPanel);
    }

    function startAutoScroll(leftPanel) {
        const infra = leftPanel.querySelector('.infrastructure');
        if (!infra) return;

        const contentHeight = infra.scrollHeight;
        const panelHeight = leftPanel.clientHeight;

        console.log('contentHeight: ', contentHeight);
        console.log('panelHeight: ', panelHeight);

        // Only auto-scroll when content taller than panel
        if (contentHeight <= (panelHeight + 10)) return;

        // Create a wrapper (track) to hold the infra for smooth continuous movement
        const scrollWrapper = document.createElement('div');
        scrollWrapper.style.position = 'relative';
        scrollWrapper.style.width = '100%';
        scrollWrapper.style.height = '100%';
        scrollWrapper.style.overflow = 'visible';
        scrollWrapper.style.minHeight = '100%';
        scrollWrapper.style.height = 'auto';

        // Insert wrapper and move infra into it
        leftPanel.insertBefore(scrollWrapper, infra);
        scrollWrapper.appendChild(infra);

        // Store track so we can clean it up later
        leftPanel.__autoScrollTrack = scrollWrapper;

        // Prepare infra for animation
        infra.style.position = 'relative';
        infra.style.top = panelHeight + 'px';
        infra.style.transition = 'none';
        infra.style.clipPath = 'none';
        infra.style.zIndex = '1';

        let currentPosition = panelHeight;
        const scrollSpeed = 1.2; // pixels per frame

        leftPanel.__animationPaused = false;

        function animateScroll() {
            if (leftPanel.__animationPaused) {
                // Keep scheduling while paused? We can still schedule again to check paused state
                leftPanel.__animationFrameId = requestAnimationFrame(animateScroll);
                return;
            }

            currentPosition -= scrollSpeed;

            if (currentPosition <= -(contentHeight + 50)) {
                currentPosition = panelHeight + 50;
            }

            infra.style.top = currentPosition + 'px';
            leftPanel.__animationFrameId = requestAnimationFrame(animateScroll);
        }

        // Store function reference (optional, for external control)
        leftPanel.__animateScroll = animateScroll;

        // Start animation
        leftPanel.__animationFrameId = requestAnimationFrame(animateScroll);

    }
	
	// JavaScript-based tooltip solution
	initTooltips();
}

// Tooltip functionality
function initTooltips() {
	// Create tooltip element
	const tooltip = document.createElement('div');
	tooltip.id = 'dynamic-tooltip';
	tooltip.style.cssText = `
		position: fixed;
		background: rgb(52, 211, 153);
		color: #000;
		padding: 8px 12px;
		border-radius: 8px;
		font-size: 12px;
		font-weight: bold;
		white-space: nowrap;
		z-index: 10000;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s ease;
		transform: translateX(-50%);
	`;
	document.body.appendChild(tooltip);

	// Add event listeners to all tooltip elements
	document.addEventListener('mouseover', function(e) {
		if (e.target.closest('.tooltip')) {
			const tooltipElement = e.target.closest('.tooltip');
			const text = tooltipElement.getAttribute('data-text');
			if (text) {
				tooltip.textContent = text;
				tooltip.style.opacity = '1';
			}
		}
	});

	document.addEventListener('mousemove', function(e) {
		if (tooltip.style.opacity === '1') {
			tooltip.style.left = e.pageX + 'px';
			tooltip.style.top = (e.pageY - 40) + 'px';
		}
	});

	document.addEventListener('mouseout', function(e) {
		if (e.target.closest('.tooltip')) {
			tooltip.style.opacity = '0';
		}
	});
}