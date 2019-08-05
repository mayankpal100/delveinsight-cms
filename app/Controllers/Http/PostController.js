'use strict'

const  Post = use('App/Models/Post')

class PostController {

    async home({view})
    {
        //create a post
        const post = new Post;
        post.title = 'My fist post';
        post.slug = "first_job";
        post.author = "Mayank pal";
        post.post = "my full post";

        await post.save();

        //fetch a job
        const Posts = await Post.all();
        return view.render('index',{Posts:Posts.toJSON() });


    }
    async allPost({view})
    {
        //create a post
        // const post = new Post;
        // post.title = 'My fist post';
        // post.slug = "first_job";
        // post.author = "Mayank pal";
        // post.post = "my full post";

        // await post.save();

        //fetch a job
        const Posts = await Post.all();
        console.log(Posts.toJSON());
        return view.render('pages.post',{Posts:Posts.toJSON() });


    }
}

module.exports = PostController
