let regularExpression = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?|magnet:\?xt=urn:btih:/;
let colorRegularExpression = /^#[0-9A-F]{6}$/i;
let amountOf = {
    levels: 0,
    questions: 0
};
let form = {
    title: null,
    image: null,
    questions: [],
    levels: []
};




// Chama a tela de criação do quizz
function createQuizz() {
    const main = document.querySelector("main");
    const navHome = document.querySelector("main nav");
    navHome.classList.add("hidden");
    main.innerHTML += `
                        <section class="quizz-creation-page">
                            <div class="create-quizz-informations">
                                <h1>Comece pelo começo</h1>
                                <form>
                                    <input placeholder="Título do seu quizz"></input>
                                    <input placeholder="URL da imagem do seu quizz"></input>
                                    <input placeholder="Quantidade de perguntas do quizz"></input>
                                    <input placeholder="Quantidade de níveis do quizz"></input>
                                </form>
                                <button onclick="checkInformation();">Prosseguir para criar perguntas</button>
                            </div>
                        </section>
    `;
}
// Verifica as informações do formulario inicial
function checkInformation() {
    form.title = document.querySelector(".create-quizz-informations input:first-child").value;
    form.image = "https://th.bing.com/th/id/R.134275efe2edde9c1b2f54a3b41d7e9b?rik=yPQwMnuA0FjmbA&riu=http%3a%2f%2fferramentasinteligentes.com.br%2fwp-content%2fuploads%2f2015%2f06%2fwater-209901_1280.jpg&ehk=xnl0YRcaEQ96ra5oHwKkHhaJ9GeUczedE05Ahfq8UN0%3d&risl=&pid=ImgRaw&r=0"                                                                       //document.querySelector(".create-quizz-informations input:nth-child(2)").value;
    amountOf.questions = document.querySelector(".create-quizz-informations input:nth-child(3)").value;
    amountOf.levels = document.querySelector(".create-quizz-informations input:nth-child(4)").value;

    // if(!(form.title.length >= 20 && form.title.length <= 65)){
    //     alert("O titulo tem que ter entre 20 e 65 caracteres");
    // }
    // if(!(regularExpression.test(form.image))){
    //     alert("Esta não é uma url valida");
    // }
    // if(amountOf.questions < 3){
    //     alert("A quantidade de perguntas tem de ser ao menos 3");
    // }
    // if(amountOf.levels < 2){
    //     alert("A quantidade de niveis tem de ser ao menos 2");
    // }
    // if((regularExpression.test(form.image)) && (form.title.length >= 20 && form.title.length <= 65) && (amountOf.questions >= 3) && (amountOf.levels >= 2)){
        
    // }
    createQuizzQuestions();

}

// Chama a tela de criação das perguntas do quizz
function createQuizzQuestions() {
    const createQuizzQuestions = document.querySelector(".create-quizz-informations");
    const creationPage = document.querySelector(".quizz-creation-page");
    createQuizzQuestions.style.display = "none";
    creationPage.innerHTML += `
    <div class="create-quizz-questions">
        <h1>Crie suas perguntas</h1>
        <div></div>
        <button onclick="pickUpQuestions();">Prosseguir para criar níveis</button>
    </div>
`;
    showQuestions();
}
// Mostra a tela de criação
function showQuestions() {
    const formPosition = document.querySelector(".create-quizz-questions div");
    const form = document.querySelector("questions-form");
    for (let i = 0; i < amountOf.questions; i++) {
        formPosition.innerHTML += `
        <form class="questions-form question-${i + 1}"> 
            <p>Pergunta ${i + 1}</p>
            <p>Resposta correta</p>
            <p>Respostas incorretas</p>
            <div>
                <input id="question-title" placeholder="Texto da pergunta"></input>
                <input id="question-color" placeholder="Cor de fundo da pergunta"></input>
            </div>
           
            <div>
                <input id="question-answer-1" placeholder="Resposta Correta"></input>
                <input id="question-url-1" placeholder="URL da imagem"></input>
            </div>
            
            <div>
                <input id="question-answer-2" placeholder="Resposta incorreta 1"></input>
                <input id="question-url-2" placeholder="URL da imagem 1"></input>
            </div>
            <div>
                <input id="question-answer-3" placeholder="Resposta incorreta 2"></input>
                <input id="question-url-3" placeholder="URL da imagem 2"></input>
            </div>
            <div>
                <input id="question-answer-4" placeholder="Resposta incorreta 3"></input>
                <input id="question-url-4" placeholder="URL da imagem 3"></input>
            </div>
        </form>`
    }
}

function createQuizzLevels() {
    const createQuizzLevels = document.querySelector(".create-quizz-questions");
    const creationPage = document.querySelector(".quizz-creation-page");
    createQuizzLevels.style.display = "none";
    creationPage.innerHTML += `
    <div class="create-quizz-levels">
        <h1>Agora, decida os níveis!</h1>
        <div></div>
        <button onclick="pickUpLevels()">Finalizar Quizz</button>
    </div>
   `;
    showLevels();
}

