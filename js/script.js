var lang = 'en';

const DATA = {
    "en": {
        "console": {
            "header": "guest@guest <strong>You are welcome</strong>",
            "commands": "Type @profile, @skills, @social, @clear, @lang, @help",
            "info": {
                "profile": "<strong>profile</strong> is shown",
                "skills": "<strong>skills</strong> is shown",
                "social": "<strong>social</strong> is shown",
                "help": "<strong>help</strong> is shown",
                "clear": "<strong>clear</strong> was called",
                "lang": "<strong>dil dəyişmə</strong> çağırıldı ('az'-a dəyişildi)",
                "bounce": "<strong>make it bouce</strong> was called",
                "github": "<strong>Github page</strong> was opened",
                "linkedin": "<strong>Linkedin page</strong> was opened"
            },
            "error": {
                "message": "Invalid command. Type @help for help"
            }
        },
        "profile": {
            "profession": "Java Developer",
            "status": "⚒️ Working",
            "learning": "🌱 I’m currently learning <strong>Microservices",
            "askme": "💬 You can ask me about <strong>Java and Spring Framework</strong>"
        },
        "skills": {
            "header": "Programming Knowledge"
        },
        "social": {},
        "commands": {
            "header": "All commands",
            "headerAdditional": "Additional commands",
            "placeholder": "Type command",
            "profile": {
                "cmd": "profile",
                "message": "<strong>@profile - </strong> show about me"
            },
            "skills": {
                "cmd": "skills",
                "message": "<strong>@skills - </strong> show my programming skills"
            },
            "social": {
                "cmd": "social",
                "message": "<strong>@social - </strong> show my social-media"
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
    },
    "az": {
        "console": {
            "header": "qonaq@qonaq <strong>Xoş gəlmisiniz</strong>",
            "commands": "Yaz @profil, @bacarıqlar, @sosial, @təmizlə, @dil, @kömək",
            "info": {
                "profile": "<strong>profil</strong> göstərilir",
                "skills": "<strong>bacarıqlar</strong> göstərilir",
                "social": "<strong>sosial-media</strong> göstərilir",
                "help": "<strong>kömək</strong> göstərilir",
                "clear": "<strong>təmizlə</strong> çağırıldı",
                "lang": "<strong>language change</strong> was called (changed to 'en')",
                "bounce": "<strong>bounce</strong> çağırıldı",
                "github": "<strong>Github səhifəsi</strong> açıldı",
                "linkedin": "<strong>Linkedin səhifəsi</strong> açıldı"
            },
            "error": {
                "message": "Düzgün olmayan əmr. Yaz @kömək kömək üçün"
            }
        },
        "profile": {
            "profession": "Java Proqramçı",
            "status": "⚒️ İşləyirəm",
            "learning": "🌱 Hal-hazırda <strong>Mikroservis arxitekturasını</strong> öyrənirəm",
            "askme": "💬 <strong>Java və Spring framework-u</strong> haqqında məndən soruşa bilərsən"
        },
        "skills": {
            "header": "Proqramlaşdırma biliklərim"
        },
        "social": {},
        "commands": {
            "header": "Bütün əmrlər",
            "headerAdditional": "Əlavə əmrlər",
            "placeholder": "Əmri yaz",
            "profile": {
                "cmd": "profil",
                "message": "<strong>@profil - </strong> mənim haqqımda göstər"
            },
            "skills": {
                "cmd": "bacarıqlar",
                "message": "<strong>@bacarıqlar - </strong> proqramlaşdırma biliklərimi göstər"
            },
            "social": {
                "cmd": "sosial",
                "message": "<strong>@sosial - </strong> sosial-mediyamı göstər"
            },
            "clear": {
                "cmd": "təmizlə",
                "message": "@təmizlə - </strong> mətni təmizlə"
            },
            "lang": {
                "cmd": "dil",
                "message": "<strong>@dil - </strong> dili dəyişmək (2 dil mövcuddur)"
            },
            "help": {
                "cmd": "kömək",
                "message": "@kömək - </strong> bütün əmrləri göstər"
            },
            "bounce": {
                "cmd": "bounce",
                "message": "<strong>@bounce - </strong> bounce"
            },
            "github": {
                "cmd": "github",
                "message": "<strong>@github - </strong> github səhifəmə get"
            },
            "linkedin": {
                "cmd": "linkedin",
                "message": "<strong>@linkedin - </strong> linkedin səhifəmə get"
            }
        }
    }
};

function profileContent() {
    const profile = "<div class=\"profile mg-b-20\">"+
    "<h2 class=\"space-5\">Turab Eybaliyev</h2>" + 
    "<p class=\"space-3\">" + DATA[lang].profile.profession +
    "<br><br>" +
    
    "<span class=\"space-3\">" + DATA[lang].profile.status + "</span> <br/>" + 
    "<span class=\"space-3\">" + DATA[lang].profile.learning + "</span> <br/>" + 
    "<span class=\"space-3\">" + DATA[lang].profile.askme + "</span>" +
    "<br/><br/>" + 
    "</div>";
    return profile;
}

function skillsContent() {
    const skills = "<div class=\"skills mg-b-10\">" + 
    "    <h3 class=\"space-3\" align=\"left\">" + DATA[lang].skills.header + "</h3>" + 
    "    <br/>" + 
    "<ul align=\"left\">" +
    "<li><a>JAVA (8, 11, 17, 21)</a></li>" +
    "<li><a>Spring framework (Core, Boot, MVC, Data JPA, Security)</a></li>" +
    "<li><a>OOP, Design Patterns</a></li>" +
    "<li><a>Algorithms and Data Structures</a></li>" +
    "<li><a>REST and SOAP</a></li>" +
    "<li>Apache Kafka and RabbitMQ</a></li>" +
    "<li><a>OAuth2</a></li>" +
    "<li><a>Hibernate</a></li>" +
    "<li><a>MySQL, Oracle</a></li>" +
    "<li><a>JUnit, Mockito</a></li>" + 
    "<li><a>Microservices (I am learning)</a></li>" +
    "<li><a>Swagger, Prometheus, Zipkin, Grafana</a></li>" +
    "<li><a>Html/Css/Js</a></li>" +
    "<li><a>Maven, Gradle</a></li>" + 
    "<li><a>Intellij Idea</a></li>" + 
    "</ul>" +
    "</div>";
    return skills;        
} 

function socialContent() {
    const social = "<div class=\"icons mg-b-20\">" +
    "<a href=\"https://github.com/tur4b\" target=\"_blank\"><span class=\"tooltip\" data-text=\"Github\"><i class=\"fa fa-github black-color t-300\" aria-hidden=\"true\"></i></span></a>" +
    "<a href=\"https://stackoverflow.com/users/8747039/turab\" target=\"_blank\"><span class=\"tooltip\" data-text=\"Stackoverflow\"><i class=\"fa fa-stack-overflow orange-color t-300\" aria-hidden=\"true\"></i></span></a>" +
    "<a href=\"https://www.linkedin.com/in/turab-eybaliyev\" target=\"_blank\"><span class=\"tooltip\" data-text=\"LinkedIn\"><i class=\"fa fa-linkedin blue-color t-300\" aria-hidden=\"true\"></i></span></a>" +
    "</div>";
    return social;        
}

function allCommandsContent() {
    const allCommands = "<div class=\"mg-b-20\">" + 
    "    <h3 class=\"space-3\" align=\"left\">" + DATA[lang].commands.header + "</h3>" + 
    "<ul align=\"left\">" +
    "<li>" + DATA[lang].commands.profile.message + "</li>" +
    "<li>" + DATA[lang].commands.skills.message + "</li>" +
    "<li>" + DATA[lang].commands.social.message + "</li>" +
    "<li>" + DATA[lang].commands.clear.message + "</li>" +
    "<li>" + DATA[lang].commands.lang.message + "</li>" +
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
    contentData.innerHTML = socialContent();
    
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
        }
        else if(cmd === DATA[lang].commands.skills.cmd) {
            contentData.innerHTML = skillsContent();
            consoleShown.innerHTML = DATA[lang].console.info.skills;
        }
        else if(cmd === DATA[lang].commands.social.cmd) {
            contentData.innerHTML = socialContent();
            consoleShown.innerHTML = DATA[lang].console.info.social;
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
        else if(cmd === DATA[lang].commands.lang.cmd) {
            contentData.innerHTML = '';
            consoleShown.innerHTML = DATA[lang].console.info.lang;
            if(lang === 'en') {
                lang = 'az';
            }
            else if(lang === 'az') {
                lang = 'en';
            }
            init();
        }
        else if(cmd === DATA[lang].commands.help.cmd) {
            contentData.innerHTML = allCommandsContent();
            consoleShown.innerHTML = DATA[lang].console.info.help;
        }
        else if(cmd === DATA[lang].commands.bounce.cmd) {
            consoleShown.innerHTML = DATA[lang].console.info.bounce;
            // make it bouce
            const dataDiv = document.getElementsByClassName('data')[0];
            dataDiv.classList.add('bounce');

            setTimeout(() => {
                dataDiv.classList.remove('bounce');
            }, 2000);
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

}
