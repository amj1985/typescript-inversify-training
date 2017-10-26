
import { User } from '../../entities/base/user';

export interface IUserService {
    getAllUsers(roles: Array<string>): User[];
    getUser(id: string): User;
    addUser(user: User);
    updateUser(user: User);
    deleteUser(user: User);
}