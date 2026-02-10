import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const accordionVariants = cva(
  "border-b",
  {
    variants: {
      variant: {
        default: "border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AccordionContextValue {
  value: string[]
  setValue: React.Dispatch<React.SetStateAction<string[]>>
}

const AccordionContext = React.createContext<AccordionContextValue>({
  value: [],
  setValue: () => {},
})

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within <Accordion>")
  }
  return context
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  children: React.ReactNode
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, defaultValue = [], value: controlledValue, onValueChange, children, ...props }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>(defaultValue)
    const value = controlledValue ?? uncontrolledValue
    const setValue = React.useCallback(
      (newValue: React.SetStateAction<string[]>) => {
        if (controlledValue === undefined) {
          setUncontrolledValue(newValue)
        }
        onValueChange?.(typeof newValue === "function" ? newValue(value) : newValue)
      },
      [controlledValue, onValueChange, value]
    )

    return (
      <AccordionContext.Provider value={{ value, setValue }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value: itemValue, children, ...props }, ref) => {
    const { value } = useAccordion()
    const isOpen = value.includes(itemValue)

    return (
      <div
        ref={ref}
        className={cn("border-b", className)}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              itemValue,
            })
          }
          return child
        })}
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  itemValue?: string
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, itemValue, ...props }, ref) => {
    const { value, setValue } = useAccordion()
    const isOpen = itemValue ? value.includes(itemValue) : false

    return (
      <button
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        onClick={() => {
          if (itemValue) {
            setValue((prev) =>
              prev.includes(itemValue)
                ? prev.filter((v) => v !== itemValue)
                : [...prev, itemValue]
            )
          }
        }}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0 transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  itemValue?: string
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, itemValue, ...props }, ref) => {
    const { value } = useAccordion()
    const isOpen = itemValue ? value.includes(itemValue) : false

    if (!isOpen) return null

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm transition-all",
          className
        )}
        {...props}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
