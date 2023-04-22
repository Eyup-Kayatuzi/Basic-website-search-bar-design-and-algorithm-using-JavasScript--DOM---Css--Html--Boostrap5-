function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  function function2(element){
     let selectedTd = element.parentElement;
     let selectedTr = selectedTd.parentElement;
     var table = document.getElementById("myTable2");
     var row = table.insertRow(0);
     var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = selectedTr.getElementsByTagName("td")[0].innerText;
    cell2.innerHTML = selectedTr.getElementsByTagName("td")[1].innerText;

  }