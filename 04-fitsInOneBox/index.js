function fitsInOneBox(boxes) {
  const tidiedBoxes = boxes.sort((box1, box2) => {
    if (box1.l * box1.w * box1.h < box2.l * box2.w * box2.h) {
      return -1;
    } else {
      return 1;
    }
  });

  return tidiedBoxes.every((box, i) => {
    if (i === tidiedBoxes.length - 1) {
      return true;
    }
    if (i < tidiedBoxes.length - 1) {
      return box.l < tidiedBoxes[i + 1].l &&
        box.w < tidiedBoxes[i + 1].w &&
        box.h < tidiedBoxes[i + 1].h;
    }
  });
}