export default function FormatDate(date){
  let formatDate;
  let currentDate = new Date(date);

  function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
  }

  formatDate = `${adicionaZero(currentDate.getDate().toString())}/`;
  formatDate += `${adicionaZero(currentDate.getMonth()+1).toString()}/`;
  formatDate += `${adicionaZero(currentDate.getFullYear().toString())} `;
  formatDate += `${adicionaZero(currentDate.getHours().toString())}:`;
  formatDate += `${adicionaZero(currentDate.getMinutes().toString())}:`;
  formatDate += `${adicionaZero(currentDate.getSeconds().toString())}`;

  return String(formatDate);
}