/**
 * Created by Jeremy on 2015/4/11.
 */
function 绘制速度表盘()
{
    var c=document.getElementById("速度信息区");
    var cxt=c.getContext("2d");
    cxt.beginPath();
    cxt.arc(140, 150, 50, 0.8 * Math.PI, 2.2 * Math.PI);
    cxt.stroke();
}
