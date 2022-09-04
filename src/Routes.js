import Home from "./Home";
import About from "./About";
import PostList from "./PostList";
import ToDoList from "./ToDoList";
import Logout from "./Logout";
import PostDetail from "./PostDetail";
import CommentDetail from "./CommentDetail";

export const Routes = [
    {pathname: "/", exact: true, name: "Home", id: "home", component: Home},
    {pathname: "/About", exact: true, name: "About", id: "about", component: About},
    {pathname: "/PostList", exact: true, name: "PostList", id: "postlist", component: PostList},
    {pathname: "/ToDoList", exact: true, name: "ToDoList", id: "todolist", component: ToDoList},
    {pathname: "/Logout", exact: true, name: "Logout", id: "logout", component: Logout},
    {pathname: "/PostDetail/:id", exact: true, name: "PostDetail", id: "postdetail", component: PostDetail},
    {pathname: "/CommentDetail/:id", exact: true, name: "CommentDetail", id: "CommentDetail", component:CommentDetail},
    
];