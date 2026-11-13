import view from "./view.js"


export default class extends view
{
    constructor()
    {
        super(); /* calling the constructor of the super class */
        this.setTitle("Home");
    }

    async getHtml()
    {
        return ` <h1> Welcome back, User </h1>
                 <p>
                     Nice to have you back
                     This is wate et nisi loren cillum anim sit do eisumod
                 </p>
                 <p>
                     <a href="/post" data-link> View recent posts</a>
                 </p>`;
    }
}
