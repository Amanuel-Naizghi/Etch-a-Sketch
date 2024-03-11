let container=document.createElement("div");
container.setAttribute("id","container");
let content=document.querySelector("#content");
content.appendChild(container);

let resetButton=document.createElement("button");
resetButton.setAttribute("id","resetButton");
resetButton.textContent="Reset drawing";
container.appendChild(resetButton);

let newGridButton=document.createElement("button");
newGridButton.setAttribute("id","newGrid");
newGridButton.textContent="New Grid";
container.appendChild(newGridButton);

let counter=0;

createGridStructure();

function createGridStructure(){
    let userInput;
    //By default the counter is 0 so that the grid size by at the start will be 16x16
    if(counter===0){
        userInput=16;
    }

    else{
        userInput=parseInt(prompt("Enter the length"));
    }

    if(userInput<=100){
        counter+=1;
        for(let row=1;row<=userInput;row++){
            let subContainer=document.createElement("div");
            subContainer.setAttribute("id","subContainer");
            for(let col=1;col<=userInput;col++){
                let element=document.createElement("div");
                element.setAttribute("id","element");
                //Its for setting the size of the squares in comparison with the container size
                let selectContainer=document.querySelector("#container");
                let compStyles=window.getComputedStyle(selectContainer);
                var intValue=parseInt(compStyles.width,10);
                var size=intValue/userInput;
                element.style.width=size+"px";
                element.style.height=size+"px";
                subContainer.appendChild(element);
            }
            container.appendChild(subContainer);
        }
        //Action listener for hovering the mouse around the squares
        let elementsNodeList=document.querySelectorAll("#element"); 
        elementsNodeList.forEach(element=>{
            element.addEventListener("mouseover",(e)=>{
                let colorArray=["red","green","blue","black","yellow"];
                let color=colorArray[Math.floor(Math.random()*5)];
                e.target.style.background=color;
            });
        });
    }
    //User input must be less than 100
    else if(userInput>100){
        alert("please enter a number less than of equal to 100!!");
        createGridStructure();
    }

}
//Action listener for the new Grid button
newGridButton.addEventListener("click",()=>{
    let subContainerList=document.querySelectorAll("#subContainer");
    subContainerList.forEach(subContainer=>{
        container.removeChild(subContainer);
    });
    createGridStructure();
});
//Action listener for the reset button
resetButton.addEventListener("click",()=>{
    let elementsNodeList=document.querySelectorAll("#element");
    elementsNodeList.forEach(element=>{
        if(element.style.background!=="grey"){
            element.style.background="grey";
        }
    })
})

