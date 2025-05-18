
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Initial check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Run on mount and window resize
    checkMobile()
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Modern approach using addEventListener for better compatibility
    mql.addEventListener("change", checkMobile)
    
    // Also listen to resize events for backup
    window.addEventListener('resize', checkMobile)
    
    return () => {
      mql.removeEventListener("change", checkMobile)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return !!isMobile
}
