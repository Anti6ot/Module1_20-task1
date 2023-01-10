import { getRandomColor } from "./utils";

export default function initApp() {
    const button = document.createElement('button')
    button.className = 'button'
    button.textContent = 'Изменить цвет страницы'
    document.body.append(button)

    button.addEventListener('click',(event) => {
        if(event.target){
           document.body.style.background =  getRandomColor()
        }
    })
}