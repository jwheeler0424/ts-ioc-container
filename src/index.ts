import { Inject } from './core/Inject';

export class UserModel {}

interface iUserRepository {
  getUserById(id: string): { id: string };
}
export class UserRepository implements iUserRepository {
  getUserById(id: string) {
    // Retrieve user from the database
    return { id };
  }
}

@Inject([UserRepository])
class UserService {
  constructor(private userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  coordinate() {
    return this.userRepository.getUserById('1');
  }
}

console.log(UserService[Symbol.metadata]);
