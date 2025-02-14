// Sample data for news blocks
const newsData = [
    { title: "🔥 Fluff Cup Platina", content: "Rank Máximo : Platina 5 - 16/02/25 as 19 horas - Link: start.gg/fluffcup " },
    { title: "🔥 Mega Camp Mai", content: "Rank Máximo : Diamante 5 - 28/02/25 as 15 horas - Link: start.gg/MaiBigDIs" },
    { title: "🔥 Capcom Cup", content: "Rank Máximo : Nenhum - 01/03/25 as 12 horas - Link: capcomcup.com " },
    { title: "🔥 Small Punch", content: "Rank Máximo : Ouro 5 - 14/02/25 as 18 horas - Link: start.gg/smallpunch" }
  ];
  

// Constants
const newsPerPage = 20;
const newsContainer = document.querySelector('.news-container');
const pagination = document.querySelector('.pagination');

// Function to display news blocks for a specific page
function displayNews(page) {
    newsContainer.innerHTML = ''; // Clear existing news blocks
    const start = (page - 1) * newsPerPage;
    const end = start + newsPerPage;
    const newsToShow = newsData.slice(start, end);

    newsToShow.forEach(news => {
        const newsBlock = document.createElement('div');
        newsBlock.classList.add('news-block');
        newsBlock.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.content}</p>
        `;
        newsContainer.appendChild(newsBlock);
    });
}

// Function to generate pagination links
function generatePagination() {
    const totalPages = Math.ceil(newsData.length / newsPerPage);
    pagination.innerHTML = ''; // Clear existing pagination links

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.classList.add('page-link');
        pageLink.textContent = i;
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            displayNews(i);
            setActivePage(i);
        });
        pagination.appendChild(pageLink);
    }
}

// Function to set the active page link
function setActivePage(page) {
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.classList.remove('active');
        if (link.textContent == page) {
            link.classList.add('active');
        }
    });
}

// Initial setup
displayNews(1); // Display first page
generatePagination(); // Generate pagination links
setActivePage(1); // Set first page as active