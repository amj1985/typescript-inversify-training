
import { User } from '../../entities/base/user';

export interface IUserRepository {
    getAllUsers(): User[];
    getUser(id: string): User;
    addUser(user: User);
    updateUser(user: User);
    deleteUser(user: User);
}