function extract(content) {
    let contentFull = document.getElementById(content).textContent;

    return contentFull.match(/\(.*?\)/g)
        .map(a => a.slice(1, -1))
        .join("; ");
}

// let text = extract("content");