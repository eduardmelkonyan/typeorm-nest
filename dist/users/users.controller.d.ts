import { CreateUserDto } from 'src/dto/CreateUser.dto';
import { UpdateUserDto } from 'src/dto/UpdateUser.dto';
import { UsersService } from './users.service';
import { CreateUserProfileDto } from 'src/dto/CreateUserProfile.dto';
import { CreateUserPostDto } from 'src/dto/CreateUserPost.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): Promise<import("../entities/User").User[]>;
    createUser(createUserDto: CreateUserDto): Promise<import("../entities/User").User>;
    updateUserById(id: number, updateUserDto: UpdateUserDto): Promise<void>;
    deleteUserById(id: number): Promise<void>;
    createUserProfile(id: number, createUserProfileDto: CreateUserProfileDto): Promise<import("../entities/User").User>;
    createUserPost(id: number, createUserPostDto: CreateUserPostDto): Promise<import("../entities/Post").Post>;
}
