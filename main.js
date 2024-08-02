let subject1 = document.getElementById("sub1")
let subject2 = document.getElementById("sub2")
let subject3 = document.getElementById("sub3")
let subject4 = document.getElementById("sub4")
let subject5 = document.getElementById("sub5")
let subject6 = document.getElementById("sub6")
let subject7 = document.getElementById("sub7")
let subject8 = document.getElementById("sub8")


 let result1 = document.getElementById("res1");
 let result2 = document.getElementById("res2");
 let result3 = document.getElementById("res3")
 let result4 = document.getElementById("res4")
 let result5 = document.getElementById("res5")
 let result6 = document.getElementById("res6")
 let result7 = document.getElementById("res7")
 let result8 = document.getElementById("res8")
 
 

 function update(event){
    result1.textContent=subject1.value;
    result2.textContent=subject2.value;
    result3.textContent=subject3.value;
    result4.textContent=subject4.value;
    result5.textContent=subject5.value;
    result6.textContent=subject6.value;
    result7.textContent=subject7.value;
    result8.textContent=subject8.value; 
    
    let total =document.getElementById("tot").innerHTML= parseInt(result1.textContent)+parseInt(result2.textContent)+parseInt(result3.textContent)+parseInt(result4.textContent)+parseInt(result5.textContent)+parseInt(result6.textContent)+parseInt(result7.textContent)+parseInt(result8.textContent)
    
    let percentage =total/8;
    document.getElementById("percentage").innerHTML=+percentage + "%"

    let passorfail = document.getElementById("pf")



    if(total>400){
        passorfail.innerHTML=" PASS"

    }
    else{
        passorfail.innerHTML="FAIL"
    }

    let grade = document.getElementById("grade")
    if(percentage>=90){
        grade.innerHTML="A+";
    }
    else if(percentage>75){
        grade.innerHTML="A";
    }
    else if(percentage>=50){
        grade.innerHTML="B";

    }
    else{
        grade.innerHTML="RA";

    }

    function numberToWords(num) {
        const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
        const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy','Eighty','Ninty'];

        if (num < 20) {
          return ones[num];
        }

        if (num < 100) {
          return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + ones[num % 10] : '');
        }

        if (num < 701) {
          return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' and ' + numberToWords(num % 100) : '');
        }

        return 'Number out of range';
      }

      document.getElementById("word").innerText=numberToWords(total);


      document.getElementById("tot1").innerText=numberToWords(parseInt(result1.textContent));
      document.getElementById("tot2").innerText=numberToWords(parseInt(result2.textContent));
      document.getElementById("tot3").innerText=numberToWords(parseInt(result3.textContent));
      document.getElementById("tot4").innerText=numberToWords(parseInt(result4.textContent));
      document.getElementById("tot5").innerText=numberToWords(parseInt(result5.textContent));
      document.getElementById("tot6").innerText=numberToWords(parseInt(result6.textContent));
      document.getElementById("tot7").innerText=numberToWords(parseInt(result7.textContent));
      document.getElementById("tot8").innerText=numberToWords(parseInt(result8.textContent));







 } 
