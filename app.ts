interface IPrice {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = <T extends IPrice>({ price, discount, isInstallment, months }: T): number => {
  let res = (price * (100 - discount)) / 100;

  if (!isInstallment) {
    console.log('Стоимость с учетом скидки: ', res);
    return res;
  }

  res = res / months;
  console.log('Ежемесячный платеж с учетом скидки и рассрочки на', months, 'месяцев:', res);
  return res;
};

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12, t: 1 });
// 6250
