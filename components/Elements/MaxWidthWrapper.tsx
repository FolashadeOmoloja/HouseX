import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <main
      className={`mx-auto w-full max-w-[1440px] ${className} `}>
      {children}
    </main>
  )
}

export default MaxWidthWrapper