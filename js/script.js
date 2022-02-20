let quizzes = []
let userQuizzesIds = []
// const URL = "https://mock-api.driven.com.br/api/v4/buzzquizz/"
let existsUserQuizzes = false

//Pega os quizzes do servidor
function pickUpAllQuizzes() {
    axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes").then(aleatorio).catch((erro) => console.log(`${erro.response.status} Erro ao pegar os quizzes`));
}
function aleatorio(teste) {
    quizzes = teste.data
    pickUpUserQuizzes()
}
function erro(erro) {
    console.log(erro);

}
function pickUpUserQuizzes() {
    const userQuizzesList = document.querySelector(".user-quizzes-list")
    for (let i = 0; i < quizzes.length; i++) {
        if (localStorage.getItem(quizzes[i].id.toString())) {
            userQuizzesIds.push(quizzes[i].id)
            existsUserQuizzes = true
            let userQuizz = JSON.parse(localStorage.getItem(quizzes[i].id))
            userQuizzesList.innerHTML +=
                `<li onclick="showPageQuizz(${quizzes[i].id})"><p class="quizz user-qzz${i}"><span> <svg onclick="editUserQuizz(${quizzes[i].id})" width="19" height="18" viewBox="0 0 19 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.88672 14.1253L8.17537 14.1107L17.536 4.83956C17.9033 4.47221 18.1055 3.98435 18.1055 3.4654C18.1055 2.94644 17.9033 2.45859 17.536 2.09124L15.9947 0.54993C15.26 -0.184768 13.9781 -0.18088 13.2493 0.547015L3.88672 9.82015V14.1253ZM14.6205 1.92409L16.1647 3.46248L14.6127 4.99991L13.0714 3.45957L14.6205 1.92409ZM5.83036 10.6306L11.6905 4.82595L13.2318 6.36726L7.37265 12.17L5.83036 12.1749V10.6306Z"
                    fill="white" />
                <path
                    d="M1.94365 18H15.5492C16.6211 18 17.4928 17.1283 17.4928 16.0564V7.6326L15.5492 9.57625V16.0564H5.01266C4.98739 16.0564 4.96115 16.0661 4.93589 16.0661C4.90382 16.0661 4.87175 16.0573 4.8387 16.0564H1.94365V2.45085H8.59771L10.5414 0.507202H1.94365C0.871725 0.507202 0 1.37893 0 2.45085V16.0564C0 17.1283 0.871725 18 1.94365 18Z"
                    fill="white" />
            </svg>
            <ion-icon onclick="deleteUserQuizz(${quizzes[i].id})" name="trash-outline"></ion-icon>
        </span>${userQuizz.title}</p>`
            document.querySelector(`.user-qzz${i}`).style.background = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${userQuizz.image})`
        }
    }
    if (existsUserQuizzes) {
        console.log("entrei");
        const noQuizCreatedClass = document.querySelector(".no-quiz-created")
        noQuizCreatedClass.classList.add("hidden")
        document.querySelector(".user-quizzes span").innerHTML +=
            `
            <div class="title">
                <p>Seus Quizzes</p>
                <ion-icon onclick="createQuizz()" name="add-circle-sharp"></ion-icon>
            </div>
            `
    }
    showAllQuizzes(quizzes)

}
// Mostra os quizzes na tela inicial
function showAllQuizzes(quizzes) {
    const allQuizzesList = document.querySelector(".all-quizzes-list");
    for (let i = 0; i < quizzes.length; i++) {
        if (!userQuizzesIds.includes(quizzes[i].id)) {
            allQuizzesList.innerHTML +=
                `<li onclick="showPageQuizz(quizzes[${i}])"><p class="quizz qzz${i}">${quizzes[i].title}</p>`
            document.querySelector(`.qzz${i}`).style.background = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${quizzes[i].image})`
        }

    }
}

pickUpAllQuizzes();
