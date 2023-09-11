function romanToInt( s) {
    let ans = 0;
    let num = 0;
   for (let i = s.length-1; i >= 0; i--) {
       switch(s.charAt(i)) {
           case 'I': num = 1; break;
           case 'V': num = 5; break;
           case 'X': num = 10; break;
           case 'L': num = 50; break;
           case 'C': num = 100; break;
           case 'D': num = 500; break;
           case 'M': num = 1000; break;
       }
       if (4 * num < ans) ans -= num;
       else ans += num;
   }
   console.log(ans)
   return ans;
}