let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ];
  
  // No HTML
  // only JS or CSS
  // append vs appendChild

function search(value){
  
  if(value!=""){
    let find =  countriesInfo.filter((country)=> (country.name.toLowerCase()==value.toLowerCase()))
    document.querySelector(".content").innerHTML="";
     card(find[0]);
  }

  }


  

  function card({flag,name,population,region,capital}){
    document.querySelector(".content").innerHTML+=`
    <div class="card">
      <img src="${flag}" alt="${name}"/>
      <div class="name">${name}</div>
      <div class="text">Population: ${population}</div>
      <div class="text">Region: ${region}</div>
      <div class="text">Capital: ${capital}</div>
    </div>
  `;
  }

  function display(){
    document.querySelector(".content").innerHTML="";

    countriesInfo.map(({flag,name,population,region,capital})=>{
   
      card({flag,name,population,region,capital})
    
     })
  }
  display();