import { cn } from '@/lib/utils'

export function SectionTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'text-4xl leading-[1.08] font-bold tracking-[-0.02em] text-balance text-navy md:text-[52px]',
        className,
      )}
      {...props}
    />
  )
}
