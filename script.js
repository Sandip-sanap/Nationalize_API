async function myFunction() {
  var firstname1 = document.getElementById("firstName").value;
  const UserList = document.querySelector('.user-list');
  UserList.innerHTML = '';
  await fetch("https://api.nationalize.io/?name=michael")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      for (var item in data) {
        const NameData = data.name;
        if (firstname1 == NameData) {
          const item_name = data.country[0].country_id;
          const probValue = data.country[0].probability;
          const item_name2 = data.country[1].country_id;
          const probValue2 = data.country[1].probability;
          UserList.innerHTML += `
        <p>   Country :${item_name} <p>
        <p>   Probability :${probValue} <p><br>
        <p>   Country :${item_name2} <p>
        <p>   probability :${probValue2} <p><br>`
          break;
        }
        else {
          window.alert("Please enter correct name");
          break;
        }
      }
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}



