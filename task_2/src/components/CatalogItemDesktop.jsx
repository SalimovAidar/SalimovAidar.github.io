export default ({ title, text }) => {
  return (
    <li class="catalog__item catalog__item-desktop desktop">
      <h3 class="desktop__title">{title}</h3>
      <p class="desktop__text">{text}</p>
    </li>
  )
}