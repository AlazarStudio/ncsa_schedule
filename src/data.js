import axios from "axios";

let adress = 'http://192.168.1.173:5000'
// let adress = 'http://62.217.177.31:5000'
// let adress = 'https://www.backend.ncsa-lk.ru'

export const GET_fetchRequest = async (name, setRequest) => {
    try {
        const response = await axios.get(`${adress}/api/${name}`);
        setRequest(response.data);
    } catch (err) {
        console.log(err.message);
    }
};

export const POST_fetchRequest = async (addInfo, name) => {
    try {
        const response = await axios.post(
            `${adress}/api/${name}`,
            addInfo,
        );
        return response.data;
    } catch (err) {
        console.log(err.message); // Обработать ошибку
    }
};

export const PUT_fetchRequest = async (addInfo, name) => {
    try {
        const response = await axios.put(
            `${adress}/api/${name}/${addInfo.id}`,
            addInfo,
        );
        return response.data;
    } catch (err) {
        console.log(err.message); // Обработать ошибку
    }
};

export const DELETE_fetchRequest = async (id, name) => {
    try {
        const response = await axios.delete(
            `${adress}/api/${name}/${id}`
        );
        return response.data;
    } catch (err) {
        console.log(err.message); // Обработать ошибку
    }
};


export const PUT_fetchRequest_Schedule = async (addInfo, name) => {
    console.log(`${adress}/api/${name}`)
    console.log(addInfo)

    try {
        const response = await axios.put(
            `${adress}/api/${name}`,
            addInfo,
        );
        return response.data;
    } catch (err) {
        console.log(err.message); // Обработать ошибку
    }
};

export const POST_fetchRequest_Schedule = async (addInfo, name) => {
    console.log(`${adress}/api/${name}`)
    console.log(addInfo)

    try {
        const response = await axios.post(
            `${adress}/api/${name}`,
            addInfo,
        );
        return response.data;
    } catch (err) {
        console.log(err.message); // Обработать ошибку
    }
};

export const admin = { login: "admin", password: 'admin' };


// export const subjects = [
//     { id: 1, fullName: "Математика" },
//     { id: 2, fullName: "Информатика" },
//     { id: 3, fullName: "Геометрия" },
// ];

// export const rooms = [
//     { id: 1, fullName: "211", floor: "1" },
//     { id: 2, fullName: "222", floor: "2" },
//     { id: 3, fullName: "233", floor: "3" },
//     { id: 4, fullName: "214", floor: "1" },
//     { id: 5, fullName: "225", floor: "2" },
//     { id: 6, fullName: "216", floor: "1" },
//     { id: 7, fullName: "247", floor: "4" },
//     { id: 8, fullName: "218", floor: "1" },
// ];

// export const groups = [
//     { id: 1, fullName: "ПМ-131", course: "1" },
//     { id: 2, fullName: "ПМ-132", course: "2" },
//     { id: 3, fullName: "ПМ-133", course: "3" },
//     { id: 4, fullName: "ПМ-134", course: "1" },
//     { id: 5, fullName: "ПМ-135", course: "2" },
//     { id: 6, fullName: "ПМ-136", course: "1" },
//     { id: 7, fullName: "ПМ-137", course: "4" },
//     { id: 8, fullName: "ПМ-138", course: "1" },
//     { id: 9, fullName: "ПМИ 162", course: "1" },
//     { id: 10, fullName: "ПМИ 161", course: "1" },
// ];

