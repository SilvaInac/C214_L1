jest.useFakeTimers();
const Users = require('../src/application/car_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const UsersRepository = require('../src/port/car_repository');


jest.mock('../src/port/car_repository');

it('CREATE - Dado válido', async () => {
    const data = {
        modelo: "Corsa",
        fabricante: "chevrole",
        placa: "123456789",
        cor: "Preto"
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ ...data, id });

    const result = await Users.create(data);
    expect(result).toEqual({ ...data, id });
})

it('CREATE - Dado duplicado', async () => {
    const data = {
        modelo: "Corsa",
        fabricante: "chevrole",
        placa: "221",
        cor: "Preto"
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Users.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})