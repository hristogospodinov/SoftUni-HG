function attachEvents() {

    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');

    const postsSelect = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const commentsList = document.getElementById('post-comments');

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    loadBtn.addEventListener('click', loadPosts);
    viewBtn.addEventListener('click', viewPost);

    async function loadPosts() {

        postsSelect.replaceChildren();

        const response = await fetch(postsUrl);
        const posts = await response.json();

        Object.entries(posts).forEach(([id, post]) => {

            const option = document.createElement('option');
            option.value = id;
            option.textContent = post.title;

            postsSelect.appendChild(option);
        });
    }

    async function viewPost() {

        const selectedId = postsSelect.value;

        const [postsResponse, commentsResponse] = await Promise.all([
            fetch(postsUrl),
            fetch(commentsUrl)
        ]);

        const posts = await postsResponse.json();
        const comments = await commentsResponse.json();

        const post = posts[selectedId];

        postTitle.textContent = post.title;
        postBody.textContent = post.body;

        commentsList.replaceChildren();

        Object.values(comments)
            .filter(comment => comment.postId === selectedId)
            .forEach(comment => {

                const li = document.createElement('li');
                li.textContent = comment.text;

                commentsList.appendChild(li);
            });
    }
}

attachEvents();