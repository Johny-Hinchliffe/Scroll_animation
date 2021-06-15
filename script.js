const boxes = document.querySelectorAll('.box')


const checkBoxes = () => {
    const triggerPoint = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        boxTop < triggerPoint ? box.classList.add('show') :  box.classList.remove('show')
    })
}

checkBoxes()

window.addEventListener('scroll', checkBoxes)