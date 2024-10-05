let currentDraggedElement;


function boardJS() {
  renderBoard();
  navbarTemplate();
//   renderToDo();
  updateHTML();
}




async function updateHTML() {
    let toDos = await getData('toDos');
    // console.log(toDos);
    let allToDos = Object.entries(toDos);
    // console.log(allToDos);
    
    let toDo = allToDos.filter(t => t[1]['category'] == 'toDo');
    // console.log(toDo);
    

    if(toDo.length !== 0){
        document.getElementById('toDo').innerHTML = '';
        for (let index = 0; index < toDo.length; index++) {
            const element = toDo[index];
            document.getElementById('toDo').innerHTML += htmlTechnicalTaskSmall(element);
            console.log(element);
        }
        
    }

    let progress = allToDos.filter(t => t[1]['category'] == 'inProgress');

    
    if(progress.length !== 0){
        document.getElementById('inProgress').innerHTML = '';
        for (let index = 0; index < progress.length; index++) {
            const element = progress[index];
            document.getElementById('inProgress').innerHTML += htmlTechnicalTaskSmall(element);
        }
    } 

    let feedback = allToDos.filter(t => t[1]['category'] == 'awaitFeedback');

    if(feedback.length !== 0){
        document.getElementById('awaitFeedback').innerHTML = '';
        for (let index = 0; index < feedback.length; index++) {
            const element = feedback[index];
            document.getElementById('awaitFeedback').innerHTML += htmlTechnicalTaskSmall(element);
        }
    }

    let done = allToDos.filter(t => t[1]['category'] == 'done');

    if(done.length !== 0){
        document.getElementById('done').innerHTML = '';
        for (let index = 0; index < done.length; index++) {
            const element = done[index];
            document.getElementById('done').innerHTML += htmlTechnicalTaskSmall(element);
        }
    }
}


function renderBoard() {
  let htmlContent = document.getElementById("main");
  let headerContent = document.getElementById("header");
  htmlContent.innerHTML = boardHtml();
  headerContent.innerHTML = returnHeaderHtml();
}

// function renderToDo(element) {
//   let htmlToDo = document.getElementById("toDo");
//   htmlToDo.innerHTML = "";
//   htmlToDo.innerHTML = htmlTechnicalTaskSmall(element);
// }

function startDraggin(id) {
  currentDraggedElement = id;
}

function allowDrop(ev) {
  ev.preventDefault();
}


// Pfad automatisieren. Funktioniert aber so. Der Kasten bleibt aber noch im 
// in der Alten DIV  
async function moveToCategory(category) {
  let toDos = await getData('toDos');
  let id = await getIdFromDb('/toDos', 'id',currentDraggedElement);
  console.log(id[0]);
  
  // let id = '-O8Rbnq2HQKCrbrSqzzL';
  putData('/toDos/' + id[0] + '/category', category)
  await updateHTML();
  boardJS();
}

function highlight(id) {
  document.getElementById(id).classList.add("drag-area-highlight");
}

function removeHighlight(id) {
  document.getElementById(id).classList.remove("drag-area-highlight");
}


// Sicherung ToDos anlegen
// await postData('/toDos',{headline:'Kochwelt Page & Recipe Recommender', id: 1, category:'done', description:'Build start page with recipe recommendation', assignedTo: {user1: 1, user2: 2, user3: 3}, subtasks:{task1: 1, task2: 2}, priority: 'medium', date: 'Datum'})