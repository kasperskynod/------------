import java.io.IOException;

/**
 * Created by Jeremy on 2015/4/12.
 */
public class 速度信息区控制器 extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        速度信息区 速度信息=new 速度信息区();
        int result=速度信息.取得速度信息();
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }
}
