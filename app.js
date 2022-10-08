const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2511b98d4cmsh0bf687c4a1d0b51p1d49fdjsn86b7328f082d',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    }
  };

const container=document.querySelector(".container")
const inputBuscar=document.querySelector(".input-buscar")
const btnBuscar=document.querySelector(".btn-buscar")
const clean=document.querySelector(".clean")



const getMovies=async function(){
    const respuesta=await fetch("https://movies-app1.p.rapidapi.com/api/movies",options)
    const data= await respuesta.json()

    listMovies(data.results)
    console.log(data)
}

btnBuscar.onclick=async function(){
    const respuesta=await fetch("https://movies-app1.p.rapidapi.com/api/movies",options)
    const data= await respuesta.json()
    const texto=inputBuscar.value;
    const moviesFiltradas= data.results.filter((movie)=>movie.titleOriginal.toLowerCase()===texto.toLowerCase())

    listMovies(moviesFiltradas)
}

clean.onclick=function(){
    //listMovies(data.results)
    getMovies()
}


getMovies()

function listMovies(Movies){
    container.innerHTML="";
    Movies.forEach((movie) => {
        container.innerHTML+=`<div class="card">
        <img src="${movie.image}" alt="">
        <h2>${movie.titleOriginal}</h2>
        <h4>${movie.rating} </h4>
        <p>
            ${movie.description}
        </p>
        </div>  
        `
    });
}
