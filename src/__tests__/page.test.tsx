import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

// Mock service worker
Object.defineProperty(navigator, "serviceWorker", {
  value: { register: vi.fn().mockResolvedValue({}) },
  writable: true,
});

beforeEach(() => {
  localStorage.clear();
});

describe("Home page", () => {
  it("アプリ名が表示される", () => {
    render(<Home />);
    expect(screen.getAllByText(/のびのび/).length).toBeGreaterThanOrEqual(1);
  });

  it("おまかせストレッチボタンが表示される", () => {
    render(<Home />);
    expect(
      screen.getAllByText("おまかせストレッチ").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("マイメニューセクションが表示される", () => {
    render(<Home />);
    expect(
      screen.getAllByText(/マイメニュー/).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("ストリークが表示される", () => {
    render(<Home />);
    expect(screen.getAllByText("最長記録").length).toBeGreaterThanOrEqual(1);
  });

  it("ボトムナビが表示される", () => {
    render(<Home />);
    expect(screen.getAllByText("ホーム").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("ビルダー").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("設定").length).toBeGreaterThanOrEqual(1);
  });
});
