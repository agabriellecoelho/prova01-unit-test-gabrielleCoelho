const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios(); 
      });

    test("inverter string", async () => {
        expect(utilitarios.inverterString("teste")).toStrictEqual("etset");
    });

    test("Contar Caracteres da string", async () => {
        expect(utilitarios.contarCaracteres("teste")).toStrictEqual(5);
    });
    
    test("Modificar string para maiúscilas", async () => {
        expect(utilitarios.paraMaiusculas("teste")).toStrictEqual("TESTE");
    });

    test("Modificar string para minúsculas", async () => {
        expect(utilitarios.paraMinusculas("TESTE")).toStrictEqual("teste");
    });

    test("Primeira letra maiúscula", async () => {
        expect(utilitarios.primeiraLetraMaiuscula("teste")).toStrictEqual("Teste");
    });

    test("Primeira letra maiúscula", async () => {
        expect(utilitarios.primeiraLetraMaiuscula("teste")).toStrictEqual("Teste");
    });

    test("teste da funcao de somar", async () => {
        expect(utilitarios.somar(2, 3)).toStrictEqual(5);
    });

    test("teste da funcao de subtrair", async () => {
        expect(utilitarios.subtrair(3, 2)).toStrictEqual(1);
    });

    test("teste da funcao de multiplicar", async () => {
        expect(utilitarios.multiplicar(3, 2)).toStrictEqual(6);
    });

    test("teste da funcao de dividir", async () => {
        try {
            expect(utilitarios.dividir(10, 2)).toStrictEqual(5);
        } catch (e) {
            expect(e.message).toBe("Usuário não encontrado");
        }
    });

        
    test("verificar par se é par", async () => {
        expect(utilitarios.ehPar(2)).toBeTruthy();
    });
    
    test("verificar impar se é par", async () => {
        expect(utilitarios.ehPar(3)).toBeFalsy();
    });
    
    test("retorna primeiro elemento do array", async () => {
        utilitario = new Array(10, 20, 30, 40, 50)
        expect(utilitarios.primeiroElemento(utilitario)).toBe(10);
    });
    
    test("retorna ultimo elemento do array", async () => {
        utilitario = new Array(10, 20, 30, 40, 50)
        expect(utilitarios.ultimoElemento(utilitario)).toBe(50);
    });
    
    test("retorna tamanho do array", async () => {
        utilitario = new Array(10, 20, 30, 40, 50)
        expect(utilitarios.tamanhoArray(utilitario)).toBe(5);
    });
    
    test("ordenar o array", async () => {
        utilitario = new Array(30, 40, 50, 10, 20)
        expect(utilitarios.ordenarArray(utilitario)).toStrictEqual([10, 20, 30, 40, 50]);
    });

    test("ordenar o array", async () => {
        utilitario = new Array(10, 20, 30, 40, 50)
        expect(utilitarios.inverterArray(utilitario)).toStrictEqual([50, 40, 30, 20, 10]);
    });

    test('gerar numero aleatório entre 0 e 99 por padrão', () => {
        const numero = utilitarios.gerarNumeroAleatorio();
        expect(numero).toBeGreaterThanOrEqual(0);
        expect(numero).toBeLessThan(100);
    });
});