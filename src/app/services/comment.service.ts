import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private JsonExample = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

  async Get() {
    let resposta = await this.http.get(this.JsonExample).toPromise();
    console.log(resposta);
    return resposta;
  };
  async GetByID(id) {
    let resposta = await this.http.get(this.JsonExample + "?postId=" + id).toPromise();
    console.log(resposta);
    return resposta;
  };
  async Post(obj) {
    let resposta = await this.http.post(this.JsonExample, obj).toPromise();
    console.log(resposta);
    return resposta;
  }
}
