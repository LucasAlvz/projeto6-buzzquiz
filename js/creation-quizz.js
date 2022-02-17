let amountOf = {
    levels: 0,
    questions: 0
}
let form = {
    title: null,
    image: null,
    questions: [],
    levels: []
};
let questionObject = {
    title: null,
    color: null,
    answers: []
}
let levelObject = {
    title: null,
    image: null,
    text: null,
    minValue: null
}
let answerObject = {
    text: null,
    image: null,
    isCorrectAnswer: null
}

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
                                <button onclick="checkInformation(), createQuizzQuestions();">Prosseguir para criar perguntas</button>
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

    // let controle = 0;
    // if(!regularExpression.test(form.image)){
    //     console.log("Esta não é uma url valida");
    //     controle ++;
    // }
    // if(!(form.title.length >= 20 && form.title.length <= 65)){
    //     console.log("O titulo tem que ter entre 20 e 60 caracteres");
    //     controle ++;
    // }
    // if(amountOf.questions < 3){
    //     console.log("A quantidade de perguntas tem de ser ao menos 3");
    //     controle ++;
    // }
    // if(amountOf.levels < 2){
    //     console.log("A quantidade de niveis tem de ser ao menos 2");
    //     controle ++;
    // }
    // if(controle === 0){
    //     createQuizzQuestions();
    // }
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
        <button onclick="createQuizzLevels(), pickUpQuestions()">Prosseguir para criar níveis</button>
    </div>
`;
    showQuestions();
}
// Mostra a tela de criação
function showQuestions() {
    const formPosition = document.querySelector(".create-quizz-questions div");
    for (let i = 0; i < amountOf.questions; i++) {
        formPosition.innerHTML += `
        <form id="question-${i+1}" class="questions-form"> 
            <p>Pergunta ${i + 1}</p>
            <div>
                <input id="question-title" placeholder="Texto da pergunta"></input>
                <input id="question-color" placeholder="Cor de fundo da pergunta"></input>
            </div>
            <p>Resposta correta</p>
            <div>
                <input id="question-answer-1" placeholder="Resposta Correta"></input>
                <input id="question-url-1" placeholder="URL da imagem"></input>
            </div>
            <p>Respostas incorretas</p>
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
        <button onclick="finalizeQuizzCreation()">Finalizar Quizz</button>
    </div>
   `;
    showLevels();
}

function showLevels() {
    const formPosition = document.querySelector(".create-quizz-levels div");
    for (let i = 0; i < amountOf.levels; i++) {
        formPosition.innerHTML += `
        <form id="level-${i + 1}" class="levels-form"> 
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
    console.log("entrei");
    for(let i = 0; i < amountOf.questions; i++){
        questionObject.title = document.querySelector(`#question-${i+1} #question-title`).value;
        questionObject.color = document.querySelector(`#question-${i+1} #question-color`).value;
        for(let j = 0; j < 4; j++){
            answerObject.text = document.querySelector(`#question-${i+1} #question-answer-${j+1}`).value;
            answerObject.image = document.querySelector(`#question-${i+1} #question-url-${j+1}`).value;

            if(j === 0){
                answerObject.isCorrectAnswer = true;
            }
            else{
                answerObject.isCorrectAnswer = false;
            }
            if(answerObject.text){
                console.log(answerObject);
                questionObject.answers.push(answerObject);
            }
        }
    }
}


