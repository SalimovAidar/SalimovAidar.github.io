import CatalogItemMobile from "./CatalogItemMobile";
import CatalogItemDesktop from "./CatalogItemDesktop";
import Button from "./Button";

function Main() {
  return (
    <main class="main">
      <div class="main__container container">
        <div class="main__left">
          <h1 class="main__title">
            Зарабатывайте больше <span className="main__title-span">с WELBEX</span>
          </h1>
          <p class="main__description">
            Развиваем и&nbsp;контролируем продажи за&nbsp;вас
          </p>
        </div>
        <div class="main__catalog catalog">
          <p class="catalog__text">
            Вместе с&nbsp;<span className="catalog__text-span">бесплатной консультацией</span> мы&nbsp;дарим:
          </p>
          <ol class="catalog__list">
            <CatalogItemMobile
              title={'Skype аудит'}
            />
            <CatalogItemMobile
              title={'30 виджетов'}
            />
            <CatalogItemMobile
              title={'Dashboard'}
            />
            <CatalogItemMobile
              title={'Месяц аmoCRM'}
            />
            <CatalogItemDesktop
              title={'Виджеты'}
              text={'30 готовых решений'}
            />
            <CatalogItemDesktop
              title={'Dashboard'}
              text={'с показателями вашего бизнеса'}
            />
            <CatalogItemDesktop
              title={'Skype Аудит'}
              text={'отдела продаж и CRM системы'}
            />
            <CatalogItemDesktop
              title={'35 дней'}
              text={'использования CRM'}
            />
          </ol>
          <Button
            title={'Получить консультацию'}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;