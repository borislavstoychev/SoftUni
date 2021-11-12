function solve() {
  const [generateButton, buyButton] = document.getElementsByTagName('button');
  const [input, output] = document.querySelectorAll('textarea');
  const table = document.querySelector('#exercise table tbody');
  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function generate(e) {
    // const td = document.createElement('tr');
    const products = JSON.parse(input.value)
    input.value = ''
    products.forEach(el => {
      let tr = document.createElement('tr')
      let imageTd = createNestedElements('img', undefined, {src: el.img});
      let namedTd = createNestedElements('p', el.name);
      let priceTd = createNestedElements('p', el.price);
      let decFactroTd = createNestedElements('p', el.decFactor);
      let checkboxTd = createNestedElements('input', undefined, {type:'checkbox'})
      tr.appendChild(imageTd);
      tr.appendChild(namedTd);
      tr.appendChild(priceTd);
      tr.appendChild(decFactroTd);
      tr.appendChild(checkboxTd);

      table.appendChild(tr);
    })
    // //img
    // let imgTd = document.createElement('td');
    // let img = document.createElement('img');
    // img.setAttribute("src", product.img)
    // imgTd.appendChild(img)
    // //name
    // let tdName = document.createElement('td');
    // let name = document.createElement('p');
    // name.textContent = product.name;
    // tdName.appendChild(name);
    // //price
    // let priceTd = document.createElement('td');
    // let price = document.createElement('p');
    // price.textContent = product.price;
    // priceTd.appendChild(price);
    // //decFactor
    // let decFactorTd = document.createElement('td');
    // let decFactor = document.createElement('p');
    // decFactor.textContent = product.decFactor;
    // decFactorTd.appendChild(decFactor)
    // //checkbox
    // let checkboxTd = document.createElement('td');
    // let checkbox = document.createElement('input');
    // checkbox.setAttribute('type', 'checkbox');
    // checkboxTd.appendChild(checkbox);
  }

  function createNestedElements(tagName, value, atributes){
    let td = document.createElement('td');
    let nestedElement = document.createElement(tagName)
    if (['input', 'textarea', 'select']. includes(tagName)){
      nestedElement.value = value
    }else {
      nestedElement.textContent = value
    }
    if (atributes !== undefined){
      for (const key in atributes){
        nestedElement.setAttribute(key, atributes[key])
      }
    }
    td.appendChild(nestedElement);
    return td;
  }

  function buy(e){
    const result = {'furniture': [], 'totalPrice': 0, 'decFactor': []};
    let productToBy = document.querySelectorAll('#exercise input')
    console.log(productToBy[0].parentNode.parentNode.parentNode)
    Array.from(productToBy).forEach(el => {
      if (el.checked){
        const productName = el.parentNode.parentNode.children[1].textContent;
        const price = Number(el.parentNode.parentNode.children[2].textContent);
        const decFactor = Number(el.parentNode.parentNode.children[3].textContent);

        result.totalPrice += price;
        result.decFactor.push(decFactor);
        result.furniture.push(productName);
      }
      output.value = `Bought furniture: ${result.furniture.join(', ')}\n`;
      output.value += `Total price: ${result.totalPrice.toFixed(2)}\n`;
      output.value += `Average decoration factor: ${result.decFactor.reduce((a, c) => a + c, 0) / result.decFactor.length}`;
    })
  }
}