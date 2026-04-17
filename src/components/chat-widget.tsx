'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { Send, Bot, X, Minimize2, Maximize2, Trash2, Sparkles, Dog, Cat, Heart, Stethoscope, BookOpen, HelpCircle, Lightbulb } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// 快捷问题建议
const quickQuestions = [
  { icon: Dog, text: '柴犬好养吗？', category: '品种' },
  { icon: Cat, text: '猫咪为什么掉毛？', category: '护理' },
  { icon: Stethoscope, text: '狗狗呕吐怎么办？', category: '健康' },
  { icon: Heart, text: '如何让宠物更亲近我？', category: '训练' },
  { icon: BookOpen, text: '猫在古埃及的地位？', category: '文化' },
  { icon: Lightbulb, text: '新手养宠建议', category: '入门' },
];

// 简单的Markdown渲染组件
function MarkdownText({ content }: { content: string }) {
  const renderContent = useMemo(() => {
    let text = content;
    
    // 处理加粗
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // 处理标题
    text = text.replace(/^### (.*$)/gm, '<h4 class="font-semibold text-base mt-2 mb-1">$1</h4>');
    text = text.replace(/^## (.*$)/gm, '<h3 class="font-bold text-lg mt-3 mb-2">$1</h3>');
    
    // 处理列表项
    text = text.replace(/^- (.*$)/gm, '<li class="ml-4">• $1</li>');
    text = text.replace(/^> (.*$)/gm, '<blockquote class="border-l-2 border-primary/30 pl-3 my-2 text-muted-foreground">$1</blockquote>');
    
    // 处理表情符号标题
    text = text.replace(/^([\u{1F300}-\u{1F9FF}]+)\s+(.*$)/gmu, '<span class="text-lg">$1</span> <strong>$2</strong>');
    
    return text;
  }, [content]);

  return (
    <div 
      className="text-sm whitespace-pre-wrap break-words prose prose-sm max-w-none"
      dangerouslySetInnerHTML={{ __html: renderContent }}
    />
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '你好呀！我是小语，猫狗物语的智能助手 🐾\n\n我可以帮你解答关于：\n• 猫狗品种选择与特点\n• 宠物日常护理与健康\n• 行为训练技巧\n• 宠物文化与趣闻\n\n有什么想问的吗？点击下方快捷问题，或者直接输入你的问题~',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 清空对话
  const clearMessages = () => {
    setMessages([
      {
        role: 'assistant',
        content: '对话已清空！有新的问题随时问我哦~ 😊',
        timestamp: new Date(),
      },
    ]);
    setShowSuggestions(true);
  };

  // 发送快捷问题
  const sendQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text || isLoading) return;

    setInputValue('');
    setShowSuggestions(false);
    setMessages((prev) => [...prev, { role: 'user', content: text, timestamp: new Date() }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.map(({ role, content }) => ({ role, content })),
          userMessage: text,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      if (reader) {
        setMessages((prev) => [...prev, { role: 'assistant', content: '', timestamp: new Date() }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;

              try {
                const parsed = JSON.parse(data);
                if (parsed.content) {
                  assistantContent += parsed.content;
                  setMessages((prev) => {
                    const updated = [...prev];
                    const lastMessage = updated[updated.length - 1];
                    if (lastMessage.role === 'assistant') {
                      lastMessage.content = assistantContent;
                    }
                    return updated;
                  });
                }
              } catch {
                // Ignore parsing errors
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { 
          role: 'assistant', 
          content: '抱歉，我遇到了一些问题 😅 请稍后再试，或者换个方式提问~', 
          timestamp: new Date() 
        },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Button - 显示未读消息提示 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="relative">
            {/* 脉冲动画 */}
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
            <div className="relative p-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
              <Bot className="h-6 w-6" />
            </div>
            {/* 提示标签 */}
            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full animate-bounce">
              AI
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 bg-card border shadow-2xl rounded-2xl transition-all duration-300 flex flex-col ${
            isMinimized ? 'w-72 h-16' : 'w-[420px] h-[650px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">小语 · AI助手</h3>
                <p className="text-xs text-white/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                  在线解答中
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={clearMessages}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors group"
                title="清空对话"
              >
                <Trash2 className="h-4 w-4 text-white/70 group-hover:text-white" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                {isMinimized ? (
                  <Maximize2 className="h-4 w-4 text-white" />
                ) : (
                  <Minimize2 className="h-4 w-4 text-white" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    {/* 头像 */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === 'user' 
                        ? 'bg-primary/10' 
                        : 'bg-gradient-to-br from-amber-100 to-orange-100'
                    }`}>
                      {message.role === 'user' ? (
                        <span className="text-sm">👤</span>
                      ) : (
                        <span className="text-sm">🐾</span>
                      )}
                    </div>
                    {/* 消息内容 */}
                    <div>
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground rounded-tr-md'
                            : 'bg-muted rounded-tl-md'
                        }`}
                      >
                        {message.role === 'assistant' ? (
                          <MarkdownText content={message.content} />
                        ) : (
                          <p className="text-sm whitespace-pre-wrap break-words">
                            {message.content}
                          </p>
                        )}
                      </div>
                      {/* 时间戳 */}
                      <p className={`text-[10px] text-muted-foreground mt-1 ${
                        message.role === 'user' ? 'text-right' : 'text-left'
                      }`}>
                        {message.timestamp.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* 加载动画 */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                      <span className="text-sm">🐾</span>
                    </div>
                    <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* 快捷问题建议 */}
          {!isMinimized && showSuggestions && messages.length <= 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <HelpCircle className="w-3 h-3" />
                试试这些问题
              </p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.slice(0, 4).map((q, index) => (
                  <button
                    key={index}
                    onClick={() => sendQuickQuestion(q.text)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 hover:bg-muted rounded-full text-xs transition-colors border border-transparent hover:border-primary/20"
                  >
                    <q.icon className="w-3 h-3 text-primary" />
                    {q.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          {!isMinimized && (
            <form onSubmit={handleSubmit} className="p-4 border-t bg-muted/30">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="问问小语关于宠物的问题..."
                  className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
}
