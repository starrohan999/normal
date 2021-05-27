const countdown = () => {
    const countDate = new Date("June 27, 2021 00:00:00").getTime();
    const nowTime = new Date().getTime();
    const gap = countDate-nowTime;

   //Simple time calculation
   const second=1000;
   const minute=second*60;
   const hour=minute*60;
   const day=hour*24;

   const textday = Math.floor(gap/day);
   const texthour = Math.floor((gap%day)/hour);
   const textminute = Math.floor((gap%hour)/minute);
   const textsecond = Math.floor((gap%minute)/second);

   document.querySelector(".day").innerText=textday;
   document.querySelector(".hour").innerText=texthour
   document.querySelector(".minutes").innerText=textminute;
   document.querySelector(".seconds").innerText=textsecond;
   
}
setInterval(countdown,1000);