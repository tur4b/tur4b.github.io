var lang = 'en';

const DATA = {
    "en": {
	    "infrastructure" : {
        "code": "interface <span class=\"hljs-special\">DeveloperTraits</span> {\n" +
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
          "    protected String <span class=\"color-purple\">profile()</span> {\n" +
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
          "    protected String <span class=\"color-purple\">skills()</span> {\n" +
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
          "final class <span class=\"hljs-special color-gr\">Tur4b</span> extends <span class=\"hljs-special\">Developer</span> {\n" +
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
          "    public static <span class=\"hljs-special color-gr\">Tur4b</span> getInstance() {\n" +
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

}