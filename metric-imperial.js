const validUnits = {
    gal: {
        singular: 'gallon',
        plural: 'gallons'
    },
    l: {
        singular: 'liter',
        plural: 'liters'
    },
    mi: {
        singular: 'mile',
        plural: 'miles'
    },
    km: {
        singular: 'kilometer',
        plural: 'kilometers'
    },
    lbs: {
        singular: 'pound',
        plural: 'pounds'
    },
    kg: {
        singular: 'kilogram',
        plural: 'kilograms'
    }
};

const convert = {
    gal: {
        to: 'l',
        ratio: 3.78541
    },
    l: {
        to: 'gal',
        ratio: 0.264172
    },
    mi: {
        to: 'km',
        ratio: 1.60934
    },
    km: {
        to: 'mi',
        ratio: 0.621371
    },
    lbs: {
        to: 'kg',
        ratio: 0.453592
    },
    kg: {
        to: 'lbs',
        ratio: 2.20462
    },
};

module.exports = {
    validUnits,
    convert
}