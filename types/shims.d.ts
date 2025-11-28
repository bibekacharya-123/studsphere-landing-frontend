// Temporary module shims to reduce TypeScript 'Cannot find module' errors
// These are pragmatic placeholders so the app can run while proper
// dependencies and types are installed. We should replace or remove
// these once real packages are added.

declare module 'next-themes'
declare module 'react-day-picker'
declare module 'recharts'
declare module 'sonner'
declare module 'cmdk'
declare module 'vaul'
declare module 'input-otp'
declare module 'react-resizable-panels'
declare module 'react-hook-form'

// Radix UI shims (many components used across the UI)
declare module '@radix-ui/react-alert-dialog'
declare module '@radix-ui/react-aspect-ratio'
declare module '@radix-ui/react-avatar'
declare module '@radix-ui/react-checkbox'
declare module '@radix-ui/react-collapsible'
declare module '@radix-ui/react-command'
declare module '@radix-ui/react-context-menu'
declare module '@radix-ui/react-dialog'
declare module '@radix-ui/react-label'
declare module '@radix-ui/react-menubar'
declare module '@radix-ui/react-navigation-menu'
declare module '@radix-ui/react-popover'
declare module '@radix-ui/react-progress'
declare module '@radix-ui/react-radio-group'
declare module '@radix-ui/react-scroll-area'
declare module '@radix-ui/react-select'
declare module '@radix-ui/react-separator'
declare module '@radix-ui/react-sheet'
declare module '@radix-ui/react-slider'
declare module '@radix-ui/react-switch'
declare module '@radix-ui/react-tabs'
declare module '@radix-ui/react-toast'
declare module '@radix-ui/react-toggle-group'
declare module '@radix-ui/react-tooltip'
declare module '@radix-ui/react-toggle'

// Small common modules
declare module 'next-themes'

export {}
