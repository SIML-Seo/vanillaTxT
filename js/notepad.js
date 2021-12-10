class notepad{
    close(){};
    
    init(){
        localStorage.clear();        
    };
}

let start = new notepad();

start.init();