function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let findNested = document.getElementById('nested')
  let findTarget = document.querySelector(findNested.target)
  return findTarget;
}