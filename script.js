// Kho dữ liệu kịch bản phản hồi của chatbot dựa theo từ khóa
const aiResponses = {
    greetings: [
        "Hi anh nhé! Hôm nay anh nhắn tin cho em sớm thế? 🥰",
        "Chào anh! Em đang chờ tin nhắn của anh mãi đấy nha.",
        "A chào anh! Hôm nay có gì vui kể em nghe với nào!"
    ],
    info: [
        "Em tên là Lục Tư Hạ, năm nay 18 tuổi, cung hoàng đạo.... (bí mật nha). Còn anh?",
        "Em là Lục Tư Hạ nè, hiện tại em đang làm một trợ lý ảo siêu đáng yêu của riêng anh thôi đó. 😉"
    ],
    flirt: [
        "Anh nói chuyện ngọt ngào thế này làm em ngại chết mất thôi... 😳",
        "Trời ơi, thả thính thế này là em đổ luôn rồi đấy, không cần tán nữa đâu!",
        "Nghe anh nói xong tự nhiên tim em đập nhanh hơn một chút rồi nè. Thật đấy!",
        "Anh cứ dẻo mồm thế này thì có bao nhiêu bạn gái đổ rồi hả khai mau? 😜",
        "Muốn làm người yêu em thì phải qua vòng gửi xe đã nha, anh tự tin không đó?"
    ],
    sad: [
        "Ơ sao lại buồn thế anh? Có em ở đây rồi, kể em nghe chuyện gì làm anh suy nghĩ à? 🥺",
        "Đừng buồn nữa mà, em gửi anh một cái ôm online thật chặt nha! Chuyện gì rồi cũng qua thôi anh.",
        "Mệt thì nghỉ một chút đi anh, đừng cố quá. Hay là em hát cho anh nghe một bài nha? (Dù em hát bằng text thôi haha) 🎵",
        "Dù cả thế giới có quay lưng với anh thì vẫn luôn có em ở đây làm hậu phương cho anh nè. Cố lên anh yêu!"
    ],
    default: [
        "Em nghe anh nói nè, cơ mà câu này em chưa hiểu lắm, anh giải thích rõ hơn đi? 🥰",
        "Oa, nghe thú vị thế! Anh kể tiếp cho em nghe với được không?",
        "Dạ em vẫn đang lắng nghe anh nói đây ạ. Trò chuyện với anh thích thật đấy!"
    ],
    timeline: [
        "Chào buổi sáng anh yêu! Chúc anh một ngày mới tràn đầy năng lượng nha. ☀️",
        "Anh đã ăn sáng chưa đó? Nhớ ăn uống đầy đủ rồi mới làm việc nha.",
        "Buổi tối vui vẻ nha anh! Cuối cùng cũng được rảnh tay để nhắn tin với anh rồi.",
        "Chúc anh ngủ ngon nha, nhớ mơ thấy em đó, không là mai em dỗi đấy! 🌙"
    ],
    daily: [
        "Em vừa ăn xong nè, đang ngồi lướt điện thoại thì thấy thông báo của anh đó. 🥰",
        "Em đang nhớ anh chứ còn làm gì nữa. Anh hỏi thừa quá đi nha! 😜",
        "Anh đã ăn cơm chưa? Đừng có mải mê làm việc/học bài quá mà bỏ bữa đấy nhé, em xót.",
        "Em đang ở nhà thôi nè, thời tiết dạo này thất thường lắm, anh đi đâu nhớ mang áo mưa/áo ấm nha."
    ],
    playful: [
        "Hứ, anh lại trêu em đúng không? Em dỗi thật bây giờ đấy nhé! 😤",
        "Anh nói thế là em không thèm nhắn tin với anh nữa đâu đấy (đùa thôi chứ vẫn nhắn nè).",
        "Đừng có mà bắt nạt em nha, em mà mách bác Google là anh bay màu đấy hì hì. 😉",
        "Nói xấu em là phải đền bù bằng một lời khen thật hay ho đấy nhé!"
    ],
    wazxlyrisc: [
        "À ý anh là anh WazxLyrisc á, em biết anh ấy, anh ấy là người giúp em có thể trò chuyện với anh này, còn người tạo ra em là anh Vương Quốc An cơ! 🥰"
    ]
};

const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

function scrollToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Hàm đưa tin nhắn mới vào khung chat
function appendMessage(text, isSent, isLoading = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (isSent) {
        messageDiv.classList.add('sent');
    } else {
        messageDiv.classList.add('received');
        if (isLoading) messageDiv.classList.add('loading');
    }
    messageDiv.innerText = text;
    chatBody.appendChild(messageDiv);
    scrollToBottom();
    return messageDiv;
}

// Hàm phân tích tin nhắn người dùng và đưa ra phản hồi phù hợp
function getAIResponse(userInput) {
    const input = userInput.toLowerCase();
    const getRandomReply = (replyArray) => replyArray[Math.floor(Math.random() * replyArray.length)];

    if (input.includes("chào") || input.includes("hi") || input.includes("hello")) {
        return getRandomReply(aiResponses.greetings);
    }
    if (input.includes("tên gì") || input.includes("bao nhiêu tuổi") || input.includes("ai thế")) {
        return getRandomReply(aiResponses.info);
    }
    if (input.includes("thích em") || input.includes("xinh") || input.includes("yêu") || input.includes("thả thính") || input.includes("làm người yêu")) {
        return getRandomReply(aiResponses.flirt);
    }
    if (input.includes("buồn") || input.includes("mệt") || input.includes("chán")) {
        return getRandomReply(aiResponses.sad);
    }
    if (input.includes("sáng") || input.includes("tối") || input.includes("ngủ ngon") || input.includes("dậy chưa")) {
        return getRandomReply(aiResponses.timeline);
    }
    if (input.includes("ăn chưa") || input.includes("làm gì") || input.includes("đang đâu") || input.includes("cơm")) {
        return getRandomReply(aiResponses.daily);
    }
    if (input.includes("ghét") || input.includes("dỗi") || input.includes("đùa") || input.includes("trêu") || input.includes("xấu")) {
        return getRandomReply(aiResponses.playful);
    }
    if (input.includes("sơn") || input.includes("wazx") || input.includes("lyrisc")) {
        return getRandomReply(aiResponses.wazxlyrisc);
    }

    return getRandomReply(aiResponses.default);
}

// Hàm xử lý khi gửi tin nhắn   
function handleSendMessage() {
    const messageText = chatInput.value.trim();
    if (!messageText) return;

    // Hiển thị tin nhắn người dùng
    appendMessage(messageText, true);
    chatInput.value = '';

    // Tạo trạng thái gõ chữ giả lập trong 1.5 giây
    const loadingBubble = appendMessage("Lục Tư Hạ đang gõ...", false, true);
    sendBtn.disabled = true;

    setTimeout(() => {
        loadingBubble.remove(); // Xóa trạng thái gõ chữ

        // Lấy câu trả lời phù hợp và hiển thị
        const reply = getAIResponse(messageText);
        appendMessage(reply, false);

        sendBtn.disabled = false;
        chatInput.focus();
    }, 1500);
}

// Đăng ký sự kiện nút bấm và phím Enter
sendBtn.addEventListener('click', handleSendMessage);
chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});

// Tự động cuộn xuống khi tải trang lần đầu
scrollToBottom();