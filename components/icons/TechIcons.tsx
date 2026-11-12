import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// 1. PHP
export function PhpIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 135"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="128" cy="67.5" rx="128" ry="67.5" fill="#777BB4" />
      <path
        d="M62.6 39.5H35.4l-14 56h14.8l4.4-17.5h16.2c13.7 0 22.3-7.7 24.3-19.1 1.9-10.7-3.8-19.4-18.5-19.4zm-2.4 23.2H47.4l3.1-12.4h12.8c4.6 0 7.2 2.4 6.5 6.2-.7 3.8-4.2 6.2-9.6 6.2zM128 39.5h-15l-14 56h14.8l5.2-20.7h16.3c15 0 24.5-8.5 26.6-20.4 2-10.6-4.6-14.9-13.9-14.9zm-3.2 21.2h-12.8l3.1-12.4h12.8c4.5 0 7.1 2.3 6.4 6.2-.7 3.9-4.1 6.2-9.5 6.2zm79.6-21.2h-27.2l-14 56h14.8l4.4-17.5h16.2c13.7 0 22.3-7.7 24.3-19.1 1.9-10.7-3.8-19.4-18.5-19.4zm-2.4 23.2h-12.8l3.1-12.4h12.8c4.6 0 7.2 2.4 6.5 6.2-.7 3.8-4.2 6.2-9.6 6.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 2. Laravel
export function LaravelIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.2 5.5l-8.6-5a1.2 1.2 0 0 0-1.2 0l-8.6 5a1.2 1.2 0 0 0-.6 1v10c0 .4.2.8.6 1l8.6 5a1.2 1.2 0 0 0 1.2 0l8.6-5a1.2 1.2 0 0 0 .6-1v-10a1.2 1.2 0 0 0-.6-1zm-9.2-3.6l7.2 4.2-3.3 1.9-7.2-4.2 3.3-1.9zm-8 5.6l7.2 4.2v3.8l-7.2-4.2V7.5zm9.2 13.9l-7.2-4.2 3.3-1.9 7.2 4.2-3.3 1.9zm8-5.6l-7.2 4.2v-3.8l7.2-4.2v3.8zm0-5l-3.3 1.9-7.2-4.2 3.3-1.9 7.2 4.2z"
        fill="#FF2D20"
      />
    </svg>
  );
}

// 3. Python
export function PythonIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9 1.5c-3.1 0-5 1.4-5 3.3v2.4h5.2v.8H4.6c-2 0-3.6 1.4-3.6 3.8s1.4 3.7 3.6 3.7h1.6v-2.3c0-2 1.7-3.7 3.7-3.7h5.2V7.2c0-1.9-2.1-3.3-5.2-3.3h2zM9.5 3.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2.6 19.1c3.1 0 5-1.4 5-3.3v-2.4h-5.2v-.8h7.5c2 0 3.6-1.4 3.6-3.8s-1.4-3.7-3.6-3.7h-1.6v2.3c0 2-1.7 3.7-3.7 3.7H8.9v2.3c0 1.9 2.1 3.3 5.2 3.3h-2zm2.4-1.9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        fill="url(#python-grad)"
      />
      <defs>
        <linearGradient
          id="python-grad"
          x1="2"
          y1="2"
          x2="22"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3776AB" />
          <stop offset="0.5" stopColor="#387EB8" />
          <stop offset="1" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 4. Flutter
export function FlutterIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3 2.5L3 13.8l3.4 3.4L21 2.5h-6.7zM14.3 12.3l-5.6 5.6 3.4 3.4 2.2-2.2 4.4 4.4H21l-6.7-6.7 4.5-4.5h-4.5z"
        fill="#02569B"
      />
      <path
        d="M14.3 12.3l-3.4 3.4 3.4 3.4 3.4-3.4-3.4-3.4z"
        fill="#0175C2"
      />
      <path
        d="M14.3 19.1l2.2-2.2 2.2 2.2-2.2 2.2-2.2-2.2z"
        fill="#29B6F6"
      />
    </svg>
  );
}

// 5. Dart
export function DartIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.1 3.5l6.5 17h6.8l2.5-6.6L12.5 3.5H4.1z"
        fill="#0175C2"
      />
      <path
        d="M17.4 13.9L12.5 3.5H4.1l7.4 8.7 5.9 1.7z"
        fill="#29B6F6"
      />
      <path
        d="M4.1 3.5l1.6 14.8 4.9 2.2-2.4-8.3-4.1-8.7z"
        fill="#005B9E"
      />
    </svg>
  );
}

