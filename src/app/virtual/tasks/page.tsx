'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Plus,
  CheckCircle,
  Target,
  Clock,
  Gift,
  Trash2,
  Edit,
  Sparkles,
  Award,
  Calendar,
  X,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

// 任务类型
type TaskType = 'study' | 'work' | 'exercise' | 'pet' | 'other';

// 任务数据类型
interface Task {
  id: string;
  title: string;
  type: TaskType;
  typeLabel: string;
  duration: number; // 分钟
  reward: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string;
}

// 任务类型配置
const taskTypes: Record<TaskType, { label: string; icon: string; color: string }> = {
  study: { label: '学习', icon: '📚', color: 'bg-blue-500/10 text-blue-500' },
  work: { label: '工作', icon: '💼', color: 'bg-purple-500/10 text-purple-500' },
  exercise: { label: '运动', icon: '🏃', color: 'bg-green-500/10 text-green-500' },
  pet: { label: '养宠', icon: '🐾', color: 'bg-orange-500/10 text-orange-500' },
  other: { label: '其他', icon: '✨', color: 'bg-gray-500/10 text-gray-500' },
};

// 奖励选项
const rewardOptions = [
  '获得+5积分',
  '获得+10积分',
  '获得+20积分',
  '解锁新装扮',
  '解锁互动游戏',
  '获得成就勋章',
  '宠物经验+50',
  '宠物经验+100',
];

