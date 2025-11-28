export default function AuthIllustration() {
  return (
    <div className="w-80 h-64 flex items-center justify-center">
      {/* Simple inline illustration resembling the design */}
      <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
        <rect x="0" y="0" width="220" height="200" rx="12" fill="transparent" />
        <circle cx="110" cy="84" r="60" fill="#FFD166" />
        <path d="M70 130c0-25 80-25 80 0v14H70v-14z" fill="#073B4C" />
        <circle cx="92" cy="70" r="8" fill="#FFFFFF" />
        <circle cx="128" cy="70" r="8" fill="#FFFFFF" />
        <rect x="95" y="86" width="30" height="6" rx="3" fill="#FFFFFF" />
        <path d="M140 42l-20 10v8" stroke="#073B4C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="118" y="34" width="26" height="8" rx="2" fill="#073B4C" transform="rotate(-18 118 34)" />
      </svg>
    </div>
  )
}
