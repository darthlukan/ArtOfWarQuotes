var quotes = new Array(
                       "'There is no instance of a country having benefited from prolonged warfare.'",
                       "'The supreme art of war is to subdue the enemy without fighting.'",
                       "'Energy may be likened to the bending of a crossbow; decision, to the releasing of the trigger.'",
                       "'Appear weak when you are strong, and strong when you are weak.'",
                       "'If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.'",
                       "'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.'",
                       "'Supreme excellence consists of breaking the enemy's resistance without fighting.'",
                       "'Keep your friends close, and your enemies closer.'",
                       "'A leader leads by example, not by force.'",
                       "'Build your opponent a golden bridge to retreat across.'",
                       "'When you surround an army, leave an outlet free. Do not press a desperate foe too hard.'"
                       );

function randomize() {
    
    var randint = Math.floor(Math.random() * quotes.length);
    
    return randint;
}

function showQuotes() {
    
    $('#quotes').append("<h3>Quotes from 'The Art Of War':</h3><br />");
    
    $('#quotes').append('<p>' + quotes[randomize()] + '</p>');
}

//showQuotes();

$('document').ready(showQuotes());