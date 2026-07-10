function solution(command) {
    if (command === "upvote") {
        this.upvotes++;
        return;
    }
    
    if (command === "downvote") {
        this.downvotes++;
        return;
    }

    if (command === "score") {
        let upvotes = this.upvotes;
        let downvotes = this.downvotes;
        let totalVotes = upvotes + downvotes;
        let balance = upvotes - downvotes;
        let rating = "new";

        if (totalVotes < 10) {
            rating = "new";
        } else if (balance < 0) {
            rating = "unpopular";
        } else if (upvotes > totalVotes * 0.66) {
            rating = "hot";
        } else if (balance >= 0 && totalVotes > 100 && upvotes <= totalVotes * 0.66) {
            rating = "controversial";
        } 

        let obfusc = Math.ceil(Math.max(upvotes, downvotes) * 0.25);

        if (totalVotes > 50) {
            upvotes += obfusc;
            downvotes += obfusc;
        }        
        
        return [
            upvotes,
            downvotes,
            balance,
            rating
        ]
    }      
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);
