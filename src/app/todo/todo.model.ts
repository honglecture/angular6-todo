export class Todo{

    private id:number;
    private content:string;
    private writer:string;
    private isCompleted:boolean;
    private regDate:Date;
    
    get Id(): number {
        return this.id;
    }
 
    set Id(id: number) {
        this.id = id;
    }
    
    get Content(): string {
        return this.content;
    }
 
    set Content(content: string) {
        this.content = content;
    }

    get Writer(): string {
        return this.writer;
    }

    set Writer(writer: string) {
        this.writer = writer;
    }

    get IsCompleted(): boolean {
        return this.isCompleted;
    }
 
    set IsCompleted(isCompleted: boolean) {
        this.isCompleted = isCompleted;
    }

    get RegDate(): Date {
        return this.regDate;
    }
 
    set RegDate(regDate: Date) {
        this.regDate = regDate;
    }

}