// 6. JavaScript
export function JavaScriptIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7.7 18.5c-.7 0-1.3-.2-1.7-.5l.4-1.4c.4.3.8.5 1.3.5.6 0 1-.3 1-1V9.5h1.8v6.7c0 1.5-1 2.3-2.8 2.3zm8.3.1c-1.8 0-3-1-3-2.6 0-1.6 1-2.4 2.5-2.7l1.1-.3c.6-.1.8-.4.8-.8 0-.5-.4-.9-1.1-.9-.6 0-1.2.2-1.6.5l-.5-1.3c.6-.4 1.4-.6 2.3-.6 1.8 0 2.8.9 2.8 2.3 0 1.5-1 2.2-2.4 2.5l-1.1.2c-.6.2-.9.4-.9.9 0 .6.5 1 1.2 1 .7 0 1.4-.3 1.8-.6l.5 1.3c-.7.5-1.6.8-2.5.8z"
        fill="#000000"
      />
    </svg>
  );
}

// 7. TypeScript
export function TypeScriptIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M5 11.2h4.5v1.6H7.8v5.7H6.1v-5.7H5v-1.6zm9.2 7.4c-1.8 0-3-1-3-2.6 0-1.6 1-2.4 2.5-2.7l1.1-.3c.6-.1.8-.4.8-.8 0-.5-.4-.9-1.1-.9-.6 0-1.2.2-1.6.5l-.5-1.3c.6-.4 1.4-.6 2.3-.6 1.8 0 2.8.9 2.8 2.3 0 1.5-1 2.2-2.4 2.5l-1.1.2c-.6.2-.9.4-.9.9 0 .6.5 1 1.2 1 .7 0 1.4-.3 1.8-.6l.5 1.3c-.7.5-1.6.8-2.5.8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 8. HTML5
export function Html5Icon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 2l1.6 18.2L12 22.5l7.4-2.3L21 2H3z" fill="#E34F26" />
      <path d="M12 20.6l5.9-1.8L19.2 4H12v16.6z" fill="#EF652A" />
      <path
        d="M12 8.7h4.3l-.3 3.6H12V10h4l-.1 1.2H12v1.1h3.7l-.4 4.5L12 17.8V8.7z"
        fill="#FFFFFF"
      />
      <path
        d="M12 8.7H7.7l.2 1.3H12v-1.3zm0 2.3H7.9l.4 4.5 3.7 1v-1.1l-2.6-.7-.2-2.4H12V11z"
        fill="#EBEBEB"
      />
    </svg>
  );
}

// 9. CSS3
export function Css3Icon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 2l1.6 18.2L12 22.5l7.4-2.3L21 2H3z" fill="#1572B6" />
      <path d="M12 20.6l5.9-1.8L19.2 4H12v16.6z" fill="#33A9DC" />
      <path
        d="M12 8.7h4.3l-.3 3.6H12v1.1h3.7l-.4 4.5L12 17.8V8.7z"
        fill="#FFFFFF"
      />
      <path
        d="M12 8.7H7.7l.2 1.3H12v-1.3zm0 3.6H7.9l.4 4.5 3.7 1v-1.1l-2.6-.7-.2-2.4H12v-1.3z"
        fill="#EBEBEB"
      />
    </svg>
  );
}

// 10. Tailwind CSS
export function TailwindIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6c-3.2 0-5.1 1.6-5.8 4.7 1.1-1.5 2.5-2 4.1-1.6 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.7 2.8 5.8 2.8 3.2 0 5.1-1.6 5.8-4.7-1.1 1.5-2.5 2-4.1 1.6-1-.2-1.7-.9-2.5-1.7-1.3-1.3-2.8-2.8-5.8-2.8zm-6.2 6.5C2.6 12.5.7 14.1 0 17.2c1.1-1.5 2.5-2 4.1-1.6 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.8 2.8 5.8 2.8 3.2 0 5.1-1.6 5.8-4.7-1.1 1.5-2.5 2-4.1 1.6-1-.2-1.7-.9-2.5-1.7-1.3-1.3-2.7-2.8-5.8-2.8z"
        fill="#06B6D4"
      />
    </svg>
  );
}

// 11. React
export function ReactIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

// 12. Next.js
export function NextjsIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#000000" stroke="#FFFFFF" strokeWidth="1" />
      <path
        d="M15.5 8.5v7m-7-7v7l8.2-8.2"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 13. C / C++
export function CPlusPlusIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.5l8.2 4.7v9.5L12 21.5l-8.2-4.7V7.2L12 2.5z"
        fill="#00599C"
      />
      <path
        d="M11 9.5a3.5 3.5 0 1 0 0 5 1 1 0 0 1 1.4 1.4 5.5 5.5 0 1 1 0-7.8A1 1 0 0 1 11 9.5z"
        fill="#FFFFFF"
      />
      <path
        d="M15 11v2m-1-1h2m3-1v2m-1-1h2"
        stroke="#659AD2"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 14. Java
