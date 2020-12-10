function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("drag", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data2 = ev.dataTransfer.getData("drag");
    ev.target.appendChild(document.getElementById(data2));
  }
