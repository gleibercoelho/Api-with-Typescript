"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const endpoint = 'https://www.parallelum.com.br/fipe/api/v1/carros/marcas';
let dataMarcas = null;
const obterMarcas = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    document.getElementById('divMarcas').disabled = true;
    const response = yield fetch(endpoint);
    const responseJson = yield response.json();
    const dataResponseMarcas = responseJson;
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
        liElement.classList.add("li-marcas");
        (_a = document.getElementById("ul-marcas")) === null || _a === void 0 ? void 0 : _a.appendChild(liElement);
    }
    document.getElementById('divMarcas').disabled = true;
});
