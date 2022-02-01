function sorteia(){
  var id = Math.floor( Math.random() * 151) + 1;
  var url = "https://pokeapi.co/api/v2/pokemon/" + id;
  new Ajax.Request(url,
    {
      method : "get",
      onSuccess : ajaxSuccess
    }
  );

  var url2 = "https://pokeapi.co/api/v2/pokemon-species/" + id;
  new Ajax.Request(url2,
    {
      method : "get",
      onSuccess : ajaxSuccess2
    }
  );
}

function ajaxSuccess2(response){
  var obj = JSON.parse(response.responseText);

  document.getElementById("desc").innerText = obj.flavor_text_entries[0].flavor_text;
}

function ajaxSuccess(response){
  var obj = JSON.parse(response.responseText);
  document.getElementById("nome").innerText = obj.name;
  document.getElementById("img").src = obj.sprites.front_default;
}