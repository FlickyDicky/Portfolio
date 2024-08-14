import TerminalUser from "./linux-user";
import { useEffect, useRef, useState } from "react";
import commands from "../JSON/commands.json";
import { useTranslation } from "react-i18next";

export default function Terminal() {
    const { t } = useTranslation();
    const [commandHistory, setCommandHistory] = useState(["about\n" + t("commands.about")]);
    const inputRef = useRef("");
    const [user, setUser] = useState("ryan-buck-bamford");
    const [path, setPath] = useState("~");
    const bottomRef = useRef(null);

    function handleOnClick() {
        inputRef.current.focus();
    }
    function handleSubmitComand(command) {
        let splitCommand = command.split(" ");
        let output = "";
        
        if (commands.list.includes(command)) {
            output = t(`commands.${command}`);
        } else {
            switch (true) {
                case command === "clear":
                    setCommandHistory([]);
                    return;

                case splitCommand[0] === "user" && splitCommand[1] === "-u":
                    if (splitCommand.length < 3 || splitCommand[2] === "") {
                        output = t("commands.user.missingArg");
                    } else {
                        setUser(splitCommand[2]);
                        output = `${t("commands.user.userSet")} ${splitCommand[2]}`;
                    }
                    break;

                case splitCommand[0] === "cd":
                    if (splitCommand[1] === "..") {
                        setPath((p) => p.split("/").slice(0, -1).join("/"));
                    } else if (
                        splitCommand[1] === "~" ||
                        splitCommand.length < 2 ||
                        splitCommand[1] === ""
                    ) {
                        setPath("~");
                    } else if (splitCommand[1] !== ".") {
                        setPath(`~/${splitCommand[1]}`);
                    }
                    break;

                default:
                    command === "" ? null : (output = `'${command}': ${t("commands.notFound")}`);
                    break;
            }
        }
        setCommandHistory((c) => [...c, `${command}\n${output}`]);
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ block: "end" });
    });

    return (
        <div className="terminal-container">
            <div className="terminal-header">
                <p>{t("commands.terminal.name")}</p>
                <div className="terminal-button">
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <div className="terminal-button">
                    <i className="fa-solid fa-angle-up fa-rotate-180"></i>
                </div>
                <div className="terminal-button">
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div className="terminal-body" onClick={handleOnClick}>
                {commandHistory.map((cmd, index) => (
                    <TerminalUser
                        user={user}
                        path={path}
                        key={index}
                        command={cmd}
                    />
                ))}
                <TerminalUser
                    command=""
                    path={path}
                    user={user}
                    ref={inputRef}
                    onSubmit={handleSubmitComand}
                    active={true}
                />
                <div ref={bottomRef}></div>
            </div>
        </div>
    );
}
