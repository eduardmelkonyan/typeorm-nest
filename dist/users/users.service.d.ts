import { Repository } from 'typeorm';
import { Post } from '../entities/Post';
import { Profile } from '../entities/Profile';
import { User } from '../entities/User';
import { CreateUserParams, CreateUserPostParams, CreateUserProfileParams, UpdateUserParams } from '../utils/type';
export declare class UsersService {
    private userRepository;
    private profileRepository;
    private postRepository;
    constructor(userRepository: Repository<User>, profileRepository: Repository<Profile>, postRepository: Repository<Post>);
    findUsers(): Promise<User[]>;
    createUser(userDetails: CreateUserParams): Promise<User>;
    updateUser(id: number, updateUserDetails: UpdateUserParams): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
    createUserProfile(id: number, createUserProfileDetails: CreateUserProfileParams): Promise<User>;
    createUserPost(id: number, createUserPostDetails: CreateUserPostParams): Promise<Post>;
}
