// Search-&-Data-load-----

const searchResult = () => {
    const searchFieldValue = document.getElementById('search-Field').value;


    // Clear--- 
    // Clear--- 

    const findDiv = document.getElementById('all-results');
    findDiv.textContent='';
    const findSearchcCount = document.getElementById('search-result-count')
    findSearchcCount.textContent='';

    // Clear--- 
    // Clear--- 

    if(searchFieldValue === ''){
        document.getElementById('error-messege').style.display = 'block'
    }
    else{
        document.getElementById('error-messege').style.display = 'none'

    // Data-Load----
    fetch(`https://openlibrary.org/search.json?q=${searchFieldValue}`)
    
    .then(res => res.json())
    .then(data => resultsShow(data.docs))
    
    }
    
}

// Search-&-Data-load-----




// Search-results-show-----

const resultsShow = allDatas =>{
    // Again Clear--- 
    const searchFieldValue2 = document.getElementById('search-Field');
    searchFieldValue2.value = '';

    // search-result-count----
    const findSearchcCount = document.getElementById('search-result-count')
    if(allDatas.length === 0){
        findSearchcCount.innerText=
    `
        Results not found! Please enter book name.
    `
    }
    else if(allDatas.length > 0){
        findSearchcCount.innerText=
        `
        About ${allDatas.length} results
        ` 
    }
    // search-result-count----

    // Search-Results-All-Output-----

    // const findDiv = document.getElementById('all-results');
    // findDiv.textContent='';
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
          <p class="card-text"><strong>Author's :</strong> ${singleData.author_name ? singleData.author_name: ""}</p>
          <p class="card-text"><strong>First Published :</strong> ${singleData.first_publish_year ? singleData.first_publish_year: ''}</p>
        </div>
      </div>
        `
    findDiv.appendChild(creatDiv)
    })
}
// Search-results-show-----
