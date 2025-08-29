import NextAuth from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };
