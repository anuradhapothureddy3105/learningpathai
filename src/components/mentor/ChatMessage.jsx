import React from "react";

export function ChatMessage({ message, lang }) {
  const isUser = message.role === "user";

  return (
    <div
      className={
        "max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed " +
        (isUser
          ? "self-end text-white rounded-br-md"
          : "self-start bg-white border border-black/5 rounded-bl-md text-[var(--ink)]") +
        (lang === "te" ? " font-te" : "")
      }
      style={isUser ? { background: "var(--teal)" } : {}}
    >
      {message.text}
    </div>
  );
}

export default ChatMessage;
