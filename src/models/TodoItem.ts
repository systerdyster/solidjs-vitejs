import { nanoid } from 'nanoid';

export class TodoItem {
    public id: string;
    public text: string;
    public done: boolean = false;


    constructor(text: string) { 
        this.id = nanoid();
        this.text = text;
    }
}