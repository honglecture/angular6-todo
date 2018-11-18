export class Member{

    private id:string;
    private password:string;
    private nickname:string;
    private regDate:Date;

    get Id(): string {
        return this.id;
    }
 
    set Id(id: string) {
        this.id = id;
    }
    
    get Password(): string {
        return this.password;
    }
 
    set Password(password: string) {
        this.password = password;
    }

    get Nickname(): string {
        return this.nickname;
    }
 
    set Nickname(nickname: string) {
        this.nickname = nickname;
    }

    get RegDate(): Date {
        return this.regDate;
    }
 
    set RegDate(regDate: Date) {
        this.regDate = regDate;
    }

}