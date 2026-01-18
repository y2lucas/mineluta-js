let log = new Log(document.querySelector('.log'));        


let char = new Knight("Lucas");
let Monster = new BigMonster();
const stage = new Stage(
    char,
    Monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
)

stage.start();

