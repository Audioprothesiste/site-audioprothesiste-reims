import { cn } from '@/lib/utils'

const BAR_COUNT = 64

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const BARS = Array.from({ length: BAR_COUNT }, (_, i) => {
  const r = pseudoRandom(i + 1)
  const isGap = r < 0.08
  return {
    height: isGap ? 0 : Math.round(20 + pseudoRandom(i + 101) * 80),
    white: pseudoRandom(i + 201) > 0.86,
    delay: (pseudoRandom(i + 301) * -2.4).toFixed(2),
  }
})

export function Waveform({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('flex h-24 items-end gap-[3px] sm:h-28 sm:gap-[6px] md:h-36 md:gap-[8px]', className)}
    >
      {BARS.map((bar, i) => (
        <span
          key={i}
          className={cn(
            'eq-bar block min-w-0 flex-1',
            bar.white ? 'bg-white' : 'bg-brand',
            i >= 36 && 'hidden sm:block',
          )}
          style={{ height: `${bar.height}%`, animationDelay: `${bar.delay}s` }}
        />
      ))}
    </div>
  )
}
