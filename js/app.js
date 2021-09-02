// Search-&-Data-load-----

const searchResult = () => {
    const searchFieldValue = document.getElementById('search-Field').value;
    if(searchFieldValue === ''){

    }
    else{
        fetch(`https://openlibrary.org/search.json?q=${searchFieldValue}`)
    .then(res => res.json())
    .then(data => resultsShow(data.docs))
    }
}

// Search-&-Data-load-----

// Search-results-show-----

const resultsShow = allDatas =>{
    console.log(allDatas.length)
    const findDiv = document.getElementById('all-results');
    allDatas.forEach(singleData => {
        const creatDiv = document.createElement('div')
        creatDiv.classList.add('col')
        creatDiv.innerHTML= 
        `
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${singleData.cover_i}-M.jpg" class="card-img-top h-100" alt="...">
        <div class="card-body">
          <h4 class="card-title">${singleData.title}</h4>
          <p class="card-text mb-1"><strong>Publisher :</strong> ${singleData.publisher}</p>
          <p class="card-text"><strong>Author :</strong> ${singleData.author_name}</p>
          <p class="card-text"><strong>Publish :</strong> ${singleData.first_publish_year}</p>
        </div>
      </div>
        `
    findDiv.appendChild(creatDiv)
    })
}
