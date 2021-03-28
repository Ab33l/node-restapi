import { v4 as uuid } from 'uuid';

let usersInfos = [];

export const createUser = (req, res) => {
    const user = req.body;

    const userWithId = {...user, id: uuidv4()};

    usersInfos.push(userWithId);

    res.send(`User with the First Name ${user.firstName} was added to the database!`);
}

export const getUsers = (req, res) => {
    res.send(usersInfos);
} 

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = usersInfos.find((userInfo) => userInfo.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    usersInfos = usersInfos.filter((userInfo) => userInfo.id !== id);

    res.send(`Records for the User with the Id ${id} have been deleted`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age} = req.body;

    const user = usersInfos.find((userInfo) => userInfo.id === id);

    if(firstName){
        user.firstName = firstName;
    }

    if(lastName){
        user.lastName = lastName;
    }

    if(age){
        user.age = age;
    }

    res.send(`User with ${id} has updated their information`);
}