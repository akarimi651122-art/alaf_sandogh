let members = JSON.parse(localStorage.getItem("members")) || [];

function addMember() {
    const name = document.getElementById("name").value;
    const capital = parseFloat(document.getElementById("capital").value);
    const deposit = parseFloat(document.getElementById("deposit").value);
    const score = parseFloat(document.getElementById("score").value);

    if (!name || isNaN(capital) || isNaN(deposit) || isNaN(score)) {
        alert("لطفاً تمام فیلدها را درست پر کنید!");
        return;
    }

    members.push({name, capital, deposit, score});
    localStorage.setItem("members", JSON.stringify(members));
    renderMembers();
}

function renderMembers() {
    const tbody = document.querySelector("#table-members tbody");
    tbody.innerHTML = "";
    members.forEach(m => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${m.name}</td><td>${m.capital}</td><td>${m.deposit}</td><td>${m.score}</td>`;
        tbody.appendChild(tr);
    });
}

renderMembers();
