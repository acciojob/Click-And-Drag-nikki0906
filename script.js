// Your code here.
const cubes = document.querySelectorAll('.cube');
let isDragging = false;
let startPosX = 0;
let currentPosX = 0;

cubes.forEach(cube => {
  cube.addEventListener('mousedown', startDrag);
  cube.addEventListener('mousemove', drag);
  cube.addEventListener('mouseup', endDrag);
});

function startDrag(event) {
  isDragging = true;
  startPosX = event.clientX;
}

function drag(event) {
  if (!isDragging) return;
  const cube = event.target;
  const offsetX = event.clientX - startPosX;
  cube.style.transform = `translateX(${offsetX}px)`;
  currentPosX = offsetX;
}

function endDrag() {
  isDragging = false;
  // Determine if the drag was significant enough to slide to the next cube
  if (Math.abs(currentPosX) >= 50) {
    const direction = currentPosX > 0 ? 1 : -1;
    const currentCubeIndex = Array.from(cubes).indexOf(event.target);
    const nextCubeIndex = currentCubeIndex + direction;
    if (nextCubeIndex >= 0 && nextCubeIndex < cubes.length) {
      cubes[nextCubeIndex].style.transform = 'translateX(0)';
    }
  } else {
    event.target.style.transform = 'translateX(0)';
  }
}

