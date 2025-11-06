import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
    const token = request.nextUrl.searchParams.get("token");
    const authCookie = request.cookies.get("authenticated")?.value;

    // If user already has valid auth cookie, allow access
    if (authCookie === 'true') {
        return NextResponse.next();
    }

    if (request.nextUrl.pathname !== '/' && request.nextUrl.pathname !== '/faq' && request.nextUrl.pathname !== '/rewards' && request.nextUrl.pathname !== '/about' && request.nextUrl.pathname !== '/surveys') {
        return NextResponse.next();
    }

    // if (request.nextUrl.pathname !== '/') {
    //     return NextResponse.redirect(new URL('/denied', request.url));
    // }

    if (token === 'fws7wjyva3eqeozy6ymqbc') {
        const response = NextResponse.redirect(new URL('/', request.url));
        response.cookies.set('authenticated', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7 // 7 days
        });
        return response;
    } else {
        return NextResponse.redirect(new URL('/denied', request.url));
    }
}

export const config = {
    // ignore images, statics files, api, etc.
    matcher: '/((?!_next|api|static|.*\\..*).*)'
}