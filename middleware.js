import { NextResponse } from 'next/server';
import cookie from 'cookie';

// Esta função pode ser marcada como async se usar await dentro
export function middleware(request) {

  const cookies = cookie.parse(request.headers.get('cookie') || '');
  console.log("Chamou")

  if (!cookies.jwt) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Continua para a próxima middleware ou rota
  return NextResponse.next();
}

// Veja "Matching Paths" abaixo para aprender mais
export const config = {
  matcher: '/admin/:path'
};