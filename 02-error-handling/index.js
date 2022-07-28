// Estrutura

// try {
//    doSomenthing() 
// } catch (error) {
//     console.error(error)
// } finally { // opcional
//     // executar independente se deu erro ou não
// }


const powerOfThree = num => {return num ** 3};

try {
    console.log('entrei no try');
    console.log(powerOfThree(3));
} catch (error) {
    console.log('entrei no catch');
    console.error('Error->>', error);
} finally{
    console.log('Sou opcional e sempre executado');
}

const student = 'Marcio'

// student.toFixed()

class MissingParamError extends Error{
    constructor(field) {
        super(`Missing Param: ${field}`)
    }
}


const getUserName = (user) => {
    if (!user.name) {
        // throw new Error('mensagem do erro')
        throw new MissingParamError('name')
    }
    return user.name
}

try {
    const name = getUserName({age:24})
    console.log(name);
} catch (error) {
    console.error(error.message);
}


