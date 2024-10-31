let subtaskArray = [];
let choosedContact = [];

function handleSubmit(event) {   // prüfen welcher button geklickt wurde
    event.preventDefault();
    const submitButton = event.submitter;
    if (submitButton.id === "clear") {
        clear();
    } else if (submitButton.id === "createTask") {
        createTask();
    }
    return false;
}


function clear() {
    console.log("clear test test");
}


async function createTask() {
    //await updateLS();
    console.log("createTask test test");
    let newTask = getInputValues();
    console.log('neue Task:', newTask);
    //postData('toDos', newTask);

}


function getInputValues() {
    let title = getTitle();
    let dueDate = getDueDate();
    let priority = taskPrioType();
    let category = chooseCategory();
    let assignedTo = taskAssignedToContact();
    let subTasks = getSubtasks();
    //return title
    return {
        'headline': title, 'date': dueDate, 'priority': priority, 'story': category,
    }
}


function getTitle() {
    let title = document.getElementById('addTaskTitle').value.trim();
    return title;
}


function getDescription() {
    // Description holen
}


function getDueDate() {
    let dueDate = document.getElementById('inputDate').value;
    return dueDate
}


function taskAssignedToContact() {
    // Task an Kontakt zuweisen
}


function taskPrioType() {
    // Priorität zuweisen
}


function chooseCategory() {
    // Category auswählen
}


function getSubtasks() {
    //subtask holen
}


function toggleAssignedToDropDown() {
    renderAssignedToContacts();
    let imgDropdownToggle = document.getElementById('imgDropdownToggle');
    let dropdownMenu = document.getElementById('dropDownMenu');
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'flex';
        imgDropdownToggle.src = './assets/img/arrow_drop_up.svg';
    } else {
        dropdownMenu.style.display = 'none';
        imgDropdownToggle.src = './assets/img/arrow_drop_down.svg';
    }
}


function toggleCategoryDropDown() {
    let imgCategoryDropdownToggle = document.getElementById('imgCategoryDropdownToggle');
    let categoryDropdownMenu = document.getElementById('categoryDropdownMenu');
    if (categoryDropdownMenu.style.display === 'none') {
        categoryDropdownMenu.style.display = 'flex';
        imgCategoryDropdownToggle.src = './assets/img/arrow_drop_up.svg';
    } else {
        categoryDropdownMenu.style.display = 'none';
        imgCategoryDropdownToggle.src = './assets/img/arrow_drop_down.svg';
    }
}


function setCategory(category) {
    document.getElementById('category-header').innerText = category;
    categoryDropdownMenu.style.display = 'none';
    imgCategoryDropdownToggle.src = './assets/img/arrow_drop_down.svg';
}


function addSubTask() {
    document.getElementById('rendered-task-container').style = 'opacity:1';
    let subtaskInput = document.getElementById('subtasks-input').value;
    subtaskArray.push(subtaskInput);
    let taskContainer = document.getElementById('rendered-task-container');
    taskContainer.innerHTML = '';
    for (let i = 0; i < subtaskArray.length; i++) {
        let subtask = subtaskArray[i];
        taskContainer.innerHTML += `
        <ul class="subtaskList">
            <li>${subtask}</li>
        </ul>
        `
    }
    document.getElementById('subtasks-input').value = '';
    document.getElementById('actionIcons').style = 'display:none';
    document.getElementById('plusIcon').style = 'display:block';
}


function toggleSubtaskIcons() {
    let plusIcon = document.getElementById('plusIcon');
    let actionIcons = document.getElementById('actionIcons');
    if (plusIcon.style.display === 'none') {
        plusIcon.style.display = 'block';
        actionIcons.style.display = 'none';
    } else {
        plusIcon.style.display = 'none';
        actionIcons.style.display = 'flex';
    }
}


function deleteInputSubtaskValue() {
    document.getElementById('subtasks-input').value = '';
    document.getElementById('actionIcons').style = 'display:none';
    document.getElementById('plusIcon').style = 'display:block';
}


function renderInitials(initial, color) {
    let renderedInitialsContainer = document.getElementById('renderedInitialsContainer');
    renderedInitialsContainer.innerHTML = '';
    let checkboxes = document.querySelectorAll(".dropDownContacts input[type='checkbox']");
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            renderedInitialsContainer.innerHTML += /*html*/`
            <div class="renderedInitial" style="background-color: ${color}">${initial}</div>
            `
        }
    })
}




/*
function renderInitials(initial, color) {
    let renderedInitialsContainer = document.getElementById('renderedInitialsContainer');
    renderedInitialsContainer.innerHTML = '';
    let checkboxes = document.querySelectorAll(".dropDownContacts input[type='checkbox']");
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
             let newDivElement = document.createElement('div');
             newDivElement.classList.add('renderedInitial');
             newDivElement.style.backgroundColor = color;
             newDivElement.textContent = initial;
             renderedInitialsContainer.appendChild(newDivElement);
        }
    })
}*/


// function renderInitials(initial, color) {
//     document.getElementById('renderedInitialsContainer').innerHTML += /*html*/`
//       <div class="renderedInitial" style="background-color: ${color}">${initial}</div>
//       `
// }


function renderAssignedToContacts() {
    document.getElementById('dropDownMenu').innerHTML = '';
    for (let i = 0; i < contactsOnly.length; i++) {
        let name = contactsOnly[i].name;
        let initial = contactsOnly[i].initials;
        let color = contactsOnly[i].color;
        document.getElementById('dropDownMenu').innerHTML += temp_generateHtmlAssignedToContacts(name, initial, color);
        console.log('name und initials:', name, initial);
    }
}