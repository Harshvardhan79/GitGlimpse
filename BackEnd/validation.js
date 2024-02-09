const zod=require("zod");

const USERZ=zod.object({
    username:zod.string(),
    password:zod.string()
})

const success=USERZ.safeParse({
    username:"Harshvardhan",
    password:"1234"
})

console.log(success);