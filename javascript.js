var quotes = [
    '\"I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times, I\'ve been trusted to take the game-winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.\" - Michael Jordan',
    '\"I can accept failure, everyone fails at something. But I can\'t accept not trying.\" - Michael Jordan',
    '\"Hard work beats talent when talent fails to work hard.\" - Kevin Durant',
    '\"A winner is someone who recognizes his God-given talents, works his tail off to develop them into skills, and uses these skills to accomplish his goals.\" - Larry Bird',
    '\"Some people want it to happen, some wish it would happen, and others make it happen.\" - Michael Jordan',
    '\"Nothing is given. Everything is earned.\" - LeBron James',
    '\"What do you do with a mistake: recognize it, admit it, learn from it, forget it.\" - Dean Smith',
    '\"Concentration and mental toughness are the margins of victory.\" - Bill Russell',
    '\"Talent wins games, but teamwork and intelligence wins championships.\" - Michael Jordan',
    '\"Obstacles don\'t have to stop you. If you run into a wall, don\'t turn around and give up. Figure out how to climb it, go through it, or work around it.\" - Michael Jordan',
    '\"I\'ve failed over and over and over again in my life and that is why I succeed.\" - Michael Jordan',
    '\"Good, better, best. Never let it rest. Until your good is better and your better is best.\" - Tim Duncan',
    '\"If you quit ONCE it becomes a habit. Never quit!\" - Michael Jordan',
    '\"Everybody has talent, but ability takes hard work.\" - Michael Jordan',
    '\"The key to success is failure\" - Michael Jordan',
    '\"The most important thing is to try and inspire people so that they can be great in whatever they want to do.\" - Kobe Bryant',   
    '\"If you\'re afraid to fail, then you\'re probably going to fail.\" - Kobe Bryant',
    '\"I have self-doubt. I have insecurity. I have fear of failure. I have nights when I show up at the arena and I\'m like, \'My back hurts, my feet hurt, my knees hurt. I don\'t have it. I just want to chill.\' We all have self-doubt. You don\'t deny it, but you also don\'t capitulate to it. You embrace it." - Kobe Bryant',
    '\"There\'s a choice that we have to make as people, as individuals. If you want to be great at something, there\'s a choice you have to make. We all can be masters at our craft, but you have to make a choice. What I mean by that is, there are inherent sacrifices that come along with that. Family time, hanging out with friends, being a great friend, being a great son, nephew, whatever the case may be. There are sacrifices that come along with making that decision." - Kobe Bryant',
    '\"I can\'t relate to lazy people. We don\'t speak the same language. I don\'t understand you. I don\'t want to understand you." - Kobe Bryant',
    '\"Losers visualize the penalties of failure. Winners visualize the rewards of success." - Kobe Bryant',
    '\"If you want to look good in front of thousands\, you have to out work thousands in front of nobody.\" - Damian Lillard',
    '\"If your dreams don\'t match your actions\, you can either change your dreams or change your actions.\"- Damian Lillard',
    '\"Be the best version of yourself in anything that you do\. You don\'t have to live anybody else\'s story.\" – Stephen Curry',
    '\"We have to have the mentality that we have to work for everything we\'re going to get.\"  Stephen Curry',
    '\"If you take time to realize what your dream is and what you really want in life no matter what it is\, whether it\'s sports or in other fields you have to realize that there is always work to do\, and you want to be the hardest working person in whatever you do\, and you put yourself in a position to be successful\. And you have to have a passion about what you do.\"  Stephen Curry',

]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

