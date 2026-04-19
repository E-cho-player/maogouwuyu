export const runtime = 'edge';
import { NextRequest } from 'next/server';

// AI API 配置 - 从环境变量读取
const AI_API_URL = process.env.AI_API_URL || '';
const AI_API_KEY = process.env.AI_API_KEY || '';
const AI_MODEL = process.env.AI_MODEL || 'doubao-seed-1-8-251228';

export async function POST(request: NextRequest) {
  try {
    const { messages, petContext } = await request.json();

    // 构建宠物上下文信息
    const petContextStr = petContext 
      ? `\n\n【用户当前宠物信息】\n${petContext}` 
      : '';

    // 系统提示词
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

    // 构建消息列表
    const messagesWithSystem = [
      { role: 'system' as const, content: systemPrompt },
      ...messages,
    ];

    // 检查是否配置了 AI API
    if (!AI_API_URL || !AI_API_KEY) {
      // 如果没有配置，返回模拟回复
      return getMockResponse(messages[messages.length - 1]?.content || '');
    }

    // 调用 AI API（兼容 OpenAI 格式）
    const response = await fetch(AI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: messagesWithSystem,
        temperature: 0.8,
        stream: true,
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }

    // 返回流式响应
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: '聊天服务暂时不可用，请稍后再试' }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}

// 模拟回复（当没有配置 AI API 时使用）
function getMockResponse(userMessage: string) {
  const lowerMessage = userMessage.toLowerCase();
  
  let reply = '';
  
  if (lowerMessage.includes('你是谁') || lowerMessage.includes('自我介绍')) {
    reply = '我是小语，你的宠物生活好帮手！我可以帮你解答宠物护理、品种选择、健康喂养等问题～';
  } else if (lowerMessage.includes('你会什么') || lowerMessage.includes('能做什么')) {
    reply = '我可以帮你解答：\n1. 猫狗品种知识\n2. 宠物日常护理\n3. 健康喂养建议\n4. 行为训练技巧\n有什么想了解的吗？';
  } else if (lowerMessage.includes('猫') || lowerMessage.includes('狗狗') || lowerMessage.includes('宠物')) {
    reply = '关于宠物的问题我都可以帮你解答！你可以告诉我更具体的情况，比如品种、年龄、遇到的问题等～';
  } else {
    reply = '你好！我是小语，有什么宠物问题想问我吗？';
  }

  // 模拟流式响应
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      const data = `data: ${JSON.stringify({ content: reply })}\n\n`;
      controller.enqueue(encoder.encode(data));
      controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
