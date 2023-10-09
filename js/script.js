function streaming() {
    const input = document.querySelector('#mus').value
    const input2 = document.querySelector('#qnt').value
    const p = document.querySelector('#res')
    let valores = input.split(',').map(Number)
    let max = 0
    let c = 0
    while (c <= input2) {
        if(max < valores[c]) {
            max = valores[c]
        }
        c++
    }
    if (input2 == 1 && valores.lenght == 1) {
        if (valores[0] == 1) {
            p.innerHTML = `A única música tocada teve ${max} único play!`
        } else {
            p.innerHTML = `A única música tocada teve ${max} plays!`
        }
    } else {
        p.innerHTML = `Das ${input2} músicas tocadas, a mais tocada teve ${max} plays!`
    }
}

