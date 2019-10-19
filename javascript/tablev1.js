const metricsData = [
  {
    name: "Max",
    species: "Cat",
    favFood: "carrot",
    birthYear: 2016,
    project: "Project A",
  },
  {
    name: "Jack",
    species: "Dog",
    favFood: "bread",
    birthYear: 2008,
    project: "Project B",
  },
  {
    name: "Junior",
    species: "Cat",
    favFood: "tuna",
    birthYear: 2012,
    project: "Project C",
  },
];

// Method of converting JSON data into a HTML table

function petTemplate(pet) {
  return `
    <tbody>
      <tr>
        <td>${pet.birthYear++}</td>
        <td>${pet.name}</td>
        <td>${pet.species}</td>
        <td>${pet.favFood}</td>
        <td>${pet.project}</td>
      </tr>
    </tbody>
  `;
}

document.getElementById("app").innerHTML = `
  <table class="table table-striped table-bordered mydatatable" style="width:100%">
    <thead class="thead-dark"
      <tr>
        <th>DOB</th>
        <th>Name</th>
        <th>Species</th>
        <th>Food</th>
        <th>Project</th>
      </tr>
    </thead>
  ${metricsData.map(petTemplate).join("")}
    <tfoot>
      <tr>
        <th>DOB</th>
        <th>Name</th>
        <th>Species</th>
        <th>Food</th>
        <th>Project</th>
      </tr>
    </tfood>
  </table>
`;
