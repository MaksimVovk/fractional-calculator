export default function (value) {
  return /\D/g.test(value) ? '' : value
}
