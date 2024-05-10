import { Elysia, t } from "elysia";
import { getUsers, getUser, updateUser, deleteUser, createUser } from "./handlers";

const userRoutes = new Elysia({ prefix: '/users' })
    .get("/", () => getUsers())
    .get("/:id", ({params: {id}}) => getUser(id), {
        params: t.Object({ 
            id: t.Numeric() 
        })
    })
    .post("/", ({body}) => createUser(body), { 
        body: t.Object({ 
            firstName: t.String(), 
            lastName: t.String(), 
            email: t.String() 
        }) 
    })
    .patch("/:id", ({params: {id}, body}) => updateUser(id, body),{
        params: t.Object({ 
            id: t.Numeric() 
        }),
        body: t.Object({ 
            firstName: t.Optional(t.String()), 
            lastName: t.Optional(t.String()), 
            email: t.Optional(t.String()) 
        }) 
    })
    .delete("/:id", ({params: {id}}) => deleteUser(id), {
        params: t.Object({ 
            id: t.Numeric() 
        })
    });

export default userRoutes;