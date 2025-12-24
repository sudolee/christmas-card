import { useRef } from "react";
import { Vortex } from "./ui/vortex";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Confetti, type ConfettiRef } from "./ui/confetti";



export function ChristmasCardVortex() {
  const confettiRef = useRef<ConfettiRef>(null)
  const words = [
    { text: "Merry" },
    { text: "Christmas," },
    { text: "Ksbb!✨" },
  ]

  // 打字机动画完成后触发彩花
  const handleTypewriterComplete = () => {
    setTimeout(() => {
      confettiRef.current?.fire()
    }, 500)
  }

  // 点击按钮触发彩花
  const handleButtonClick = () => {
    confettiRef.current?.fire()
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button
            onClick={handleButtonClick}
            className="relative inline-flex items-center justify-center px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
            {/* 背景图片层 */}
            <div
              className="absolute inset-0 rounded-full opacity-50"
              style={{
                backgroundImage: 'url("/merry-christmas.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur',
                zIndex: -1,
              }}
            />
            {/* 光泽效果层 */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%)',
                zIndex: 0,
              }}
            />
            <TypewriterEffectSmooth words={words} onComplete={handleTypewriterComplete} className="text-white" />
          </button>
        </div>
      </Vortex>
      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
        manualstart={true}
      />
    </div>
  );
}

export default ChristmasCardVortex;
