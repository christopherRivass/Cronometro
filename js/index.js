const btn_start=document.querySelector('.btn-start');
const btn_stop=document.querySelector('.btn-stop');
const btn_reset=document.querySelector('.btn-reset');

class cronometro{
    constructor() {
        this.milisecond=0;
        this.second=0;
        this.minut=0;
        this.hours=0;
    }
    start(bolean){
        if(bolean == true){
            this.milisecond++;
            if(this.milisecond == 60)return this.second++,this.milisecond=0;
            if(this.second == 60)return  this.minut++,this.second=0;
            if(this.minut == 60)return  this.hours++,this.minut=0;

        }
    }
}