// export const students = [
//     { id: 1, fullName: "Джатдоев Алим Сеит-Алиевич", recordBookNumber: "0525", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Djatdoev", password: "00001111" },
//     { id: 2, fullName: "Иванов Иван Иванович", recordBookNumber: "0526", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Ivanov", password: "12345678" },
//     { id: 3, fullName: "Петров Петр Петрович", recordBookNumber: "0527", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Petrov", password: "abcdef12" },
//     { id: 4, fullName: "Сидоров Сидор Сидорович", recordBookNumber: "0528", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Sidorov", password: "00002222" },
//     { id: 5, fullName: "Кузнецов Алексей Андреевич", recordBookNumber: "0529", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Kuznetsov", password: "qwerty34" },
//     { id: 6, fullName: "Смирнов Андрей Викторович", recordBookNumber: "0530", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Smirnov", password: "pass1234" },
//     { id: 7, fullName: "Васильев Дмитрий Сергеевич", recordBookNumber: "0531", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Vasiliev", password: "abcd1234" },
//     { id: 8, fullName: "Алексеев Александр Александрович", recordBookNumber: "0532", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Alexeev", password: "4321abcd" },
//     { id: 9, fullName: "Морозов Владимир Петрович", recordBookNumber: "0533", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Morozov", password: "zxcvbnm" },
//     { id: 10, fullName: "Николаев Никита Игоревич", recordBookNumber: "0534", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Nikolaev", password: "asdfgh12" },
//     { id: 11, fullName: "Кравцов Константин Валерьевич", recordBookNumber: "0535", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Kravtsov", password: "09876543" },
//     { id: 12, fullName: "Михайлов Михаил Сергеевич", recordBookNumber: "0536", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Mikhailov", password: "11223344" },
//     { id: 13, fullName: "Григорьев Григорий Павлович", recordBookNumber: "0537", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Grigoryev", password: "55667788" },
//     { id: 14, fullName: "Андреев Андрей Аркадьевич", recordBookNumber: "0538", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Andreev", password: "22334455" },
//     { id: 15, fullName: "Максимов Максим Олегович", recordBookNumber: "0539", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Maximov", password: "33445566" },
//     { id: 16, fullName: "Федоров Федор Иванович", recordBookNumber: "0540", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Fedorov", password: "44556677" },
//     { id: 17, fullName: "Тихонов Тимофей Алексеевич", recordBookNumber: "0541", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Tikhonov", password: "66778899" },
//     { id: 18, fullName: "Киселев Кирилл Олегович", recordBookNumber: "0542", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Kiselev", password: "99887766" },
//     { id: 19, fullName: "Ильин Илья Викторович", recordBookNumber: "0543", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Ilin", password: "88997766" },
//     { id: 20, fullName: "Герасимов Герман Валерьевич", recordBookNumber: "0544", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Gerasimov", password: "77665544" },
//     { id: 21, fullName: "Артемов Артем Николаевич", recordBookNumber: "0545", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Artemov", password: "66778844" },
//     { id: 22, fullName: "Волков Виталий Степанович", recordBookNumber: "0546", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Volkov", password: "55555555" },
//     { id: 23, fullName: "Зайцев Захар Олегович", recordBookNumber: "0547", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Zaytsev", password: "44444444" },
//     { id: 24, fullName: "Соловьев Семен Сергеевич", recordBookNumber: "0548", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Solovyev", password: "33333333" },
//     { id: 25, fullName: "Павлов Павел Михайлович", recordBookNumber: "0549", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Pavlov", password: "22222222" },
//     { id: 26, fullName: "Семенов Сергей Артемович", recordBookNumber: "0550", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Semenov", password: "11111111" },
//     { id: 27, fullName: "Егоров Егор Ефимович", recordBookNumber: "0551", group: "ПМИ 161", subgroup: "1 подгруппа", login: "Egorov", password: "01010101" },
//     { id: 28, fullName: "Романов Роман Тимурович", recordBookNumber: "0552", group: "ПМИ 162", subgroup: "1 подгруппа", login: "Romanov", password: "02020202" },
//     { id: 29, fullName: "Дмитриев Дмитрий Константинович", recordBookNumber: "0553", group: "ПМИ 161", subgroup: "2 подгруппа", login: "Dmitriev", password: "03030303" },
//     { id: 30, fullName: "Королев Константин Анатольевич", recordBookNumber: "0554", group: "ПМИ 162", subgroup: "2 подгруппа", login: "Korolev", password: "04040404" },
// ];

