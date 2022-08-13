alert ("مرحباً بك في موقعي الذي سيحسب درجتك!!");

let grade = prompt (`اكتب الدرجة هنا`);

 console.log(grade);

 if (grade >=90 && grade <=100) {
    console.log('%cلقد حصلت على امتياز 🥳', 'color: green; background: yellow; font-size: 18px');
} else if ( grade >=80 && grade <90) {
    console.log('%cلقد حصلت على جيد جداً🤩', 'color: green; background: yellow; font-size: 18px');
} else if ( grade >=70 && grade <80){
    console.log('%cلقد حصلت على جيد🙂', 'color: green; background: yellow; font-size: 18px');
} else if (grade >=60 && grade <70) {
    console.log('%cلقد حصلت على مقبول😕', 'color: green; background: yellow; font-size: 18px');
} else if ( grade >=50 && grade <60) {
    console.log('%cلقد حصلت على ضعيف☹️', 'color: green; background: yellow; font-size: 18px');
} else { 
    console.log( "راسب💔")
}
// جافاسكربت ليست جافا!!!ا!!!

