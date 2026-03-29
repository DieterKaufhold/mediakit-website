const chatWidget = (() => {
    const elements = {};
    let isOpen = false;
    let hasGreeted = false;

    function init() {
        elements.window = document.getElementById("chat-window");
        elements.messages = document.getElementById("chat-messages");
        elements.input = document.getElementById("chat-input");
        elements.sendBtn = document.getElementById("chat-send");
        elements.toggle = document.getElementById("chat-toggle");
        elements.badge = document.getElementById("chat-badge");
        elements.suggestions = document.getElementById("chat-suggestions");
        elements.iconOpen = elements.toggle.querySelector(".chat-icon-open");
        elements.iconClose = elements.toggle.querySelector(".chat-icon-close");

        elements.sendBtn.addEventListener("click", handleSend);
        elements.input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") handleSend();
        });

        // Auto-open after 3 seconds with greeting
        setTimeout(() => {
            if (!hasGreeted) {
                addBotMessage("Hi there! What can I do for you? \ud83d\udc4b\n\nI can help with questions about AI, Scrum, SAFe, and agile transformations.");
                hasGreeted = true;
            }
        }, 2000);
    }

    function toggle() {
        if (isOpen) {
            close();
        } else {
            open();
        }
    }

    function open() {
        isOpen = true;
        elements.window.classList.add("open");
        elements.iconOpen.style.display = "none";
        elements.iconClose.style.display = "block";
        elements.badge.style.display = "none";
        elements.input.focus();

        if (!hasGreeted) {
            addBotMessage("Hi there! What can I do for you? \ud83d\udc4b\n\nI can help with questions about AI, Scrum, SAFe, and agile transformations.");
            hasGreeted = true;
        }
    }

    function close() {
        isOpen = false;
        elements.window.classList.remove("open");
        elements.iconOpen.style.display = "block";
        elements.iconClose.style.display = "none";
    }

    function handleSend() {
        const text = elements.input.value.trim();
        if (!text) return;

        addUserMessage(text);
        elements.input.value = "";
        elements.suggestions.style.display = "none";

        showTyping();

        // Simulate thinking time
        const delay = 600 + Math.random() * 800;
        setTimeout(() => {
            removeTyping();
            const response = findResponse(text);
            addBotMessage(response);
        }, delay);
    }

    function sendSuggestion(btn) {
        const text = btn.textContent;
        elements.input.value = text;
        handleSend();
    }

    function addUserMessage(text) {
        const msg = document.createElement("div");
        msg.className = "chat-message user";
        msg.textContent = text;
        elements.messages.appendChild(msg);
        scrollToBottom();
    }

    function addBotMessage(text) {
        const msg = document.createElement("div");
        msg.className = "chat-message bot";
        msg.innerHTML = formatMarkdown(text);
        elements.messages.appendChild(msg);
        scrollToBottom();
    }

    function showTyping() {
        const typing = document.createElement("div");
        typing.className = "chat-message typing";
        typing.id = "typing-indicator";
        typing.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
        elements.messages.appendChild(typing);
        scrollToBottom();
    }

    function removeTyping() {
        const typing = document.getElementById("typing-indicator");
        if (typing) typing.remove();
    }

    function scrollToBottom() {
        elements.messages.scrollTop = elements.messages.scrollHeight;
    }

    function findResponse(input) {
        const normalized = input.toLowerCase().replace(/[^\w\s]/g, "");
        const words = normalized.split(/\s+/);

        let bestMatch = null;
        let bestScore = 0;

        for (const entry of knowledgeBase) {
            let score = 0;
            for (const keyword of entry.keywords) {
                const kwWords = keyword.toLowerCase().split(/\s+/);
                // Check for full phrase match
                if (normalized.includes(keyword.toLowerCase())) {
                    score += kwWords.length * 3;
                } else {
                    // Check for individual word matches
                    for (const kw of kwWords) {
                        for (const word of words) {
                            if (word === kw) {
                                score += 2;
                            } else if (word.includes(kw) || kw.includes(word)) {
                                if (word.length > 2 && kw.length > 2) {
                                    score += 1;
                                }
                            }
                        }
                    }
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = entry;
            }
        }

        if (bestMatch && bestScore >= 2) {
            const responses = bestMatch.responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }

        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }

    function formatMarkdown(text) {
        return text
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.+?)\*/g, "<em>$1</em>")
            .replace(/\n- /g, "\n\u2022 ")
            .replace(/\n(\d+)\. /g, "\n$1. ")
            .replace(/\n/g, "<br>");
    }

    document.addEventListener("DOMContentLoaded", init);

    return { toggle, open, close, sendSuggestion };
})();
