import { cn } from '@/lib/utils'

type CtaLinkProps = React.ComponentProps<'a'>

export function CtaLink({ className, ...props }: CtaLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex h-12 items-center justify-center rounded-sm bg-[#2b7aa6] px-6 text-base font-semibold text-white transition-colors hover:bg-[#21658c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:text-lg',
        className,
      )}
      {...props}
    />
  )
}

export const PHONE_DISPLAY = '03 26 88 92 40'
export const PHONE_HREF = 'tel:+33326889240'
export const EMAIL = 'audioreims@free.fr'
