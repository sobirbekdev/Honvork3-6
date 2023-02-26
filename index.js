let Math =prompt("Iltimos Summangizdi kriting ");

let x=500; //Borish va kelish samaliyot bileti narxi $
let t=11650.03; //  1 yevro so'm
let a=250; //mexmonxona to'lovi uchun
let y=120; //muzey va ko'ngil ochar joylar uchon yevro
let z=10650.34; // 1$ so'm

let dollorKursi=((x+a)*z);
let yevroKursi =(y*t);

let hisobot=(dollorKursi+yevroKursi)
let saytTitle = document.querySelector ("#title")


if (Math>=hisobot){
    saytTitle.textContent ="Oq yo'l sizda yetarli mablag' mavjud"
  console.log(" Oq yo'l sizda yetarli mablag' mavjud ")
}else if(Math<hisobot){
    saytTitle.textContent=" Sizda yetarli mablag' mavjud ems biroz sabir qiling."
 console.log (" Sizda yetarli mablag' mavjud ems biroz sabir qiling. ")
};