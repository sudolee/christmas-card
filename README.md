# 🎄 圣诞贺卡

> **Merry Christmas & Happy Coding! 🎄💻**

![Demo](public/example.gif)

## 🚀 快速开始

```bash
pnpm install
pnpm run dev
```

访问 [http://localhost:5173](http://localhost:5173)

## 🎮 使用方式

1. 页面加载，文字以平滑动画逐字显示
2. 动画完成，彩纸自动绽放
3. 点击按钮，随时触发彩纸

## 🎨 自定义

### 修改祝福语

```typescript
// src/components/christmas-card-vortex.tsx
const words = [
  { text: "Merry" },
  { text: "Christmas," },
  { text: "Your Name!✨" },
]
```

### 更换背景图片

```typescript
// src/components/christmas-card-vortex.tsx
backgroundImage: 'url("/your-image.jpg")'
```

### 调整动画时长

```typescript
// src/components/ui/typewriter-effect.tsx
transition={{
  duration: 2,  // 修改动画持续时间（秒）
  ease: "linear",
  delay: 1,    // 修改动画延迟时间（秒）
}}
```

## 📄 License

MIT