import { Base } from '@/core/Base';
import { Metadata } from './core/Metadata';
// Symbol.metadata ??= Symbol('Symbol.metadata');
@Metadata({
  PARAMS: [
    {
      namespace: 'UserService',
      type: 'UserService',
    },
  ],
})
class UserService extends Base {}

console.log(UserService[Symbol.metadata]);
