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
    new InputQuestion('Title',"what is the title you want?"),
    new InputQuestion('Description',"what is the description you want?"),
    new InputQuestion('TableOfContents',"what is the Table of Contents you want?"),
    new InputQuestion('Installation',"what is the installation you want?"),
    new InputQuestion('Usage',"what is the usage you want?"),
    new InputQuestion('License',"what is the License you want?"),
    new InputQuestion('Contributing',"what is the contribution you want?"),
    new InputQuestion('Tests',"what is the test you want?"),
    new InputQuestion('Questions',"what is the questions you want?")
];

module.exports = questions