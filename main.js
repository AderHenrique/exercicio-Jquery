const listaTarefa = [];

$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();

    const tarefa = $("#nome-tarefa").val();
    const novaTarefa = $("<ul></ul>");

    if (listaTarefa.includes(tarefa)) {
      alert(
        `A tarefa : ${tarefa} já esta na sua lista de tarrefas, tente digitar outra tarefa! `
      );
    } else {
      listaTarefa.push(tarefa);
      $(`<li>${tarefa}</li>`).appendTo(novaTarefa);
      $(novaTarefa).appendTo("article");
    }
    $("#nome-tarefa").val("");

    $("li").click(function () {
      $(this).addClass("riscado");
    });
  });
});
