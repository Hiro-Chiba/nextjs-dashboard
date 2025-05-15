import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcryptjs';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`; 
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // auth.ts ── authorize() でログを仕込む
      async authorize (credentials) {
        // フォーマット検証（Zod で email 形式＆6文字以上のパスワード）
        const parsed = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials);
        console.log('step‑1 parsed', parsed);              

        if (!parsed.success) return null;                  // → 失敗: フォーマット不正
        const { email, password } = parsed.data;

        const user = await getUser(email);                 // DB から該当ユーザーを取得
        console.log('step‑2 db user', user);               

        if (!user) return null;                            // → 失敗: ユーザーが存在しない
        const ok = await bcrypt.compare(password, user.password);// パスワードハッシュと比較
        console.log('step‑3 compare', ok);                 

        if (!ok) return null;                              // → 失敗: パスワード不一致
        return { id: user.id, name: user.name, email: user.email, role: user.role };
      }

    }),
  ],
});
