function Sprite(w, h, kW, kH) {
  // Size of image sprite
  let width = w;
  let height = h;

  // Size of each frame square
  let keyWidth = kW;
  let keyHeight = kH;

  // Rows and Collumns quantity
  let cols = Math.ceil(width / keyWidth);
  let rows = Math.ceil(height / keyHeight);

  // The frames
  let framesObj = {};

  // Get frame quantity
  const getFramesQuantity = () => {
    const count = (obj) => {
      let size = 0;
      let key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };
    return count(framesObj) + 1; // don't worry about array position 0
  };

  // Get frame props
  const getFrame = (num) => {
    return {
      x: framesObj[num - 1].x,
      y: framesObj[num - 1].y,
    };
  };

  // # Run
  const run = () => {
    // Gen each frame based on sizes
    let index = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        framesObj[index] = {
          x: keyWidth * c,
          y: keyHeight * r,
        };
        index++;
      }
    }
  };
  run();

  return {
    getFramesQuantity,
    getFrame,
  };
}
