const input = document.getElementById("word");
const container = document.querySelector(".container");

const generateword = (n) => {
    const letter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text="";

    for(let i=0;i<n;++i){
        const random= (Math.random()*25).toFixed(0);
        text += letter[random];
    

    }

    return text;
};

//  console.log(generateword(2));
let numword;
   const generatepara =()=> {

    numword = Number(input.value);

    const paraa = document.createElement("p");

    let data="";

    for(let i=0; i< numword ;++i){

        const randNum=(Math.random()*15).toFixed(0);
        data+= generateword(randNum).toLowerCase();
        data+=" ";
        

    }

    paraa.innerText = data;

    paraa.setAttribute("class", "para");

    container.append(paraa);

}





