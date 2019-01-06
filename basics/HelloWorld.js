var opr=function fun1(a,b)
{
    switch (document.getElementById("button2"))
    {
     case '+':return a+b;
     case '-' :return a-b;
     case '*':return (a*b);
     case '/':return (a/b);
    }
    document.write=opr;
}
function fun2(a) 
{var a,b;
 if (a==undefined)
{a=document.getElementById("button1").value;
 document.write=a;
 break;}
 b=document.getElementById("button1").value; 
 document.write=b;
    var c=opr(a,b);
 document.write = c;
}
