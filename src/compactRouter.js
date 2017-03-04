const scene = {
  component: null,
  _state: {}
}
module.exports = () => {
  let stack = [scene]
  return {
    pop: () => stack.pop(),
    currentScene: () => {
      return stack[stack.length - 1]
    },
    push: x => {
      stack.push(x)
    },
  }
}

