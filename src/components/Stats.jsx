import "../styles/Stats.css";
const Stats = () => {
  return (
    <div className="container flex flex-col mx-auto">
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-10">
          <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span>10</span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                Лет на Рынке
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span>120</span> млн ₸
              </h3>
              <p className="text-base font-medium leading-7 text-center text-accent-content">
                Ежегодная выручка
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span id="countto3" data-decimal="1">2600</span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-accent-content">
                Глобальные партнеры
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span id="countto4">180000</span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-dark-grey-600 text-accent-content">
                Ежедневные посетители веб-сайта
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
