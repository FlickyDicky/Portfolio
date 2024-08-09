export default function TerminalUser({ command, user="portfolio@ryan-buck-bamford", path="~" }) {
    return (
        <div className="terminal-line">
            <span className="terminal-user">{user}</span>
            <span>:</span>
            <span className="terminal-path">{path}</span>
            <span>$</span>
            {command && <span className="terminal-command"> {command}</span>}
        </div>
    );
}