// export const teachers = [
//     { id: 1, fullName: "Джатдоев Алим Сеит-Алиевич", position: "Преподаватель", login: "Djatdoev", password: "00001111" },
//     { id: 2, fullName: "Иванов Иван Иванович", position: "Преподаватель", login: "Ivanov", password: "12345678" },
//     { id: 3, fullName: "Петров Петр Петрович", position: "Преподаватель", login: "Petrov", password: "abcdef12" },
//     { id: 4, fullName: "Сидоров Сидор Сидорович", position: "Преподаватель", login: "Sidorov", password: "00002222" },
//     { id: 5, fullName: "Кузнецов Алексей Андреевич", position: "Преподаватель", login: "Kuznetsov", password: "qwerty34" },
//     { id: 6, fullName: "Смирнов Андрей Викторович", position: "Преподаватель", login: "Smirnov", password: "pass1234" },
//     { id: 7, fullName: "Васильев Дмитрий Сергеевич", position: "Преподаватель", login: "Vasiliev", password: "abcd1234" },
//     { id: 8, fullName: "Алексеев Александр Александрович", position: "Преподаватель", login: "Alexeev", password: "4321abcd" },
//     { id: 9, fullName: "Морозов Владимир Петрович", position: "Преподаватель", login: "Morozov", password: "zxcvbnm" },
//     { id: 10, fullName: "Николаев Никита Игоревич", position: "Преподаватель", login: "Nikolaev", password: "asdfgh12" },
//     { id: 11, fullName: "Кравцов Константин Валерьевич", position: "Преподаватель", login: "Kravtsov", password: "09876543" },
//     { id: 12, fullName: "Михайлов Михаил Сергеевич", position: "Преподаватель", login: "Mikhailov", password: "11223344" },
//     { id: 13, fullName: "Григорьев Григорий Павлович", position: "Преподаватель", login: "Grigoryev", password: "55667788" },
//     { id: 14, fullName: "Андреев Андрей Аркадьевич", position: "Преподаватель", login: "Andreev", password: "22334455" },
//     { id: 15, fullName: "Максимов Максим Олегович", position: "Преподаватель", login: "Maximov", password: "33445566" },
//     { id: 16, fullName: "Федоров Федор Иванович", position: "Преподаватель", login: "Fedorov", password: "44556677" },
//     { id: 17, fullName: "Тихонов Тимофей Алексеевич", position: "Преподаватель", login: "Tikhonov", password: "66778899" },
//     { id: 18, fullName: "Киселев Кирилл Олегович", position: "Преподаватель", login: "Kiselev", password: "99887766" },
//     { id: 19, fullName: "Ильин Илья Викторович", position: "Преподаватель", login: "Ilin", password: "88997766" },
//     { id: 20, fullName: "Герасимов Герман Валерьевич", position: "Преподаватель", login: "Gerasimov", password: "77665544" },
//     { id: 21, fullName: "Артемов Артем Николаевич", position: "Преподаватель", login: "Artemov", password: "66778844" },
//     { id: 22, fullName: "Волков Виталий Степанович", position: "Преподаватель", login: "Volkov", password: "55555555" },
//     { id: 23, fullName: "Зайцев Захар Олегович", position: "Преподаватель", login: "Zaytsev", password: "44444444" },
//     { id: 24, fullName: "Соловьев Семен Сергеевич", position: "Преподаватель", login: "Solovyev", password: "33333333" },
//     { id: 25, fullName: "Павлов Павел Михайлович", position: "Преподаватель", login: "Pavlov", password: "22222222" },
//     { id: 26, fullName: "Семенов Сергей Артемович", position: "Преподаватель", login: "Semenov", password: "11111111" },
//     { id: 27, fullName: "Егоров Егор Ефимович", position: "Преподаватель", login: "Egorov", password: "01010101" },
//     { id: 28, fullName: "Романов Роман Тимурович", position: "Преподаватель", login: "Romanov", password: "02020202" },
//     { id: 29, fullName: "Дмитриев Дмитрий Константинович", position: "Преподаватель", login: "Dmitriev", password: "03030303" },
//     { id: 30, fullName: "Королев Константин Анатольевич", position: "Преподаватель", login: "Korolev", password: "04040404" },
// ]