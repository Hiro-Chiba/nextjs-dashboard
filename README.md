# Next.js Dashboard
## Modern Dashboard Application with Next.js and TypeScript

## プロジェクト概要

このプロジェクトは、Next.jsの公式チュートリアルをベースに構築されたダッシュボードアプリケーションです。TypeScript、Tailwind CSS、PostgreSQLを使用して、堅牢なウェブアプリケーション開発の練習にしました。

主な機能として、請求書と顧客の管理に加え、チュートリアルにはない**ユーザー管理機能**と**カスタムAPIエンドポイント**を追加しています。これにより、より実践的なアプリケーション開発の練習にしました。

## デモ

![Demo Screenshot](/image/demo-screenshot.png)
![Demo Screenshot](/image/demo-screenshot.png)
![Demo Screenshot](/image/demo-screenshot.png)
![Demo Screenshot](/image/demo-screenshot.png)
![Demo Screenshot](/image/demo-screenshot.png)
*アプリケーションの主要な機能を示すスクリーンショットやGIFをここに挿入してください。*

### カスタムAPIエンドポイントのデモ

追加機能として実装されたカスタムAPIエンドポイント (`/api/query`) は、特定の条件に合致する請求書データを取得します。例えば、ブラウザで以下のURLにアクセスすると、JSON形式のデータが返されます。

`https://your-deployment-url.com/api/query`

```json
[
  {
    "amount": 666,
    "name": "Delba de Oliveira"
  },
  {
    "amount": 666,
    "name": "Michael Novotny"
  }
]
```
*上記はダミーデータです。実際の出力はデータベースの内容によって異なります。*



## セットアップ手順

以下の手順でプロジェクトをローカル環境でセットアップし、実行できます。

1.  **リポジトリをクローンする:**
    ```bash
    git clone https://github.com/your-username/nextjs-dashboard.git
    cd nextjs-dashboard
    ```

2.  **依存関係をインストールする:**
    `pnpm` を使用して依存関係をインストールします。
    ```bash
    pnpm install
    ```

3.  **環境変数を設定する:**
    `.env.example` ファイルを参考に、`.env.local` ファイルを作成し、必要な環境変数を設定してください。特にデータベース接続情報が必要です。

    ```
    # .env.local の例
    POSTGRES_URL=your_postgres_connection_string
    AUTH_SECRET=your_auth_secret
    ```

4.  **開発サーバーを起動する:**
    ```bash
    pnpm dev
    ```
    アプリケーションは `http://localhost:3000` で利用可能になります。

## 主な機能一覧

*   **ダッシュボードの概要**: 最新の請求書、保留中の請求書、総顧客数、総収益の表示。
*   **請求書管理**: 請求書の表示、作成、編集、削除。
*   **顧客管理**: 顧客情報の表示、作成、編集、削除。
*   **ユーザー管理 (追加機能)**: アプリケーションユーザーの表示、作成、編集、削除。
*   **カスタムAPIエンドポイント (追加機能)**: データベースから特定のデータを取得するためのAPIエンドポイントの例 (`/api/query`)。
*   **認証**: NextAuth.js を使用したセキュアな認証システム。
*   **レスポンシブデザイン**: モバイルフレンドリーなUI。

## 使用技術

*   **フレームワーク**: Next.js 14 (App Router)
*   **言語**: TypeScript
*   **スタイリング**: Tailwind CSS
*   **データベース**: PostgreSQL
*   **ORM**: Vercel Postgres (または `postgres` ライブラリ)
*   **認証**: NextAuth.js
*   **デプロイ**: Vercel (推奨)

## プロジェクト構成例

```
nextjs-dashboard/
├── app/
│   ├── dashboard/
│   │   ├── (overview)/
│   │   ├── customers/
│   │   ├── invoices/
│   │   └── users/             # 追加機能: ユーザー管理関連
│   ├── login/
│   ├── query/route.ts         # 追加機能: カスタムAPIエンドポイント
│   ├── seed/route.ts
│   └── ui/
├── lib/
│   ├── actions.ts
│   ├── data.ts
│   └── definitions.ts
├── public/
├── auth.config.ts
├── auth.ts
├── middleware.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## デプロイURL

https://nextjs-dashboard-bay-theta.vercel.app/