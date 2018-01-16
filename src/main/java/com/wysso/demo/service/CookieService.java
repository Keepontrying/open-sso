package com.wysso.demo.service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

/**
 * 类描述：
 *
 * @author liangyuwu
 * @Time 2018/1/16 18:43
 */
public final class CookieService {
    public static final String COOKIE_KEY = "wysso_server";

     public static final String readFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
         for (Cookie cookie : cookies) {
             if (COOKIE_KEY.equals(cookie.getName())) {
                 return cookie.getValue();
             }
         }
        return "";
    }

    public static final String saveCookieAndRetureCt(HttpServletRequest request, HttpServletResponse response) {
        String uuid = UUID.randomUUID().toString();
        Cookie cookie = new Cookie(COOKIE_KEY, uuid);
        cookie.setPath("/");
        response.addCookie(cookie);
        return uuid;
    }
}
