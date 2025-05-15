import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string; // ✅ 追加
    };
  }

  interface User {
    id: string;
    role?: string; // ✅ 追加（DBからのユーザーにも必要）
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string; // ✅ JWTトークンにも追加
  }
}
