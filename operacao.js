function calculadoraDesconto(valorOriginal, porcentagemDesconto) {
    
    const desconto = (porcentagemDesconto * valorOriginal) / 100;
         
    return valorOriginal - desconto;
    }
    
    const valorOriginal = 200; 
    const porcentagemDesconto = 25; 
    const valorFinal = calculadoraDesconto(valorOriginal, porcentagemDesconto);
    
    console.log('Valor original: R$', valorOriginal.toFixed(2));
    console.log('Porcentagem de desconto:', porcentagemDesconto + '%');
    console.log('Valor final após desconto: R$', valorFinal.toFixed(2));