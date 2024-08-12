import React, { forwardRef } from "react";

export default forwardRef(function TerminalUser(
    {
        command,
        user = "ryan-buck-bamford",
        path = "~",
        onSubmit,
        active,
    },
    ref
) {
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(ref.current.value);
        ref.current.value = "";
    }

    return (
        <form
            className={active ? "active terminal-line" : "terminal-line"}
            onSubmit={handleSubmit}
        >
            <div className="terminal-index">
                <span className="terminal-user">portfolio@{user}</span>
                <span>:</span>
                <span className="terminal-path">{path}</span>
                <span>$</span>
                {command && (
                    <span className="terminal-command"> {command}</span>
                )}
            </div>
            {active && (
                <input type="text" ref={ref} className="terminal-input" />
            )}
        </form>
    );
});
