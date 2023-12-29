import anime from 'animejs/lib/anime'
export function useAnimateSquare (element, toColor) {
  anime({
    targets: element,
    backgroundColor: toColor,
    scale: [0, 1],
    opacity: 100
  })
}
