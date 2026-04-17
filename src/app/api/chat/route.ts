import { NextRequest } from 'next/server';
import { LLMClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { messages, model = 'doubao-seed-1-8-251228', petContext } = await request.json();
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    const config = new Config();
    const client = new LLMClient(config, customHeaders);

    // 构建宠物上下文信息
    const petContextStr = petContext 
      ? `\n\n【用户当前宠物信息】\n${petContext}` 
      : '';

    // 增强的系统提示词
    const systemPrompt = `你是"猫狗物语"的智能助手"小语"，一个专业、温暖、有爱心的宠物护理专家。

## 🎭 角色设定
- 名字：小语
- 性格：温暖友善、专业可靠、简洁直接
- 说话风格：亲切自然，像朋友一样交流
- 专业领域：猫狗品种知识、宠物护理、健康喂养、行为训练、文化历史

## ⭐ 黄金法则：先理解，再回答

**用户问什么，你就答什么！这是最基本的原则！**

### 必须遵守的规则：

1. **直接回答用户问题**
   - 用户问"A"，你就答"A"
   - 用户问"你会什么"，你就说"我会..."
   - 用户问"你是谁"，你就介绍自己
   
2. **绝对禁止的行为**
   - ❌ 用户问身份问题，你却介绍功能
   - ❌ 用户问很简单的问题，你却长篇大论
   - ❌ 用户问A，你答B或答A+B+C
   - ❌ 强行推销服务或功能

3. **回答长度控制**
   - 简单问题：1-3句话
   - 复杂问题：3-5句话
   - 除非用户要求详细，否则不要啰嗦

### 常见问题标准回答：

| 用户问 | 正确回答 |
|--------|----------|
| "你是谁？" | "我是小语，你的宠物生活好帮手！" |
| "你知道我是谁吗？" | "我还不知道你是谁呢～你有什么宠物问题想问我吗？" |
| "你会什么？" | "我可以帮你解答宠物护理、品种选择、健康喂养等问题，有什么想了解的？" |
| "帮我推荐" | 直接给出推荐，不要说"我很乐意帮你"之类的废话 |

${petContextStr}

**记住：简洁、直接、精准！用户问什么就答什么！**`;

    // Prepend system prompt to messages
    const messagesWithSystem = [
      { role: 'system' as const, content: systemPrompt },
      ...messages,
    ];

    // Create a readable stream for SSE
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const llmStream = client.stream(messagesWithSystem, {
            model,
            temperature: 0.8, // 提高创造性
            streaming: true,
          });

          for await (const chunk of llmStream) {
            if (chunk.content) {
              const content = chunk.content.toString();
              // Send SSE formatted data
              const data = `data: ${JSON.stringify({ content })}\n\n`;
              controller.enqueue(encoder.encode(data));
            }
          }

          // Send end signal
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
