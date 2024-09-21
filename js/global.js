const ScrollTable = () => {
  const tables = document.querySelectorAll(".scroll-table");

  tables.forEach((table) => {
    if (table) {
      table.addEventListener("click", (e) => {
        e.target.classList.add("active");
      });
    }
  });
};

//한번씩 감싸주는게 좋음
const thDataClone = () => {
  const ths = document.querySelectorAll(".table-type2 thead th");
  const trs = document.querySelectorAll(".table-type2 tbody tr");

  if (ths) {
    ths.forEach((th, index) => {
      let textValue = th.textContent;

      trs.forEach((tr) => {
        const tds = tr.querySelectorAll("td");
        tds[index].dataset.text = textValue;
      });
    });
  }
};

//호출
thDataClone();
ScrollTable();
