import { DocumentType } from '@typegoose/typegoose';
import CreateCommentDto from './dto/create-comment.dto.js';
import { CommentEntity } from './comment.entity';

//Интерфейс управления комментариями
export interface CommentServiceInterface {
  create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>>;
  findByOfferId(offerId: string): Promise<DocumentType<CommentEntity>[]>;
  deleteByOfferId(oferId:string): Promise<number | null>;
}
