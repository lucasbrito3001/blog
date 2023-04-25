import { IPostController } from "../adapters/controllers/post/post.controller.interface";
import { IRoutes } from "../constants/routes";

export class PostRoutes {
    private controller
    private _routes: IRoutes[] = []

    constructor(controller: IPostController) {
        this.controller = controller

        this._routes = [
            {
                method: "post",
                endpoint: "/",
                middlewares: [],
                controller: this.controller.createOne.bind(this)
            },
            {
                method: "get",
                endpoint: "/",
                middlewares: [],
                controller: this.controller.readAll.bind(this)
            },
            // {
            //     method: "GET",
            //     endpoint: "/:id",
            //     middlewares: [],
            //     controller: this.controller.readOne
            // },
        ]
    }

    public get routes() {
        return this._routes
    }
}