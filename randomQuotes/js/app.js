function quotesRandom(){
    const values = document.querySelector('.Values');
    const  author = document.querySelector('.author');

    const quotes = [
        {
            id:1,
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            author:'Duy An'      
        },
        {
            id:2,
            text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
            author:'Manh Cuong'       
        },
        {
            id:3,
            text: 'as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page ',
            author:'Xuan Bac'       
        },
        {
            id:4,
            text: ' and a search for lorem ipsum will uncover many web sites still in their infancy.', 
            author:'Cong Ly'      
        },
    ]
    var randomIndex = Math.floor(Math.random() * quotes.length) 

    for(var i = 0; i < quotes.length;i++)
    {
        
        values.textContent = quotes[randomIndex].text;
        author.textContent = quotes[randomIndex].author;
        console.log(randomIndex);

    }



}



