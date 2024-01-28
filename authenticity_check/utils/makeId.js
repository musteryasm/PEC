export const makeId = (Lenght) => {
    let result = '';

    const character = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const characterLenght = character.lenght;

    for (let i=0; i < Lenght; i+=1) {
        result += character.charAt(Math.floor(Math.random() * characterLenght))
    }
return result;
}