export function JavaIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 16.5c3.5 1 8.5 1 10.5-1.5 0 0-1 2-5 2.5-4 .5-5.5-1-5.5-1zm-1 3.5c4.5 1.5 11 1.5 13.5-1 0 0-1.5 2.5-6.5 3-5 .5-7-2-7-2zm3-11c1-1 3-2 3-2s-1 1-1 2.5c0 1.5 1 2.5 1 2.5s-2.5-1.5-2.5-3zm4-2s-1 1-1 2.5c0 1.5 1.5 2.5 1.5 2.5s-2-1.5-2-3c0-1.5 1.5-2 1.5-2zm-5 5s2-1 3-1 2 1.5 2 1.5-2 0-3 .5c-1 .5-2-1-2-1z"
        fill="#ED8B00"
      />
    </svg>
  );
}

// 15. MySQL
export function MySqlIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4c-5 0-9 1.8-9 4s4 4 9 4 9-1.8 9-4-4-4-9-4zm-9 6v4c0 2.2 4 4 9 4s9-1.8 9-4v-4c-2 1.5-5.3 2.5-9 2.5s-7-1-9-2.5zm0 6v4c0 2.2 4 4 9 4s9-1.8 9-4v-4c-2 1.5-5.3 2.5-9 2.5s-7-1-9-2.5z"
        fill="#00758F"
      />
      <circle cx="17.5" cy="8" r="1.5" fill="#F29111" />
    </svg>
  );
}

// 16. PostgreSQL
export function PostgreSqlIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.5 2 2 6.5 2 12c0 4.8 3.5 8.9 8 9.8v-6.9H7.5V12H10V9.7c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v6.9c4.5-.9 8-5 8-9.8 0-5.5-4.5-10-10-10z"
        fill="#336791"
      />
    </svg>
  );
}

// 17. SQLite
export function SqliteIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#003B57" />
      <path
        d="M6 8h12v2H6V8zm0 3h12v2H6v-2zm0 3h8v2H6v-2z"
        fill="#00F0FF"
      />
    </svg>
  );
}

// 18. Docker
export function DockerIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 10c-.3 0-.6.1-.9.2-.5-.8-1.3-1.4-2.3-1.6l-.4-.1-.2.4c-.4 1.1-.3 2.3.2 3.3-.5.3-1.3.5-2.2.5H2.6c-.3 1.2 0 2.4.7 3.5 1.2 1.8 3.4 3 5.9 3 5.5 0 9.8-3.4 11-8.5.5.1 1 .1 1.4-.2.4-.3.6-.7.6-1.1 0-.6-.3-1-0.7-1zm-13-1.2h2v2h-2v-2zm0-2.5h2v2h-2v-2zm-2.5 2.5h2v2H6v-2zm0-2.5h2v2H6v-2zm-2.5 2.5h2v2h-2v-2zm7.5 0h2v2h-2v-2zm0-2.5h2v2h-2v-2zm2.5 2.5h2v2h-2v-2zm0-2.5h2v2h-2v-2z"
        fill="#2496ED"
      />
    </svg>
  );
}

// 19. Git
export function GitIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6 10.9l-8.5-8.5a1.8 1.8 0 0 0-2.5 0l-2 2 2.6 2.6a2.1 2.1 0 0 1 2.6 2.7l2.5 2.5a2.1 2.1 0 1 1-1.3 1.3l-2.3-2.3v5.4a2.1 2.1 0 1 1-1.8 0V11a2.1 2.1 0 0 1-1.1-2.7L7.2 5.7 2.4 10.5a1.8 1.8 0 0 0 0 2.5l8.5 8.5a1.8 1.8 0 0 0 2.5 0l8.2-8.2a1.8 1.8 0 0 0 0-2.4z"
        fill="#F05032"
      />
    </svg>
  );
}

// 20. Linux
export function LinuxIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C9.5 2 8 4 8 7c0 1.2.2 2.4.6 3.5C7.2 11.5 6 13.5 6 16c0 3 2 4 4 4.5-.4.5-.7 1.2-.7 1.8 0 .9.8 1.7 1.7 1.7h2c.9 0 1.7-.8 1.7-1.7 0-.6-.3-1.3-.7-1.8 2-.5 4-1.5 4-4.5 0-2.5-1.2-4.5-2.6-5.5.4-1.1.6-2.3.6-3.5 0-3-1.5-5-4-5z"
        fill="#FCC624"
      />
      <circle cx="10.5" cy="6.5" r="1" fill="#000000" />
      <circle cx="13.5" cy="6.5" r="1" fill="#000000" />
      <path d="M11 8.5h2l-1 1.5-1-1.5z" fill="#FFA500" />
    </svg>
  );
}

// 21. Bash / Shell
export function BashIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1" />
      <path
        d="M6 8l4 4-4 4m6 0h6"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 22. Figma
export function FigmaIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
      <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
      <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
      <circle cx="14.5" cy="9.5" r="2.5" fill="#1ABCFE" />
      <path d="M8 12h4v5a2.5 2.5 0 0 1-4 0v-5z" fill="#0ACF83" />
    </svg>
  );
}

