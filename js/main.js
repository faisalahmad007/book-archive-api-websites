const searchBook = async () =>{
    //get input field value 
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    
    const errorShow    = document.getElementById('error');
    console.log(searchText);

    //empty search field value
    searchField.value = '';
    error.textContent = '';

    if (searchText == '') {
        error.innerHTML = "Sorry,Your Desired Book Not Found!!";
        
    }
    //api fetch
else{
    const url = `https://openlibrary.org/search.json?q=${searchText}
    `;
    //console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayBook(data.docs);
}
    
}

const displayBook = docs =>{
       //console.log(docs);
       const searchResult = document.getElementById('docs');
       const result  = document.getElementById('total-result');
       searchResult.textContent = '';
       result.innerHTML = '';
       if(docs.length == 0){
        result.innerHTML = 'not found';
       }
      
       docs?.forEach(doc => {
           console.log(doc);
           const div = document.createElement('div');
           div.classList.add('col');
           div.innerHTML = `
                
                <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top img-fluid" alt="">
                    <div class="card-body">
                    <h5 class="card-title">Books Name:${doc.title ? doc.title:'Not Found Book Title'}</h5>
                    <h6 class="card-title">Author Name:${doc.author_name ? doc.author_name:'Not Found Author Name'}</h6>
                    <h6 class="card-title">Publisher Name:${doc.publisher ? doc.publisher :'Not Found Publisher Name'}</h6>
                    <h6 class="card-title">First Publish Year:${doc.first_publish_year ? doc.first_publish_year: 'Not Found Publish Year'}</h6>
                    
                    </div>
                </div>

        `;
        
        searchResult.appendChild(div);
       })
}