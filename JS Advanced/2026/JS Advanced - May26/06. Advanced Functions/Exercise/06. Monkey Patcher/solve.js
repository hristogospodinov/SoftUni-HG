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

        if (balance < 0) {
            rating = "unpopular";
        }

        if (upvotes > totalVotes * 0.66) {
            rating = "hot";
        }

        if (upvotes <= totalVotes * 0.66) {
            rating = "controversial";
        }

        if (totalVotes < 10) {
            rating = "new"
        }

        let obfusc = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
        upvotes += obfusc;
        downvotes += obfusc;


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
