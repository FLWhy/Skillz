ScrollReveal({ reset: true });
ScrollReveal().reveal('.txt_column',       { delay: 200 }, );
ScrollReveal().reveal('.img_column',       { delay: 200 } ,);
ScrollReveal().reveal('.second_row',       { delay: 200 } ,);
ScrollReveal().reveal('.third_row',        { delay: 200 } ,);
ScrollReveal().reveal('.forth_row',        { delay: 200 }, );
ScrollReveal().reveal('.workshop',         { delay: 200 } ,);
ScrollReveal().reveal('.upcoming-workshop',{ delay: 200 } ,);
ScrollReveal().reveal('.workshop_squares', { delay: 200 }, );
ScrollReveal().reveal('.feedback_stars',   { delay: 200 } ,);
ScrollReveal().reveal('.about_container',  { delay: 200 } ,);
ScrollReveal().reveal('.feedback_txt',     { delay: 200 } ,);
ScrollReveal().reveal('.blog_txt',         { delay: 200 } ,);
ScrollReveal().reveal('.blog_squares',     { delay: 200 } ,);
ScrollReveal().reveal('.faq_header',       { delay: 200 } ,);
ScrollReveal().reveal('#faq-row1',         { delay: 200 } ,);
ScrollReveal().reveal('#faq-row2',         { delay: 200 } ,);
ScrollReveal().reveal('#faq-row3',         { delay: 200 } ,);
ScrollReveal().reveal('#faq-row4',         { delay: 200 } ,);
ScrollReveal().reveal('#faq-row5',         { delay: 200 } ,);
ScrollReveal().reveal('#faq-row1',         { delay: 200 } ,);
ScrollReveal().reveal('.logo',             { delay: 200 } ,);
ScrollReveal().reveal('.link_columns',     { delay: 200 } ,);



function Click1(){
    let paragraph = document.getElementById("secondFaqP1")
    let btn = document.getElementById("detBtn1")
    let FaQ = document.getElementById('faq-row1')
    FaQ.style.height = '100px'
    paragraph.style.transition = '.2s'
    if (paragraph.style.opacity == '0'){
        paragraph.style.opacity = '1'
        FaQ.style.height = '210px'
    }
    else{
        paragraph.style.opacity = '0'
        FaQ.style.height = '100px'
    }
}
function Click2(){
    let paragraph = document.getElementById("secondFaqP2")
    let btn = document.getElementById("detBtn2")
    let FaQ = document.getElementById('faq-row2')
    FaQ.style.height = '100px'
    paragraph.style.transition = '.2s'
    if (paragraph.style.opacity == '0'){
        paragraph.style.opacity = '1'
        FaQ.style.height = '210px'
    }
    else{
        paragraph.style.opacity = '0'
        FaQ.style.height = '100px'
    }
}
function Click3(){
    let paragraph = document.getElementById("secondFaqP3")
    let btn = document.getElementById("detBtn3")
    let FaQ = document.getElementById('faq-row3')
    FaQ.style.height = '100px'
    paragraph.style.transition = '.2s'
    if (paragraph.style.opacity == '0'){
        paragraph.style.opacity = '1'
        FaQ.style.height = '210px'
    }
    else{
        paragraph.style.opacity = '0'
        FaQ.style.height = '100px'
    }
}
function Click4(){
    let paragraph = document.getElementById("secondFaqP4")
    let btn = document.getElementById("detBtn4")
    let FaQ = document.getElementById('faq-row4')
    FaQ.style.height = '100px'
    paragraph.style.transition = '.2s'
    if (paragraph.style.opacity == '0'){
        paragraph.style.opacity = '1'
        FaQ.style.height = '210px'
    }
    else{
        paragraph.style.opacity = '0'
        FaQ.style.height = '100px'
    }
}
function Click5(){
    let paragraph = document.getElementById("secondFaqP5")
    let btn = document.getElementById("detBtn5")
    let FaQ = document.getElementById('faq-row5')
    FaQ.style.height = '100px'
    paragraph.style.transition = '.2s'
    if (paragraph.style.opacity == '0'){
        paragraph.style.opacity = '1'
        FaQ.style.height = '210px'
    }
    else{
        paragraph.style.opacity = '0'
        FaQ.style.height = '100px'
    }
}