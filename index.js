
const suites = ["spades", "hearts", "clubs", "diamond"];
const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let deck = [];
create_deck();



let first_card = draw_card();
let second_card = draw_card();
let sum = first_card + second_card;

let is_blackjack = false;
let is_alive = true;

let msg = "";

let message_el = document.querySelector("#message_el");
let cards_el = document.querySelector("#cards_el");
let sum_el = document.querySelector("#sum_el");

let cards_display = [];

cards_display.push(first_card);
cards_display.push(second_card);

function start_game(){
 
    render_game();
}

function render_game(){
    cards_el.textContent = cards_display;
    sum_el.textContent = `Sum: ${sum}`;

    if(sum < 21){
        msg = "Hit or stay?";

    } else if (sum === 21){
        msg = "Blackjack!";
        is_blackjack = true;

    } else{
        msg = "Bust!";
        is_alive = false; 
    }
    message_el.textContent = msg;

}

function hit_me(){ 
    let new_card = draw_card();
    cards_display.push(new_card);
    sum += new_card;

    render_game();    
}

function create_deck(){
    for(let i = 0; i < suites.length; i++){
        for(let j = 0; j < values.length; j++){
            let card = {suit: suites[i], value: values[j]}
            deck.push(card);
        }
    }
    console.log("deck created");
    console.log(deck);
}


function draw_card(){
    let index = Math.floor((Math.random() * deck.length));
    
    let card = deck[index].value;

    if(card > 10){
        card = 10;
    }

    if(card === 1 && (sum+11 <= 21)){
        card = 11;
    }

    deck.splice(index,1);
    return card;
}