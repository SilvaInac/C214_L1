const create = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    fabricante: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    fabricante: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};