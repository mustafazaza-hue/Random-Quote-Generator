var quotes = [
    `“You only live once, but if you do it right, once is enough.”
    <br/>― Mae West`,
    `“Be the change that you wish to see in the world.”
    <br/>― Mahatma Gandhi`,
    `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
    <br/>― Maya Angelou`,
    `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”
    <br/>― Ralph Waldo Emerson`,
    `“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”
    <br/>― Albert Einstein`,
    `“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”
    <br/>― John Green, The Fault in Our Stars`,
    `“I have not failed. I've just found 10,000 ways that won't work.”
    <br/>― Thomas A. Edison`,
    `“That which does not kill us makes us stronger.”
    <br/>― Friedrich Nietzsche`,
    `“We don't see things as they are, we see them as we are.”
    <br/>― Anaïs Nin`,
    `“Human progress and human cultures are not founded by the multitude, they are the works of personal genius and personal efficiency”
    <br/>― Adolph Hitler`,

];


var lastRandomIndex = -1; 

function generateQuote() {
    var randomIndex;
    
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastRandomIndex); 
    var randomQuote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = randomQuote;
    
    lastRandomIndex = randomIndex;
}
