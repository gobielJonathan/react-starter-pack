export default abstract class CRUD<T>{

    constructor(
         protected baseURL : string
    ){};

    abstract getAll() : Promise<Array<T>>;
    abstract get(id :any) : Promise<T>;
    abstract delete(id: any) : Promise<T>;
    abstract update(id: any , data : T) : Promise<T>;
}