function showLevels() {
    const formPosition = document.querySelector(".create-quizz-levels div");
    for (let i = 0; i < amountOf.levels; i++) {
        formPosition.innerHTML += `
        <form class="levels-form level-${i + 1}"> 
            <p>Nível ${i + 1}</p>
            <div>
                <input placeholder="Título do nível"></input>
                <input placeholder="% de acerto mínima"></input>
                <input placeholder="URL da imagem do nível"></input>
                <textarea placeholder="Descrição do nível"></textarea>
            </div>  
        </form>`
    }
}

function finalizeQuizzCreation() {
    const createQuizzInformation = document.querySelector(".create-quizz-levels");
    const creationPage = document.querySelector(".quizz-creation-page");
    createQuizzInformation.style.display = "none";
    creationPage.innerHTML += `
    <div class="finalize-creation">
    <h1>Seu quizz está pronto!</h1>
    <img src="${form.image}"></img>
    <button>Acessar Quizz</button>
    <button>Voltar pra home</button>
    </div>
    `
}


function pickUpQuestions() {

    for (let i = 0; i < 2; i++) {
        let questionObject = {
            title: null,
            color: null,
            answers: []
        };
        questionObject.title = document.querySelector(`.question-${i + 1} #question-title`).value;
        questionObject.color = document.querySelector(`.question-${i + 1} #question-color`).value;
        for (let j = 1; j <= 4; j++) {
            let answerObject = {
                text: null,
                image: null,
                isCorrectAnswer: null
            };
            answerObject.text = document.querySelector(`.question-${i + 1} #question-answer-${j}`).value;
            answerObject.image = document.querySelector(`.question-${i + 1} #question-url-${j}`).value;
            if (j === 1) {
                answerObject.isCorrectAnswer = true;
            }
            else {
                answerObject.isCorrectAnswer = false;
            }
            if(answerObject.text){
            questionObject.answers.push(answerObject);
            }
        }
        form.questions.push(questionObject);
    }

    // for(let k = 0; k < amountOf.questions; k++){
    //     if(form.questions[k].title.length < 20){
    //         alert("O titulo da questão deve ter pelo menos 20 caracteres");
    //     }
        // if(!colorRegularExpression.test(form.questions[k].color)){
        //     alert("A cor da pergunta deve ser passada em formato hexadecimal");
        // }
        // if(!form.questions[k].title){
        //     alert("O texto da questão não pode estar vazio");
        // }
        // for(let f = 0; f < 4; f++){
        //     if(!(regularExpression.test(form.questions[k].levels[f].image))){
        //         alert("A imagem da resposta deve ter uma url valida");
        //     }
        //     if(!form.questions[k].levels[f].isCorrectAnswer.includes(true)){
        //         alert("A questão deve conter ao menos uma respota correta");
        //     }
        //     if(form.questions[k].levels[f].length < 2){
        //         alert("A questão deve conter ao menos duas respostas");
        //     }
        //     if((form.questions[k].title.length > 20) && (colorRegularExpression.test(form.questions[k].color)) && (form.questions[k].title) && (regularExpression.test(form.questions[k].levels[f].image)) && (form.questions[k].levels[f].isCorrectAnswer.includes(true)) && (form.questions[k].levels[f].length >= 2)){
        //         createQuizzLevels();
        //     }
        // }
        // form.questions = [];
    // }




   
}

function pickUpLevels() {

    for (let i = 1; i <= amountOf.levels; i++) {
        let levelObject = {
            title: null,
            image: null,
            text: null,
            minValue: null
        };

        levelObject.title = document.querySelector(`.level-${i} input:first-of-type`).value;
        levelObject.minValue = document.querySelector(`.level-${i} input:nth-of-type(2)`).value;
        levelObject.image = document.querySelector(`.level-${i} input:nth-of-type(3)`).value;
        levelObject.text = document.querySelector(`.level-${i} textarea`).value;

        form.levels.push(levelObject);
    }


    // for (let j = 0; j < amountOf.levels; j++) {
    //     if (form.levels[j].title.length < 10) {
    //         alert("O titulo do nível deve conter pelo menos 10 caracteres");
    //     }
    //     if ((form.levels[j].minValue < 0) || (form.levels[j].minValue > 100) || (form.levels[j].minValue === '')) {
    //         alert("A porcentagem de acerto minima deve ser um número entre 0 e 100");
    //     }
    //     if (!(regularExpression.test(form.levels[j].image))) {
    //         alert("Esta não é uma url valida");
    //     }
    //     if (form.levels[j].text.length < 30) {
    //         alert("A descrição do nível deve ter pelo menos 30 caracteres");
    //     }
    //     if (!form.levels[j].minValue.includes(0)) {
    //         alert("Pelo menos um dos níveis deve conter uma % de acerto igual a 0")
    //     }
    //     if ((form.levels[j].title.length >= 10) && (!(form.levels[j].minValue < 0) || (form.levels[j].minValue > 100) || (form.levels[j].minValue === '')) && (regularExpression.test(form.levels[j].image) && (form.levels[j].text.length >= 30) && (form.levels[j].minValue.includes(0)))) {
    //         finalizeQuizzCreation();
    //     }
    //     form.levels = [];
    // }

}

