'use client';

import { useState } from 'react';
import { Maximize2, Minimize2, RotateCw, Check, Sparkles } from 'lucide-react';

interface PetPreviewProps {
  petName: string;
  petAvatar: string;
  outfitIcon: string;
  outfitName: string;
  species: 'dog' | 'cat';
}

export default function PetPreview({
  petName,
  petAvatar,
  outfitIcon,
  outfitName,
  species,
}: PetPreviewProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 1000);
  };

  return (
    <div className="relative">
      {/* Main Preview */}
      <div
        className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
          isZoomed
            ? 'w-80 h-80 shadow-2xl'
            : 'w-40 h-40 shadow-lg'
        }`}
      >
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            species === 'dog'
              ? 'from-yellow-500/20 via-orange-500/10 to-red-500/20'
              : 'from-purple-500/20 via-pink-500/10 to-blue-500/20'
          }`}
        />

        {/* Pet Avatar */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={petAvatar}
            alt={petName}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isZoomed ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>

        {/* Outfit Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            isZoomed ? 'scale-100' : 'scale-90'
          }`}
        >
          <div
            className={`text-center transition-all duration-500 ${
              isZoomed ? 'text-8xl' : 'text-4xl'
            }`}
          >
            {outfitIcon}
          </div>
        </div>

        {/* Particle Effects */}
        {showParticles && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
            ))}
          </div>
        )}

        {/* Glow Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
              isZoomed ? 'w-32 h-32' : 'w-16 h-16'
            } bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl animate-pulse`}
          />
        </div>

        {/* Species Badge */}
        <div className={`absolute ${isZoomed ? 'top-4 right-4' : 'top-2 right-2'}`}>
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              species === 'dog'
                ? 'bg-yellow-500/90 text-white'
                : 'bg-purple-500/90 text-white'
            }`}
          >
            {species === 'dog' ? '🐕 犬类' : '🐱 猫类'}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
        <button
          onClick={toggleZoom}
          className={`flex items-center gap-1.5 px-3 py-1.5 bg-background rounded-full shadow-lg border transition-all hover:scale-105 ${
            isZoomed ? 'bg-primary text-primary-foreground' : ''
          }`}
        >
          {isZoomed ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
          <span className="text-xs font-medium">
            {isZoomed ? '收起' : '放大'}
          </span>
        </button>
      </div>

      {/* Full Screen Preview Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md">
            {/* Close Button */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-background/90 rounded-full shadow-lg border hover:scale-105 transition-all"
            >
              <Minimize2 className="h-4 w-4" />
              <span className="text-sm font-medium">关闭预览</span>
            </button>

            {/* Large Preview */}
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20 shadow-2xl border-2 border-primary/30">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 20% 80%, ${species === 'dog' ? 'rgba(234, 179, 8, 0.2)' : 'rgba(168, 85, 247, 0.2)'} 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, ${species === 'dog' ? 'rgba(249, 115, 22, 0.2)' : 'rgba(236, 72, 153, 0.2)'} 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
                      `
                    }}
                  />
                </div>

                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>

              {/* Pet Avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={petAvatar}
                  alt={petName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Outfit Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-4 animate-bounce">{outfitIcon}</div>
                </div>
              </div>

              {/* Sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-ping"
                    style={{
                      top: `${10 + Math.random() * 80}%`,
                      left: `${10 + Math.random() * 80}%`,
                      animationDelay: `${i * 200}ms`,
                    }}
                  >
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                  </div>
                ))}
              </div>

              {/* Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                          species === 'dog'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-purple-500 text-white'
                        }`}
                      >
                        {species === 'dog' ? '🐕' : '🐱'}
                        {petName}
                      </span>
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <div className="text-white/90 font-medium text-lg">{outfitName}</div>
                  </div>
                  <div className="text-6xl">{outfitIcon}</div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <p className="text-white/70 text-sm">点击任意处关闭预览</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
