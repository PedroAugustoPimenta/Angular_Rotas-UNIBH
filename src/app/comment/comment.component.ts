import { Component, OnInit, Input } from '@angular/core';
import { comment } from '../models/comment/comment';
import { CommentService } from '../services/comment.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment: comment;
  comments: comment[];
  receber: any;
  receberComentarios: any;
  @Input() postInput;
  constructor(private service: CommentService) { }

  async ngOnInit() {
    this.receber = await this.service.GetByID(this.postInput);
    this.comments = this.receber;

    this.receberComentarios = await this.service.Get();
    this.comments = this.comments;

  }

}
