import { IPostController } from "../adapters/controllers/post/post.controller.interface";
import { IRoutes } from "../constants/routes";

export class PostRoutes {
    private controller
    private routes: IRoutes[] = []

    constructor(controller: IPostController) {
        this.controller = controller

        this.routes = [
            {
                method: "post",
                endpoint: "/",
                middlewares: [],
                controller: this.controller.createOne.bind(this)
            },
            // {
            //     method: "GET",
            //     endpoint: "/",
            //     middlewares: [],
            //     controller: this.controller.readAll
            // },
            // {
            //     method: "GET",
            //     endpoint: "/:id",
            //     middlewares: [],
            //     controller: this.controller.readOne
            // },
        ]
    }

    getRoutes() {
        return this.routes
    }
}