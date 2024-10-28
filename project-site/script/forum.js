function addPost(event) {
    event.preventDefault(); // Prevent form from submitting

    const postContent = document.getElementById("postContent").value;
    const postList = document.getElementById("postList");

    // Create a new post element
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.textContent = postContent;

    // Append the new post to the post list
    postList.prepend(newPost);

    // Clear the textarea
    document.getElementById("postContent").value = '';
}

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
