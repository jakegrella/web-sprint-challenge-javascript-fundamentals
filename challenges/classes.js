// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(attr) {
    this.len = attr.len
    this.width = attr.width
    this.height = attr.height
  }
  volume() {
    return this.len * this.width * this.height
  }
  surfaceArea() {
    return 2 * (this.len * this.width + this.len * this.height + this.width * this.height)
  }
}

const cuboid = new CuboidMaker({
    len: 4,
    width: 5,
    height: 5
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(attr){
        super(attr)
    }
    surfaceArea() {
        return 6 * (this.len * this.len)
    }
}

const cube = new CubeMaker({
    len: 2,
    width: 2,
    height: 2
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24
