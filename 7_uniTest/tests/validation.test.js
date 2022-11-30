const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "OLA",
        produtora: "sony",
        atores: "tonico e tinoco",
        ano:"1995"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - criar sem o parâmetro nome', () => {
    const result = Validation.create({
        produtora: "sony",
        atores: "tonico e tinoco",
        ano:"1995"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
it('Caso inválido - criar sem o parâmetro produtora', () => {
    const result = Validation.create({
        nome: "OLA",
        atores: "tonico e tinoco",
        ano:"1995"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
it('Caso inválido - delete sem o parâmetro', () => {
    const result = Validation.delete({
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});