import React from "react";
import "../components/style.css";
// В цій компоненті ми так само будемо приймати певні дані через пропси.
// Прописуємо одразу деструктуризацію та дані, які будемо отримувати
// А отримати нам потрібно кількість елементів, яку ми будемо виводити на сторінці та загальна кількість елементів
const Pagination = ({ countElement, totalCountElement, paginationPoint }) => {
  // створимо константу в які ми будемо зберігати номер сторінки
  const pageNumber = [];
  // яка для початку беде довірнювати пустому масиву
  // і використовуючи цикл for будемо в Page number пушити номера сторінок

  for (let i = 1; i <= Math.ceil(totalCountElement / countElement); i++) {
    pageNumber.push(i);
  }
  // Тепер давайте попрацюємо над відобраенням номерів сторінок
  return (
    <div className="paginationBox">
      <ul className="paginationList">
        {pageNumber.map((number) => {
          return (
            <li className="paginationListItem" key={number}>
              <a href="#" onClick={() => paginationPoint(number)}>
                {/* //в обробник подій прописуємо певну анонімну функцію , яка
                викликає нам створену щойно функцію paginationPoint, яка приймає
                number з нашого map */}
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;

// На цьому тут все. Повертаємось в App.js куди імпортуєм нашу компоненту та налаштуємо пропси
