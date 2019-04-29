let n=parseInt(prompt("Nhap vao 1 so bat ky lon hon 0: "));
if(n>0){
let i,sum=0;
for(i=1;i<=n;i++){
    sum+=i;
}
alert(sum);
}
else{
    alert("So vua nhap khong phu hop!");
}