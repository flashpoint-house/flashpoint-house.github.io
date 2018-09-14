/* globals $, _, console*/

(function() {
    "use strict";

    var ASCII_LOGO =
        "                       ,                                                                                            \n" +
        "                       ,,                                                                                           \n" +
        "                       `,:                                                                                          \n" +
        "                        :,:                 `,                   `                                                  \n" +
        "                        ::::                ,:                  :                                                   \n" +
        "                        `::::               ::                 ::                                                   \n" +
        "                         :::::              ::.              `::.                                                   \n" +
        "                         ,:::::            `:::             .:::                                                    \n" +
        "                          ::::::           ,:::            .::::                                                    \n" +
        "                          :::::::          ::::           .::::`                                                    \n" +
        "                          .::::::,         ::::.         .:::::                                                     \n" +
        "                           :::,:::,       `:::::        ,::::::                                                     \n" +
        "                           :::,,:::,      ::::::       ,::::::                                                      \n" +
        "                           .:::.,:::.     ::,:::      ::::::::                                                      \n" +
        "                            :::..::::.    ::.:::,    ::::,:::,                                                      \n" +
        "                  `:`       :::,..::::.  `::.,:::   ::::,,:::                                                       \n" +
        "                   :::,     `:::...::::, :::..:::  ::::,.::::                                                       \n" +
        "                    :::::    :::....:::::::,..::::::::,..:::`                                                       \n" +
        "                     ::::::``:::,....::::::,..:::::::...,:::                                                        \n" +
        "                     .:::::::::::.....:::::...,:::::....::::        :::::`                                          \n" +
        " ,::,`                :::::::::::......::::....::::.....:::`       :,,,,,,:.                                        \n" +
        "   :::::::,`           :::::::::::......:::....:::.....,:::       ,,,,.,,,,,:,                                      \n" +
        "    ,:::::::::::``      ::::.,::::.......:,....::......:::,      `,,.....,,,,,:,                                    \n" +
        "      :::::::::::::::,`,:::::..,::,..`.........,......,:::       ,,,........,,,,:,                                  \n" +
        "        :::::::::::::::::::::,....,..``.`````.....`...::::       ,,,.........,,,,,:.                                \n" +
        "         .:::::::,,,::::::::::,......` ````` ``..``...:::.       .:,,,,,,....,,,,,,::`                              \n" +
        "           :::::::,....,,,:::::......`  ```` ```` ...,:::         ;,,,,,,,,,,,,,,,,,,:::.                           \n" +
        "             :::::::,........,,,...````  ``  ``  `...::::         `;:,,,,,,,,,,,,,,,,,,::;:.                        \n" +
        "              .:::::::,............````   `  `   `..,:::.          `:::,,,,,,,,,,,,,,,,,,,::;`                      \n" +
        "                :::::::,,..........``            `..:::::            ,:::,,,,,,,,,,,,,,,,,,::;`                     \n" +
        "                 `:::::::,,....`  ```           ````,,,....`````.....`....,,,,,,,,,,,,,,,,,,,:;                     \n" +
        "                   ,::;;;;:,.....          `,::::::::::::::::::,,,,,,,,,,,,..........,,,,,,,,::;                    \n" +
        "                     :;;;;;;:,....`       ;:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.................,,,,,:;                   \n" +
        "                      :;;;;;;;,....`     :,,,,,,,,,,,,,,..,,,......,.........................,,,:;                  \n" +
        "                    `;;;;;;;:,.....`     :,,..................................................,,,:;                 \n" +
        "                 `;;;;;;;:,,,,..`        :,,....................................................,,,;  ::::::::.     \n" +
        "              .;;;;;;;:,,,,,,,,....``    :,,.....................................................,,,:,,,,,,,,:::    \n" +
        "           .;;;;;;;;::,,,,,,,,,,...`     :,,,,,,,,,,..............................................,,,,,,,,,,,,:;`   \n" +
        "        .;;;;;;;;;;;;;;;;;;;:::,..`      `::,,,,,,,,,,,,,,,,,,,,,,,,,,,............................,,,,,,,,,,,,:;   \n" +
        "        ,;;;;;;;;;;;;;;;;;;;;;,,.   ```    `..,::::::,,,,,,,,,,,,,,,,,,,,...........................,.......,,,,;   \n" +
        "                     `,:;;;;:,,.`......`  `....  `..,,,````````.,,,,:,,,,,...................................,,,:`  \n" +
        "                       :;;;,,,,,,,,,...` `......  .,,;;:            ,,,......................................,,,:,  \n" +
        "                      ;;;:,,,,,,,,,,,,,` ..:;,,,.``,,:;;           `,,,......................................,,,:,  \n" +
        "                    .;;;,,,,,,,,,,,,,,,``,,;;;,,,,`.,,;;:          ,,,,,.....................................,,,::  \n" +
        "                   ;;;:,,,,,,,,::;;,,,,.,,;;;;;,,,,`,,:;;          ,,,,,......................................,,,;  \n" +
        "                 ,;;;,,,,,,:;;;;;;;,,,,,,,;;;;;;:,,,,,,;;;         ,,,,,,.....................................,,,:  \n" +
        "                ;;;:,,::;;;;;;;;;;;,,,,,,;;..;;;;:,,,,,:;;          :,,,,.....................................,,,;  \n" +
        "              ,;;;:;;;;;;;;;;;;;;;;,,,,,:;;   ;;;;:,,,,,;;;         :,,,,,,...................................,,,:  \n" +
        "             ;;;;;;;;;;;;;;;;;;;;;;,,,,:;;     ;;;;;,,,,:;;`         :,,,,,,..................................,,,:` \n" +
        "           ,;;;;;;;;;;;;;;;;;;;;;;;:,,,;;,      ;;;;;,,::;;;        .,,,,,,,..................................,,,:` \n" +
        "          ;;;;;;;;;;;;;;;,   ;;;;;;::::;;        ;;;;;::::;;,       .,,,,,,,,,................................,,,:  \n" +
        "        ,;;;;;;;;;;;'.       ;;;;;;:::;;`         ;;;;;:::;;;       .,,,,,,,,,...............................,,,,;  \n" +
        "       ;;;;;;;;;,            ;;;;;;:::;;           ,;;;;:::;;,      `:,,,,,,,,,,,............................,,,,;  \n" +
        "     ;;;;;;;.                ;;;;;;::;;             ,;;;;::;;;       :,,,,,,,,,,,,...........................,,,:;  \n" +
        "    ''',`                    ';;;;;:;',              `';;'::;;:      ,:,,,,,,,,,,,...........................,,,::  \n" +
        "                             ';;;'':;'                 ''';:;;'       :,,,,,,,,,,,,.................,,......,,,,:,  \n" +
        "                             '''''';'.                  '''':;''       :,,,,,,,,,,,,............,,,,,,,,....,,,,:.  \n" +
        "                             ''''''''                    ;''''''      `:,,,,,,,,,,,,,,,,.......,,,,,,,,,,,,,,,,,;`  \n" +
        "                             '''''''                      '''''''     `:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:;   \n" +
        "                             '''''''                       ;'''''`     :,,,,,,,,,,,,,,,,,,,,,,,,,,:,,,,,,,,,,,::.   \n" +
        "                             ''''''                         ;'''''     ::,,,,,,,,,,,,,,,,,,,,,::,;;::,,,,,,,::;'    \n" +
        "                             ''''',                          :''''.     ,:::,,,,,,,,,,,,,,,:::,   .;;;:::::::,.     \n" +
        "                             '''''                            ,''''       ,:;::::::::::::;;,`                       \n" +
        "                             ''''`                             `''':                                                \n" +
        "                             ''''                                '''                                                \n" +
        "                             '''                                  '';                                               \n" +
        "                             '';                                   ''                                               \n" +
        "                             ''                                     ':                                              \n" +
        "                             ;`                                      ;                                              \n" +
        "                                                                      `                                             \n";


    var commands = {};

    var addCommand = function(opts) {
        if(!opts.name) {
            console.warn("Command has no name", opts);
        }

        if(!opts.fn) {
            console.warn("Command has no fn", opts);
        }

        if(!opts.man) {
            console.warn("Command has no man page", opts);
        }

        commands[opts.name] = opts;
    };

    $("#home").terminal(function(command, term) {
        if (command !== "") {
            try {
                var result = run(command, term);
                if (result !== undefined) {
                    term.echo(result.toString());
                }
            } catch(e) {
                console.error(e);
                term.error("Internal error.");
            }
        } else {
           term.echo("Enter a command.");
        }
    }, {
        greetings: "[[;green;black;ascii-logo]" + ASCII_LOGO + "]",
        height: window.innerHeight - 40,
        prompt: function(callback) {
            callback((window.USER_IP || 'anonymous') + "@flashpoint.house:~$ ");
        }
    });


    var run = function(input, term) {
        var parts = input.split(/\s+/);
        var commandName = parts[0];
        var args = parts.slice(1);
        var rawArgs = input.slice(commandName.length + 1);

        var command = commands[commandName];

        if(command) {
            return command.fn(args, rawArgs, term);
        }
        else {
            return "No such command: " + commandName;
        }
    };


    addCommand({
        name: "help",
        man: "Prints a list of available commands.",
        fn: function() {
            return "Available Commands:\n" +
                _(commands).filter(function(command) {
                    return !command.hidden;
                }).pluck("name").join("\n");
        }
    });

    addCommand({
        name: "man",
        man: "Usage: man COMMAND\n\nPrints help for a specific command",
        fn: function(args) {
            var command = commands[args[0]];

            if(command) {
                return command.man || ("No man page for " + args[0]);
            }
            else {
                return "No such command: " + args[0];
            }
        }
    });

    addCommand({
        name: "echo",
        man: "Usage: echo ARGS\n\nPrints out ARGS",
        fn: function(args, rawArgs) {
            return rawArgs;
        }
    });

    addCommand({
        name: "whois",
        man: "Usage: whois DOMAIN\n\nShows WHOIS information for the domain.",
        fn: function(args, rawArgs) {
            var domain = args[0];

            if(domain === "flashpoint.house") {
                return "" +
                    "Domain Name: flashpoint.house \n" +
                    "Domain ID: a6214764249b4052b1efdf935ed00efe-D \n" +
                    "WHOIS Server: http://www.enom.com \n" +
                    "Referral URL: http://www.enom.com \n" +
                    "Updated Date: 2015-08-27T22:12:56Z \n" +
                    "Creation Date: 2015-08-22T22:12:52Z \n" +
                    "Registry Expiry Date: 2016-08-22T22:12:52Z \n" +
                    "Sponsoring Registrar: Enom \n" +
                    "Sponsoring Registrar IANA ID: 48 \n" +
                    "Domain Status: clientTransferProhibited https://www.icann.org/epp#clientTransferProhibited \n" +
                    "Registrant ID: b6c12401dc103b5d \n" +
                    "Registrant Name: Ben Weissmann \n" +
                    "Registrant Organization: \n" +
                    "Registrant Street: 13 Webster Ave \n" +
                    "Registrant City: Cambridge \n" +
                    "Registrant State/Province: MA \n" +
                    "Registrant Postal Code: 02141 \n" +
                    "Registrant Country: US \n" +
                    "Registrant Phone: +1.7572772108 \n" +
                    "Registrant Phone Ext: \n" +
                    "Registrant Fax: \n" +
                    "Registrant Fax Ext: \n" +
                    "Registrant Email: contact@flashpoint.house \n" +
                    "Admin ID: 94dbdedd3ad36048 \n" +
                    "Admin Name: Samantha Powers \n" +
                    "Admin Organization: \n" +
                    "Admin Street: 13 Webster Ave \n" +
                    "Admin City: Cambridge \n" +
                    "Admin State/Province: MA \n" +
                    "Admin Postal Code: 02141 \n" +
                    "Admin Country: US \n" +
                    "Admin Phone: +1.7572772108 \n" +
                    "Admin Phone Ext: \n" +
                    "Admin Fax: \n" +
                    "Admin Fax Ext: \n" +
                    "Admin Email: contact@flashpoint.house \n" +
                    "Tech ID: 60bf20a740f41a0c \n" +
                    "Tech Name: Donald Guy \n" +
                    "Tech Organization: \n" +
                    "Tech Street: 13 Webster Ave \n" +
                    "Tech City: Cambridge \n" +
                    "Tech State/Province: MA \n" +
                    "Tech Postal Code: 02141 \n" +
                    "Tech Country: US \n" +
                    "Tech Phone: +1.7572772108 \n" +
                    "Tech Phone Ext: \n" +
                    "Tech Fax: \n" +
                    "Tech Fax Ext: \n" +
                    "Tech Email: contact@flashpoint.house \n" +
                    "Name Server: dns5.registrar-servers.com \n" +
                    "Name Server: dns3.registrar-servers.com \n" +
                    "Name Server: dns2.registrar-servers.com \n" +
                    "Name Server: dns1.registrar-servers.com \n" +
                    "Name Server: dns4.registrar-servers.com \n" +
                    "DNSSEC: unsigned \n" +
                    ">>> Last update of WHOIS database: 2015-08-29T21:26:47Z <<< \n";
            }
            else {
                return "Domain " + domain + " is not in the DNS cache.";
            }
        }
    });

    addCommand({
        name: "clear",
        man: "Clears the terminal.",
        fn: function() {
            // handled by the terminal
        }
    });

    var PHOTON_TOK = rot13("sp011132rqp402s44op6962633srqo054sp3osr4");
    var DEVICE_ID = '39003c000851353531343431';

    var VALID_MODES = ['pulse', 'solid', 'fade', 'bemis', 'rainbow'];
    var VALID_COLORS = ['r', 'g', 'b', 'w'];
    var MIN_SPEED = 10;
    var MAX_SPEED = 5000;

    function parseLightsCommand(args) {
        var mode, color, speed;

        function validateColor(color) {
            return VALID_COLORS.indexOf(color) >= 0;
        }

        function validateSpeed(speed) {
            var speedNum = parseInt(speed);
            return (speedNum >= MIN_SPEED) && (speedNum <= MAX_SPEED);
        }

        if (!args[0]) {
            return { error: 'Please pass a command' };
        }

        switch (args[0]) {
        case 'off':
            return { mode: 'solid', color: 'k', speed: 50 };
        case 'on':
            return { mode: 'solid', color: 'w', speed: 50 };
        case 'bemis':
            return { mode: 'solid', color: 'r', speed: 50 };
        case 'pulse':
            var color = args[1];
            var speed = args[2];
            if (!color) {
                return { error: 'You must specify a color' };
            }

            if (!validateColor(color)) {
                return { error: 'Invalid color: ' + color };
            }

            if (speed && !validateSpeed(speed)) {
                return { error: 'Invalid speed: ' + speed };
            }

            return { mode: 'pulse', color: color, speed: speed || '50' };
         case 'fade':
            var color = args[1];
            var speed = args[2];
            if (!color) {
                return { error: 'You must specify a color' };
            }

            if (!validateColor(color)) {
                return { error: 'Invalid color: ' + color };
            }

            if (speed && !validateSpeed(speed)) {
                return { error: 'Invalid speed: ' + speed };
            }

            return { mode: 'pulse', color: color, speed: speed || '1000' };
         case 'solid':
            var color = args[1];
            if (!color) {
                return { error: 'You must specify a color' };
            }

            if (!validateColor(color)) {
                return { error: 'Invalid color: ' + color };
            }

            return { mode: 'solid', color: color, speed: '50' };
         case 'rainbow':
            var speed = args[1];
            if (speed && !validateSpeed(speed)) {
                return { error: 'Invalid speed: ' + speed };
            }

            return { mode: 'rainbow', color: 'r', speed: speed || '50' };
        }

        return { error: 'Invalid command: ' + args[0] }
    }

    function callParticleFunction(name, arg) {
        console.log('Sending lights command', name, 'with arg', arg);

        return fetch('https://api.particle.io/v1/devices/' + DEVICE_ID + '/' + name, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "access_token="+PHOTON_TOK+"&arg="+encodeURIComponent(arg),
        }).then(r => r.json())

        return Promise.resolve();
    }

    addCommand({
        name: "lights",
        man: "Controls the lights.\n" +
            "lights off: turn lights off\n" +
            "lights on: turn lights on solid white\n" +
            "lights bemis: turn lights solid red\n" +
            "lights pulse <color> <speed, default 50>: pulse the given color\n" +
            "lights fade <color> <speed, default 1000>: fade the given color\n" +
            "lights solid <color>: turn the lights on the given color\n" +
            "lights rainbow <speed, default 50>: rainbows!\n" +
            "\n" +
            "valid speeds: 10 - 5000\n" +
            "valid colors: r, g, b, w",
        fn: function(args, rawArgs, term) {
            var parsedCommand = parseLightsCommand(args);

            if (parsedCommand.error) {
                term.error(parsedCommand.error);
                return "";
            }

            term.pause()
            term.echo("Sending light command...")
            callParticleFunction('setMode', parsedCommand.mode)
                .then(() => callParticleFunction('setColor', parsedCommand.color))
                .then(() => callParticleFunction('setSpeed', parsedCommand.speed))
                .then(() => {
                    term.echo("Success!");
                    term.resume();
                }).catch(e => {
                    console.error(e);
                    term.echo("Failed :(")
                    term.resume();
                });
        }
    })

    function rot13(s) {
      return s.replace(/[A-Za-z]/g, function (c) {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(
               "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(c)
        );
      });
    }

    // stupid obfuscation to (maybe?) keep out spambots...
    // good thing slack tokens are revokable
    var SLACK_URL = rot13("uggcf://ubbxf.fynpx.pbz/freivprf/G08SQU6GI/O09F099AJ/TC3aj1odE5SnRUrOOVpylXQz");

    addCommand({
        name: "slack",
        man: "Usage: slack MESSAGE\n\nSends a message to the Flashpoint Slack",
        fn: function(args, rawArgs) {
            $.post(SLACK_URL, {
                payload: JSON.stringify({
                    text: rawArgs,
                    username: window.USER_IP + "@flashpoint.house"
                })
            });
        }
    });

    addCommand({
        name: "whoami",
        man: "Print the name of the current user",
        fn: function() {
            return window.USER_IP;
        }
    });

})();



