# 🧘 のびのび（nobinobi）

**毎日のストレッチを習慣に。** おまかせ提案で考えずに始められる、ストレッチ習慣化PWAアプリ。

🌐 **https://nobinobi.vercel.app**

## 機能

### おまかせストレッチ
- 7部位（首・肩・背中・腰・股関節・脚・全身）を自動ローテーション
- 4〜6種目を約3分で提案
- 重複を避けたランダム選択

### マイメニュービルダー
- 60種目から好きなストレッチを選んでオリジナルメニューを作成
- 部位フィルターで絞り込み
- 名前・アイコンを設定して保存

### ストレッチ実行画面
- 円形SVGタイマー（左右対応で自動切り替え）
- 「はじめる」ボタンで準備してからスタート
- アニメーション付きポーズイラスト
- 一時停止・スキップ
- 次のストレッチをプレビュー

### ストリーク（連続記録）
- 連続日数・最長記録をトラッキング
- localStorage で永続化

### プッシュ通知リマインダー
- Web Push API によるネイティブプッシュ通知（アプリを閉じていても届く）
- 設定画面で通知ON/OFF・時刻を指定
- Vercel Cron Jobs で毎時チェック、指定時刻に送信
- 5パターンのメッセージをランダム表示

## 技術スタック

- **Next.js 16** (App Router) / TypeScript / Tailwind CSS 4
- **Zen Maru Gothic** フォント
- **PWA** (manifest.json + Service Worker)
- **Vitest** + Testing Library（26テスト）
- **localStorage** でデータ永続化
- **Web Push API** + `web-push`（プッシュ通知）
- **Vercel KV**（Redis）で購読情報を保存
- **Vercel Cron Jobs** でリマインダー配信
- **Vercel** デプロイ

## 開発

```bash
npm install
npm run dev        # 開発サーバー (http://localhost:3000)
npm run build      # プロダクションビルド
npm test           # テスト実行
npm run test:watch # テスト（watchモード）
```

## テスト

Vitest + React Testing Library で4ファイル・26テストを実装。

| ファイル | 内容 |
|---------|------|
| `stretches.test.ts` | 60種目のデータ検証（ID連番・重複なし・部位分布・秒数範囲・ステップ数） |
| `streak.test.ts` | ストリークロジック（初日完了・重複防止・連続維持・リセット判定） |
| `omakase.test.ts` | おまかせ選択（部位ローテーション・種目数・合計時間） |
| `page.test.tsx` | ホーム画面のUI表示（アプリ名・ボタン・ナビ・ストリーク） |

## セットアップ（プッシュ通知）

プッシュ通知を動かすには Vercel 側の設定が必要です。

### 1. Vercel KV を作成
Vercel Dashboard → nobinobi → Storage → Create → **KV (Redis)**

### 2. 環境変数を追加
Vercel Dashboard → nobinobi → Settings → Environment Variables：

| 変数名 | 説明 |
|--------|------|
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY` | VAPID公開鍵（`npx web-push generate-vapid-keys` で生成） |
| `VAPID_PRIVATE_KEY` | VAPID秘密鍵 |
| `CRON_SECRET` | Cronエンドポイントの認証用シークレット |

### 3. 再デプロイ
環境変数設定後に Redeploy して反映。

## プロジェクト構造

```
src/
├── app/
│   ├── page.tsx              # ホーム画面
│   ├── stretch/page.tsx      # ストレッチ実行画面
│   ├── builder/page.tsx      # マイメニュービルダー
│   ├── settings/page.tsx     # 設定
│   └── api/push/             # Push通知API (subscribe, unsubscribe, send)
├── components/
│   ├── Timer.tsx             # 円形タイマー
│   ├── StretchCard.tsx       # ストレッチカード
│   ├── StretchIllustration.tsx # アニメーション付きポーズイラスト
│   ├── StreakCounter.tsx      # ストリーク表示
│   ├── BodyPartFilter.tsx    # 部位フィルター
│   ├── RoutineList.tsx       # ルーティン一覧
│   ├── ProgressBar.tsx       # 進捗バー
│   └── BottomNav.tsx         # ボトムナビ
├── data/
│   └── stretches.json        # 60種目のストレッチデータ
└── lib/
    ├── storage.ts            # localStorage管理
    ├── streak.ts             # ストリークロジック
    ├── omakase.ts            # おまかせ選択ロジック
    └── notification.ts       # 通知
```
