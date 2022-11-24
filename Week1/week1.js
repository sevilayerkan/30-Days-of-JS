//alert("Hello")
let a = document.getElementById("param") 

//a.innerText="Hi"

document.getElementById("main").style.border = "green solid"

document.getElementById("load").style.backgroundColor = "green"

let loadWidth = document.getElementById("load")
loadWidth.style.width = "0%"

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function load_bar()
{
    for (let i = 0; i < 100; i = i + 5) {
            loadWidth.style.width = `${i}%`
        await sleep(200)
    }
}

load_bar()
