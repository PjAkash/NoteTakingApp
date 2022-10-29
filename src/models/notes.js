let storeNotes = {};
let counter = 0;

class Note {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    store = async () => {
        this.id = counter;
        storeNotes[this.id] = {
            id: this.id,
            title: this.title,
            content: this.content
        }
        counter++;
    }

    static get = async (id) => {
        let row = storeNotes[id];
        if (row == undefined){
            throw new Error('id not found:')
        }
        let note = new Note(row.id, row.title, row.content)
        return note;
    }
}

exports.Note = Note

