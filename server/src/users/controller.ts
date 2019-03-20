import { JsonController, Get, Param, Body, 
    Post, HttpCode} from 'routing-controllers'
  import User from './entity'
  
  
  @JsonController()
  export default class UserController {
  
  @Get('/users/:id')
  getUser(
    @Param('id') id: number
  ) {
    return User.findOne(id)
  };
  
  @Get('/users')
  async allUsers () {
    const users = await User.find()
    return {users}
  
  };
  
  @Post('/users')
  @HttpCode(201)
  createUsers(
    @Body() user: User
  ) {
    // console.log(`Incoming POST body param:`, user)
    return user.save()
  };
  }