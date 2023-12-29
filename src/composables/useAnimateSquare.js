import anime from 'animejs/lib/anime'

export function useAnimateSquare (element, toColor) {
  const min = 5
  const max = 10
  const scale = (Math.random() * (max - min + 1)) + min
  console.log(element)
  anime({
    targets: element,
    backgroundColor: toColor,
    scale: [0, scale],
    opacity: 100
  })
}
