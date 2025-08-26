var lang = 'en';

const DATA = {
    "en": {
	    "infrastructure" : {
        "code": "interface <span class=\"hljs-special color-gr\">DeveloperTraits</span> {\n" +
          "    boolean isCurious();\n" +
          "    boolean isProblemSolver();\n" +
          "    boolean lovesCleanCode();\n" +
          "}\n\n" +
          "abstract class <span class=\"hljs-special color-gr\">Developer</span> implements <span class=\"hljs-special color-gr\">DeveloperTraits</span> {\n" +
          "    final String name;\n" +
          "    final String status;\n" +
          "    final String profession;\n" +
          "    final List&lt;String&gt; skills;\n" +
          "    final Map&lt;String, String&gt; contacts;\n\n" +
          "    <span class=\"hljs-special color-gr\">Developer</span>(String name,\n" +
          "               String status,\n" +
          "               String profession,\n" +
          "               List&lt;String&gt; skills,\n" +
          "               Map&lt;String, String&gt; contacts) {\n" +
          "        this.name = name;\n" +
          "        this.status = status;\n" +
          "        this.profession = profession;\n" +
          "        this.skills = skills;\n" +
          "        this.contacts = contacts;\n" +
          "    }\n\n" +
          "    protected String <span class=\"hljs-special color-purple\">profile()</span> {\n" +
          "        StringBuilder html = new StringBuilder();\n\n" +
          "        html.append(\"&lt;div&gt;\")\n" +
          "            .append(\"&lt;div&gt;\")\n" +
          "            .append(\"&lt;span class=\\\"hljs-special\\\"&gt;Name:&lt;/span&gt; \").append(name).append(\"&lt;br&gt;\")\n" +
          "            .append(\"&lt;span class=\\\"hljs-special\\\"&gt;Profession:&lt;/span&gt; \").append(profession).append(\"&lt;br&gt;\")\n" +
          "            .append(\"&lt;span class=\\\"hljs-special\\\"&gt;Status:&lt;/span&gt; \").append(status)\n" +
          "            .append(\"&lt;/div&gt;\");\n\n" +
          "        html.append(\"&lt;div class=\\\"icons mg-b-20\\\"&gt;\");\n" +
          "        for (Map.Entry&lt;String, String&gt; entry : contacts.entrySet()) {\n" +
          "            String key = entry.getKey();\n" +
          "            String url = entry.getValue();\n" +
          "            html.append(\"&lt;a href=\\\"\").append(url).append(\"\\\" target=\\\"_blank\\\"&gt;\")\n" +
          "                .append(\"&lt;span class=\\\"tooltip\\\" data-text=\\\"\").append(capitalize(key)).append(\"\\\"&gt;\")\n" +
          "                .append(\"&lt;i class=\\\"fa fa-\").append(key).append(\" black-color t-300\\\" aria-hidden=\\\"true\\\"&gt;&lt;/i&gt;\")\n" +
          "                .append(\"&lt;/span&gt;&lt;/a&gt;\");\n" +
          "        }\n" +
          "        html.append(\"&lt;/div&gt;&lt;/div&gt;\");\n\n" +
          "        return html.toString();\n" +
          "    }\n\n" +
          "    protected String <span class=\"hljs-special color-purple\">skills()</span> {\n" +
          "        StringBuilder sb = new StringBuilder();\n" +
          "        sb.append(\"&lt;div class=\"skills\"&gt;\");\n" +
          "        for (String skill : skills) {\n" +
          "            sb.append(\"&lt;span class=\"hljs-special color-gr\"&gt;\").append(skill).append(\"&lt;/span&gt;\");\n" +
          "        }\n" +
          "        sb.append(\"&lt;/div&gt;\");\n" +
          "        return sb.toString();\n" +
          "    }\n\n" +
          "    private String capitalize(String input) {\n" +
          "        if (input == null || input.isEmpty()) return input;\n" +
          "        return input.substring(0, 1).toUpperCase() + input.substring(1);\n" +
          "    }\n" +
          "}\n\n" +
          "final class <span class=\"hljs-special color-gr\">Tur4b</span> extends <span class=\"hljs-special color-purple\">Developer</span> {\n" +
          "    private static volatile <span class=\"hljs-special color-gr\">Tur4b</span> instance;\n\n" +
          "    private <span class=\"hljs-special color-gr\">Tur4b</span>() {\n" +
          "        super(\n" +
          "            \"Turab Eybaliyev\",\n" +
          "            \"Working...\",\n" +
          "            \"Java Developer\",\n" +
          "            List.of(\n" +
          "                \"OOP\", \"Design Patterns\", \"Algorithms & Data Structures\", \"Java\",\n" +
          "                \"Spring framework (Core, Boot, MVC, Data JPA, Security)\",\n" +
          "                \"Apache Kafka\", \"RabbitMQ\", \"OAuth2\", \"Hibernate\",\n" +
          "                \"Swagger\", \"Zipkin\", \"Prometheus\", \"Grafana\",\n" +
          "                \"JUnit\", \"Mockito\", \"Maven\", \"Gradle\"\n" +
          "            ),\n" +
          "            Map.of(\n" +
          "                \"github\", \"https://github.com/tur4b\",\n" +
          "                \"linkedin\", \"https://www.linkedin.com/in/turab-eybaliyev\"\n" +
          "            )\n" +
          "        );\n" +
          "    }\n\n" +
          "    public static <span class=\"hljs-special color-gr\">Tur4b</span> <span class=\"hljs-special color-purple\">getInstance()</span> {\n" +
          "        if (instance == null) {\n" +
          "            synchronized (<span class=\"hljs-special color-gr\">Tur4b</span>.class) {\n" +
          "                if (instance == null) {\n" +
          "                    instance = new <span class=\"hljs-special color-gr\">Tur4b</span>();\n" +
          "                }\n" +
          "            }\n" +
          "        }\n" +
          "        return instance;\n" +
          "    }\n\n" +
          "    public boolean isCurious() { return true; }\n" +
          "    public boolean isProblemSolver() { return true; }\n" +
          "    public boolean lovesCleanCode() { return true; }\n" +
          "}\n\n" +
          "<span class=\"hljs-special color-gr\">public class Main { </span>\n" +
          "    public static void <span class=\"hljs-special color-purple\">main(String[] args)</span> {\n" +
          "        <span class=\"hljs-special color-gr\">Tur4b</span> tur4b = <span class=\"hljs-special color-gr\">Tur4b</span>.getInstance();\n" +
          "    }\n" +
          "}",
            "profile": "<div class=\"profile\"><span class=\"hljs-special color-gr\">Name:</span> Turab Eybaliyev\n<span class=\"hljs-special color-gr\">Profession:</span> Java Developer\n<span class=\"hljs-special color-gr\">Status:</span> Working..." + 
            "\n<span class=\"hljs-special color-gr\">Is Curious to learn:</span> True"+
            "\n<span class=\"hljs-special color-gr\">Is Problem solver:</span> True"+
            "\n<span class=\"hljs-special color-gr\">Loves Clean code:</span> True"+
            "</br>" + 
            "</br></br><div class=\"icons mg-b-20\">" +
    "<a href=\"https://github.com/tur4b\" target=\"_blank\"><span class=\"tooltip\" data-text=\"Github\"><i class=\"fa fa-github black-color t-300\" aria-hidden=\"true\"></i></span></a>" +
    "<a href=\"https://stackoverflow.com/users/8747039/turab\" target=\"_blank\"><span class=\"tooltip\" data-text=\"Stackoverflow\"><i class=\"fa fa-stack-overflow orange-color t-300\" aria-hidden=\"true\"></i></span></a>" +
    "<a href=\"https://www.linkedin.com/in/turab-eybaliyev\" target=\"_blank\"><span class=\"tooltip\" data-text=\"LinkedIn\"><i class=\"fa fa-linkedin blue-color t-300\" aria-hidden=\"true\"></i></span></a>" +
    "</div></div>",
            "skills": "<div class=\"skills\">\n" +
  "<span class=\"hljs-special color-gr\">OOP</span>\n" +
  "<span class=\"hljs-special color-gr\">Design Patterns</span>\n" +
  "<span class=\"hljs-special color-gr\">Algorithms &amp; Data Structures</span>\n" +
  "<span class=\"hljs-special color-gr\">Java</span>\n" +
  "<span class=\"hljs-special color-gr\">Spring framework (Core, Boot, MVC, Data JPA, Security)</span>\n" +
  "<span class=\"hljs-special color-gr\">Apache Kafka</span>\n" +
  "<span class=\"hljs-special color-gr\">RabbitMQ</span>\n" +
  "<span class=\"hljs-special color-gr\">OAuth2</span>\n" +
  "<span class=\"hljs-special color-gr\">Hibernate</span>\n" +
  "<span class=\"hljs-special color-gr\">Swagger</span>\n" +
  "<span class=\"hljs-special color-gr\">Zipkin</span>\n" +
  "<span class=\"hljs-special color-gr\">Prometheus</span>\n" +
  "<span class=\"hljs-special color-gr\">Grafana</span>\n" +
  "<span class=\"hljs-special color-gr\">JUnit</span>\n" +
  "<span class=\"hljs-special color-gr\">Mockito</span>\n" +
  "<span class=\"hljs-special color-gr\">Maven</span>\n" +
  "<span class=\"hljs-special color-gr\">Gradle</span>\n" +
"</div>"
        },
        "console": {
            "header": "tur4b@test <strong>You are welcome</strong>",
            "commands": "Type @profile, @skills, @clear, @help @bounce",
            "info": {
                "profile": "<strong>profile</strong> is shown",
                "skills": "<strong>skills</strong> is shown",
                "help": "<strong>help</strong> is shown",
                "clear": "<strong>clear</strong> was called",
                "bounce": "<strong>make it bouce</strong> was called",
                "github": "<strong>Github page</strong> was opened",
                "linkedin": "<strong>Linkedin page</strong> was opened"
            },
            "error": {
                "message": "Invalid command. Type @help for help"
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
            "lang": {
                "cmd": "lang",
                "message": "<strong>@lang - </strong> change language (2 languages exist)"
            },
            "help": {
                "cmd": "help",
                "message": "<strong>@help - </strong> show all commands"
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

function infrastructureContent() {
    return `<div class="profile mg-b-20">
        <pre class="code-block"><code class="language-java">${DATA[lang].infrastructure.code}</code></pre>
    </div>`;
}

function skillsContent() {
     return `<div class="profile mg-b-20">
        <pre class="code-block"><code class="language-java">${DATA[lang].infrastructure.skills}</code></pre>
    </div>`;
} 

function allCommandsContent() {
    const allCommands = "<div class=\"mg-b-20\">" + 
    "    <h3 class=\"space-3\" align=\"left\">" + DATA[lang].commands.header + "</h3>" + 
    "<ul align=\"left\">" +
    "<li>" + DATA[lang].commands.profile.message + "</li>" +
    "<li>" + DATA[lang].commands.skills.message + "</li>" +
    "<li>" + DATA[lang].commands.clear.message + "</li>" +
    "<li>" + DATA[lang].commands.bounce.message + "</li>" +
    "<li>" + DATA[lang].commands.help.message + "</li>" +
    "</ul>" +
    "    <br/>" + 
    "    <h3 class=\"space-3\" align=\"left\">" + DATA[lang].commands.headerAdditional + "</h3>" + 
    "<ul align=\"left\">" +
    "<li>" + DATA[lang].commands.github.message + "</li>" +
    "<li>" + DATA[lang].commands.linkedin.message + "</li>" +
    "</ul>" +
    "</div>";
    return allCommands;        
}
    
window.onload=function(){

    init();

    const consoleShown = document.getElementById('console-shown');
    const commandError = document.getElementById("command-error");
    const commandInput = document.getElementsByClassName("command")[0];
    const contentData = document.getElementsByClassName("data")[0];

    // set all commands as default    
    commandInput.addEventListener('keydown', (event) => {
        commandError.classList.add('hidden');
        if (event.key === 'Enter') {
            processCommand();
        }
    });

    function processCommand() {
        const cmd = commandInput.value;
        if(cmd === DATA[lang].commands.profile.cmd) {
            contentData.innerHTML = profileContent();
            consoleShown.innerHTML = DATA[lang].console.info.profile;
            bounceDataContent();
        }
        else if(cmd === DATA[lang].commands.skills.cmd) {
            contentData.innerHTML = skillsContent();
            consoleShown.innerHTML = DATA[lang].console.info.skills;
            bounceDataContent();
        }
        else if(cmd === DATA[lang].commands.clear.cmd) {
            if(contentData.innerHTML != '') {
                contentData.classList.add('hinge');
                setTimeout(() => {
                    contentData.classList.remove('hinge');
                    contentData.innerHTML = '';
                    consoleShown.innerHTML = DATA[lang].console.info.clear;
                }, 2000);
            }
        }
        else if(cmd === DATA[lang].commands.help.cmd) {
            contentData.innerHTML = allCommandsContent();
            consoleShown.innerHTML = DATA[lang].console.info.help;
            bounceDataContent();
        }
        else if(cmd === DATA[lang].commands.bounce.cmd) {
            consoleShown.innerHTML = DATA[lang].console.info.bounce;
            // make it bouce
            bounceDataContent();
        }
        else if(cmd === DATA[lang].commands.github.cmd) {
            consoleShown.innerHTML = DATA[lang].console.info.github;
            setTimeout(() => {
                window.open('https://github.com/tur4b', '_blank');
            }, "1000");
        }
        else if(cmd === DATA[lang].commands.linkedin.cmd) {
            consoleShown.innerHTML = DATA[lang].console.info.linkedin;
            setTimeout(() => {
                window.open('https://www.linkedin.com/in/turab-eybaliyev', '_blank');
            }, "1000");
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
	    infrastructure.innerHTML = infrastructureContent();

        const contentData = document.getElementsByClassName("data")[0];
        const consoleShown = document.getElementById('console-shown');

        contentData.innerHTML = profileContent();
        consoleShown.innerHTML = DATA[lang].console.info.profile;

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
        const dataDiv = document.getElementsByClassName('data')[0];
        dataDiv.classList.add('bounce');

        setTimeout(() => {
            dataDiv.classList.remove('bounce');
        }, 2000);
    }

	// Auto-scroll left panel with smooth continuous movement
	function initLeftPanel() {
		const leftPanel = document.querySelector('.left-panel');
		if (!leftPanel) return;

		// Remove any existing auto-scroll track
		if (leftPanel.__autoScrollTrack) {
			const track = leftPanel.__autoScrollTrack;
			const infra = track.querySelector('.infrastructure');
			if (infra) {
				// Move infrastructure back to its original position
				leftPanel.appendChild(infra);
			}
			track.remove();
			delete leftPanel.__autoScrollTrack;
		}

		// Ensure proper overflow settings - no scroll bars
		leftPanel.style.overflow = 'hidden';
		leftPanel.style.overflowX = 'hidden';
		leftPanel.style.overflowY = 'hidden';
		
		// Remove any unnecessary padding/margins that might cause gaps
		const infra = leftPanel.querySelector('.infrastructure');
		if (infra) {
			infra.style.margin = '0';
			infra.style.padding = '0';
			infra.style.maxHeight = '100%';
			infra.style.overflow = 'hidden';
		}
		
		// Force no scroll bars on all browsers
		leftPanel.style.msOverflowStyle = 'none';  // IE/Edge
		leftPanel.style.scrollbarWidth = 'none';   // Firefox
		leftPanel.style.webkitScrollbar = 'none';  // Webkit browsers

		// Start auto-scroll animation
		startAutoScroll(leftPanel);
	}

	// Auto-scroll function for continuous content movement
	function startAutoScroll(leftPanel) {
		const infra = leftPanel.querySelector('.infrastructure');
		if (!infra) return;

		// Get the content height
		const contentHeight = infra.scrollHeight;
		const panelHeight = leftPanel.clientHeight;
		
		// Only auto-scroll if content is taller than panel
		if (contentHeight <= panelHeight) return;

		// Create a wrapper for smooth scrolling
		const scrollWrapper = document.createElement('div');
		scrollWrapper.style.position = 'relative';
		scrollWrapper.style.width = '100%';
		scrollWrapper.style.height = '100%';
		scrollWrapper.style.overflow = 'visible';
		scrollWrapper.style.clipPath = 'none';
		scrollWrapper.style.minHeight = '100%';
		scrollWrapper.style.height = 'auto';

		// Move infrastructure into wrapper
		leftPanel.insertBefore(scrollWrapper, infra);
		scrollWrapper.appendChild(infra);

		// Set initial position - start content at bottom so it scrolls up into view
		infra.style.position = 'relative';
		infra.style.top = panelHeight + 'px'; // Start content below the panel
		infra.style.transition = 'none'; // Remove transition for smooth animation
		infra.style.clipPath = 'none';
		infra.style.zIndex = '1';

		let currentPosition = panelHeight; // Start from below the panel
		const scrollSpeed = 0.8; // pixels per frame (reduced speed for comfortable reading)

		function animateScroll() {
			// Check if animation is paused
			if (leftPanel.__animationPaused) {
				return;
			}
			
			currentPosition -= scrollSpeed;
			
			// Reset to bottom when content has scrolled completely out of view
			// Add extra margin to ensure clean transition between cycles
			if (currentPosition <= -(contentHeight + 50)) {
				currentPosition = panelHeight + 50; // Start slightly below for smoother transition
			}
			
			infra.style.top = currentPosition + 'px';
			requestAnimationFrame(animateScroll);
		}

		// Start the animation
		requestAnimationFrame(animateScroll);

		// Pause on hover/touch
		leftPanel.addEventListener('mouseenter', () => {
			// Pause animation by stopping requestAnimationFrame
			leftPanel.__animationPaused = true;
		});

		leftPanel.addEventListener('mouseleave', () => {
			// Resume animation
			leftPanel.__animationPaused = false;
			requestAnimationFrame(animateScroll);
		});

		// Pause on touch
		leftPanel.addEventListener('touchstart', () => {
			leftPanel.__animationPaused = true;
		}, { passive: true });

		leftPanel.addEventListener('touchend', () => {
			leftPanel.__animationPaused = false;
			requestAnimationFrame(animateScroll);
		}, { passive: true });

		// Store animation state
		leftPanel.__animationPaused = false;
		leftPanel.__animateScroll = animateScroll;
	}

	// Initialize simple left panel
	initLeftPanel();
	
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