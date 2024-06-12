function createABlog() {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const adminName = prompt("Admin Name");
    if (adminName !== "Allsamir") return;
    let question = e.target.question.value;
    let answer = e.target.answer.value;
    console.log(question, answer);
  });
}
createABlog();
