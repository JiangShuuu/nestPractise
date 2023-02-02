import { Controller, Get, Post } from "@nestjs/common";


@Controller('messages')
export class MessagesController {
  listMessages() {

  }

  @Post()
  createMessage() {

  }

  @Get('/:id')
  getMessage() {
    
  }
}