class Question {
    constructor(name, message){
        this.name = name,
        this.message = message
    }
}

class InputQuestion extends Question {
    constructor(name, message){
        super(name,message)
        this.type = "input"
    }
}

const questions = [
    new InputQuestion('title',"what is the title you want?"),
    new InputQuestion('Description',"what is the title you want?"),
    new InputQuestion('Table of Contents',"what is the title you want?"),
    new InputQuestion('Installation',"what is the title you want?"),
    new InputQuestion('Usage',"what is the title you want?"),
    new InputQuestion('License',"what is the title you want?"),
    new InputQuestion('Contributing',"what is the title you want?"),
    new InputQuestion('Tests',"what is the title you want?"),
    new InputQuestion('Questions',"what is the title you want?")
];

module.exports = questions