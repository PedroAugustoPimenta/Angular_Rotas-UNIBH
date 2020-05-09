import { Component, OnInit } from '@angular/core';
import { post } from '../models/post/post.model';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: post = {} as post;
  posts: post[];
  receber: any;
  constructor(private service: PostService) { }

  async ngOnInit() {
    this.receber = await this.service.Get();
    this.posts = this.receber;
  }

  async onSubmit(form) {
    await this.service.Post(form);
  }
}
