document.addEventListener("DOMContentLoaded", function () {
    var chatboxIcon = document.getElementById("chatbox-icon");
    var chatboxContent = document.getElementById("chatbox-content");
    var chatboxBody = chatboxContent.querySelector(".chatbox-body");
    var closeButton = chatboxContent.querySelector("#close-button");

    chatboxIcon.addEventListener("click", function () {
        chatboxContent.style.display = "block";
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    });

    closeButton.addEventListener("click", function () {
        chatboxContent.style.display = "none";
    });

    document
        .getElementById("send-button")
        .addEventListener("click", function () {
            var userInput =
                document.getElementById("user-input").value;
            if (userInput.trim() !== "") {
                sendMessage(userInput);
                document.getElementById("user-input").value = "";
            }
        });

    function sendMessage(message) {
        chatboxBody.innerHTML +=
            '<p class="user-message">' + message + "</p>";
        chatboxBody.scrollTop = chatboxBody.scrollHeight;

        const lowercaseMessage = message.toLowerCase();
        const foundTerm = paymentTerms.find(term => lowercaseMessage.includes(term.toLowerCase()));

        if (foundTerm) {
            askOpenAI(message);
        }
    }

    function askOpenAI(question) {
        var xhr = new XMLHttpRequest();
        xhr.open(
            "POST",
            "https://api.openai.com/v1/engines/text-davinci-003/completions"
        );
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader(
            "Authorization",
            "Bearer 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"
        ); // Replace YOUR_API_KEY with your actual API key

        xhr.onload = function () {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.choices[0].text) {
                    chatboxBody.innerHTML +=
                        "<p class=\"response-message\"> " +
                        response.choices[0].text +
                        "</p>";
                } else {
                    chatboxBody.innerHTML +=
                        "<p class=\"response-message\"> Sorry, I couldn't find the answer to your question.</p>";
                }
                chatboxBody.scrollTop = chatboxBody.scrollHeight;
            } else {
                chatboxBody.innerHTML +=
                    "<p class=\"response-message\"> Sorry, Out of Context.</p>";
                chatboxBody.scrollTop = chatboxBody.scrollHeight;
            }
        };

        xhr.onerror = function () {
            chatboxBody.innerHTML +=
                "<p class=\"response-message\"> Sorry, Out of Context.</p>";
            chatboxBody.scrollTop = chatboxBody.scrollHeight;
        };

        var requestBody = JSON.stringify({
            prompt:
                "Be straight to the point to answer the following question and answer in atmax 3 sentences and answer every question in the context of payments only. \n\n Question: " +
                question +
                "? Answer: ",
            max_tokens: 100,
            temperature: 0.6,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        xhr.send(requestBody);
    }
});