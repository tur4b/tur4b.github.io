
window.onload=function(){

    const profile = "<div class=\"profile mg-b-20\">"+
        "<h2 class=\"space-5\">Turab Eybaliyev</h2>" + 
        "<p class=\"space-3\">" + 
            "Java Developer" +
        "<br><br>" +

        "<span class=\"space-3\">🌱 I’m currently learning <strong>Design Patterns</strong></span> <br/>" + 
        "<span class=\"space-3\">💬 Ask me about <strong>Java, Spring Framework</strong></span>" +
        "<br/><br/>" + 
    "</div>";

    const skills = "<div class=\"skills mg-b-10\">" + 
"    <h3 class=\"space-3\" align=\"left\">Programming Languages and Tools:</h3>" + 
"    <br/>" + 
    "<ul align=\"left\">" +
        "<li>JAVA (8, 11, 17, 21)</li>" +
        "<li>Spring framework (Core, Boot, MVC, Data JPA, Security)</li>" +
        "<li>OOP, SOLID</li>" +
        "<li>Design Patterns</li>" +
        "<li>Algorithms and Data Structures</li>" +
        "<li>Rest and Soap</li>" +
        "<li>Apache Kafka and RabbitMQ</li>" +
        "<li>OAuth2</li>" +
        "<li>MySQL, Oracle</li>" +
        "<li>JUnit, Mockito</li>" + 
        "<li>Swagger, Prometheus, Zipkin, Grafana</li>" +
        "<li>Html/Css/Js</li>" +
        "<li>Maven, Gradle</li>" + 
        "<li>Intellij Idea</li>" + 
    "</ul>" +
"</div>";

    const social = "<div class=\"icons mg-b-20\">" +
    "<a href=\"https://github.com/quTurabqu\" target=\"_blank\"><i class=\"fa fa-github black-color t-300\" aria-hidden=\"true\"></i></a>" +
    "<a href=\"https://stackoverflow.com/users/8747039/turab\" target=\"_blank\"><i class=\"fa fa-stack-overflow orange-color t-300\" aria-hidden=\"true\"></i></a>" +
    "<a href=\"https://www.linkedin.com/in/turab-eybaliyev-aa313216a\" target=\"_blank\"><i class=\"fa fa-linkedin blue-color t-300\" aria-hidden=\"true\"></i></a>" +
"</div>";

const allCommands = "<div class=\"mg-b-20\">" + 
"    <h3 class=\"space-3\" align=\"left\">All commands</h3>" + 
    "<ul align=\"left\">" +
        "<li><strong>@profile - </strong> show about me</li>" +
        "<li><strong>@skills - </strong> show my programming skills</li>" +
        "<li><strong>@social - </strong> show my social-media</li>" +
        "<li><strong>@clear - </strong> clear content</li>" +
        "<li><strong>@help - </strong> show all commands</li>" +
    "</ul>" +
    "    <br/>" + 
    "    <h3 class=\"space-3\" align=\"left\">Additional commands</h3>" + 
    "<ul align=\"left\">" +
        "<li><strong>@github - </strong> go to my github page</li>" +
        "<li><strong>@linkedin - </strong> go to my linkedin page</li>" +
    "</ul>" +
"</div>";

    const consoleShown = document.getElementById('console-shown');
    const commandError = document.getElementById("command-error");
    const contentData = document.getElementsByClassName("data")[0];
    const commandInput = document.getElementsByClassName("command")[0];

    // set all commands as default
    contentData.innerHTML = allCommands;

    commandInput.addEventListener('keydown', (event) => {
        commandError.classList.add('hidden');
        if (event.key === 'Enter') {
            processCommand();
        }
    });


    function processCommand() {
        const cmd = commandInput.value;
        if(cmd === 'profile') {
            contentData.innerHTML = profile;
            consoleShown.innerHTML = '<strong>profile</strong> is shown';
        }
        else if(cmd === 'skills') {
            contentData.innerHTML = skills;
            consoleShown.innerHTML = '<strong>skills</strong> is shown';
        }
        else if(cmd === 'social') {
            contentData.innerHTML = social;
            consoleShown.innerHTML = '<strong>social</strong> is shown';
        }
        else if(cmd === 'clear') {
            contentData.innerHTML = '';
            consoleShown.innerHTML = '<strong>clear</strong> was called';
        }
        else if(cmd === 'help') {
            contentData.innerHTML = allCommands;
            consoleShown.innerHTML = '<strong>help</strong> is shown';
        }
        else if(cmd === 'github') {
            consoleShown.innerHTML = '<strong>Github page</strong> is opening...';
            setTimeout(() => {
                window.open('https://github.com/quTurabqu', '_blank');
                consoleShown.innerHTML = '<strong>Github page</strong> was opened';
            }, "1000");
        }
        else if(cmd === 'linkedin') {
            consoleShown.innerHTML = '<strong>LinkedIn page</strong> is opening...';
            setTimeout(() => {
                window.open('https://www.linkedin.com/in/turab-eybaliyev-aa313216a', '_blank');
                consoleShown.innerHTML = '<strong>LinkedIn page</strong> was opened';
            }, "1000");
        }
        else {
            commandError.innerHTML = 'Invalid command. Type @help in order to get all commands';
            commandError.classList.remove('hidden');
        }

        commandInput.value = '';
    }
}