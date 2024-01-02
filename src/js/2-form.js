const formLabel = document.querySelector("label");
formLabel.classList.add("form-label");

const formEmail = document.querySelector("input");
formEmail.classList.add("form-email");

const formTextarea = document.querySelector("textarea");
formTextarea.classList.add("textarea-input");

const formButton = document.querySelector('button');
formButton.classList.add('form-submit-button');

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

let formItems = {
    email: '',
    message: '',
}

const parsedFormContent = localStorage.getItem(STORAGE_KEY ?? "");
if (parsedFormContent) {
    formItems = JSON.parse(parsedFormContent);
    form.elements.email.value = formItems.email;
    form.elements.message.value = formItems.message;
}

form.addEventListener("input", () => {
    formItems.email = form.elements.email.value.trim();
    formItems.message = form.elements.message.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formItems));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
        if (
            form.elements.email.value.trim() === "" 
            || 
            form.elements.message.value.trim() === ""
            ) 
        {return alert("Email or message is empty!")}
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    console.log(formItems);
});

