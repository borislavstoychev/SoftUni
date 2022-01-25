const monthNames = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
};
const yearSelect = document.getElementById('years');
const years = [...document.querySelectorAll('.monthCalendar')].reduce((a, c) => {
    a[c.id] = c;
    return a;
}, {});

const months = [...document.querySelectorAll('.daysCalendar')].reduce((a, c) => {
    a[c.id] = c;
    return a;
}, {});

function displaySection(section) {
    document.body.textContent = '';
    document.body.append(section);
}

displaySection(yearSelect);

yearSelect.addEventListener('click', (event) => {
    const yearId = `year-${event.target.textContent.trim()}`;
    displaySection(years[yearId]);
    
});

document.body.addEventListener('click', (event) => {
    if (event.target.tagName == 'CAPTION') {
        const sectionId = event.target.parentNode.parentNode.id;
        if (sectionId.includes('year-')) {
            displaySection(yearSelect);
        } else if (sectionId.includes('month-')) {
            const yearId = `year-${sectionId.split('-')[1]}`;
            displaySection(years[yearId]);
        }
    } else if (event.target.tagName == 'TD' || event.target.tagName == 'DIV') {
        const monthName = event.target.textContent.trim();
        if (monthNames.hasOwnProperty(monthName)) {
            let parent = event.target.parentNode;
            while (parent.tagName != 'TABLE') {
                parent = parent.parentNode;
            }
            const year = parent.querySelector('caption').textContent.trim();
            const monthId = `month-${year}-${monthNames[monthName]}`;
            displaySection(months[monthId]);
        }
    }
});