class Cell {
  constructor(height, width, val, colour, id, snapOffset) {
    this.height = height;
    this.width = width;
    this.val = val;
    this.colour = colour;
    this.id = id;
    this.snapOffset = snapOffset;
  }

  // get the spatial position of the current cell
  get pos() {
    return {x: this.xPos, y: this.yPos};
  }

  dragCell(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var snapOffset = this.snapOffset;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function elementSnap() {
      var x = elmnt.offsetTop;
      var y = elmnt.offsetLeft;
      elmnt.style.top = Math.round(x / 100) * 100 + snapOffset + "px";
      elmnt.style.left = Math.round(y / 100) * 100 + snapOffset + "px";
      console.log(snapOffset);
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      elementSnap();
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

const cell = new Cell(100, 100, 1, 'orange', 'testDrag', 13);
cell.dragCell(document.getElementById(cell.id));
const cell2 = new Cell(100, 100, 1, 'orange', 'testDrag2', 13);
cell2.dragCell(document.getElementById(cell2.id));
