package com.wysso.demo.filter;

import com.wysso.demo.service.CookieService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * 类描述：
 *
 * @author liangyuwu
 * @Time 2018/1/16 18:18
 */
@Order(1)
@WebFilter(filterName = "loginFilter",urlPatterns = "/*")
public class LoginFilter implements Filter {

    private static Logger logger = LoggerFactory.getLogger(LoginFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpSession session = request.getSession();
        System.err.println("sessionid = "+session.getId());
        System.err.println("uri = "+request.getRequestURL());

        String ctid = CookieService.readFromCookie(request);
    }

    @Override
    public void destroy() {

    }
}
