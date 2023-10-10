export class ShowPlayers {
    pid:number;
    pname:string;
    pcategory:string;
    pcountry:string;
    page:number;
    pbudget:number;

constructor(pid:number,pname:string,pcategory:string,pcountry:string,page:number,pbudget:number) {
    this.pid=pid;
    this.pname=pname;
    this.pcategory=pcategory;
    this.pcountry=pcountry;
    this.page=page;
    this.pbudget=pbudget;
}
}