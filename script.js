const chatWindow = document.getElementById('chatWindow');
const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Botの簡易返信ルール
function getBotReply(message) {
  if (message.includes("写真") || message.includes("動画")) {
    return "カメラアプリを開いてシャッターボタンを押してみましょう。";
  } else if (message.includes("音声")) {
    return "音声入力はマイクのアイコンをタップしてください。";
  } else {
    return "質問ありがとうございます！調べてみますね。";
  }
}

// メッセージ追加関数
function addMessage(text, sender = "user") {
  const bubble = document.createElement('div');
  bubble.className = `speech-bubble ${sender}`;
  bubble.textContent = text;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight; // 自動スクロール
}

// 送信処理
function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  input.value = "";

  // Bot返信（0.5秒後に）
  setTimeout(() => {
    const reply = getBotReply(text);
    addMessage(reply, "bot");
  }, 500);
}

// ボタン押下
sendBtn.addEventListener('click', sendMessage);

// Enterキー対応
input.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
