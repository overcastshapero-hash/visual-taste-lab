import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white p-8" style={{ fontFamily: 'Kanit, sans-serif' }}>
      <h1 className="text-6xl font-bold mb-8">五月 · 个人输出系统</h1>
      
      <div className="max-w-2xl">
        <p className="text-xl mb-6">
          你好！这是一个测试页面。<br />
          如果你能看到这段文字，说明 React 和 Tailwind 已经正常工作了。
        </p>
        
        <div className="p-6 bg-[#1a1a1a] rounded-xl mb-8">
          <h2 className="text-2xl mb-4">当前状态</h2>
          <ul className="space-y-2 text-lg">
            <li>✅ React 正常运行</li>
            <li>✅ Tailwind CSS 已加载</li>
            <li>✅ Kanit 字体已应用</li>
            <li>✅ 深色背景 (#0C0C0C)</li>
          </ul>
        </div>

        <p className="text-[#888]">
          接下来我会把完整的高级版本（Hero、项目、写作、复利区等）逐步加上。<br />
          先告诉我：你现在能看到这个白色文字吗？
        </p>
      </div>
    </div>
  );
}

export default App;
