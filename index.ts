interface IdataMarcasobjeto {
    nome: string;
    codigo: string;
}

interface IresponseMarcasArray {
    data: IdataMarcasobjeto[];
}

const endpoint = 'https://www.parallelum.com.br/fipe/api/v1/carros/marcas';
let dataMarcas: null | IdataMarcasobjeto[] = null;
const obterMarcas = async () => {
    (document.getElementById('divMarcas') as HTMLButtonElement).disabled = true;

    const response = await fetch(endpoint);
    const responseJson = await response.json();
    const dataResponseMarcas: IdataMarcasobjeto[] = responseJson;
    console.log(dataResponseMarcas);
    dataMarcas = dataResponseMarcas;

    for (let i = 0; i < 20; i++) {
        const liElement = document.createElement('li');
        const divElement = document.createElement('div');
        const textMarca = document.createElement('p');
        const textCodigo = document.createElement('p');

        textMarca.textContent = `${dataResponseMarcas[i].nome}`;
        textMarca.classList.add('titulo-marca');

        textCodigo.textContent = `${dataResponseMarcas[i].codigo}`;
        textCodigo.classList.add('codigo-marca');
    
        console.log(textMarca);
        

        divElement.classList.add('conteudo-div-marca');
        divElement.append(textMarca, textCodigo);
        liElement.appendChild(divElement);
        liElement.classList.add("li-marcas")
        document.getElementById("ul-marcas")?.appendChild(liElement);

    }
    (document.getElementById('divMarcas') as HTMLButtonElement).disabled = true;
}