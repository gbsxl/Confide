package amen.and.Confide.integration;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.ChatOptions;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.stereotype.Service;

@Service
public class OpenAIChatService {

    private final OpenAiChatModel openAiChatModel;

    public OpenAIChatService(OpenAiChatModel openAiChatModel) {
        this.openAiChatModel = openAiChatModel;
    }
    public String getAIChatResponse(String examPrompt) {
        ChatOptions chatOptions = ChatOptions.builder().model("gpt-4o-mini").temperature(0.9).build();
        Prompt prompt = new Prompt(new UserMessage(examPrompt), chatOptions);
        ChatResponse response = openAiChatModel.call(prompt);
        return response.getResult().getOutput().getText();
    }
}

