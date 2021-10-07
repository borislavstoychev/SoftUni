function fromJSONToHTMLTable(str) {
    const parsed = JSON.parse(str);
    const escapeChar = (w) =>
        `${w}`
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    const makeRow = (tag, data) =>
        `<tr>${data
            .map((x) => `<${tag}>${escapeChar(x)}</${tag}>`)
            .join('')}</tr>`;

    let result = `<table>
    ${makeRow('th', Object.keys(parsed[0]))}
    ${parsed.map((x) => makeRow('td', Object.values(x))).join('\n')}
    </table>`;

    return result
}
window.onload = function(){
    let container = document.getElementById('wrapper');
    container.innerHTML = fromJSONToHTMLTable([`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`]);
};

// console.log(fromJSONToHTMLTable(`[{"Name":"Pesho",
// "Score":4,
// " Grade":8},
// {"Name":"Gosho",
// "Score":5,
// " Grade":8},
// {"Name":"Angel",
// "Score":5.50,
// " Grade":10}]`))


