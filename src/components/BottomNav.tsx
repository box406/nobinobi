"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "ホーム", icon: "🏠" },
  { href: "/builder", label: "ビルダー", icon: "🔧" },
  { href: "/settings", label: "設定", icon: "⚙️" },
];

export default function BottomNav() {
  const pathname = usePathname();

  // Hide on stretch execution screen
  if (pathname === "/stretch") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-emerald-100">
      <div className="max-w-md mx-auto flex justify-around py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`bottom-nav-item flex flex-col items-center gap-0.5 px-4 py-1 rounded-lg ${
                isActive
                  ? "text-emerald-600"
                  : "text-emerald-400 hover:text-emerald-500"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span
                className={`text-[10px] font-bold ${
                  isActive ? "text-emerald-600" : "text-emerald-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
