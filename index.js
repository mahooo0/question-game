const mainobj={
    questionsArr:[
        qestionq1={
            question :"What things you can never eat for breakfast?",
            answer :"Lunch",
            variants : ["Lunch","meet","banana"]
        },
        qestionq2={
            question :"What is always coming but never arrives?",
            answer :"Tomorrow",
            variants : ["tuday","Tomorrow","happiness"]
        },
        qestionq3={
            question :" What goes up but never ever comes down?",
            answer :"age",
            variants : ["mood","age","road"]
        },
        qestionq4={
            question :" If you have one, you want to share it. But once you share it, you do not have it. What is it?",
            answer :"A secret",
            variants : ["bliss","feelings","A secret"]
        },
        qestionq5={
            question :" If you have a bowl with six apples and you take away four, how many do you have?",
            answer :"The 4 you took",
            variants : ["The 4 you took","2","3"]
        },
    ],
    qusIn:function(obj){
        Question.innerHTML=obj.question
        // answer1.innerHTML=obj.variants[0]
        // answer2.innerHTML=obj.variants[1]
        // answer3.innerHTML=obj.variants[2]
        button_section.innerHTML=obj.variants.map((item)=>`<button class="btn btn-outline-light m-5" id="answer3" value="${item}" onclick="fun('${item}')">${item}</button>`).join("")
        this.questionNumber+=1
    },
    qusIn2:function(obj){
        Question.innerHTML=obj.question
        button_section.innerHTML=obj.variants.map((item)=>`<button class="btn btn-outline-light m-5" id="answer3" value="${item}" onclick="fun2('${item}')">${item}</button>`).join("")
        
    },
    questionNumber:0,

}

const button_section=document.querySelector("#button_section")
const Question=document.querySelector("#Question")
const points=document.querySelector("#points")

mainobj.qusIn(mainobj.questionsArr[mainobj.questionNumber])
let point=0
const fun2= value=>{
    let {questionsArr}=mainobj
    let question=mainobj.questionsArr[mainobj.questionNumber-1]
    let question2=mainobj.questionsArr[questionsArr.length-1]

    if(value=="The 4 you took"){
        point+=1
        points.innerHTML=`point:${point}`
    }
    console.log(value);
    console.log(question.answer);

    button_section.innerHTML=""
    Question.innerHTML=`game end you have got ${point} points`

}
function fun(value){
    let question=mainobj.questionsArr[mainobj.questionNumber-1]
    if(value==question.answer){
        point+=1
        points.innerHTML=`point:${point}`
    }
    console.log(value);
    console.log(question.answer);

    
    if(mainobj.questionNumber==mainobj.questionsArr.length-1){
        mainobj.qusIn2(mainobj.questionsArr[mainobj.questionNumber])
    }else{
        mainobj.qusIn(mainobj.questionsArr[mainobj.questionNumber])
    }
}
