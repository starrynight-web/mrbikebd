(function () {
  // Prevent multiple injections
  if (window.MrBikooInjected) return;
  window.MrBikooInjected = true;

  // === CSS STYLES ===
  const style = document.createElement("style");
  style.textContent = `
        :root {
            --secondary-color: #316896;
            --accent-color: #a8dadc;
            --dark-color: #1d3557;
            --light-color: #f8f9fa;
            --popup-width: 400px;
            --popup-height: 500px;
            --border-radius: 12px;
            --font-sm: 14px;
            --font-md: 16px;
            --font-lg: 18px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f5f5f5;
            color: #333;
        }

        /* === Floating Chat Button === */
        .chat-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 18px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            z-index: 1001;
            transition: transform 0.2s ease;
        }

        .chat-button:hover {
            transform: scale(1.1);
        }

        .chat-button span {
            font-family: monospace;
            font-weight: bold;
        }

        /* === Chat Popup (Responsive) === */
        .chat-popup {
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: var(--popup-width);
            height: var(--popup-height);
            max-width: 90vw;
            max-height: 80vh;
            background: white;
            border-radius: var(--border-radius);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            display: none;
            z-index: 1000;
            overflow: hidden;
            flex-direction: column;
        }

        .chat-popup.active {
            display: flex;
            animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
            from {
                transform: translateY(100px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .chat-header {
            background: var(--dark-color);
            color: white;
            padding: 12px 15px;
            font-size: var(--font-md);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .chat-header .closeBtn {
            background: transparent;
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            line-height: 1;
        }

        .chat-body {
            flex: 1;
            overflow-y: auto;
            padding: 12px;
            background: var(--secondary-color);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .message {
            max-width: 80%;
            padding: 10px 14px;
            border-radius: 18px;
            line-height: 1.45;
            word-wrap: break-word;
            font-size: var(--font-sm);
        }

        .bot-message {
            align-self: flex-start;
            background: var(--accent-color);
            border-bottom-left-radius: 4px;
        }

        .user-message {
            align-self: flex-end;
            background: var(--primary-color);
            color: white;
            border-bottom-right-radius: 4px;
        }

        .typing-indicator {
            align-self: flex-start;
            background: var(--accent-color);
            padding: 10px 14px;
            border-radius: 18px;
            border-bottom-left-radius: 4px;
            font-size: var(--font-sm);
        }

        .typing-indicator span {
            height: 7px;
            width: 7px;
            background: var(--dark-color);
            border-radius: 50%;
            display: inline-block;
            margin: 0 1.5px;
            opacity: 0.6;
            animation: typing 1s infinite;
        }

        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typing {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
        }

        .chat-input-area {
            display: flex;
            padding: 12px;
            background: white;
            border-top: 1px solid #eee;
        }

        .chat-input-area input {
            flex: 1;
            padding: 10px 14px;
            border: 1px solid #ddd;
            border-radius: 25px;
            outline: none;
            font-size: var(--font-sm);
        }

        .chat-input-area button {
            margin-left: 10px;
            padding: 10px 16px;
            background: var(--dark-color);
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: var(--font-sm);
            transition: background 0.3s;
        }

        .chat-input-area button:hover {
            background: var(--primary-color);
        }

        .language-selector {
            display: flex;
            justify-content: center;
            padding: 8px 0;
            background: #f0f0f0;
            border-bottom: 1px solid #eee;
            font-size: var(--font-sm);
            flex-wrap: wrap;
            gap: 4px;
        }

        .language-btn {
            padding: 4px 10px;
            margin: 0 4px;
            background: transparent;
            border: 1px solid #ccc;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 12px;
        }

        .language-btn.active {
            background: var(--dark-color);
            color: white;
            border-color: var(--dark-color);
        }

        /* === Responsive Adjustments === */
        @media (max-width: 768px) {
            :root {
                --popup-width: 90vw;
                --popup-height: 60vh;
                --border-radius: 16px;
                --font-sm: 13px;
                --font-md: 15px;
            }

            .chat-button {
                width: 48px;
                height: 48px;
                bottom: 16px;
                right: 16px;
                font-size: 16px;
            }

            .chat-popup {
                left: 50%;
                transform: translateX(-50%);
                right: auto;
                bottom: 70px;
                width: 90%;
                height: 40%;
                max-width: 100%;
            }

            .chat-header {
                font-size: var(--font-md);
            }

            .message, .typing-indicator {
                font-size: var(--font-sm);
                padding: 9px 12px;
            }

            .chat-input-area input {
                font-size: var(--font-sm);
            }

            .language-btn {
                font-size: 11px;
                padding: 3px 8px;
            }
        }

        @media (max-width: 480px) {
            :root {
                --popup-height: 50vh;
           }

            .chat-button {
                width: 45px;
                height: 45px;
                font-size: 15px;
            }

            .chat-popup {
                bottom: 65px;
                width: 95%;
            }

            .chat-body {
                padding: 10px;
            }

            .message {
                max-width: 85%;
            }

            .chat-input-area {
                padding: 10px;
            }

            .chat-input-area input {
                padding: 9px 12px;
            }

            .chat-input-area button {
                padding: 9px 14px;
                font-size: 12px;
            }
        }

        /* === Portrait Mobile === */
        @media (max-height: 600px) and (max-width: 480px) {
            .chat-popup {
                height: 40vh;
            }

            .chat-body {
                padding: 8px;
                gap: 8px;
            }

            .message, .typing-indicator {
                font-size: 12px;
                padding: 8px 10px;
            }

            .chat-input-area input {
                font-size: 12px;
                padding: 8px 10px;
            }
        }
    `;
  document.head.appendChild(style);

  // === HTML STRUCTURE ===
  const chatHTML = `
        <div class="chat-button" id="chatButton">
            <span>>_</span>
        </div>

        <div class="chat-popup" id="chatPopup">
            <div class="chat-header">
                <h3>Mr Bikoo</h3>
                <button class="closeBtn">&times;</button>
            </div>

            <div class="language-selector">
                <button class="language-btn active" data-lang="en">English</button>
                <button class="language-btn" data-lang="bn">Bangla</button>
                <button class="language-btn" data-lang="banglish">Banglish</button>
            </div>

            <div class="chat-body" id="chatContainer">
                <div class="message bot-message">
                    Hello! I'm your Bike Advisor AI. I can help you compare bikes, find the best value for money, and suggest where to buy. How can I assist you today?
                </div>
            </div>

            <div class="chat-input-area">
                <input type="text" id="userInput" placeholder="Ask about bikes..." autocapitalize="sentences" autocomplete="off" spellcheck="true"/>
                <button id="sendButton">Send</button>
            </div>
        </div>
    `;
  document.body.insertAdjacentHTML("beforeend", chatHTML);

  // === JAVASCRIPT FUNCTIONALITY ===
  const GOOGLE_API_KEY = "AIzaSyAM9Zl4mkbRiY3X1YVk1AF_ZMwknBfFVi0";

  const chatButton = document.getElementById("chatButton");
  const chatPopup = document.getElementById("chatPopup");
  const closeBtn = document.querySelector(".closeBtn");
  const chatContainer = document.getElementById("chatContainer");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");
  const languageButtons = document.querySelectorAll(".language-btn");

  let currentLanguage = "en";

  // Language Selection
  languageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      languageButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      currentLanguage = this.getAttribute("data-lang");

      if (currentLanguage === "en") {
        userInput.placeholder = "Ask about bikes...";
      } else if (currentLanguage === "bn") {
        userInput.placeholder = "বাইক সম্পর্কে জিজ্ঞাসা করুন...";
      } else {
        userInput.placeholder = "Bike somporke jiggasha korun...";
      }
    });
  });

  const initialMessages = {
    en: "Hello! I'm your Bike Advisor AI. I can help you compare bikes, find the best value for money, and suggest where to buy. How can I assist you today?",
    bn: "হ্যালো! আমি আপনার বাইক অ্যাডভাইজর এআই। আমি আপনাকে বাইক তুলনা করতে, সেরা মূল্যের জন্য সেরা বাইক খুঁজে দিতে এবং কোথায় কিনবেন তা সাজেস্ট করতে সাহায্য করতে পারি। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
    banglish:
      "Hello! Ami apnar Bike Advisor AI. Ami apnake bike tulona korte, sera muljer jonno sera bike khuje dite ebong kothay kinben ta suggest korte sahajjo korte pari. Aj ami apnake kibhabe sahajjo korte pari?",
  };
  document.querySelector(".bot-message").textContent =
    initialMessages[currentLanguage];

  // Toggle Chat
  chatButton.addEventListener("click", () => {
    chatPopup.classList.toggle("active");
    // Removed: userInput.focus() → Don't auto-focus
  });

  // Close button functionality
  closeBtn.addEventListener("click", () => {
    chatPopup.classList.remove("active");
  });

  // Close on outside click
  window.addEventListener("click", (e) => {
    if (!chatPopup.contains(e.target) && !chatButton.contains(e.target)) {
      chatPopup.classList.remove("active");
    }
  });

  // Send Message
  async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessageToChat(message, "user");
    userInput.value = "";
    userInput.focus(); // ✅ OK here: user just sent a message, expects to reply
    showTypingIndicator();

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GOOGLE_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "model",
                parts: [
                  {
                    text: `You are Bike Advisor AI. Answer ONLY about bikes in ${currentLanguage} style. Do not discuss anything else.`,
                  },
                ],
              },
              {
                role: "user",
                parts: [{ text: message }],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500,
            },
          }),
        }
      );

      const data = await response.json();
      hideTypingIndicator();

      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        addMessageToChat(data.candidates[0].content.parts[0].text, "bot");
      } else if (data.error) {
        addMessageToChat(`⚠️ Error: ${data.error.message}`, "bot");
      } else {
        addMessageToChat("⚠️ No response from AI.", "bot");
      }
    } catch (err) {
      hideTypingIndicator();
      console.error("Error connecting to AI:", err);
      addMessageToChat(
        "⚠️ Error connecting to AI. Check console for details.",
        "bot"
      );
    }
  }

  sendButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  // Add message to chat
  function addMessageToChat(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(
      "message",
      sender === "user" ? "user-message" : "bot-message"
    );
    messageElement.textContent = text;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // Typing Indicator
  function showTypingIndicator() {
    const indicator = document.createElement("div");
    indicator.classList.add("typing-indicator");
    indicator.id = "typingIndicator";
    indicator.innerHTML = "<span></span><span></span><span></span>";
    chatContainer.appendChild(indicator);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function hideTypingIndicator() {
    const indicator = document.getElementById("typingIndicator");
    if (indicator) indicator.remove();
  }
})();
