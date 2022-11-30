const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        modelo: "Fusca",
        fabricante: "Volkswagen",
        placa: "ABC-123",
        cor:"verde"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - criar sem o parâmetro modelo', () => {
    const result = Validation.create({
        fabricante: "Volkswagen",
        placa: "ABC-123",
        cor:"verde"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
it('Caso inválido - criar sem o parâmetro fabricante', () => {
    const result = Validation.create({
        modelo: "Fusca",
        placa: "ABC-123",
        cor:"verde"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
it('Caso inválido - delete sem o parâmetro', () => {
    const result = Validation.delete({
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});