// 初始任务数据
const initialTasks: Task[] = [
  {
    id: 't1',
    title: '背单词30分钟',
    type: 'study',
    typeLabel: '学习',
    duration: 30,
    reward: '获得+10积分',
    completed: true,
    createdAt: '2025-03-10',
    completedAt: '2025-03-10',
  },
  {
    id: 't2',
    title: '完成工作报告',
    type: 'work',
    typeLabel: '工作',
    duration: 60,
    reward: '获得+20积分',
    completed: false,
    createdAt: '2025-03-10',
  },
  {
    id: 't3',
    title: '带宠物散步20分钟',
    type: 'pet',
    typeLabel: '养宠',
    duration: 20,
    reward: '宠物经验+50',
    completed: false,
    createdAt: '2025-03-10',
  },
  {
    id: 't4',
    title: '晨跑15分钟',
    type: 'exercise',
    typeLabel: '运动',
    duration: 15,
    reward: '获得+5积分',
    completed: true,
    createdAt: '2025-03-10',
    completedAt: '2025-03-10',
  },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // 统计数据
  const completedToday = tasks.filter(t => t.completed).length;
  const totalPoints = tasks.filter(t => t.completed).length * 10;

  // 完成任务
  const toggleComplete = (taskId: string) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
          completedAt: !task.completed ? new Date().toISOString().split('T')[0] : undefined,
        };
      }
      return task;
    }));
  };

  // 删除任务
  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // 创建/编辑任务
  const saveTask = (task: Task) => {
    if (editingTask) {
      setTasks(tasks.map(t => t.id === task.id ? task : t));
    } else {
      setTasks([task, ...tasks]);
    }
    setShowCreateModal(false);
    setEditingTask(null);
  };

  // 打开编辑弹窗
  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setShowCreateModal(true);
  };

  // 打开创建弹窗
  const openCreateModal = () => {
    setEditingTask(null);
    setShowCreateModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10 py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/virtual"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回虚实养宠
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">契约任务系统</h1>
              <p className="text-muted-foreground">创建任务，完成目标，解锁奖励</p>
            </div>
            <button
              onClick={openCreateModal}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Plus className="mr-2 h-5 w-5" />
              创建新任务
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card p-6 rounded-xl border">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <span className="text-sm text-muted-foreground">今日完成</span>
              </div>
              <div className="text-3xl font-bold">{completedToday}</div>
            </div>
            <div className="bg-card p-6 rounded-xl border">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-yellow-500" />
                <span className="text-sm text-muted-foreground">累计积分</span>
              </div>
              <div className="text-3xl font-bold">{totalPoints}</div>
            </div>
            <div className="bg-card p-6 rounded-xl border">
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-8 w-8 text-purple-500" />
                <span className="text-sm text-muted-foreground">待完成</span>
              </div>
              <div className="text-3xl font-bold">{tasks.filter(t => !t.completed).length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">任务列表</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          {tasks.length === 0 ? (
            <div className="text-center py-16 bg-muted/30 rounded-xl border">
              <Target className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">还没有任务，点击上方按钮创建第一个任务吧~</p>
              <button
                onClick={openCreateModal}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                <Plus className="mr-2 h-5 w-5" />
                创建新任务
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* 未完成任务 */}
              {tasks.filter(t => !t.completed).length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    进行中
                  </h3>
                  {tasks.filter(t => !t.completed).map(task => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onToggle={() => toggleComplete(task.id)}
                      onDelete={() => deleteTask(task.id)}
                      onEdit={() => openEditModal(task)}
                    />
                  ))}
                </div>
              )}

              {/* 已完成任务 */}
              {tasks.filter(t => t.completed).length > 0 && (
                <div className="space-y-3 mt-8">
                  <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    已完成
                  </h3>
                  {tasks.filter(t => t.completed).map(task => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onToggle={() => toggleComplete(task.id)}
                      onDelete={() => deleteTask(task.id)}
                      onEdit={() => openEditModal(task)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 创建/编辑任务弹窗 */}
      {showCreateModal && (
        <CreateTaskModal
          task={editingTask}
          onClose={() => {
            setShowCreateModal(false);
            setEditingTask(null);
          }}
          onSave={saveTask}
        />
      )}

      <Footer />
    </div>
  );
}

// 任务卡片组件
function TaskCard({
  task,
  onToggle,
  onDelete,
  onEdit,
}: {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}) {
  const typeConfig = taskTypes[task.type];

  return (
    <div
      className={`flex items-center gap-4 p-5 rounded-xl border bg-card transition-all ${
        task.completed ? 'opacity-60' : 'hover:shadow-md'
      }`}
    >
      {/* 完成按钮 */}
      <button
        onClick={onToggle}
        className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
          task.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-primary hover:bg-primary/10'
        }`}
      >
        {task.completed && <CheckCircle className="h-6 w-6" />}
      </button>

      {/* 任务类型图标 */}
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${typeConfig.color}`}>
        {typeConfig.icon}
      </div>

      {/* 任务内容 */}
      <div className="flex-1 min-w-0">
        <h4 className={`font-semibold mb-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
          {task.title}
        </h4>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {task.duration}分钟
          </span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${typeConfig.color}`}>
            {task.typeLabel}
          </span>
        </div>
      </div>

      {/* 奖励 */}
      <div className="flex-shrink-0 text-right">
        <div className="text-xs text-muted-foreground mb-1">奖励</div>
        <div className="flex items-center gap-1 text-sm font-medium text-primary">
          <Gift className="h-4 w-4" />
          {task.reward}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex-shrink-0 flex items-center gap-1">
        <button
          onClick={onEdit}
          className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-primary"
        >
          <Edit className="h-4 w-4" />
        </button>
        <button
          onClick={onDelete}
          className="p-2 rounded-lg hover:bg-red-50 transition-colors text-muted-foreground hover:text-red-500"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// 创建/编辑任务弹窗
function CreateTaskModal({
  task,
  onClose,
  onSave,
}: {
  task: Task | null;
  onClose: () => void;
  onSave: (task: Task) => void;
}) {
  const [title, setTitle] = useState(task?.title || '');
  const [type, setType] = useState<TaskType>(task?.type || 'study');
  const [duration, setDuration] = useState(task?.duration || 30);
  const [reward, setReward] = useState(task?.reward || rewardOptions[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: Task = {
      id: task?.id || `t${Date.now()}`,
      title: title.trim(),
      type,
      typeLabel: taskTypes[type].label,
      duration,
      reward,
      completed: task?.completed || false,
      createdAt: task?.createdAt || new Date().toISOString().split('T')[0],
      completedAt: task?.completedAt,
    };

    onSave(newTask);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">{task ? '编辑任务' : '创建新任务'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* 表单 */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* 任务名称 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">任务名称</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="例如：背单词30分钟"
              required
            />
          </div>

          {/* 任务类型 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">任务类型</label>
            <div className="grid grid-cols-5 gap-2">
              {(Object.entries(taskTypes) as [TaskType, typeof taskTypes.study][]).map(([key, config]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setType(key)}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all ${
                    type === key
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl">{config.icon}</span>
                  <span className="text-xs font-medium">{config.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 预计时长 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              预计时长
              <span className="text-muted-foreground font-normal ml-2">（分钟）</span>
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="5"
                max="120"
                step="5"
                value={duration}
                onChange={e => setDuration(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="w-16 text-center py-2 px-3 border rounded-lg font-medium">
                {duration}分钟
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1 px-1">
              <span>5分钟</span>
              <span>120分钟</span>
            </div>
          </div>

          {/* 奖励 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">完成奖励</label>
            <div className="grid grid-cols-2 gap-2">
              {rewardOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setReward(option)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-all ${
                    reward === option
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 按钮 */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              {task ? '保存修改' : '创建任务'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border rounded-xl font-medium hover:bg-accent transition-colors"
            >
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
