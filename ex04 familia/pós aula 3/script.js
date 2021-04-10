function calcular() {

    var vendas = document.getElementById('venda')
    var res = document.getElementById('res')
    var select = document.getElementsByName('valor')
    var n1 = Number(vendas.value)
    var n2 = n1 * 90 / 100 // Venda a vista
    var n3 = n1 * 95 / 100 //Venda a prazo de 30 dias
    var n4 = n1 * 105 / 100 //Venda a prazo de 60 dias
    var n5 = n1 * 92 / 100 //Cartão de débito
    var n6 = n1 * 93 / 100 //Cartão de crédito

    res.style.textAlign = 'center'
    if (select[0].checked) { //Venda a vista
        res.innerHTML = `A sua compra de <strong>R$${n1}</strong> tem <strong>10%</strong> de desconto`
        res.innerHTML += `</br>O valor com o desconto ficou <strong>R$${n2}</strong>`
        res.innerHTML += '</br><strong>Obrigado pela compra!!</strong>'

    } else if (select[1].checked) { //Venda a prazo de 30 dias
        res.innerHTML = `A sua compra de <strong>R$${n1}</strong> tem <strong>5%</strong> de desconto`
        res.innerHTML += `</br>O valor com o desconto ficou <strong>R$${n3}</strong>`
        res.innerHTML += '</br><strong>Obrigado pela compra!!</strong>'

    } else if (select[2].checked) { //Venda a prazo de 60 dias
        res.innerHTML = `A sua compra de <strong>R$${n1}</strong> tem <strong>0%</strong> de desconto`
        res.innerHTML += `</br>O valor com o desconto ficou <strong>R$${n1}</strong>`
        res.innerHTML += '</br><strong>Obrigado pela compra!!</strong>'

    } else if (select[3].checked) { // Venda a prazo de 90 dias 
        res.innerHTML = `A sua compra de <strong>R$${n1}</strong> tem <strong>5%</strong> de acréscimo `
        res.innerHTML += `</br>O valor com o desconto ficou <strong>R$${n4}</strong>`
        res.innerHTML += '</br><strong>Obrigado pela compra!!</strong>'

    } else if (select[4].checked) { //Venda cartão de débito
        res.innerHTML = `A sua compra de <strong>R$${n1}</strong> tem <strong>8%</strong> de desconto `
        res.innerHTML += `</br>O valor com o desconto ficou <strong>R$${n5}</strong>`
        res.innerHTML += '</br><strong>Obrigado pela compra!!</strong>'

    } else {
        res.innerHTML = `A sua compra de <strong>R$${n1}</strong> tem <strong>7%</strong> de desconto `
        res.innerHTML += `</br>O valor com o desconto ficou <strong>R$${n6}</strong>`
        res.innerHTML += '</br><strong>Obrigado pela compra!!</strong>'
    }


res.innerHTML += `\u{1F498}`
}