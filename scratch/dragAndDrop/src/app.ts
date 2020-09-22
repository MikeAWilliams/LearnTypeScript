//auto bind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

interface Validatable {
    value : string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number; 
}

function validateNumber(input: Validatable): boolean {
    if(typeof input.value == 'string') return false;
    if(input.max != null && input.value > input.max){
        return false;
    }
    if(input.min != null && input.value < input.min){
        return false;
    }
    return true;
}

function validateString(input: Validatable): boolean {
    if(typeof input.value == 'number') return false;
    if(input.maxLength != null && input.value.length > input.maxLength){
        return false;
    }
    if(input.minLength != null && input.value.length < input.minLength){
        return false;
    }
    return true;
}

function validate(input: Validatable): boolean {

    if(input.required) {
        if(input.value.toString().trim().length == 0){
            return false;
        }
        if(typeof input.value == 'string') {
            return validateString(input);
        }
        return validateNumber(input);
    }
    return true;
}

class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement:HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor (){
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;
        this.hostElement = <HTMLDivElement>document.getElementById('app')!;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = <HTMLFormElement>importedNode.firstElementChild;
        this.element.id = 'user-input';

        this.titleInputElement = <HTMLInputElement>this.element.querySelector('#title');
        this.descriptionInputElement = <HTMLInputElement>this.element.querySelector('#description');
        this.peopleInputElement = <HTMLInputElement>this.element.querySelector('#people');

        this.configure();

        this.attach();
    }

    private clear() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }

    private gatherUserInput(): [string, string, number] | void {
        const title = this.titleInputElement.value;
        const description = this.descriptionInputElement.value;
        const people = this.peopleInputElement.value;

        const titleValidate: Validatable = {
            value: title,
            required: true
        };

        const descriptionValidate: Validatable = {
            value: description,
            required: true,
            minLength: 5
        };

        const peopleValidate: Validatable = {
            value: +people,
            required: true,
            min: 1,
            max: 5
        };
        if(!(validate(titleValidate) && validate(descriptionValidate) && validate(peopleValidate))){
            alert('Invalid input, please try again!');
            return;
        }


        return [title, description, parseInt(people)];
    }

    @autobind
    private submitHandler(event:Event) {
       event.preventDefault();
       const input = this.gatherUserInput();
       if(!Array.isArray(input)){
           return;
       }
       const [title, description, people] = input;
       console.log(title, description, people);
       this.clear();
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();