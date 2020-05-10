import { Component, OnInit } from '@angular/core';
import { post } from '../models/post/post.model';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { user } from '../models/user/user.model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: post = {} as post;
  posts: post[];
  receber: any;
  receberUsuarios: any;
  users: user[];
  constructor(private service: PostService, private usuarios: UserService) { }

  async ngOnInit() {
    this.receber = await this.service.Get();
    this.posts = this.receber;
    this.receberUsuarios = await this.usuarios.Get();
    this.users = this.receberUsuarios;
  }

  async onSubmit(form) {
    await this.service.Post(form.value);
  }

  exibirComentario(post) {
    this.posts.forEach(postagem => {
      if (postagem.id == post.id) {
        postagem.exibirComentario = true;
      }
    });
  }

}
