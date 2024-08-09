import TerminalUser from "./linux-user";

export default function Terminal() {
    return (
        <div className="terminal-container">
            <div className="terminal-header">
                <div className="terminal-button"></div>
                <div className="terminal-button"></div>
                <div className="terminal-button"></div>
            </div>
            <div className="terminal-body">
                <TerminalUser />
            </div>
        </div>
    );
}
