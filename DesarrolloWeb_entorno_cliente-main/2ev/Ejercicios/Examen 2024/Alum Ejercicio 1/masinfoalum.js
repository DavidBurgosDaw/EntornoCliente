$.ajax({
  url: "pokemon.txt",
  success: function (result) {
    $("#principal").html(result);
  },
  error: function (xhr) {
    alert("Error " + xhr.status + ": " + xhr.statusText);
  },
});
